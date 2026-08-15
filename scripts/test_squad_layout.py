import os
from PIL import Image, ImageDraw, ImageFilter

MASCOTS_DIR = "/Users/rakibs/Claude/Projects/minionops/public/images/mascots"

def render_squad_formation(canvas, right_zone_start_x, right_zone_end_x, baseline_y, mascot_height=320):
    """
    Renders 5 mascots in a cohesive 5-member team squad formation:
    - Back row: Pip, Gia, Otto (elevated, scaled 85%)
    - Front row: Rex, Zip (front, scaled 100%)
    Strictly contained within [right_zone_start_x, right_zone_end_x].
    """
    names = ["pip.png", "gia.png", "otto.png", "rex.png", "zip.png"]
    images = {n: Image.open(os.path.join(MASCOTS_DIR, n)).convert("RGBA") for n in names}
    
    zone_w = right_zone_end_x - right_zone_start_x
    
    # Back row mascots (Pip, Gia, Otto)
    back_h = int(mascot_height * 0.88)
    back_w = back_h # aspect 1:1
    
    # Front row mascots (Rex, Zip)
    front_h = mascot_height
    front_w = front_h
    
    # Calculate spacing to evenly distribute within zone_w
    # Back row 3 positions
    back_y = baseline_y - back_h + 15
    back_spacing = (zone_w - back_w) / 2
    back_positions = [
        ("pip.png", int(right_zone_start_x + 10), back_y),
        ("gia.png", int(right_zone_start_x + back_spacing), back_y - 10),
        ("otto.png", int(right_zone_end_x - back_w - 10), back_y)
    ]
    
    # Front row 2 positions (centered between back row gaps)
    front_y = baseline_y - front_h + 40
    front_spacing = (zone_w - (front_w * 2)) / 3
    front_positions = [
        ("rex.png", int(right_zone_start_x + front_spacing + 10), front_y),
        ("zip.png", int(right_zone_start_x + front_spacing * 2 + front_w - 10), front_y)
    ]
    
    # Paste back row first with soft shadows
    for name, x, y in back_positions:
        im = images[name].resize((back_w, back_h), Image.Resampling.LANCZOS)
        # Drop shadow
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

if __name__ == "__main__":
    # Test on 1500x500 canvas
    test_img = Image.new("RGBA", (1500, 500), (18, 36, 42, 255))
    render_squad_formation(test_img, 820, 1440, baseline_y=460, mascot_height=320)
    test_img.save("/Users/rakibs/Claude/Projects/minionops/public/images/social-covers/test_squad.png")
    print("Test squad generated!")
