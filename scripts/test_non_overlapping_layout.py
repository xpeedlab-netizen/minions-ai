import os
from PIL import Image, ImageDraw, ImageFont

PROJECT_DIR = "/Users/rakibs/Claude/Projects/minionops"
MASCOTS_DIR = os.path.join(PROJECT_DIR, "public/images/mascots")

def test_duo_spacing(W, H, zone_start_x, zone_end_x, mascot_h, min_gap=40):
    rex = Image.open(os.path.join(MASCOTS_DIR, "rex.png")).convert("RGBA")
    zip_img = Image.open(os.path.join(MASCOTS_DIR, "zip.png")).convert("RGBA")
    
    zone_w = zone_end_x - zone_start_x
    rex_w = mascot_h
    zip_w = mascot_h
    
    # Total mascot width
    total_w = rex_w + zip_w
    available_gap = zone_w - total_w
    
    gap = max(min_gap, int(available_gap / 3))
    rex_x = int(zone_start_x + gap)
    zip_x = int(rex_x + rex_w + gap)
    
    actual_distance = zip_x - (rex_x + rex_w)
    print(f"Duo Setup: Zone ({zone_start_x} to {zone_end_x}, w={zone_w}), Mascot H={mascot_h}")
    print(f"Rex: x=[{rex_x}, {rex_x+rex_w}], Zip: x=[{zip_x}, {zip_x+zip_w}], Gap between them: {actual_distance}px")
    assert actual_distance >= min_gap, "Gap is smaller than min_gap!"
    assert zip_x + zip_w <= zone_end_x, "Zip exceeds right zone!"

def test_trio_spacing(W, H, zone_start_x, zone_end_x, mascot_h, min_gap=30):
    rex = Image.open(os.path.join(MASCOTS_DIR, "rex.png")).convert("RGBA")
    pip = Image.open(os.path.join(MASCOTS_DIR, "pip.png")).convert("RGBA")
    zip_img = Image.open(os.path.join(MASCOTS_DIR, "zip.png")).convert("RGBA")
    
    zone_w = zone_end_x - zone_start_x
    w = mascot_h
    
    total_w = w * 3
    available_gap = zone_w - total_w
    
    gap = int(available_gap / 4)
    p1_x = int(zone_start_x + gap)
    p2_x = int(p1_x + w + gap)
    p3_x = int(p2_x + w + gap)
    
    dist1 = p2_x - (p1_x + w)
    dist2 = p3_x - (p2_x + w)
    
    print(f"Trio Setup: Zone ({zone_start_x} to {zone_end_x}, w={zone_w}), Mascot H={mascot_h}")
    print(f"M1: [{p1_x}, {p1_x+w}], M2: [{p2_x}, {p2_x+w}], M3: [{p3_x}, {p3_x+w}]")
    print(f"Gaps: M1->M2 = {dist1}px, M2->M3 = {dist2}px, Right Margin = {zone_end_x - (p3_x+w)}px")
    assert dist1 >= min_gap and dist2 >= min_gap, "Gap is too small!"
    assert p3_x + w <= zone_end_x, "M3 exceeds right zone!"

if __name__ == "__main__":
    print("--- Twitter (1500x500) ---")
    test_duo_spacing(1500, 500, 880, 1440, mascot_h=250, min_gap=40)
    
    print("\n--- LinkedIn (1584x396) ---")
    test_duo_spacing(1584, 396, 980, 1520, mascot_h=230, min_gap=40)
    
    print("\n--- YouTube (2560x1440) ---")
    test_trio_spacing(2560, 1440, 1340, 2000, mascot_h=190, min_gap=25)
    
    print("\n--- Facebook (1640x624) ---")
    test_duo_spacing(1640, 624, 960, 1540, mascot_h=260, min_gap=40)
    
    print("\n--- GitHub (1280x640) ---")
    test_duo_spacing(1280, 640, 720, 1220, mascot_h=220, min_gap=40)
