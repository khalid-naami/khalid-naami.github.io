import React from 'react';
import BlogAuthorsListPage from '@theme-original/BlogAuthorsListPage';
import Head from '@docusaurus/Head';

export default function BlogAuthorsListPageWrapper(props) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Khalid Naami: Academic investigative writer in Geopolitics and Global Macro. Founder & CEO at Dashboard Options, expert in Quantitative Finance."
        />
        <title>Authors | Khalid Naami</title>
      </Head>
      <BlogAuthorsListPage {...props} />
    </>
  );
}
