import React from 'react';
import BlogAuthorsListPage from '@theme-original/BlogAuthorsListPage';
import Head from '@docusaurus/Head';

export default function BlogAuthorsListPageWrapper(props) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Khalid Naami: Academic investigative writer in Geopolitics and Global Macro. Founder of Dashboard Options, expert in Quantitative Finance."
        />
        <meta
          property="og:description"
          content="Khalid Naami: Academic investigative writer in Geopolitics and Global Macro. Founder of Dashboard Options, expert in Quantitative Finance."
        />
        <meta property="og:title" content="Authors & Strategic Research Contributors | Khalid Naami" />
        <title>Authors & Strategic Research Contributors | Khalid Naami</title>
      </Head>
      <BlogAuthorsListPage {...props} />
    </>
  );
}
