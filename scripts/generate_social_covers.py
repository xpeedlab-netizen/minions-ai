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
MUTED_TEXT = (180, 205, 215, 255)  # Soft slate
CARD_BG = (28, 52, 60, 200)

def load_mascots(target_height):
    """Loads and resizes the 5 fixed mascots maintaining aspect ratio."""
    names = ["rex.png", "zip.png", "pip.png", "gia.png", "otto.png"]
    mascots = []
    for n in names:
        p = os.path.join(MASCOTS_DIR, n)
        if os.path.exists(p):
            im = Image.open(p).convert("RGBA")
            aspect = im.width / im.height
            new_w = int(target_height * aspect)
            im_resized = im.resize((new_w, target_height), Image.Resampling.LANCZOS)
            mascots.append((n.split(".")[0], im_resized))
    return mascots

def draw_background(width, height, is_teal=False):
    """Draws a premium gradient dark backdrop with subtle glow orbs."""
    img = Image.new("RGBA", (width, height), TEAL if is_teal else INK)
    draw = ImageDraw.Draw(img)
    
    # Subtle ambient lighting glow on right side
    glow_color = (255, 107, 74, 30) if is_teal else (14, 92, 99, 60)
    for r in range(int(height * 0.8), int(height * 0.2), -30):
        alpha = int(40 * (1 - r / (height * 0.8)))
        draw.ellipse([width * 0.65 - r, height * 0.5 - r, width * 0.65 + r, height * 0.5 + r],
                     fill=(*glow_color[:3], alpha))
        
    return img

def render_crew_lineup(canvas, mascots, start_x, start_y, overlap=0.25):
    """Renders the 5 mascots overlapping smoothly in a unified team lineup."""
    cur_x = start_x
    for name, im in mascots:
        # Subtle drop shadow
        shadow = Image.new("RGBA", (im.width + 20, im.height + 20), (0, 0, 0, 0))
        s_draw = ImageDraw.Draw(shadow)
        s_draw.ellipse([10, im.height - 15, im.width + 10, im.height + 15], fill=(0, 0, 0, 100))
        shadow = shadow.filter(ImageFilter.GaussianBlur(10))
        canvas.paste(shadow, (int(cur_x - 10), int(start_y + 10)), shadow)
        
        # Paste Mascot
        canvas.paste(im, (int(cur_x), int(start_y)), im)
        cur_x += int(im.width * (1 - overlap))

def generate_twitter_header(is_teal=False):
    """Generates 1500x500 Twitter / X Header Banner."""
    W, H = 1500, 500
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    # Load Logo
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 60
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    # Safe zone: left margin 380px (clears avatar)
    left_x = 380
    img.paste(logo_resized, (left_x, 90), logo_resized)
    
    # Tagline & Subtext
    font_hl = ImageFont.truetype(FONT_BOLD, 36)
    font_sub = ImageFont.truetype(FONT_REG, 22)
    font_badge = ImageFont.truetype(FONT_BOLD, 18)
    
    draw.text((left_x, 175), "The 24/7 AI Front Office Crew", font=font_hl, fill=WHITE)
    draw.text((left_x, 225), "Never miss a call • Speed-to-lead • Book more jobs", font=font_sub, fill=MUTED_TEXT)
    
    # Pill Badge for Integrations
    badge_y = 285
    draw.rounded_rectangle([left_x, badge_y, left_x + 360, badge_y + 44], radius=22, fill=(255, 255, 255, 25))
    draw.ellipse([left_x + 16, badge_y + 16, left_x + 28, badge_y + 28], fill=ORANGE)
    draw.text((left_x + 38, badge_y + 11), "ServiceTitan • Jobber • HCP", font=font_badge, fill=WHITE)
    
    # URL Pill
    url_x = left_x + 380
    draw.rounded_rectangle([url_x, badge_y, url_x + 190, badge_y + 44], radius=22, fill=ORANGE)
    draw.text((url_x + 24, badge_y + 11), "getminions.ai", font=font_badge, fill=WHITE)
    
    # Mascots on Right
    mascot_h = 320
    mascots = load_mascots(mascot_h)
    render_crew_lineup(img, mascots, start_x=940, start_y=110, overlap=0.28)
    
    return img

def generate_linkedin_banner(is_teal=False):
    """Generates 1584x396 LinkedIn Company Banner."""
    W, H = 1584, 396
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    # Logo
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 52
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    left_x = 220  # Safe from avatar
    img.paste(logo_resized, (left_x, 70), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 32)
    font_sub = ImageFont.truetype(FONT_REG, 20)
    font_badge = ImageFont.truetype(FONT_BOLD, 17)
    
    draw.text((left_x, 140), "24/7 AI Phone Answering & Speed-to-Lead Crew", font=font_hl, fill=WHITE)
    draw.text((left_x, 185), "Built specifically for Trade & Home Service Businesses", font=font_sub, fill=MUTED_TEXT)
    
    # Badges
    badge_y = 235
    draw.rounded_rectangle([left_x, badge_y, left_x + 390, badge_y + 40], radius=20, fill=(255, 255, 255, 25))
    draw.ellipse([left_x + 14, badge_y + 14, left_x + 26, badge_y + 26], fill=ORANGE)
    draw.text((left_x + 36, badge_y + 9), "CRM & Dispatch Integration Ready", font=font_badge, fill=WHITE)
    
    url_x = left_x + 410
    draw.rounded_rectangle([url_x, badge_y, url_x + 180, badge_y + 40], radius=20, fill=ORANGE)
    draw.text((url_x + 22, badge_y + 9), "getminions.ai", font=font_badge, fill=WHITE)
    
    # Mascots on Right
    mascot_h = 270
    mascots = load_mascots(mascot_h)
    render_crew_lineup(img, mascots, start_x=1020, start_y=75, overlap=0.28)
    
    return img

def generate_youtube_banner(is_teal=False):
    """Generates 2560x1440 YouTube Channel Banner with 1546x423 Center Universal Safe Zone."""
    W, H = 2560, 1440
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    # Safe zone band: Y: 508 to 931 (height: 423)
    safe_y_start = 508
    safe_x_start = 550
    
    # Logo
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 68
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    img.paste(logo_resized, (safe_x_start, safe_y_start + 40), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 38)
    font_sub = ImageFont.truetype(FONT_REG, 24)
    font_badge = ImageFont.truetype(FONT_BOLD, 20)
    
    draw.text((safe_x_start, safe_y_start + 130), "Never Miss Another Call or Lead", font=font_hl, fill=WHITE)
    draw.text((safe_x_start, safe_y_start + 185), "24/7 AI Voice Dispatch, Instant SMS & Booking", font=font_sub, fill=MUTED_TEXT)
    
    # Badges
    badge_y = safe_y_start + 245
    draw.rounded_rectangle([safe_x_start, badge_y, safe_x_start + 440, badge_y + 48], radius=24, fill=(255, 255, 255, 25))
    draw.ellipse([safe_x_start + 16, badge_y + 18, safe_x_start + 30, badge_y + 32], fill=ORANGE)
    draw.text((safe_x_start + 42, badge_y + 12), "ServiceTitan • Jobber • FieldRoutes", font=font_badge, fill=WHITE)
    
    url_x = safe_x_start + 460
    draw.rounded_rectangle([url_x, badge_y, url_x + 200, badge_y + 48], radius=24, fill=ORANGE)
    draw.text((url_x + 24, badge_y + 12), "getminions.ai", font=font_badge, fill=WHITE)
    
    # Mascots on Right (confined within safe zone height)
    mascot_h = 320
    mascots = load_mascots(mascot_h)
    render_crew_lineup(img, mascots, start_x=1480, start_y=safe_y_start + 35, overlap=0.28)
    
    return img

def generate_facebook_cover(is_teal=False):
    """Generates 1640x624 Facebook Page Cover."""
    W, H = 1640, 624
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 68
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    left_x = 180  # Safe from mobile side crop
    img.paste(logo_resized, (left_x, 110), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 40)
    font_sub = ImageFont.truetype(FONT_REG, 24)
    font_badge = ImageFont.truetype(FONT_BOLD, 20)
    
    draw.text((left_x, 205), "The 24/7 AI Front Office Crew", font=font_hl, fill=WHITE)
    draw.text((left_x, 260), "Stop losing revenue to unanswered contractor calls", font=font_sub, fill=MUTED_TEXT)
    
    # Badges
    badge_y = 330
    draw.rounded_rectangle([left_x, badge_y, left_x + 400, badge_y + 50], radius=25, fill=(255, 255, 255, 25))
    draw.ellipse([left_x + 18, badge_y + 19, left_x + 32, badge_y + 33], fill=ORANGE)
    draw.text((left_x + 44, badge_y + 13), "ServiceTitan • Jobber • HCP", font=font_badge, fill=WHITE)
    
    url_x = left_x + 420
    draw.rounded_rectangle([url_x, badge_y, url_x + 200, badge_y + 50], radius=25, fill=ORANGE)
    draw.text((url_x + 24, badge_y + 13), "getminions.ai", font=font_badge, fill=WHITE)
    
    # Mascots on Right
    mascot_h = 380
    mascots = load_mascots(mascot_h)
    render_crew_lineup(img, mascots, start_x=1000, start_y=110, overlap=0.28)
    
    return img

def generate_github_social(is_teal=False):
    """Generates 1280x640 GitHub Social Preview & OpenGraph Banner."""
    W, H = 1280, 640
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 64
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    left_x = 100
    img.paste(logo_resized, (left_x, 110), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 36)
    font_sub = ImageFont.truetype(FONT_REG, 22)
    font_badge = ImageFont.truetype(FONT_BOLD, 18)
    
    draw.text((left_x, 200), "Autonomous AI Crew for Trade Ops", font=font_hl, fill=WHITE)
    draw.text((left_x, 250), "Voice Agents • Speed-to-Lead SMS • CRM Pipelines", font=font_sub, fill=MUTED_TEXT)
    
    # Badges
    badge_y = 320
    draw.rounded_rectangle([left_x, badge_y, left_x + 360, badge_y + 46], radius=23, fill=(255, 255, 255, 25))
    draw.ellipse([left_x + 16, badge_y + 17, left_x + 28, badge_y + 29], fill=ORANGE)
    draw.text((left_x + 38, badge_y + 12), "ServiceTitan • Jobber • HCP", font=font_badge, fill=WHITE)
    
    url_x = left_x + 380
    draw.rounded_rectangle([url_x, badge_y, url_x + 190, badge_y + 46], radius=23, fill=ORANGE)
    draw.text((url_x + 24, badge_y + 12), "getminions.ai", font=font_badge, fill=WHITE)
    
    # Mascots on Right
    mascot_h = 360
    mascots = load_mascots(mascot_h)
    render_crew_lineup(img, mascots, start_x=740, start_y=130, overlap=0.28)
    
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
        
    print(f"Generated {len(generated)} platform-optimized social cover banners!")

if __name__ == "__main__":
    main()
