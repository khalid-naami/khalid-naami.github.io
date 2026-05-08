import os
import re
import urllib.parse

used_images = set()
blog_dir = 'blog'

# Regex to find everything starting with /img/ up to common delimiters
pattern = r'/img/([^ \)\"\n\r\t]+)'

if os.path.exists(blog_dir):
    for filename in os.listdir(blog_dir):
        if filename.endswith('.md'):
            with open(os.path.join(blog_dir, filename), 'r', encoding='utf-8') as f:
                content = f.read()
                matches = re.findall(pattern, content)
                for m in matches:
                    # Decode URL encoding like %20
                    decoded = urllib.parse.unquote(m)
                    # Remove potential trailing markdown or quote chars
                    decoded = decoded.split(')')[0].split('"')[0].split("'")[0].split('?')[0]
                    used_images.add(decoded)

print("---USED_IMAGES_START---")
for img in sorted(list(used_images)):
    if img:
        print(img)
print("---USED_IMAGES_END---")
