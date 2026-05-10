const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const HOST = "khalidnaami.com";
const KEY = "a31a32eb95c34faba5e1d89d75bdc5a4";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '../build/sitemap.xml');

function getUrlsFromSitemap() {
  try {
    if (!fs.existsSync(SITEMAP_PATH)) {
      console.warn(`⚠️ Sitemap not found. Using default homepage.`);
      return ["https://khalidnaami.com/"];
    }
    const content = fs.readFileSync(SITEMAP_PATH, 'utf8');
    const urlMatches = content.match(/<loc>(.*?)<\/loc>/g);
    return urlMatches ? urlMatches.map(match => match.replace(/<\/?loc>/g, '')) : ["https://khalidnaami.com/"];
  } catch (error) {
    return ["https://khalidnaami.com/"];
  }
}

const urls = getUrlsFromSitemap();
const data = JSON.stringify({
  host: HOST,
  key: KEY,
  keyLocation: KEY_LOCATION,
  urlList: urls
});

const endpoints = [
  { name: 'Bing', host: 'api.indexnow.org' },
  { name: 'Yandex', host: 'yandex.com' },
  { name: 'Seznam', host: 'search.seznam.cz' },
  { name: 'Naver', host: 'searchadvisor.naver.com' },
  { name: 'Yep', host: 'indexnow.yep.com' }
];

async function notifyEngine(endpoint) {
  return new Promise((resolve) => {
    const options = {
      hostname: endpoint.host,
      port: 443,
      path: '/indexnow',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Length': Buffer.byteLength(data)
      }
    };

    console.log(`📡 Sending update to ${endpoint.name}...`);

    const req = https.request(options, (res) => {
      res.on('data', () => {});
      res.on('end', () => {
        if (res.statusCode === 200 || res.statusCode === 202) {
          console.log(`✅ ${endpoint.name} notified successfully.`);
        } else {
          console.warn(`⚠️ ${endpoint.name} returned status ${res.statusCode}.`);
        }
        resolve();
      });
    });

    req.on('error', (err) => {
      console.error(`❌ Error notifying ${endpoint.name}: ${err.message}`);
      resolve();
    });

    req.write(data);
    req.end();
  });
}

async function run() {
  for (const endpoint of endpoints) {
    await notifyEngine(endpoint);
  }
  console.log('🏁 Indexing process completed.');
}

run().catch(console.error);
