const { BetaAnalyticsDataClient } = require('@google-analytics/data');
const fs = require('fs');
const path = require('path');

const propertyId = '534513191';
const keyFilePath = path.join(__dirname, '..', 'analytics-key.json');
const graphDataPath = path.join(__dirname, '..', 'static', 'graph-data.json');

async function updatePopularPosts() {
  console.log('Fetching top articles from Google Analytics 4...');
  
  if (!fs.existsSync(keyFilePath)) {
    console.error('Error: analytics-key.json not found! Cannot update popular posts.');
    return;
  }

  // Set the environment variable for authentication
  process.env.GOOGLE_APPLICATION_CREDENTIALS = keyFilePath;

  const analyticsDataClient = new BetaAnalyticsDataClient();

  try {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: '90daysAgo',
          endDate: 'today',
        },
      ],
      dimensions: [
        {
          name: 'pagePath',
        },
      ],
      metrics: [
        {
          name: 'screenPageViews',
        },
      ],
      orderBys: [
        {
          desc: true,
          metric: {
            metricName: 'screenPageViews',
          },
        },
      ],
      limit: 100,
    });

    console.log('Successfully fetched data from GA4.');

    // Create a map of URL -> Views
    const viewsMap = {};
    response.rows.forEach(row => {
      let pagePath = row.dimensionValues[0].value;
      const views = parseInt(row.metricValues[0].value, 10);
      
      // Clean the path (remove trailing slash if any, to match graph-data.json formats)
      if (pagePath.endsWith('/')) {
        pagePath = pagePath.slice(0, -1);
      }
      
      viewsMap[pagePath] = views;
    });

    // Read existing graph-data.json
    const graphDataRaw = fs.readFileSync(graphDataPath, 'utf-8');
    const graphData = JSON.parse(graphDataRaw);

    // Sort the items based on views
    graphData.items.sort((a, b) => {
      const viewsA = viewsMap[a.id] || 0;
      const viewsB = viewsMap[b.id] || 0;
      return viewsB - viewsA; // Descending order
    });

    // Write back to graph-data.json
    fs.writeFileSync(graphDataPath, JSON.stringify(graphData, null, 2));
    console.log('Successfully updated static/graph-data.json with the most popular posts!');
    
  } catch (err) {
    console.error('Error fetching analytics data:', err);
  }
}

updatePopularPosts();
