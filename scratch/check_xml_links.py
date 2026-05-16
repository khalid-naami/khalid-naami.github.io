import os
import re
import glob

base = r'c:\Users\khali\OneDrive\Bureau\my-website-main'
xml_path = os.path.join(base, 'static', 'yandex-news-turbo.xml')

# 1. Extract all valid slugs
articles = glob.glob(os.path.join(base, 'blog', '*.md'))
valid_slugs = set()
for art in articles:
    with open(art, 'r', encoding='utf-8') as f:
        content = f.read()
        match = re.search(r'slug:\s*([^\s\n\r]+)', content)
        if match:
            valid_slugs.add(match.group(1).strip())

# 2. Check links in XML
if os.path.exists(xml_path):
    with open(xml_path, 'r', encoding='utf-8') as f:
        content = f.read()
        links = re.findall(r'https:\/\/khalidnaami\.com\/blog\/([^\s\<\>\"]+)', content)
        for link in links:
            if link not in valid_slugs:
                print(f"Broken link in XML: /blog/{link}")
else:
    print("XML not found")
