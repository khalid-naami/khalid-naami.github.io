import os
f = 'blog/2026-04-16-trading-spy-options-how-we-trade-gex-like-dealers.md'
if os.path.exists(f):
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    content = content.replace('\\"', '"')
    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
    print("Fixed escaped quotes in SPY blog.")
