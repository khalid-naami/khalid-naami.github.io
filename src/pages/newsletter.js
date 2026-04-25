import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Newsletter() {
  useEffect(() => {
    window.location.href = 'https://substack.com/@khnaami';
  }, []);

  return (
    <Layout title="Newsletter Redirect">
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '50vh',
        fontSize: '1.5rem',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <h1 style={{ marginBottom: '1rem' }}>Redirecting to Newsletter...</h1>
        <p>If you are not redirected automatically, <a href="https://substack.com/@khnaami">click here</a>.</p>
      </div>
    </Layout>
  );
}
