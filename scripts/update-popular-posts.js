const fs = require('fs');
const path = require('path');

const csvFilePath = path.join(__dirname, '..', 'views.csv');
const graphDataPath = path.join(__dirname, '..', 'static', 'graph-data.json');

async function updatePopularPostsFromCSV() {
  console.log('Reading views from views.csv...');
  
  if (!fs.existsSync(csvFilePath)) {
    console.log('No views.csv found. Skipping popular posts update.');
    console.log('To update popular posts, download the CSV from Google Analytics and save it as views.csv in the project root.');
    return;
  }

  try {
    const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
    const lines = csvContent.split('\n');
    
    const viewsMap = {};

    // Skip the first line (header)
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      // Split by comma. GA4 CSV usually has: "Page path","Views" or similar
      // We will remove quotes and split
      const parts = line.replace(/"/g, '').split(',');
      if (parts.length >= 2) {
        let pagePath = parts[0].trim();
        // Sometimes views are in the second or third column depending on the export
        // We will look for the first number we can find after the path
        let views = 0;
        for (let j = 1; j < parts.length; j++) {
          const parsed = parseInt(parts[j].replace(/,/g, ''), 10); // remove commas from numbers like 1,000
          if (!isNaN(parsed)) {
            views = parsed;
            break;
          }
        }

        if (pagePath.endsWith('/')) {
          pagePath = pagePath.slice(0, -1);
        }
        
        viewsMap[pagePath] = views;
      }
    }

    // Read existing graph-data.json
    const graphDataRaw = fs.readFileSync(graphDataPath, 'utf-8');
    const graphData = JSON.parse(graphDataRaw);

    // Sort the items based on views
    graphData.items.sort((a, b) => {
      const viewsA = viewsMap[a.id] || viewsMap[a.url] || 0;
      const viewsB = viewsMap[b.id] || viewsMap[b.url] || 0;
      return viewsB - viewsA; // Descending order
    });

    // Write back to graph-data.json
    fs.writeFileSync(graphDataPath, JSON.stringify(graphData, null, 2));
    console.log('Successfully updated static/graph-data.json using views.csv!');
    
  } catch (err) {
    console.error('Error processing views.csv:', err);
  }
}

updatePopularPostsFromCSV();
