const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'blog');
const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'));

for (const file of files) {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Check if tags already exist and if 'Dashboard Options' is already there
  const tagRegex = /tags: \[(.*?)\]/;
  const match = content.match(tagRegex);

  if (match) {
    const existingTags = match[1].split(',').map(t => t.trim().replace(/['"]/g, ''));
    if (!existingTags.includes('Dashboard Options')) {
      // Add 'Dashboard Options' to the start
      const newTags = ['Dashboard Options', ...existingTags];
      const newTagsString = `tags: [${newTags.join(', ')}]`;
      content = content.replace(tagRegex, newTagsString);
      fs.writeFileSync(filePath, content);
      console.log(`Updated tags for ${file}`);
    } else {
      console.log(`'Dashboard Options' already exists in ${file}`);
    }
  } else {
    // If no tags found, we might need to add it differently, but looking at previous view, they have it.
    console.log(`No tags found in ${file}`);
  }
}
