const fs = require('fs');
const html = fs.readFileSync('build/index.html', 'utf8');
const imgRegex = /<img\s+[^>]*>/gi;
const imgs = html.match(imgRegex) || [];

const badImgs = imgs.filter(tag => {
  const altMatch = tag.match(/alt\s*=\s*(["'])(.*?)\1/i);
  if (!altMatch) return true; // no alt attr
  if (altMatch[2] === '') return true; // empty alt attr
  return false;
});

console.log('Total img tags:', imgs.length);
console.log('Bad img tags:', badImgs);
