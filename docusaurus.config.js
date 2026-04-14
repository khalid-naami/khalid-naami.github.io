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
    tagline: 'Building an open source legacy one commit at a time.',
    favicon: 'img/zoro-final.png',

  // Set the production url of your site here
  url: 'https://khalid-naami.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

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
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": "https://khalid-naami.github.io/#person",
            "name": "Khalid Naami",
            "url": "https://khalid-naami.github.io",
            "jobTitle": "Financial Analyst & Quantitative Trader",
            "description": "Professional trader specializing in options Greeks, market dynamics, and technological project development.",
            "sameAs": [
              "https://github.com/khalid-naami",
              "https://linkedin.com/in/khalid-naami",
            ]
          },
          {
            "@type": "WebSite",
            "@id": "https://khalid-naami.github.io/#website",
            "url": "https://khalid-naami.github.io",
            "name": "Khalid Naami - Trading & Tech Blog",
            "publisher": { "@id": "https://khalid-naami.github.io/#person" }
          }
        ]
      }),
    },
    /* 
    {
      tagName: 'script',
      attributes: {
        id: 'cookieyes',
        type: 'text/javascript',
        src: 'https://cdn-cookieyes.com/client_data/68dfe4108d25a8e90527dfa6/script.js',
      },
    },
    */
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/khalid-naami/khalid-naami.github.io/tree/main/',
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription:
            'This is where I drop my thoughts in the form of blogposts!',
          blogSidebarCount: 'ALL',
          postsPerPage: 'ALL',
          showReadingTime: true,
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
          trackingID: 'G-Z026EQ121W',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/khalid_zoro_pixel.jpg',
      navbar: {
        title: 'Khalid Naami',
        logo: {
          alt: '',
          src: '/img/zoro-final.png',
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
            to: '/newsletter',
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

            const llmsTxt = `# Blog Posts\n\n${blogList.join('\n')}`;
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
            const fullContent = blogContent
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
    'src/css/custom.css',
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQWUrDUFEZEZA8Fin8IEKEUAZITG/+u7joGOOLUs',
      crossorigin: 'anonymous',
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
