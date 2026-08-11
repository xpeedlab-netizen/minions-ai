import math
import os
from PIL import Image

def extract_chroma(input_path, output_path, bg_color_rgb, threshold=40, feather=20):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size
    
    bg_r, bg_g, bg_b = bg_color_rgb

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # Euclidean distance from key chroma color
            dist = math.sqrt((r - bg_r) ** 2 + (g - bg_g) ** 2 + (b - bg_b) ** 2)
            
            if dist < threshold:
                pixels[x, y] = (r, g, b, 0)
            elif dist < threshold + feather:
                alpha_factor = (dist - threshold) / feather
                pixels[x, y] = (r, g, b, int(255 * alpha_factor))
            else:
                pixels[x, y] = (r, g, b, 255)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    img.save(output_path, "PNG")
    print(f"Extracted transparent asset: {output_path}")

if __name__ == "__main__":
    brain_dir = "/home/parvej/.gemini/antigravity/brain/c424d153-5d1b-406e-9636-7a8d4e4333e7"
    public_mascots_dir = "/media/parvej/68CAB4DDCAB4A9281/Web Projects New/minions-ai/public/images/mascots"

    # Magenta background (255, 0, 127)
    magenta_rgb = (255, 0, 127)
    # Cyan background (0, 255, 255)
    cyan_rgb = (0, 255, 255)

    mascots = [
        ("rex_mascot_chroma_1786418938013.jpg", "rex.png", magenta_rgb),
        ("zip_mascot_chroma_1786419119489.jpg", "zip.png", cyan_rgb),
        ("pip_mascot_chroma_1786419150490.jpg", "pip.png", magenta_rgb),
        ("gia_mascot_chroma_1786419172811.jpg", "gia.png", magenta_rgb),
        ("otto_mascot_chroma_1786419191914.jpg", "otto.png", magenta_rgb),
    ]

    for filename, outname, bg_rgb in mascots:
        input_p = os.path.join(brain_dir, filename)
        output_p = os.path.join(public_mascots_dir, outname)
        extract_chroma(input_p, output_p, bg_rgb)
