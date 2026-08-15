import os
import math
from PIL import Image, ImageDraw, ImageFont

# Brand Color Palette
INK = (18, 36, 42, 255)            # #12242A
TEAL = (14, 92, 99, 255)           # #0E5C63
ORANGE = (255, 107, 74, 255)       # #FF6B4A
CREAM = (255, 248, 240, 255)       # #FFF8F0
WHITE = (255, 255, 255, 255)       # #FFFFFF
BORDER = (220, 228, 236, 255)      # #DCE4EC

FONT_PATH = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
if not os.path.exists(FONT_PATH):
    FONT_PATH = "/System/Library/Fonts/Helvetica.ttc"

def create_wordmark_avatar(bg_color, text_color, dot_color, size=800, is_light=False):
    """
    Renders 800x800 avatar with 'Minions.AI' centered inside circular safe-zone.
    """
    img = Image.new("RGBA", (size, size), bg_color)
    draw = ImageDraw.Draw(img)
    
    # Optional subtle border for light backgrounds
    if is_light:
        draw.rectangle([0, 0, size - 1, size - 1], outline=BORDER, width=4)
        
    font_main = ImageFont.truetype(FONT_PATH, 116)
    font_ai = ImageFont.truetype(FONT_PATH, 116)
    
    text_minions = "Minions"
    text_ai = ".AI"
    
    # Measure text bounding boxes
    bbox_minions = draw.textbbox((0, 0), text_minions, font=font_main)
    bbox_ai = draw.textbbox((0, 0), text_ai, font=font_ai)
    
    w_minions = bbox_minions[2] - bbox_minions[0]
    h_minions = bbox_minions[3] - bbox_minions[1]
    
    w_ai = bbox_ai[2] - bbox_ai[0]
    h_ai = bbox_ai[3] - bbox_ai[1]
    
    total_w = w_minions + w_ai + 8
    max_h = max(h_minions, h_ai)
    
    # Center within 800x800 canvas
    start_x = (size - total_w) / 2
    start_y = (size - max_h) / 2 - 10
    
    draw.text((start_x, start_y), text_minions, font=font_main, fill=text_color)
    draw.text((start_x + w_minions + 8, start_y), text_ai, font=font_ai, fill=dot_color)
    
    return img

def create_stacked_avatar(bg_color, text_color, dot_color, size=800, is_light=False):
    """
    Renders 800x800 avatar with stacked 'MINIONS' and '.AI' for ultra-high legibility in circular crops.
    """
    img = Image.new("RGBA", (size, size), bg_color)
    draw = ImageDraw.Draw(img)
    
    if is_light:
        draw.rectangle([0, 0, size - 1, size - 1], outline=BORDER, width=4)
        
    font_top = ImageFont.truetype(FONT_PATH, 112)
    font_bottom = ImageFont.truetype(FONT_PATH, 140)
    
    text_top = "Minions"
    text_bottom = ".AI"
    
    bbox_top = draw.textbbox((0, 0), text_top, font=font_top)
    bbox_bottom = draw.textbbox((0, 0), text_bottom, font=font_bottom)
    
    w_top = bbox_top[2] - bbox_top[0]
    h_top = bbox_top[3] - bbox_top[1]
    
    w_bottom = bbox_bottom[2] - bbox_bottom[0]
    h_bottom = bbox_bottom[3] - bbox_bottom[1]
    
    gap = 20
    total_h = h_top + h_bottom + gap
    
    start_y_top = (size - total_h) / 2 - 20
    start_x_top = (size - w_top) / 2
    
    start_y_bottom = start_y_top + h_top + gap
    start_x_bottom = (size - w_bottom) / 2
    
    draw.text((start_x_top, start_y_top), text_top, font=font_top, fill=text_color)
    draw.text((start_x_bottom, start_y_bottom), text_bottom, font=font_bottom, fill=dot_color)
    
    return img

def create_monogram_avatar(bg_color, m_color, ai_color, size=800, is_light=False):
    """
    Renders 800x800 geometric 'M.AI' emblem designed for 32px-48px thumbnail views.
    """
    img = Image.new("RGBA", (size, size), bg_color)
    draw = ImageDraw.Draw(img)
    
    if is_light:
        draw.rectangle([0, 0, size - 1, size - 1], outline=BORDER, width=4)
        
    font_m = ImageFont.truetype(FONT_PATH, 280)
    font_ai = ImageFont.truetype(FONT_PATH, 110)
    
    text_m = "M"
    text_ai = ".AI"
    
    bbox_m = draw.textbbox((0, 0), text_m, font=font_m)
    bbox_ai = draw.textbbox((0, 0), text_ai, font=font_ai)
    
    w_m = bbox_m[2] - bbox_m[0]
    h_m = bbox_m[3] - bbox_m[1]
    
    w_ai = bbox_ai[2] - bbox_ai[0]
    h_ai = bbox_ai[3] - bbox_ai[1]
    
    start_x_m = (size - w_m) / 2
    start_y_m = (size - h_m) / 2 - 40
    
    draw.text((start_x_m, start_y_m), text_m, font=font_m, fill=m_color)
    
    # Badge container for .AI
    badge_w = w_ai + 40
    badge_h = h_ai + 20
    badge_x = (size - badge_w) / 2
    badge_y = start_y_m + h_m + 30
    
    draw.rounded_rectangle([badge_x, badge_y, badge_x + badge_w, badge_y + badge_h], radius=16, fill=ORANGE)
    draw.text((badge_x + 20, badge_y + 8), text_ai, font=font_ai, fill=WHITE)
    
    return img

def main():
    base_dir = "/Users/rakibs/Claude/Projects/minionops/public/images/social-avatars"
    artifact_dir = "/Users/rakibs/.gemini/antigravity/brain/9c413764-4cea-4b7e-8b23-959e03812b2b/social-avatars"
    
    platforms = ["twitter", "linkedin", "github", "youtube", "facebook"]
    for p in platforms:
        os.makedirs(os.path.join(base_dir, p), exist_ok=True)
        os.makedirs(os.path.join(artifact_dir, p), exist_ok=True)
        
    themes = [
        ("dark", INK, WHITE, ORANGE, False),
        ("teal", TEAL, WHITE, ORANGE, False),
        ("light", CREAM, INK, ORANGE, True),
    ]
    
    generated_files = []
    
    # 1. Generate Platform-Specific Packages
    for platform in platforms:
        for theme_name, bg, text, dot, is_light in themes:
            # High-impact wordmark
            img_wordmark = create_wordmark_avatar(bg, text, dot, is_light=is_light)
            fname_wm = f"{platform}_avatar_{theme_name}_800x800.png"
            
            pub_path_wm = os.path.join(base_dir, platform, fname_wm)
            art_path_wm = os.path.join(artifact_dir, platform, fname_wm)
            img_wordmark.save(pub_path_wm, "PNG", optimize=True)
            img_wordmark.save(art_path_wm, "PNG", optimize=True)
            generated_files.append((platform, theme_name, "wordmark", pub_path_wm))
            
            # Stacked emblem (optimized for circular crop)
            img_stacked = create_stacked_avatar(bg, text, dot, is_light=is_light)
            fname_st = f"{platform}_avatar_{theme_name}_stacked_800x800.png"
            
            pub_path_st = os.path.join(base_dir, platform, fname_st)
            art_path_st = os.path.join(artifact_dir, platform, fname_st)
            img_stacked.save(pub_path_st, "PNG", optimize=True)
            img_stacked.save(art_path_st, "PNG", optimize=True)
            generated_files.append((platform, theme_name, "stacked", pub_path_st))
            
            # Monogram emblem (optimized for small feed icons)
            img_mono = create_monogram_avatar(bg, text, dot, is_light=is_light)
            fname_mn = f"{platform}_avatar_{theme_name}_monogram_800x800.png"
            
            pub_path_mn = os.path.join(base_dir, platform, fname_mn)
            art_path_mn = os.path.join(artifact_dir, platform, fname_mn)
            img_mono.save(pub_path_mn, "PNG", optimize=True)
            img_mono.save(art_path_mn, "PNG", optimize=True)
            generated_files.append((platform, theme_name, "monogram", pub_path_mn))
            
    print(f"Successfully generated {len(generated_files)} platform-optimized social avatar images!")

if __name__ == "__main__":
    main()
