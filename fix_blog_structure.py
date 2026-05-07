import os
import re

blog_dir = r'c:\Users\khali\OneDrive\Bureau\my-website-main\blog'
files = [f for f in os.listdir(blog_dir) if f.endswith('.md')]

for f in files:
    path = os.path.join(blog_dir, f)
    with open(path, 'r', encoding='utf-8') as file:
        lines = file.readlines()
    
    content = "".join(lines)
    fm_match = re.search(r'---\s*(.*?)\s*---', content, re.DOTALL)
    if not fm_match:
        continue
    
    fm_start = 0
    fm_end = content.find('---', 3) + 3
    fm_content = content[0:fm_end]
    body_content = content[fm_end:]
    
    # Extract Title
    title_match = re.search(r'title: ["\']?(.*?)["\']?\n', fm_content)
    title = title_match.group(1) if title_match else ""
    
    # 1. Align H1 with Title
    # Look for H1 in body
    h1_pattern = re.compile(r'^# .*', re.MULTILINE)
    if h1_pattern.search(body_content):
        body_content = h1_pattern.sub(f"# {title}", body_content, count=1)
    else:
        # If no H1, prepend it
        body_content = f"\n# {title}\n" + body_content
    
    # 2. Add Slug if missing
    if 'slug:' not in fm_content:
        # Generate slug from filename
        slug_val = f.split('.md')[0]
        # remove date prefix if exists (YYYY-MM-DD-)
        slug_val = re.sub(r'^\d{4}-\d{2}-\d{2}-', '', slug_val)
        fm_content = fm_content.replace('---\n', f'---\nslug: {slug_val}\n', 1)
    
    # 3. Add Keywords if missing (copy from tags)
    if 'keywords:' not in fm_content:
        tags_match = re.search(r'tags: \[(.*?)\]', fm_content)
        if tags_match:
            tags = tags_match.group(1)
            fm_content = fm_content.replace('tags:', f'keywords: [{tags}]\ntags:', 1)
    
    # 4. Ensure truncate
    if '<!-- truncate -->' not in body_content:
        # Find first paragraph after H1
        # Skip H1 and empty lines
        parts = body_content.split('\n')
        for i, line in enumerate(parts):
            if line.startswith('#'): continue
            if not line.strip(): continue
            # Insert truncate after this line
            parts.insert(i+1, '\n<!-- truncate -->\n')
            break
        body_content = '\n'.join(parts)
    
    # Write back
    new_content = fm_content + body_content
    with open(path, 'w', encoding='utf-8') as file:
        file.write(new_content)

print("Structural corrections completed.")
