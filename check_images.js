const fs = require('fs');
const https = require('https');

const menu = JSON.parse(fs.readFileSync('src/data/menu.json', 'utf8'));

async function checkUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => resolve(0));
  });
}

async function run() {
  for (const item of menu) {
    if (item.image) {
      const status = await checkUrl(item.image);
      if (status !== 200 && status !== 302 && status !== 301) {
        console.log(`Broken (${status}): ${item.name} - ${item.image}`);
      }
    }
  }
  console.log("Done checking images");
}

run();
