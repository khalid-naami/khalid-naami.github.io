const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

// Configuration
const SITE_URL = 'https://khalidnaami.com';
const BLOG_DIR = path.join(process.cwd(), 'blog');
const STATIC_OUTPUT = path.join(process.cwd(), 'static', 'yandex-news-turbo.xml');
const BUILD_OUTPUT = path.join(process.cwd(), 'build', 'yandex-news-turbo.xml');

// Helper to escape XML special characters
function escapeXml(unsafe) {
    if (!unsafe) return '';
    return unsafe.replace(/[<>&"']/g, function (m) {
        switch (m) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '"': return '&quot;';
            case "'": return '&apos;';
            default: return m;
        }
    });
}

function generateRss() {
    console.log('Generating Yandex Turbo News RSS...');
    
    if (!fs.existsSync(BLOG_DIR)) {
        console.error(`Blog directory not found at: ${BLOG_DIR}`);
        return;
    }

    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    let itemsXml = '';

    files.forEach(file => {
        const fullPath = path.join(BLOG_DIR, file);
        const rawContent = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(rawContent);

        if (!data.title || !data.slug) return;

        const url = `${SITE_URL}/blog/${data.slug}`;
        
        // Extract publishing date from filename (YYYY-MM-DD) or fallback to frontmatter/now
        let date = new Date().toUTCString();
        const dateMatch = file.match(/^(\d{4}-\d{2}-\d{2})/);
        if (dateMatch) {
            date = new Date(dateMatch[1]).toUTCString();
        } else if (data.date) {
            date = new Date(data.date).toUTCString();
        }
        
        // Clean markdown specific tags and equations before HTML conversion
        let cleanedMarkdown = content
            .replace(/:::[\s\S]*?\n/g, '')
            .replace(/:::/g, '')
            .replace(/\$\$[\s\S]*?\$\$/g, '')
            .replace(/\$[\s\S]*?\$/g, '');

        // Convert Markdown to HTML
        let htmlContent = marked.parse(cleanedMarkdown);
        
        // Make image URLs absolute
        htmlContent = htmlContent.replace(/src="\/img\//g, `src="${SITE_URL}/img/`);
        
        // Escape CDATA closing sequence to prevent premature closure
        htmlContent = htmlContent.replace(/]]>/g, ']]&gt;');

        // Strip HTML tags for clean untruncated yandex:full-text (plain text only)
        let cleanText = htmlContent
            .replace(/<[^>]*>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

        // Determine the primary category (the first tag)
        let primaryCategory = 'Financial Intelligence';
        if (data.tags && Array.isArray(data.tags) && data.tags.length > 0) {
            primaryCategory = data.tags[0];
        } else if (data.tags && typeof data.tags === 'string') {
            primaryCategory = data.tags.split(',')[0].replace(/[\[\]'"]/g, '').trim();
        }

        const cleanTitle = escapeXml(data.title).substring(0, 240);
        const cleanUrl = url.substring(0, 243);

        const itemXml = `
        <item turbo="true">
            <link>${cleanUrl}</link>
            <title>${cleanTitle}</title>
            <author>${escapeXml(data.authors ? String(data.authors).replace(/[\[\]'"]/g, '') : 'Khalid Naami')}</author>
            <category>${escapeXml(primaryCategory)}</category>
            <pubDate>${date}</pubDate>
            <description>${escapeXml(data.description || data.title).substring(0, 500)}</description>
            <yandex:genre>article</yandex:genre>
            <yandex:full-text>${escapeXml(cleanText)}</yandex:full-text>
            <turbo:content>
                <![CDATA[
                    <header>
                        <h1>${cleanTitle}</h1>
                        ${data.image ? `<figure><img src="${SITE_URL}${data.image.startsWith('/') ? '' : '/'}${data.image}" /></figure>` : ''}
                    </header>
                    ${htmlContent}
                ]]>
            </turbo:content>
        </item>`;
        
        itemsXml += itemXml;
    });

    const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:yandex="http://news.yandex.ru" 
     xmlns:media="http://search.yahoo.com/mrss/" 
     xmlns:turbo="http://turbo.yandex.ru" 
     version="2.0"
     xml:lang="en">
    <channel>
        <title>Khalid Naami - Strategic Analysis &amp; Financial Intelligence</title>
        <link>${SITE_URL}</link>
        <description>${escapeXml('Professional insights into Science & Technology, Dashboard Options, Daily Analysis, Global Economy, and Political Economy by Khalid Naami.')}</description>
        <language>en</language>
        ${itemsXml}
    </channel>
</rss>`;

    // Save to static folder (source control)
    fs.writeFileSync(STATIC_OUTPUT, rssXml);
    console.log(`Success! Saved to static: ${STATIC_OUTPUT}`);

    // Save directly to build folder if it exists (live deployment)
    if (fs.existsSync(path.dirname(BUILD_OUTPUT))) {
        fs.writeFileSync(BUILD_OUTPUT, rssXml);
        console.log(`Success! Saved directly to build: ${BUILD_OUTPUT}`);
    }
}

generateRss();
