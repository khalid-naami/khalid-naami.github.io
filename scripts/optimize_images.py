import os
from PIL import Image

def optimize_images(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                file_path = os.path.join(root, file)
                try:
                    with Image.open(file_path) as img:
                        # Skip if it's already small enough or specific icons
                        if os.path.getsize(file_path) < 50000 and img.width < 500:
                            continue
                            
                        print(f"Optimizing: {file}")
                        
                        # Resize if too large
                        max_width = 1200
                        if img.width > max_width:
                            w_percent = (max_width / float(img.width))
                            h_size = int((float(img.height) * float(w_percent)))
                            img = img.resize((max_width, h_size), Image.Resampling.LANCZOS)
                        
                        # Convert to WebP
                        webp_path = os.path.splitext(file_path)[0] + ".webp"
                        img.save(webp_path, "WEBP", quality=80)
                        print(f"Done: {os.path.basename(webp_path)}")
                        
                except Exception as e:
                    print(f"Error processing {file}: {e}")

if __name__ == "__main__":
    img_dir = "static/img"
    optimize_images(img_dir)
