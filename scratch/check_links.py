import os
import re
import glob

base = r'c:\Users\khali\OneDrive\Bureau\my-website-main'
articles = glob.glob(os.path.join(base, 'blog', '*.md'))

# 1. Extract all valid slugs
valid_slugs = set()
for art in articles:
    with open(art, 'r', encoding='utf-8') as f:
        content = f.read()
        match = re.search(r'slug:\s*([^\s\n\r]+)', content)
        if match:
            valid_slugs.add(match.group(1).strip())

# Add some known standard pages if needed (like /contact, /about etc)
valid_slugs.add('contact')
valid_slugs.add('privacy')
valid_slugs.add('subscribe')

# 2. Check all links in all articles
for art in articles:
    with open(art, 'r', encoding='utf-8') as f:
        content = f.read()
        # Find all /blog/... references
        links = re.findall(r'\[.*?\]\(/blog/([^\s\)\#]+)\)', content)
        for link in links:
            if link not in valid_slugs:
                rel_path = os.path.relpath(art, base)
                print(f"Broken internal link: /blog/{link} in {rel_path}")
