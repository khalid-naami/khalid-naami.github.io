import os
import re

def update_image_references(directory):
    # Regex to find /img/filename.png, /img/filename.jpg, etc.
    pattern = re.compile(r'/img/([a-zA-Z0-9%\-_ ]+)\.(png|jpg|jpeg)', re.IGNORECASE)
    
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith(('.md', '.mdx', '.js', '.yml')):
                file_path = os.path.join(root, file)
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                new_content = pattern.sub(r'/img/\1.webp', content)
                
                if content != new_content:
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.write(new_content)
                    print(f"Updated references in: {file}")

if __name__ == "__main__":
    update_image_references("blog")
    update_image_references("src")
    update_image_references(".") # For docusaurus.config.js
