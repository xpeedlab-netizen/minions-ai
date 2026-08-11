import math
from PIL import Image

def remove_background_pure_pil(input_path, output_path, bg_color_rgb=(11, 72, 78), threshold=30, feather=25):
    img = Image.open(input_path).convert("RGBA")
    pixels = img.load()
    width, height = img.size
    
    bg_r, bg_g, bg_b = bg_color_rgb

    for y in range(height):
        for x in range(width):
            r, g, b, a = pixels[x, y]
            # Calculate distance from background color
            dist = math.sqrt((r - bg_r) ** 2 + (g - bg_g) ** 2 + (b - bg_b) ** 2)
            
            if dist < threshold:
                # Fully transparent background
                pixels[x, y] = (r, g, b, 0)
            elif dist < threshold + feather:
                # Feathered edge for smooth anti-aliasing
                alpha_factor = (dist - threshold) / feather
                pixels[x, y] = (r, g, b, int(255 * alpha_factor))
            else:
                # Fully opaque foreground
                pixels[x, y] = (r, g, b, 255)

    img.save(output_path, "PNG")
    print(f"Successfully processed transparent PNG saved to {output_path}")

if __name__ == "__main__":
    remove_background_pure_pil(
        "/home/parvej/.gemini/antigravity/brain/c424d153-5d1b-406e-9636-7a8d4e4333e7/rex_mascot_isolated_1786418441287.jpg",
        "/media/parvej/68CAB4DDCAB4A9281/Web Projects New/minions-ai/public/images/rex-3d-mascot-hero.png"
    )
