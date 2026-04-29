import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';

export default function NotFound() {
  return (
    <Layout
      title="404 - Page Not Found"
      description="The page you are looking for might have been moved or doesn't exist. Return to Khalid Naami's homepage for Finance AI and Macroeconomics insights."
    >
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <main className="container margin-vert--xl text-center">
        <div className="row">
          <div className="col col--6 col--offset-3">
            <h1 className="hero__title text-5xl font-bold mb-6">404: Lost in the Alpha?</h1>
            <p className="text-xl mb-8">
              It seems you've drifted off the strategic path. The market moves fast, and some links might expire or change.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                className="button button--primary button--lg"
                to="/">
                Return to Intelligence Hub
              </Link>
              <Link
                className="button button--secondary button--lg"
                to="/blog">
                Explore the Blog
              </Link>
            </div>
            <div className="mt-12 opacity-50">
              <img 
                src="/img/zoro-final.webp" 
                alt="Zoro Logo" 
                style={{ width: '150px', filter: 'grayscale(100%)' }}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
