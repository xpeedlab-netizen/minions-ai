import os
import shutil

artifact_dir = "/Users/rakibs/.gemini/antigravity/brain/9c413764-4cea-4b7e-8b23-959e03812b2b"
target_dir = "/Users/rakibs/Claude/Projects/minionops/public/images/social-avatars/ai-generated"
os.makedirs(target_dir, exist_ok=True)

files = {
    "twitter_profile_avatar_1786788917758.jpg": "twitter_profile_avatar_ai.jpg",
    "linkedin_profile_avatar_1786788948898.jpg": "linkedin_profile_avatar_ai.jpg",
    "github_profile_avatar_1786789207712.jpg": "github_profile_avatar_ai.jpg",
    "youtube_profile_avatar_1786789923671.jpg": "youtube_profile_avatar_ai.jpg",
    "facebook_profile_avatar_1786790074088.jpg": "facebook_profile_avatar_ai.jpg"
}

for src_name, dest_name in files.items():
    src_path = os.path.join(artifact_dir, src_name)
    dest_path = os.path.join(target_dir, dest_name)
    if os.path.exists(src_path):
        shutil.copy2(src_path, dest_path)
        print(f"Copied {src_name} -> {dest_path}")
    else:
        print(f"Not found: {src_path}")
