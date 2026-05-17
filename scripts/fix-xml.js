const fs = require('fs');
const path = require('path');

console.log('🔧 Starting XML Fixer Script...');

// Files to check and fix
const filesToFix = [
  path.join(__dirname, '..', 'build', 'blog', 'atom.xml'),
  path.join(__dirname, '..', 'build', 'blog', 'rss.xml')
];

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace unescaped & with &amp;
    // We use a regex that matches & only if it's NOT followed by standard valid entity names
    // e.g. amp;, lt;, gt;, quot;, apos; or numeric entities like #123;
    const initialLength = content.length;
    content = content.replace(/&(?!amp;|lt;|gt;|quot;|apos;|#\d+;|#x[0-9a-fA-F]+;)/g, '&amp;');
    
    if (content.length !== initialLength) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed unescaped ampersands in: ${path.basename(filePath)}`);
    } else {
      console.log(`✔️ No fixes needed for: ${path.basename(filePath)}`);
    }
  } else {
    console.log(`⚠️ File not found, skipping: ${path.basename(filePath)}`);
  }
});

console.log('🏁 XML Fixer Script completed.');
