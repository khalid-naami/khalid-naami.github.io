import os
import shutil
from PIL import Image

target_dir = 'static/img'
source_dir = 'build/img'
target_width, target_height = 1200, 674

# Images to restore or rename to v2 standard
required = [
    '3d-v2.webp',
    'Fair Bet and Kelly.webp',
    'Scala.webp',
    'VaR-Beta-Sharpe-Sortino.webp',
    'butterfly_spread.webp',
    'c++.webp',
    'calendar_spread.webp',
    'cash_secured_put.webp',
    'charm-v2.webp',
    'charm-vanna-v2.webp',
    'collar.webp',
    'covered_call.webp',
    'dashboard-1-v2.webp',
    'dashboard-2-v2.webp',
    'dashboard-3-v2.webp',
    'data-science-R.webp',
    'delta-v2.webp',
    'html-css.webp',
    'implied-prob-1-v2.webp',
    'implied-prob-2-v2.webp',
    'implied-prob-3-v2.webp',
    'iron_butterfly.webp',
    'iron_condor.webp',
    'iv-surface-v2.webp',
    'javas.webp',
    'julia.webp',
    'max-pain-v2.webp',
    'multi-ticker-v2.webp',
    'negative-gamma-v2.webp',
    'option-dealers-v2.webp',
    'options-color-v2.webp',
    'pmcc.webp',
    'positive-gamma-v2.webp',
    'probability.webp',
    'python.webp',
    'react-js.webp',
    'speed-v2.webp',
    'spy-v2.webp',
    'straddle_strangle.webp',
    'trade-gamma-v2.webp',
    'using-gamma-v2.webp',
    'vanna-v2.webp',
    'vertical_spreads.webp',
    'volatility.webp',
    'vomma-v2.webp',
    'why-gamma-exposure-v2.webp',
    'zero-dte-gex-v2.webp',
    'zero-gex-v2.webp'
]

# Mapping to possible sources in build/img or current static/img
possible_sources = {
    'dashboard-1-v2.webp': ['static/img/main-dashboard-v2.webp', 'build/img/dashboard.webp'],
    'dashboard-2-v2.webp': ['build/img/2.png', 'build/img/2.webp'],
    'dashboard-3-v2.webp': ['build/img/3.png', 'build/img/3.webp'],
    'multi-ticker-v2.webp': ['static/img/ticker-comparison-v2.webp', 'build/img/multi ticker.webp'],
    'Fair Bet and Kelly.webp': ['build/img/Fair Bet and Kelly.webp'],
    # Add more if needed
}

def premium_process(src, dst):
    if not os.path.exists(src):
        return False
    try:
        with Image.open(src) as img:
            img.thumbnail((target_width, target_height), Image.Resampling.LANCZOS)
            new_img = Image.new('RGB', (target_width, target_height), (13, 17, 23))
            offset = ((target_width - img.width) // 2, (target_height - img.height) // 2)
            new_img.paste(img, offset)
            new_img.save(dst, 'webp', quality=100, method=6)
            print(f"Restored/Processed: {dst} from {src}")
            return True
    except Exception as e:
        print(f"Error processing {src}: {e}")
        return False

for img_name in required:
    dst_path = os.path.join(target_dir, img_name)
    if os.path.exists(dst_path):
        continue
    
    # Try mapping
    found = False
    if img_name in possible_sources:
        for src in possible_sources[img_name]:
            if premium_process(src, dst_path):
                found = True
                break
    
    # Try direct name in build
    if not found:
        # Some are just without v2 suffix in build
        base_name = img_name.replace('-v2.webp', '.webp')
        src_options = [
            os.path.join(source_dir, img_name),
            os.path.join(source_dir, base_name),
            os.path.join(source_dir, base_name.replace('.webp', '.png'))
        ]
        for src in src_options:
            if premium_process(src, dst_path):
                found = True
                break
    
    if not found:
        print(f"STILL MISSING: {img_name}")
