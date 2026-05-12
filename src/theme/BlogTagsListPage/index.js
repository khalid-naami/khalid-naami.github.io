import React from 'react';
import BlogTagsListPage from '@theme-original/BlogTagsListPage';
import Head from '@docusaurus/Head';

export default function BlogTagsListPageWrapper(props) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Browse all blog tags. Find articles on options trading, gamma exposure, quantitative finance, geopolitics, and market analysis."
        />
        <title>Tags | Khalid Naami</title>
      </Head>
      <BlogTagsListPage {...props} />
    </>
  );
}
