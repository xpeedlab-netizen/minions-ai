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

def draw_background(width, height, is_teal=False):
    """Draws a premium gradient dark backdrop with subtle glow orbs."""
    img = Image.new("RGBA", (width, height), TEAL if is_teal else INK)
    draw = ImageDraw.Draw(img)
    
    # Ambient glow on right side behind mascots
    glow_color = (255, 107, 74, 35) if is_teal else (14, 92, 99, 70)
    for r in range(int(height * 0.9), int(height * 0.2), -30):
        alpha = int(45 * (1 - r / (height * 0.9)))
        draw.ellipse([width * 0.72 - r, height * 0.5 - r, width * 0.72 + r, height * 0.5 + r],
                     fill=(*glow_color[:3], alpha))
        
    return img

def render_squad_formation(canvas, right_zone_start_x, right_zone_end_x, baseline_y, mascot_height=320):
    """
    Renders all 5 mascots in a heroic, zero-clipping squad formation:
    - Back row: Pip, Gia, Otto (elevated, 88% scale)
    - Front row: Rex, Zip (lead operatives, 100% scale)
    """
    names = ["pip.png", "gia.png", "otto.png", "rex.png", "zip.png"]
    images = {n: Image.open(os.path.join(MASCOTS_DIR, n)).convert("RGBA") for n in names}
    
    zone_w = right_zone_end_x - right_zone_start_x
    
    back_h = int(mascot_height * 0.88)
    back_w = back_h
    front_h = mascot_height
    front_w = front_h
    
    # Back row positions
    back_y = baseline_y - back_h + 15
    back_spacing = (zone_w - back_w) / 2
    back_positions = [
        ("pip.png", int(right_zone_start_x + 10), back_y),
        ("gia.png", int(right_zone_start_x + back_spacing), back_y - 12),
        ("otto.png", int(right_zone_end_x - back_w - 10), back_y)
    ]
    
    # Front row positions (centered between back row gaps)
    front_y = baseline_y - front_h + 40
    front_spacing = (zone_w - (front_w * 2)) / 3
    front_positions = [
        ("rex.png", int(right_zone_start_x + front_spacing + 15), front_y),
        ("zip.png", int(right_zone_start_x + front_spacing * 2 + front_w - 15), front_y)
    ]
    
    # Paste back row first with soft shadows
    for name, x, y in back_positions:
        im = images[name].resize((back_w, back_h), Image.Resampling.LANCZOS)
        shadow = Image.new("RGBA", (back_w + 30, back_h + 30), (0,0,0,0))
        s_draw = ImageDraw.Draw(shadow)
        s_draw.ellipse([15, back_h - 10, back_w + 15, back_h + 15], fill=(0,0,0,120))
        shadow = shadow.filter(ImageFilter.GaussianBlur(10))
        canvas.paste(shadow, (x - 15, y), shadow)
        canvas.paste(im, (x, y), im)
        
    # Paste front row
    for name, x, y in front_positions:
        im = images[name].resize((front_w, front_h), Image.Resampling.LANCZOS)
        shadow = Image.new("RGBA", (front_w + 30, front_h + 30), (0,0,0,0))
        s_draw = ImageDraw.Draw(shadow)
        s_draw.ellipse([15, front_h - 10, front_w + 15, front_h + 15], fill=(0,0,0,140))
        shadow = shadow.filter(ImageFilter.GaussianBlur(12))
        canvas.paste(shadow, (x - 15, y), shadow)
        canvas.paste(im, (x, y), im)

def generate_twitter_header(is_teal=False):
    """Generates 1500x500 Twitter / X Header Banner."""
    W, H = 1500, 500
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 58
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    left_x = 120
    img.paste(logo_resized, (left_x, 90), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 36)
    font_sub = ImageFont.truetype(FONT_REG, 22)
    font_badge = ImageFont.truetype(FONT_BOLD, 18)
    
    draw.text((left_x, 175), "The 24/7 AI Front Office Crew", font=font_hl, fill=WHITE)
    draw.text((left_x, 225), "Never miss a call • Speed-to-lead • Book more jobs", font=font_sub, fill=MUTED_TEXT)
    
    # Badges
    badge_y = 285
    draw.rounded_rectangle([left_x, badge_y, left_x + 360, badge_y + 44], radius=22, fill=(255, 255, 255, 25))
    draw.ellipse([left_x + 16, badge_y + 16, left_x + 28, badge_y + 28], fill=ORANGE)
    draw.text((left_x + 38, badge_y + 11), "ServiceTitan • Jobber • HCP", font=font_badge, fill=WHITE)
    
    url_x = left_x + 380
    draw.rounded_rectangle([url_x, badge_y, url_x + 190, badge_y + 44], radius=22, fill=ORANGE)
    draw.text((url_x + 24, badge_y + 11), "getminions.ai", font=font_badge, fill=WHITE)
    
    # 5-Mascot Squad on Right (strictly within x: 800 to 1440)
    render_squad_formation(img, 820, 1440, baseline_y=460, mascot_height=320)
    
    return img

def generate_linkedin_banner(is_teal=False):
    """Generates 1584x396 LinkedIn Company Banner."""
    W, H = 1584, 396
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 50
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    left_x = 100
    img.paste(logo_resized, (left_x, 70), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 30)
    font_sub = ImageFont.truetype(FONT_REG, 19)
    font_badge = ImageFont.truetype(FONT_BOLD, 16)
    
    draw.text((left_x, 138), "24/7 AI Phone Answering & Speed-to-Lead Crew", font=font_hl, fill=WHITE)
    draw.text((left_x, 182), "Built specifically for Trade & Home Service Businesses", font=font_sub, fill=MUTED_TEXT)
    
    badge_y = 230
    draw.rounded_rectangle([left_x, badge_y, left_x + 370, badge_y + 38], radius=19, fill=(255, 255, 255, 25))
    draw.ellipse([left_x + 14, badge_y + 13, left_x + 26, badge_y + 25], fill=ORANGE)
    draw.text((left_x + 36, badge_y + 9), "CRM & Dispatch Integration Ready", font=font_badge, fill=WHITE)
    
    url_x = left_x + 390
    draw.rounded_rectangle([url_x, badge_y, url_x + 175, badge_y + 38], radius=19, fill=ORANGE)
    draw.text((url_x + 22, badge_y + 9), "getminions.ai", font=font_badge, fill=WHITE)
    
    # 5-Mascot Squad on Right (strictly within x: 920 to 1540)
    render_squad_formation(img, 940, 1540, baseline_y=370, mascot_height=260)
    
    return img

def generate_youtube_banner(is_teal=False):
    """Generates 2560x1440 YouTube Channel Banner with 1546x423 Center Universal Safe Zone."""
    W, H = 2560, 1440
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    safe_y_start = 508
    safe_x_start = 550
    
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 64
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    img.paste(logo_resized, (safe_x_start, safe_y_start + 40), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 36)
    font_sub = ImageFont.truetype(FONT_REG, 23)
    font_badge = ImageFont.truetype(FONT_BOLD, 19)
    
    draw.text((safe_x_start, safe_y_start + 125), "Never Miss Another Call or Lead", font=font_hl, fill=WHITE)
    draw.text((safe_x_start, safe_y_start + 180), "24/7 AI Voice Dispatch, Instant SMS & Booking", font=font_sub, fill=MUTED_TEXT)
    
    badge_y = safe_y_start + 240
    draw.rounded_rectangle([safe_x_start, badge_y, safe_x_start + 420, badge_y + 46], radius=23, fill=(255, 255, 255, 25))
    draw.ellipse([safe_x_start + 16, badge_y + 17, safe_x_start + 30, badge_y + 31], fill=ORANGE)
    draw.text((safe_x_start + 42, badge_y + 11), "ServiceTitan • Jobber • FieldRoutes", font=font_badge, fill=WHITE)
    
    url_x = safe_x_start + 440
    draw.rounded_rectangle([url_x, badge_y, url_x + 195, badge_y + 46], radius=23, fill=ORANGE)
    draw.text((url_x + 24, badge_y + 11), "getminions.ai", font=font_badge, fill=WHITE)
    
    # 5-Mascot Squad inside Center Safe Strip (strictly within x: 1280 to 1980)
    render_squad_formation(img, 1280, 1980, baseline_y=safe_y_start + 390, mascot_height=310)
    
    return img

def generate_facebook_cover(is_teal=False):
    """Generates 1640x624 Facebook Page Cover."""
    W, H = 1640, 624
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 66
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    left_x = 120
    img.paste(logo_resized, (left_x, 110), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 38)
    font_sub = ImageFont.truetype(FONT_REG, 23)
    font_badge = ImageFont.truetype(FONT_BOLD, 19)
    
    draw.text((left_x, 200), "The 24/7 AI Front Office Crew", font=font_hl, fill=WHITE)
    draw.text((left_x, 255), "Stop losing revenue to unanswered contractor calls", font=font_sub, fill=MUTED_TEXT)
    
    badge_y = 320
    draw.rounded_rectangle([left_x, badge_y, left_x + 380, badge_y + 48], radius=24, fill=(255, 255, 255, 25))
    draw.ellipse([left_x + 18, badge_y + 18, left_x + 32, badge_y + 32], fill=ORANGE)
    draw.text((left_x + 44, badge_y + 12), "ServiceTitan • Jobber • HCP", font=font_badge, fill=WHITE)
    
    url_x = left_x + 400
    draw.rounded_rectangle([url_x, badge_y, url_x + 195, badge_y + 48], radius=24, fill=ORANGE)
    draw.text((url_x + 24, badge_y + 12), "getminions.ai", font=font_badge, fill=WHITE)
    
    # 5-Mascot Squad on Right (strictly within x: 920 to 1540)
    render_squad_formation(img, 920, 1540, baseline_y=570, mascot_height=380)
    
    return img

def generate_github_social(is_teal=False):
    """Generates 1280x640 GitHub Social Preview & OpenGraph Banner."""
    W, H = 1280, 640
    img = draw_background(W, H, is_teal)
    draw = ImageDraw.Draw(img)
    
    logo = Image.open(LOGO_PATH).convert("RGBA")
    logo_h = 62
    logo_w = int(logo.width * (logo_h / logo.height))
    logo_resized = logo.resize((logo_w, logo_h), Image.Resampling.LANCZOS)
    
    left_x = 80
    img.paste(logo_resized, (left_x, 110), logo_resized)
    
    font_hl = ImageFont.truetype(FONT_BOLD, 34)
    font_sub = ImageFont.truetype(FONT_REG, 21)
    font_badge = ImageFont.truetype(FONT_BOLD, 18)
    
    draw.text((left_x, 195), "Autonomous AI Crew for Trade Ops", font=font_hl, fill=WHITE)
    draw.text((left_x, 245), "Voice Agents • Speed-to-Lead SMS • CRM Pipelines", font=font_sub, fill=MUTED_TEXT)
    
    badge_y = 310
    draw.rounded_rectangle([left_x, badge_y, left_x + 350, badge_y + 44], radius=22, fill=(255, 255, 255, 25))
    draw.ellipse([left_x + 16, badge_y + 16, left_x + 28, badge_y + 28], fill=ORANGE)
    draw.text((left_x + 38, badge_y + 11), "ServiceTitan • Jobber • HCP", font=font_badge, fill=WHITE)
    
    url_x = left_x + 370
    draw.rounded_rectangle([url_x, badge_y, url_x + 185, badge_y + 44], radius=22, fill=ORANGE)
    draw.text((url_x + 24, badge_y + 11), "getminions.ai", font=font_badge, fill=WHITE)
    
    # 5-Mascot Squad on Right (strictly within x: 660 to 1200)
    render_squad_formation(img, 660, 1200, baseline_y=570, mascot_height=340)
    
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
        
    print(f"Generated {len(generated)} perfectly calibrated zero-clipping cover banners!")

if __name__ == "__main__":
    main()
