import os
from PIL import Image, ImageDraw, ImageFont

def process_ai_image_to_transparent(input_path, output_path):
    if not os.path.exists(input_path):
        print(f"Input file not found: {input_path}")
        return False
    
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        # Check for near-white pixels to make transparent
        if item[0] > 235 and item[1] > 235 and item[2] > 235:
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    
    # Auto-crop transparent padding
    bbox = img.getbbox()
    if bbox:
        img = img.crop(bbox)
        
    img.save(output_path, "PNG")
    print(f"Saved transparent PNG to {output_path}")
    return True

def create_inverted_logo(primary_path, output_path):
    if not os.path.exists(primary_path):
        return False
    
    img = Image.open(primary_path).convert("RGBA")
    datas = img.getdata()
    
    new_data = []
    for item in datas:
        if item[3] > 0:
            # If it's dark charcoal text (R,G,B all < 50), invert to pure white
            if item[0] < 60 and item[1] < 60 and item[2] < 60:
                new_data.append((255, 255, 255, item[3]))
            else:
                new_data.append(item)
        else:
            new_data.append((0, 0, 0, 0))
            
    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Saved inverted transparent PNG to {output_path}")
    return True

if __name__ == "__main__":
    artifact_dir = "/Users/rakibs/.gemini/antigravity/brain/9c413764-4cea-4b7e-8b23-959e03812b2b"
    public_dir = "/Users/rakibs/Claude/Projects/minionops/public/images"
    
    input_clean = os.path.join(artifact_dir, "minions_ai_wordmark_clean_1786787781850.jpg")
    input_teal = os.path.join(artifact_dir, "minions_ai_wordmark_teal_1786787801404.jpg")
    
    # 1. Primary Wordmark (Dark Charcoal + Coral)
    output_primary_art = os.path.join(artifact_dir, "minions_ai_logo_primary_transparent.png")
    output_primary_pub = os.path.join(public_dir, "minions_ai_logo_primary_transparent.png")
    
    process_ai_image_to_transparent(input_clean, output_primary_art)
    process_ai_image_to_transparent(input_clean, output_primary_pub)
    
    # 2. Inverted Wordmark (White + Coral)
    output_inv_art = os.path.join(artifact_dir, "minions_ai_logo_inverted_transparent.png")
    output_inv_pub = os.path.join(public_dir, "minions_ai_logo_inverted_transparent.png")
    
    create_inverted_logo(output_primary_art, output_inv_art)
    create_inverted_logo(output_primary_art, output_inv_pub)
    
    # 3. Teal Wordmark (Deep Teal + Coral)
    output_teal_art = os.path.join(artifact_dir, "minions_ai_logo_teal_transparent.png")
    output_teal_pub = os.path.join(public_dir, "minions_ai_logo_teal_transparent.png")
    
    process_ai_image_to_transparent(input_teal, output_teal_art)
    process_ai_image_to_transparent(input_teal, output_teal_pub)
