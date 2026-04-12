import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import BlogPostItem from '@theme-original/BlogPostItem';
import React from 'react';
import NewsletterCTA from '@site/src/components/NewsletterCTA';

export default function BlogPostItemWrapper(props) {
  const { isBlogPostPage } = useBlogPost();

  return (
    <div style={!isBlogPostPage ? { marginBottom: '5rem' } : {}}>
      <BlogPostItem {...props}>
        {props.children}
        {isBlogPostPage && <NewsletterCTA />}
      </BlogPostItem>
    </div>
  );
}