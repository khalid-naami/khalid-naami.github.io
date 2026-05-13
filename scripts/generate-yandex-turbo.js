const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const matter = require('gray-matter');

// Configuration
const SITE_URL = 'https://khalidnaami.com';
const BLOG_DIR = path.join(process.cwd(), 'blog');
const OUTPUT_FILE = path.join(process.cwd(), 'static', 'yandex-news-turbo.xml');

function generateRss() {
    console.log('Generating Yandex Turbo News RSS...');
    
    const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith('.md'));
    let itemsXml = '';

    files.forEach(file => {
        const fullPath = path.join(BLOG_DIR, file);
        const rawContent = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(rawContent);

        if (!data.title || !data.slug) return;

        const url = `${SITE_URL}/blog/${data.slug}`;
        const date = data.date ? new Date(data.date).toUTCString() : new Date().toUTCString();
        
        // Convert Markdown to HTML
        let htmlContent = marked.parse(content);
        
        // Make image URLs absolute
        htmlContent = htmlContent.replace(/src="\/img\//g, `src="${SITE_URL}/img/`);
        
        // Clean Docusaurus specific tags (like :::tip)
        htmlContent = htmlContent.replace(/:::[\s\S]+?\n/g, '');

        // Determine the primary category (the first tag)
        let primaryCategory = 'Financial Intelligence';
        if (data.tags && Array.isArray(data.tags) && data.tags.length > 0) {
            primaryCategory = data.tags[0];
        } else if (data.tags && typeof data.tags === 'string') {
            primaryCategory = data.tags.split(',')[0].replace(/[\[\]'"]/g, '').trim();
        }

        const itemXml = `
        <item turbo="true">
            <link>${url}</link>
            <title>${data.title}</title>
            <author>${data.authors ? String(data.authors).replace(/[\[\]'"]/g, '') : 'Khalid Naami'}</author>
            <category>${primaryCategory}</category>
            <pubDate>${date}</pubDate>
            <yandex:genre>article</yandex:genre>
            <turbo:content>
                <![CDATA[
                    <header>
                        <h1>${data.title}</h1>
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
     version="2.0">
    <channel>
        <title>Khalid Naami - Strategic Analysis &amp; Financial Intelligence</title>
        <link>${SITE_URL}</link>
        <description>Professional insights into Science &amp; Technology, Dashboard Options, Daily Analysis, Global Economy, and Political Economy by Khalid Naami.</description>
        <language>en</language>
        ${itemsXml}
    </channel>
</rss>`;

    fs.writeFileSync(OUTPUT_FILE, rssXml);
    console.log(`Success! RSS saved to: ${OUTPUT_FILE}`);
}

generateRss();
