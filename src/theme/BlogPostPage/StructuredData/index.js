import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useBlogPostStructuredData} from '@docusaurus/plugin-content-blog/client';

export default function BlogPostStructuredData() {
  const structuredData = useBlogPostStructuredData();
  const {siteConfig} = useDocusaurusContext();
  const siteUrl = siteConfig.url.replace(/\/+$/, '');

  const normalizeAuthor = (author) => {
    if (!author || typeof author !== 'object') return author;
    return {
      ...author,
      image:
        typeof author.image === 'string' && author.image.startsWith('/')
          ? `${siteUrl}${author.image}`
          : author.image,
    };
  };

  const normalizedAuthor = Array.isArray(structuredData.author)
    ? structuredData.author.map(normalizeAuthor)
    : normalizeAuthor(structuredData.author);

  const enrichedData = {
    ...structuredData,
    author: normalizedAuthor,
    publisher: structuredData.publisher || {
      '@type': 'Organization',
      '@id': `${siteUrl}/#organization`,
      name: 'Dashboard Options',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/img/zoro-internal.webp`,
      },
    },
  };

  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(enrichedData)}
      </script>
    </Head>
  );
}
