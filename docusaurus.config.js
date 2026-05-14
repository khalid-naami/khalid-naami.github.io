// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('node:path');
const fs = require('node:fs');

/** @type {() => Promise<import('@docusaurus/types').Config>} */
module.exports = async function createConfig() {
  const remarkMath = (await import('remark-math')).default;
  const rehypeKatex = (await import('rehype-katex')).default;

  return {
    title: 'Khalid Naami',
    tagline: 'Founder & CEO @ Dashboard Options | Quantitative Trading, Financial AI & Data Science.',
    favicon: 'img/favicon.ico',

  url: 'https://khalidnaami.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'khalid-naami', // Usually your GitHub org/user name.
  projectName: 'khalid-naami.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'ignore',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [

    {
      tagName: 'meta',
      attributes: {
        name: 'yandex-verification',
        content: '655a0e854986edb9',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'naver-site-verification',
        content: '66dc9fe4eddd309ec33ad537910bf29a9aa2006a',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'p:domain_verify',
        content: '33c4cc2ec67406a6a4230356a00a899c',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'msvalidate.01',
        content: '52564F0E983482BEAD88210B466B2A18',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": "https://khalidnaami.com/#person",
            "name": "Khalid Naami",
            "url": "https://khalidnaami.com",
            "image": {
              "@type": "ImageObject",
              "@id": "https://khalidnaami.com/#personImage",
              "url": "https://khalidnaami.com/img/khalid_profile.webp",
              "contentUrl": "https://khalidnaami.com/img/khalid_profile.webp",
              "caption": "Khalid Naami"
            },
            "jobTitle": "Founder & CEO at Dashboard Options",
            "description": "Founder, Owner, & CEO at Dashboard Options. Khalid Naami is a professional academic writer, strategic analyst, and investigative researcher specializing in Geopolitics and Global Macroeconomics using OSINT. Expert in Quantitative Finance and Financial AI systems.",
            "knowsLanguage": [
              { "@type": "Language", "name": "Arabic" },
              { "@type": "Language", "name": "English" },
              { "@type": "Language", "name": "French" }
            ],
            "gender": "Male",
            "nationality": {
              "@type": "Country",
              "name": "Morocco"
            },
            "sameAs": [
              "https://github.com/khalid-naami",
              "https://www.linkedin.com/in/khalid-naami-a953263bb/",
              "https://x.com/khalidnaami0",
              "https://substack.com/@khnaami",
              "https://share.streamlit.io/user/khalidnaami3-wq",
              "https://cal.com/khnaami",
              "https://www.youtube.com/@DashboardOptions"
            ]
          },
          {
            "@type": "Organization",
            "@id": "https://khalidnaami.com/#organization",
            "name": "Dashboard Options",
            "url": "https://khalidnaami.com",
            "logo": {
              "@type": "ImageObject",
              "@id": "https://khalidnaami.com/#logo",
              "url": "https://khalidnaami.com/img/zoro-internal.webp",
              "contentUrl": "https://khalidnaami.com/img/zoro-internal.webp",
              "caption": "Dashboard Options"
            },
            "alternateName": "DashboardOptions.com",
            "description": "Dashboard Options is a specialized quantitative research platform founded by Khalid Naami for analyzing live options data and market micro-structure.",
            "founder": { "@id": "https://khalidnaami.com/#person" },
            "foundingDate": "2024-01-01",
            "sameAs": [
              "https://x.com/DashboardOption",
              "https://www.linkedin.com/company/dashboard-options/",
              "https://www.youtube.com/@DashboardOptions"
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://khalidnaami.com/#website",
            "url": "https://khalidnaami.com",
            "name": "Khalid Naami - Financial Intelligence Platform",
            "publisher": { "@id": "https://khalidnaami.com/#organization" },
            "inLanguage": "en-US"
          }
        ]
      }),
    },
    {
      tagName: 'link',
      attributes: {

        rel: 'dns-prefetch',
        href: 'https://cdn.jsdelivr.net',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'google-site-verification',
        content: 'sQeDE0mYzpbw__O7s2zcGpaRT1EciCRo73eaHX-KO6E',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          path: 'content',
          routeBasePath: '/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/khalid-naami/khalid-naami.github.io/tree/main/',
        },
        blog: {
          path: 'blog',
          routeBasePath: 'blog',
          blogTitle: 'Blog',
          blogDescription:
            'In-depth articles on Options Greeks, Gamma Exposure strategies, Geopolitics, Global Macro analysis, and Quantitative Finance research.',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
          showReadingTime: true,
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/khalid-naami/khalid-naami.github.io/tree/main/',
          feedOptions: {
            type: 'all',
            limit: 2000,
            copyright: `Copyright © ${new Date().getFullYear()} Khalid Naami.`,
          },
        },
        theme: {
          customCss: ['./src/css/custom.css'],
        },
        gtag: {
          trackingID: 'G-N31CFZW849',
          anonymizeIP: true,
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'daily',
          priority: 1.0,
          ignorePatterns: [
            '/tags/**', 
            '/search', 
            '/markdown-page', 
            '/pokemon-tcg-wanted',
            '/design-system',
            '/newsletter',
            '/subscribe'
          ],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {name: 'keywords', content: 'Khalid Naami, Dashboard Options, Options Greeks, Options Trading, Global Macro, Geopolitics, OSINT, Financial Intelligence, Quantitative Analysis, Finance AI, Intermarket Analysis, Market Microstructure, Options Data, Trading Strategy, Academic Writer, Investigative Research'},
        {name: 'description', content: 'Khalid Naami: Founder & CEO at Dashboard Options. Academic writer and investigative researcher in Geopolitics, Global Macro, and Financial Intelligence.'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'Khalid Naami - Financial Intelligence'},
        {property: 'og:image:type', content: 'image/webp'},
        {property: 'og:image:alt', content: 'Khalid Naami - Financial Intelligence & Options Greeks Analysis'},
      ],
      // Replace with your project's social card
      image: 'img/zoro-media.webp',
      navbar: {
        title: 'Khalid Naami',
        logo: {
          alt: 'Zoro Logo - Symbolizing strength and mastery built through disciplined study and consistent hard work.',
          src: '/img/zoro-internal.webp',
          width: 32,
          height: 32,
          href: '/',
          target: '_self',
        },
        items: [
          {
            type: 'html',
            position: 'left',
            value: '<div class="navbar__items--left-wrapper">',
          },
          {
            position: 'left',
            label: 'Books',
            to: '/books/to-read',
          },
          {
            position: 'left',
            label: 'Media',
            to: '/media/interviews',
          },
          {
            position: 'left',
            label: 'Resume',
            to: '/resume/experience',
          },
          {
            type: 'html',
            position: 'left',
            value: '</div>',
          },
          {
            position: 'left',
            label: 'Blog',
            to: '/blog',
            className: 'navbar__center-item',
          },
          {
            position: 'right',
            label: 'Intelligence',
            to: '/intelligence',
          },
          {
            position: 'right',
            label: 'Chat',
            to: '/chat',
          },
          {
            position: 'right',
            label: 'Newsletter',
            href: 'https://substack.com/@khnaami',
            className: 'navbar-item-external navbar-newsletter-link',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: 'CTGM87XQE8',
        apiKey: '2b554638ed8ab85e38243a8386111965',
        indexName: 'khalidnaami',
        contextualSearch: true,
        searchParameters: {},
        searchPagePath: 'search',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community & Social',
            items: [
              {
                label: 'Personal X',
                href: 'https://x.com/khalidnaami0',
              },
              {
                label: 'Dashboard Options X',
                href: 'https://x.com/DashboardOption',
              },
              {
                label: 'Personal LinkedIn',
                href: 'https://www.linkedin.com/in/khalid-naami-a953263bb/',
              },
              {
                label: 'Dashboard Options LinkedIn',
                href: 'https://www.linkedin.com/company/dashboard-options/',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@DashboardOptions',
              },
            ],
          },
          {
            title: 'Explore',
            items: [
              {
                label: 'Blog Tags',
                to: '/blog/tags',
              },
              {
                label: 'Blog Authors',
                to: '/blog/authors',
              },
              {
                label: 'Game',
                to: '/game',
              },
              {
                label: 'Newsletter',
                href: 'https://substack.com/@khnaami',
              },
              {
                label: 'Subscribe',
                href: 'https://substack.com/@khnaami',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Privacy Policy',
                to: '/privacy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Khalid Naami | Founder & CEO @ Dashboard Options. Built with Financial Intelligence.`,
      },
    }),

  clientModules: [require.resolve('./src/js/navbar-active-links.js')],

  plugins: [
    async function blogLlmsPlugin(context) {
      return {
        name: 'blog-llms-plugin',
        loadContent: async () => {
          const { siteDir } = context;
          const blogDir = path.join(siteDir, 'blog');
          /** @type {any[]} */
          const blogContent = [];

          /**
           * Helper to extract frontmatter values via simple regex
           * @param {string} content
           * @param {string} key
           */
          const getFrontmatterValue = (content, key) => {
            const regex = new RegExp(`^${key}:\\s*(.*)$`, 'm');
            const match = content.match(regex);
            if (!match) return null;
            let val = match[1].trim();
            // Remove quotes if present
            return val.replace(/^["'](.*)["']$/, '$1');
          };

          // recursive function to get all blog files
          /** @param {string} dir */
          const getBlogFiles = async (dir) => {
            const entries = await fs.promises.readdir(dir, {
              withFileTypes: true,
            });

            for (const entry of entries) {
              const fullPath = path.join(dir, entry.name);
              if (entry.isDirectory()) {
                await getBlogFiles(fullPath);
              } else if (
                entry.name.endsWith('.mdx') ||
                entry.name.endsWith('.md')
              ) {
                try {
                  const content = await fs.promises.readFile(fullPath, 'utf8');
                  const title = getFrontmatterValue(content, 'title') || entry.name.replace(/\.mdx?$/, '');
                  const description = getFrontmatterValue(content, 'description') || '';
                  const image = getFrontmatterValue(content, 'image') || null;
                  
                  // Extract tags: tags: [tag1, tag2]
                  const tagsMatch = content.match(/^tags:\s*\[(.*)\]/m);
                  const tags = tagsMatch ? tagsMatch[1].split(',').map(t => t.trim().replace(/^["'](.*)["']$/, '$1')) : [];

                  // Extract date from filename if possible (YYYY-MM-DD-slug)
                  const dateMatch = entry.name.match(/^(\d{4})-(\d{2})-(\d{2})/);
                  const date = dateMatch 
                    ? new Date(parseInt(dateMatch[1]), parseInt(dateMatch[2]) - 1, parseInt(dateMatch[3])).toISOString() 
                    : new Date().toISOString();

                  const customSlug = getFrontmatterValue(content, 'slug');
                  let finalSlug = customSlug || entry.name.replace(/^\d{4}-\d{2}-\d{2}-/, '').replace(/\.mdx?$/, '');
                  // For Docusaurus, custom slugs replace the whole date path
                  let id;
                  if (customSlug) {
                    id = `/blog/${customSlug}`;
                  } else if (dateMatch) {
                    id = `/blog/${dateMatch[1]}/${dateMatch[2]}/${dateMatch[3]}/${finalSlug}`;
                  } else {
                    id = `/blog/${finalSlug}`;
                  }

                  const schemaType = getFrontmatterValue(content, 'schema_type') || 'BlogPosting';

                  blogContent.push({
                    path: path.relative(blogDir, fullPath),
                    id,
                    url: id,
                    title,
                    summary: description,
                    image,
                    date_modified: date,
                    tags,
                    schema_type: schemaType,
                    content_html: content, // The component expects this for word count
                  });
                } catch (err) {
                  console.error(`Error processing file ${fullPath}:`, err);
                }
              }
            }
          };

          await getBlogFiles(blogDir);

          // Sort by date descending
          blogContent.sort((a, b) => new Date(b.date_modified).getTime() - new Date(a.date_modified).getTime());

          // Save latest 5 posts to static folder for homepage to consume in dev/prod
          const latestPosts = blogContent.slice(0, 5).map(({ id, url, title, summary, image, date_modified, tags, content_html }) => ({
            id, url, title, summary, image, date_modified, tags, content_html
          }));

          const fullFeedPath = path.join(siteDir, 'static', 'graph-data.json');
          await fs.promises.writeFile(fullFeedPath, JSON.stringify({ items: blogContent }, null, 2));

          return { blogContent };
        },
        postBuild: async ({ content, outDir }) => {
          if (!content || typeof content !== 'object' || !('blogContent' in content)) {
            throw new Error('Invalid content format');
          }
          const { blogContent } = content;
          if (!Array.isArray(blogContent)) {
            throw new Error('blogContent must be an array');
          }
          const { siteDir } = context;
          const staticDir = path.join(siteDir, 'static', 'blog');

          try {
            // Create directory in static folder
            await fs.promises.mkdir(staticDir, { recursive: true });

            // Generate llms.txt with blog post list
            const blogList = blogContent.map(({ path }) => {
              // Keep the original filename as title, just remove the extension
              const title = path.replace(/\.mdx?$/, '');
              // Use absolute URL with the site's base URL
              const url = `${context.siteConfig.url}/blog/${path.replace(/\.mdx?$/, '')}`;
              return `- [${title}](${url})`;
            });
            const authorIdentity = `
# Dashboard Options & Khalid Naami
Founder, Owner, & CEO: Khalid Naami

## Author Identity
Khalid Naami is a professional academic writer, strategic analyst, and investigative researcher specializing in Geopolitics and Global Macroeconomics using OSINT. 
- **Founder, Owner, & CEO at Dashboard Options.**
- **Expert in Quantitative Finance, Financial AI, and Options Analytics.**
- **Specialist in Intermarket Analysis and Market Microstructure.**
- His foundational work is anchored in deep academic formation and completed formal studies in Business Administration and Global Macroeconomics.
- He utilizes both open-source intelligence (OSINT) and highly specialized intelligence sources for his investigative research in Political Economy and Geopolitics.
- In Science & Technologies, he is a highly professional programmer and developer of critical software systems.
- As the founder of Dashboard Options, he publishes authoritative Daily Analysis on trading and markets driven strictly by quantitative options data and AI/LLM research.

---

`;

            const llmsTxt = `${authorIdentity}# Blog Posts\n\n${blogList.join('\n')}`;
            await fs.promises.writeFile(
              path.join(staticDir, 'llms.txt'),
              llmsTxt
            );

            // Also write to build output directory
            const buildBlogDir = path.join(outDir, 'blog');
            await fs.promises.mkdir(buildBlogDir, { recursive: true });
            await fs.promises.writeFile(
              path.join(buildBlogDir, 'llms.txt'),
              llmsTxt
            );

            // Generate llms-full.txt with full content
            const fullContent = authorIdentity + blogContent
              .map(({ content }) => content)
              .join('\n\n---\n\n');

            await fs.promises.writeFile(
              path.join(staticDir, 'llms-full.txt'),
              fullContent
            );

            // Also write to build output directory
            await fs.promises.writeFile(
              path.join(buildBlogDir, 'llms-full.txt'),
              fullContent
            );

            // Universal RSS Generation (Updated to match FeedBurner/Standard RSS 2.0)
            try {
              const { marked } = require('marked');
              const lastBuildDate = new Date().toUTCString();
              const rssItems = blogContent.map((post) => {
                const postUrl = `${context.siteConfig.url}${post.url}`;
                // Strip frontmatter from content_html before parsing
                const rawMarkdown = (post.content_html || '').replace(/^---[\s\S]+?---/, '');
                const htmlContent = marked.parse(rawMarkdown);
                const pubDate = new Date(post.date_modified).toUTCString();
                
                // Categories from tags
                const categories = (post.tags || []).map((/** @type {string} */ tag) => `<category><![CDATA[${tag}]]></category>`).join('');
                
                let mediaGroupTag = '';
                if (post.image) {
                  const imageUrl = post.image.startsWith('http') ? post.image : `${context.siteConfig.url}${post.image}`;
                  const type = imageUrl.endsWith('.png') ? 'image/png' : (imageUrl.endsWith('.webp') ? 'image/webp' : 'image/jpeg');
                  mediaGroupTag = `
      <media:group>
        <media:content url="${imageUrl}" type="${type}"/>
        <media:thumbnail url="${imageUrl}"/>
      </media:group>`;
                }

                return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid isPermaLink="false">${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <author>research@khalidnaami.com (Khalid Naami)</author>
      <dc:creator><![CDATA[Khalid Naami]]></dc:creator>
      ${categories}
      <description><![CDATA[${post.summary}]]></description>
      <content:encoded><![CDATA[${htmlContent}]]></content:encoded>
      <yandex:full-text><![CDATA[${htmlContent}]]></yandex:full-text>
      <yandex:genre>article</yandex:genre>
      ${mediaGroupTag}
    </item>`;
              }).join('');

              const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:wfw="http://wellformedweb.org/CommentAPI/"
     xmlns:yandex="http://news.yandex.ru"
     xmlns:media="http://search.yahoo.com/mrss/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
     xmlns:slash="http://purl.org/rss/1.0/modules/slash/">
  <channel>
    <title><![CDATA[${context.siteConfig.title}]]></title>
    <atom:link href="${context.siteConfig.url}/blog/universal-rss.xml" rel="self" type="application/rss+xml"/>
    <link>${context.siteConfig.url}</link>
    <description><![CDATA[Founder, Owner, & CEO at Dashboard Options. Khalid Naami is a professional academic writer, strategic analyst, and investigative researcher specializing in Geopolitics and Global Macroeconomics using OSINT. Expert in Quantitative Finance and Financial AI systems.]]></description>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <language>en</language>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <generator>Docusaurus (Custom Blog Plugin)</generator>
${rssItems}
  </channel>
</rss>`;

              // Write to outDir/blog/universal-rss.xml
              await fs.promises.writeFile(
                path.join(buildBlogDir, 'universal-rss.xml'),
                rssXml
              );
              console.log('Successfully generated universal-rss.xml');
            } catch (rssErr) {
              console.error('Error generating universal RSS:', rssErr);
            }

            // Google News Sitemap Generation (with Image Extension)
            try {
              const now = new Date();
              const twoDaysAgo = new Date(now.getTime() - (2 * 24 * 60 * 60 * 1000));
              
              const newsItems = blogContent
                .filter(post => new Date(post.date_modified) >= twoDaysAgo)
                .map(post => {
                  const postUrl = `${context.siteConfig.url}${post.url}`;
                  const pubDate = new Date(post.date_modified).toISOString();
                  let imageTag = '';
                  if (post.image) {
                    const imageUrl = post.image.startsWith('http') ? post.image : `${context.siteConfig.url}${post.image}`;
                    imageTag = `
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title><![CDATA[${post.title}]]></image:title>
    </image:image>`;
                  }

                  return `
  <url>
    <loc>${postUrl}</loc>
    <news:news>
      <news:publication>
        <news:name>Khalid Naami</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title><![CDATA[${post.title}]]></news:title>
    </news:news>${imageTag}
  </url>`;
                }).join('');

              if (newsItems) {
                const newsSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${newsItems}
</urlset>`;
                
                await fs.promises.writeFile(
                  path.join(buildBlogDir, 'news-sitemap.xml'),
                  newsSitemapXml
                );
                console.log('Successfully generated news-sitemap.xml with Image Extensions');
              }
            } catch (newsErr) {
              console.error('Error generating News Sitemap:', newsErr);
            }

            // Comprehensive Image Sitemap Generation
            try {
              const imageItems = blogContent.map(post => {
                if (!post.image) return '';
                const postUrl = `${context.siteConfig.url}${post.url}`;
                const imageUrl = post.image.startsWith('http') ? post.image : `${context.siteConfig.url}${post.image}`;
                return `
  <url>
    <loc>${postUrl}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:caption><![CDATA[${post.summary}]]></image:caption>
      <image:title><![CDATA[${post.title}]]></image:title>
    </image:image>
  </url>`;
              }).join('');

              const imageSitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${imageItems}
</urlset>`;

              await fs.promises.writeFile(
                path.join(buildBlogDir, 'image-sitemap.xml'),
                imageSitemapXml
              );
              console.log('Successfully generated image-sitemap.xml');
            } catch (imgErr) {
              console.error('Error generating Image Sitemap:', imgErr);
            }

            // Sitemap Index Generation
            try {
              const sitemapIndexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${context.siteConfig.url}/sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${context.siteConfig.url}/blog/news-sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${context.siteConfig.url}/blog/image-sitemap.xml</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </sitemap>
</sitemapindex>`;

              await fs.promises.writeFile(
                path.join(outDir, 'sitemap-index.xml'),
                sitemapIndexXml
              );
              console.log('Successfully generated sitemap-index.xml');
            } catch (indexErr) {
              console.error('Error generating Sitemap Index:', indexErr);
            }

            console.log('Successfully generated llms.txt and llms-full.txt files');
          } catch (err) {
            console.error('Error generating llms files:', err);
          }
        },
      };
    },
    // [
    //   'docusaurus-plugin-simple-analytics',
    //   {
    //     domain: 'khalid-naami.github.io'
    //   }
    // ],
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'));
          postcssOptions.plugins.push(require('autoprefixer'));
          return postcssOptions;
        },
      };
    },
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      media: 'print',
      onload: "this.media='all'",
    },
  ],

  markdown: {
    mermaid: true,
    mdx1Compat: {
      admonitions: true,
    },
  },
};
};
