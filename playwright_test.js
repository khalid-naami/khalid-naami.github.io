const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => {
    if (msg.type() === 'error' || msg.type() === 'warning') {
        console.log(`[${msg.type()}] ${msg.text()}`);
    }
  });
  
  page.on('pageerror', err => {
    console.log(`[pageerror] ${err.message}`);
  });

  await page.goto('https://khalid-naami.github.io/intelligence/', { waitUntil: 'networkidle' });
  
  // Wait a bit to ensure React finishes hydrating and tries to load chunks
  await page.waitForTimeout(3000);
  
  console.log("Done checking.");
  await browser.close();
})();
