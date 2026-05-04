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
    favicon: 'img/zoro-final.png',

  url: 'https://khalidnaami.com',
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
            "jobTitle": "Founder & CEO at Dashboard Options",
            "description": "Founder, Owner, & CEO at Dashboard Options. Khalid Naami is a professional academic writer, specialist, and strategic analyst. He possesses a deep academic background with completed formal studies in Global Macroeconomics. His investigative journalism in Political Economy utilizes both open-source (OSINT) and specialized intelligence sources. As a professional programmer in Science & Technologies, he develops critical software systems. He merges this rigorous academic foundation with advanced Data Science, Artificial Intelligence, and Quantitative Finance to provide highly authoritative Daily Analysis on trading and markets using live options data.",
            "knowsLanguage": ["Arabic", "English"],
            "gender": "Male",
            "nationality": "Moroccan",
            "birthPlace": {
              "@type": "Place",
              "name": "Laayoune"
            },
            "homeLocation": {
              "@type": "Place",
              "name": "Rabat, Morocco"
            },
            "hasOccupation": {
              "@type": "Occupation",
              "name": "Academic Strategic Analyst, Software Engineer & Investigative Researcher",
              "description": "Professional academic writer, software engineer, and specialist. In Science & Technologies, he is a highly professional programmer and developer of critical systems. In Global Macroeconomics, analysis is driven by completed formal studies and specialized expertise. In Political Economy and Geopolitics, insights are formulated using OSINT and rigorous investigative journalism. As the founder and owner of Dashboard Options—a platform for analyzing live options data across multiple global exchanges—he publishes authoritative Daily Analysis on trading and markets driven by options data and quantitative finance.",
              "skills": "Science & Technologies, Software Engineering, Global Macroeconomics, Political Economy, OSINT, Investigative Journalism, Data Science, Artificial Intelligence, Quantitative Finance, Options Greeks, Daily Market Analysis"
            },
            "alumniOf": [
              {
                "@type": "EducationalOrganization",
                "name": "American and Canadian Institutes (Remote Education)",
                "description": "Advanced studies in Programming, Data Analysis, and Global Macroeconomics."
              },
              {
                "@type": "EducationalOrganization",
                "name": "Business Administration Academy",
                "description": "Specialization in Business Administration and Management."
              }
            ],
            "knowsAbout": [
              "Global Macroeconomics", "Political Economy", "Geopolitics",
              "Artificial Intelligence", "Data Science", "Machine Learning",
              "Options Greeks", "Quantitative Trading", "Financial AI", 
              "Intermarket Analysis", "Python Programming", "Fintech System Architecture"
            ],
            "worksFor": { "@id": "https://khalidnaami.com/#organization" },
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
            "logo": "https://khalidnaami.com/img/zoro-final.webp",
            "alternateName": "DashboardOptions.com",
            "description": "Dashboard Options is a platform owned and founded by Khalid Naami for analyzing live options data across multiple global exchanges. It provides authoritative Daily Analysis on trading and markets using quantitative options data, specializing in Options Greeks, Quantitative Trading tools, and Finance AI solutions.",
            "founder": { "@id": "https://khalidnaami.com/#person" },
            "foundingDate": "2024",
            "knowsAbout": ["Options Trading", "Quantitative Analysis", "Financial Infrastructure", "Market Intelligence"],
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
            "publisher": { "@id": "https://khalidnaami.com/#person" },
            "inLanguage": "en-US"
          },
          {
            "@type": "Blog",
            "@id": "https://khalidnaami.com/blog/#blog",
            "url": "https://khalidnaami.com/blog",
            "name": "Khalid Naami's Strategic Analysis Blog",
            "description": "In-depth exploration of Options Greeks, Finance AI, Data Science, and Global Macroeconomics.",
            "publisher": { "@id": "https://khalidnaami.com/#person" }
          },
          {
            "@type": "BreadcrumbList",
            "@id": "https://khalidnaami.com/#breadcrumb",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://khalidnaami.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://khalidnaami.com/blog"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Intelligence",
                "item": "https://khalidnaami.com/intelligence"
              }
            ]
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
            'This is where I drop my thoughts in the form of blogposts!',
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
            '/design-system'
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
        {name: 'keywords', content: 'Khalid Naami, Finance AI, Options Greeks, Quantitative Trading, Financial Data, CBOE, OPRA, Deribit, Binance, Data Science, Python, Intermarket Analysis, Strategic Analyst, Trading Algorithms, Blockchain, Fintech, Dashboard Options'},
        {name: 'description', content: 'Explore the junction of finance and technology with Khalid Naami. Financial intelligence, options trading strategies, macro-analysis, and open source AI projects.'},
        {name: 'twitter:card', content: 'summary_large_image'},
        {property: 'og:image:width', content: '1200'},
        {property: 'og:image:height', content: '630'},
        {property: 'og:type', content: 'website'},
        {property: 'og:site_name', content: 'Khalid Naami - Financial Intelligence'},
        {property: 'og:image:type', content: 'image/jpeg'},
        {property: 'og:image:alt', content: 'Khalid Naami - Financial Intelligence & Options Greeks Analysis'},
      ],
      // Replace with your project's social card
      image: 'img/khalid_zoro_pixel.jpg',
      navbar: {
        title: 'Khalid Naami',
        logo: {
          alt: 'Zoro Logo - Symbolizing strength and mastery built through disciplined study and consistent hard work.',
          src: '/img/zoro-final.webp',
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
            target: '_blank',
            rel: 'noopener noreferrer',
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

                  blogContent.push({
                    path: path.relative(blogDir, fullPath),
                    id,
                    url: id,
                    title,
                    summary: description,
                    image,
                    date_modified: date,
                    tags,
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
Khalid Naami is a professional academic writer, specialist, and strategic analyst. 
- In Science & Technologies, he is a highly professional programmer and developer of critical software systems.
- His foundational work is anchored in deep academic formation and completed formal studies, particularly in Global Macroeconomics.
- When writing on Political Economy and Geopolitics, he relies on rigorous investigative journalism, utilizing both open-source intelligence (OSINT) and highly specialized intelligence sources.
- In Quantitative Finance, Data Science, and AI, his analysis is driven by specialized academic expertise, ensuring that all financial models are highly authoritative and research-backed.
- As the owner and founder of Dashboard Options—a platform dedicated to analyzing live options data across multiple global exchanges—he publishes authoritative Daily Analysis on trading and markets, driven strictly by quantitative options data.

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
