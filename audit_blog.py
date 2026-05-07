import os
import re

blog_dir = r'c:\Users\khali\OneDrive\Bureau\my-website-main\blog'
files = [f for f in os.listdir(blog_dir) if f.endswith('.md')]

for f in files:
    path = os.path.join(blog_dir, f)
    with open(path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    fm_match = re.search(r'---\s*(.*?)\s*---', content, re.DOTALL)
    if not fm_match:
        continue
    
    fm = fm_match.group(1)
    title_match = re.search(r'title: ["\']?(.*?)["\']?\n', fm)
    title = title_match.group(1) if title_match else ""
    
    h1_match = re.search(r'^# (.*)', content, re.MULTILINE)
    h1 = h1_match.group(1) if h1_match else None
    
    trunc = '<!-- truncate -->' in content
    slug = 'slug:' in fm
    keywords = 'keywords:' in fm
    
    desc_match = re.search(r'description: ["\']?(.*?)["\']?\n', fm)
    desc = desc_match.group(1) if desc_match else ""
    is_q = '?' in desc
    
    desc_len = len(desc)
    title_len = len(title)
    
    issues = []
    if not h1: issues.append("Missing H1")
    elif h1.strip() != title.strip(): issues.append(f"Title/H1 mismatch: '{title}' vs '{h1}'")
    
    if title_len > 70: issues.append(f"Title too long: {title_len} chars")
    if desc_len > 70: issues.append(f"Description too long: {desc_len} chars")
    
    if not trunc: issues.append("Missing <!-- truncate -->")
    if not slug: issues.append("Missing slug")
    if not keywords: issues.append("Missing keywords")
    if not is_q: issues.append("Description is not a question")
    
    if issues:
        print(f"File: {f}")
        for issue in issues:
            print(f"  - {issue}")
