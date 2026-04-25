const https = require('https');

const data = JSON.stringify({
  host: "khalidnaami.com",
  key: "f1e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1",
  keyLocation: "https://khalidnaami.com/f1e7d8c9b0a1f2e3d4c5b6a7f8e9d0c1.txt",
  urlList: [
    "https://khalidnaami.com/",
    "https://khalidnaami.com/blog",
    "https://khalidnaami.com/intelligence"
  ]
});

const options = {
  hostname: 'www.bing.com',
  port: 443,
  path: '/indexnow',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Content-Length': data.length
  }
};

console.log('Sending IndexNow update to Bing...');

const req = https.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  res.on('data', (d) => {
    process.stdout.write(d);
  });

  if (res.statusCode === 200) {
    console.log('Success! Bing has been notified of your site updates.');
  } else {
    console.log('IndexNow request failed. Check your key and host configuration.');
  }
});

req.on('error', (error) => {
  console.error('Error sending IndexNow request:', error);
});

req.write(data);
req.end();
