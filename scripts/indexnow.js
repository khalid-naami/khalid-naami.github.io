const https = require('https');
const fs = require('fs');
const path = require('path');

// Configuration
const HOST = "khalidnaami.com";
const KEY = "a31a32eb95c34faba5e1d89d75bdc5a4";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_PATH = path.join(__dirname, '../build/sitemap.xml');

/**
 * Extracts URLs from sitemap.xml
 */
function getUrlsFromSitemap() {
  try {
    if (!fs.existsSync(SITEMAP_PATH)) {
      console.warn(`Sitemap not found at ${SITEMAP_PATH}. Make sure to run 'npm run build' first.`);
      return ["https://khalidnaami.com/"];
    }

    const content = fs.readFileSync(SITEMAP_PATH, 'utf8');
    const urlMatches = content.match(/<loc>(.*?)<\/loc>/g);
    
    if (!urlMatches) return ["https://khalidnaami.com/"];

    return urlMatches.map(match => match.replace(/<\/?loc>/g, ''));
  } catch (error) {
    console.error('Error reading sitemap:', error);
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

const options = {
  hostname: 'api.indexnow.org',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': Buffer.byteLength(data)
  }
};

console.log(`Sending IndexNow update to Bing with ${urls.length} URLs...`);

const req = https.request(options, (res) => {
  let responseData = '';
  res.on('data', (chunk) => { responseData += chunk; });
  
  res.on('end', () => {
    console.log(`Status Code: ${res.statusCode}`);
    if (res.statusCode === 200) {
      console.log('✅ Success! Bing/IndexNow has been notified of all your site updates.');
    } else {
      console.error('❌ IndexNow request failed.');
      console.error('Response:', responseData);
    }
  });
});

req.on('error', (error) => {
  console.error('Error sending IndexNow request:', error);
});

req.write(data);
req.end();
