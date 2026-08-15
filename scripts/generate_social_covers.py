import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

# Base Directories
PROJECT_DIR = "/Users/rakibs/Claude/Projects/minionops"
MASCOTS_DIR = os.path.join(PROJECT_DIR, "public/images/mascots")
LOGO_PATH = os.path.join(PROJECT_DIR, "public/images/minions_ai_logo_inverted_transparent.png")
OUTPUT_BASE = os.path.join(PROJECT_DIR, "public/images/social-covers")
ARTIFACT_BASE = "/Users/rakibs/.gemini/antigravity/brain/9c413764-4cea-4b7e-8b23-959e03812b2b/social-covers"

# Fonts
FONT_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
if not os.path.exists(FONT_BOLD):
    FONT_BOLD = "/System/Library/Fonts/Helvetica.ttc"
FONT_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"
if not os.path.exists(FONT_REG):
    FONT_REG = "/System/Library/Fonts/Helvetica.ttc"

# Brand Palette
INK = (18, 36, 42, 255)            # #12242A
TEAL = (14, 92, 99, 255)           # #0E5C63
TEAL_DARK = (10, 70, 76, 255)      # #0A464C
ORANGE = (255, 107, 74, 255)       # #FF6B4A
CREAM = (255, 248, 240, 255)       # #FFF8F0
WHITE = (255, 255, 255, 255)       # #FFFFFF
MUTED_TEXT = (200, 220, 230, 255)  # High-contrast soft slate

def draw_background(width, height, is_teal=False):
    """Draws a premium dark gradient backdrop with atmospheric glow."""
    img = Image.new("RGBA", (width, height), TEAL if is_teal else INK)
    draw = ImageDraw.Draw(img)
    
    # Soft ambient orb behind mascots
    glow_color = (255, 107, 74, 30) if is_teal else (14, 92, 99, 65)
    for r in range(int(height * 0.85), int(height * 0.2), -30):
        alpha = int(40 * (1 - r / (height * 0.85)))
        draw.ellipse([width * 0.78 - r, height * 0.5 - r, width * 0.78 + r, height * 0.5 + r],
                     fill=(*glow_color[:3], alpha))
        
    return img

def render_non_overlapping_duo(canvas, start_x, end_x, baseline_y, mascot_size=260, min_gap=36):
    """
    Renders 2 flagship mascots (Rex & Zip) side-by-side with guaranteed ZERO overlap and >= min_gap.
    """
    rex = Image.open(os.path.join(MASCOTS_DIR, "rex.png")).convert("RGBA")
    zip_img = Image.open(os.path.join(MASCOTS_DIR, "zip.png")).convert("RGBA")
    
    zone_w = end_x - start_x
    w = mascot_size
    
    # Calculate spacing
    available_gap = zone_w - (w * 2)
    gap = max(min_gap, int(available_gap / 3))
    
    rex_x = int(start_x + gap)
    zip_x = int(rex_x + w + gap)
    y = int(baseline_y - w)
    
    rex_res = rex.resize((w, w), Image.Resampling.LANCZOS)
    zip_res = zip_img.resize((w, w), Image.Resampling.LANCZOS)
    
    # Shadows
    shadow_rex = Image.new("RGBA", (w + 24, w + 24), (0,0,0,0))
    s_draw = ImageDraw.Draw(shadow_rex)
    s_draw.ellipse([12, w - 8, w + 12, w + 12], fill=(0,0,0,130))
    shadow_rex = shadow_rex.filter(ImageFilter.GaussianBlur(10))
    canvas.paste(shadow_rex, (rex_x - 12, y), shadow_rex)
    canvas.paste(rex_res, (rex_x, y), rex_res)
    
    shadow_zip = Image.new("RGBA", (w + 24, w + 24), (0,0,0,0))
    s_draw = ImageDraw.Draw(shadow_zip)
    s_draw.ellipse([12, w - 8, w + 12, w + 12], fill=(0,0,0,130))
    shadow_zip = shadow_zip.filter(ImageFilter.GaussianBlur(10))
    canvas.paste(shadow_zip, (zip_x - 12, y), shadow_zip)
    canvas.paste(zip_res, (zip_x, y), zip_res)

def render_non_overlapping_trio(canvas, start_x, end_x, baseline_y, mascot_size=220, min_gap=30):
    """
    Renders 3 mascots (Rex, Pip, Zip) side-by-side with guaranteed ZERO overlap.
    """
    rex = Image.open(os.path.join(MASCOTS_DIR, "rex.png")).convert("RGBA")
    pip = Image.open(os.path.join(MASCOTS_DIR, "pip.png")).convert("RGBA")
    zip_img = Image.open(os.path.join(MASCOTS_DIR, "zip.png")).convert("RGBA")
    
    zone_w = end_x - start_x
    w = mascot_size
    
    available_gap = zone_w - (w * 3)
    gap = max(min_gap, int(available_gap / 4))
    
    p1_x = int(start_x + gap)
    p2_x = int(p1_x + w + gap)
    p3_x = int(p2_x + w + gap)
    y = int(baseline_y - w)
    
    rex_res = rex.resize((w, w), Image.Resampling.LANCZOS)
    pip_res = pip.resize((w, w), Image.Resampling.LANCZOS)
    zip_res = zip_img.resize((w, w), Image.Resampling.LANCZOS)
    
    for x, im in [(p1_x, rex_res), (p2_x, pip_res), (p3_x, zip_res)]:
        shadow = Image.new("RGBA", (w + 20, w + 20), (0,0,0,0))
        s_draw = ImageDraw.Draw(shadow)
        s_draw.ellipse([10, w - 8, w + 10, w + 10], fill=(0,0,0,120))
        shadow = shadow.filter(ImageFilter.GaussianBlur(10))
        canvas.paste(shadow, (x - 10, y), shadow)
        canvas.paste(im, (x, y), im)

def generate_twitter_header(is_teal=False):
    """Generates 1500x500 Twitter / X Header Banner."""
    W, H = 1500, 500
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    # Larger, punchy logo
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 68
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    left_x = 100
    img.paste(logo_resized, (left_x, 75), logo_resized)
    
    # High-visibility bold typography
    font_hl = ImageFont.truetype(FONT_BOLD, 42)
    font_sub = ImageFont.truetype(FONT_REG, 24)
    font_badge = ImageFont.truetype(FONT_BOLD, 20)
    
    draw.text((left_x, 168), "The 24/7 AI Front Office Crew", font=font_hl, fill=WHITE)
    draw.text((left_x, 226), "Never miss a call • Speed-to-lead • Book more jobs", font=font_sub, fill=MUTED_TEXT)
    
    badge_y = 295
    draw.rounded_rectangle([left_x, badge_y, left_x + 390, badge_y + 50], radius=25, fill=(255, 255, 255, 28))
    draw.ellipse([left_x + 18, badge_y + 18, left_x + 32, badge_y + 32], fill=ORANGE)
    draw.text((left_x + 44, badge_y + 13), "ServiceTitan • Jobber • HCP", font=font_badge, fill=WHITE)
    
    url_x = left_x + 410
    draw.rounded_rectangle([url_x, badge_y, url_x + 205, badge_y + 50], radius=25, fill=ORANGE)
    draw.text((url_x + 26, badge_y + 13), "getminions.ai", font=font_badge, fill=WHITE)
    
    # Zero-overlapping Duo: Rex & Zip (height 240px, gap 45px)
    render_non_overlapping_duo(img, start_x=880, end_x=1420, baseline_y=420, mascot_size=240, min_gap=40)
    
    return img

def generate_linkedin_banner(is_teal=False):
    """Generates 1584x396 LinkedIn Company Banner."""
    W, H = 1584, 396
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 56
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    left_x = 90
    img.paste(logo_resized, (left_x, 60), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 34)
    font_sub = ImageFont.truetype(FONT_REG, 21)
    font_badge = ImageFont.truetype(FONT_BOLD, 17)
    
    draw.text((left_x, 132), "24/7 AI Phone Answering & Speed-to-Lead Crew", font=font_hl, fill=WHITE)
    draw.text((left_x, 180), "Built specifically for Trade & Home Service Businesses", font=font_sub, fill=MUTED_TEXT)
    
    badge_y = 232
    draw.rounded_rectangle([left_x, badge_y, left_x + 380, badge_y + 42], radius=21, fill=(255, 255, 255, 28))
    draw.ellipse([left_x + 15, badge_y + 15, left_x + 27, badge_y + 27], fill=ORANGE)
    draw.text((left_x + 38, badge_y + 10), "CRM & Dispatch Integration Ready", font=font_badge, fill=WHITE)
    
    url_x = left_x + 400
    draw.rounded_rectangle([url_x, badge_y, url_x + 185, badge_y + 42], radius=21, fill=ORANGE)
    draw.text((url_x + 24, badge_y + 10), "getminions.ai", font=font_badge, fill=WHITE)
    
    # Zero-overlapping Duo on LinkedIn (height 230px, gap 50px)
    render_non_overlapping_duo(img, start_x=960, end_x=1520, baseline_y=340, mascot_size=230, min_gap=45)
    
    return img

def generate_youtube_banner(is_teal=False):
    """Generates 2560x1440 YouTube Channel Banner with 1546x423 Center Universal Safe Zone."""
    W, H = 2560, 1440
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    safe_y_start = 508
    safe_x_start = 540
    
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 72
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    img.paste(logo_resized, (safe_x_start, safe_y_start + 45), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 42)
    font_sub = ImageFont.truetype(FONT_REG, 25)
    font_badge = ImageFont.truetype(FONT_BOLD, 21)
    
    draw.text((safe_x_start, safe_y_start + 138), "Never Miss Another Call or Lead", font=font_hl, fill=WHITE)
    draw.text((safe_x_start, safe_y_start + 196), "24/7 AI Voice Dispatch, Instant SMS & Booking", font=font_sub, fill=MUTED_TEXT)
    
    badge_y = safe_y_start + 258
    draw.rounded_rectangle([safe_x_start, badge_y, safe_x_start + 440, badge_y + 52], radius=26, fill=(255, 255, 255, 28))
    draw.ellipse([safe_x_start + 18, badge_y + 19, safe_x_start + 34, badge_y + 35], fill=ORANGE)
    draw.text((safe_x_start + 46, badge_y + 13), "ServiceTitan • Jobber • FieldRoutes", font=font_badge, fill=WHITE)
    
    url_x = safe_x_start + 460
    draw.rounded_rectangle([url_x, badge_y, url_x + 210, badge_y + 52], radius=26, fill=ORANGE)
    draw.text((url_x + 26, badge_y + 13), "getminions.ai", font=font_badge, fill=WHITE)
    
    # Zero-overlapping Trio in YouTube Safe Strip (Rex, Pip, Zip side-by-side)
    render_non_overlapping_trio(img, start_x=1340, end_x=2000, baseline_y=safe_y_start + 380, mascot_size=190, min_gap=30)
    
    return img

def generate_facebook_cover(is_teal=False):
    """Generates 1640x624 Facebook Page Cover."""
    W, H = 1640, 624
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 74
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    left_x = 110
    img.paste(logo_resized, (left_x, 95), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 44)
    font_sub = ImageFont.truetype(FONT_REG, 26)
    font_badge = ImageFont.truetype(FONT_BOLD, 21)
    
    draw.text((left_x, 192), "The 24/7 AI Front Office Crew", font=font_hl, fill=WHITE)
    draw.text((left_x, 252), "Stop losing revenue to unanswered contractor calls", font=font_sub, fill=MUTED_TEXT)
    
    badge_y = 325
    draw.rounded_rectangle([left_x, badge_y, left_x + 400, badge_y + 52], radius=26, fill=(255, 255, 255, 28))
    draw.ellipse([left_x + 18, badge_y + 19, left_x + 34, badge_y + 35], fill=ORANGE)
    draw.text((left_x + 46, badge_y + 13), "ServiceTitan • Jobber • HCP", font=font_badge, fill=WHITE)
    
    url_x = left_x + 420
    draw.rounded_rectangle([url_x, badge_y, url_x + 210, badge_y + 52], radius=26, fill=ORANGE)
    draw.text((url_x + 26, badge_y + 13), "getminions.ai", font=font_badge, fill=WHITE)
    
    # Zero-overlapping Duo: Rex & Zip (height 260px, gap 50px)
    render_non_overlapping_duo(img, start_x=940, end_x=1520, baseline_y=510, mascot_size=260, min_gap=45)
    
    return img

def generate_github_social(is_teal=False):
    """Generates 1280x640 GitHub Social Preview & OpenGraph Banner."""
    W, H = 1280, 640
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 70
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    left_x = 80
    img.paste(logo_resized, (left_x, 95), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 38)
    font_sub = ImageFont.truetype(FONT_REG, 23)
    font_badge = ImageFont.truetype(FONT_BOLD, 19)
    
    draw.text((left_x, 188), "Autonomous AI Crew for Trade Ops", font=font_hl, fill=WHITE)
    draw.text((left_x, 244), "Voice Agents • Speed-to-Lead SMS • CRM Pipelines", font=font_sub, fill=MUTED_TEXT)
    
    badge_y = 315
    draw.rounded_rectangle([left_x, badge_y, left_x + 370, badge_y + 48], radius=24, fill=(255, 255, 255, 28))
    draw.ellipse([left_x + 17, badge_y + 18, left_x + 31, badge_y + 32], fill=ORANGE)
    draw.text((left_x + 42, badge_y + 12), "ServiceTitan • Jobber • HCP", font=font_badge, fill=WHITE)
    
    url_x = left_x + 390
    draw.rounded_rectangle([url_x, badge_y, url_x + 195, badge_y + 48], radius=24, fill=ORANGE)
    draw.text((url_x + 24, badge_y + 12), "getminions.ai", font=font_badge, fill=WHITE)
    
    # Zero-overlapping Duo: Rex & Zip (height 220px, gap 40px)
    render_non_overlapping_duo(img, start_x=720, end_x=1200, baseline_y=510, mascot_size=220, min_gap=35)
    
    return img

def main():
    platforms = ["twitter", "linkedin", "youtube", "facebook", "github"]
    for p in platforms:
        os.makedirs(os.path.join(OUTPUT_BASE, p), exist_ok=True)
        os.makedirs(os.path.join(ARTIFACT_BASE, p), exist_ok=True)
        
    tasks = [
        ("twitter", "twitter_cover", generate_twitter_header),
        ("linkedin", "linkedin_cover", generate_linkedin_banner),
        ("youtube", "youtube_banner", generate_youtube_banner),
        ("facebook", "facebook_cover", generate_facebook_cover),
        ("github", "github_social", generate_github_social)
    ]
    
    generated = []
    for platform, prefix, gen_func in tasks:
        # Dark Theme
        img_dark = gen_func(is_teal=False)
        p_dark_pub = os.path.join(OUTPUT_BASE, platform, f"{prefix}_dark.png")
        p_dark_art = os.path.join(ARTIFACT_BASE, platform, f"{prefix}_dark.png")
        img_dark.save(p_dark_pub, "PNG", optimize=True)
        img_dark.save(p_dark_art, "PNG", optimize=True)
        generated.append(p_dark_pub)
        
        # Teal Theme
        img_teal = gen_func(is_teal=True)
        p_teal_pub = os.path.join(OUTPUT_BASE, platform, f"{prefix}_teal.png")
        p_teal_art = os.path.join(ARTIFACT_BASE, platform, f"{prefix}_teal.png")
        img_teal.save(p_teal_pub, "PNG", optimize=True)
        img_teal.save(p_teal_art, "PNG", optimize=True)
        generated.append(p_teal_pub)
        
    print(f"Generated {len(generated)} non-overlapping, high-visibility social cover banners!")

if __name__ == "__main__":
    main()
