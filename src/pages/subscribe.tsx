import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Subscribe(): JSX.Element {
  useEffect(() => {
    window.location.href = 'https://substack.com/@khalid-naami';
  }, []);

  return (
    <Layout
      title="Subscribe"
      description="Subscribe to Khalid Naami newsletter"
    >
      <main className="container margin-vert--xl">
        <div className="text--center">
          <h1>Redirecting to Newsletter...</h1>
          <p>
            If you are not redirected automatically,{' '}
            <a href="https://substack.com/@khalid-naami">
              click here to subscribe
            </a>
            .
          </p>
        </div>
      </main>
    </Layout>
  );
}
