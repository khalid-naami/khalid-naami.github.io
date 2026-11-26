import React from 'react';
import clsx from 'clsx';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {translateBlogAuthorsListPageTitle} from '@docusaurus/theme-common/internal';
import BlogLayout from '@theme/BlogLayout';
import SearchMetadata from '@theme/SearchMetadata';
import Heading from '@theme/Heading';
import Author from '@theme/Blog/Components/Author';

function AuthorListItem({author}) {
  return (
    <li style={{marginBottom: '1.5rem'}}>
      <Author as="h2" author={author} count={author.count} />
    </li>
  );
}

function AuthorsList({authors}) {
  return (
    <section className="margin-vert--lg">
      <ul className="clean-list">
        {authors.map((author) => (
          <AuthorListItem key={author.key} author={author} />
        ))}
      </ul>
    </section>
  );
}

export default function BlogAuthorsListPage({authors, sidebar}) {
  const heading = translateBlogAuthorsListPageTitle();
  const pageTitle = 'Authors & Strategic Research Contributors';
  const pageDescription =
    'Meet the contributors behind Khalid Naami\'s research archive on Quantitative Finance, Options Greeks, Global Macroeconomics, Geopolitics, and Financial AI.';

  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogAuthorsListPage,
      )}>
      <PageMetadata title={pageTitle} description={pageDescription} />
      <SearchMetadata tag="blog_authors_list" />
      <BlogLayout sidebar={sidebar}>
        <Heading as="h1">{heading}</Heading>
        <p className="margin-top--md">
          This research archive is authored and curated by Khalid Naami, Founder of the Dashboard Options project. Published analyses cover Quantitative Finance, Options Greeks (Delta, Gamma, Vanna, and Charm), Global Macroeconomics, Geopolitics (OSINT), and Financial AI, combining open-source data engineering with independent market microstructure research.
        </p>
        <AuthorsList authors={authors} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
