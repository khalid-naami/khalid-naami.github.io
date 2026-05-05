import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ThemedImage from '@theme/ThemedImage';

import GraphContainer from '../components/Intelligence/GraphContainer';

function IntelligencePage() {
  return (
    <Layout
      title="Intelligence"
      description="Khalid Naami's Intelligence Graph: Mapping Quant Finance & AI insights."
    >
      <Head>
        <title>Intelligence | Khalid Naami</title>
        <meta
          property="og:title"
          content="Intelligence | Second Brain by Khalid Naami"
        />
        <meta
          name="description"
          content="Khalid Naami's Intelligence Graph: Mapping Quant Finance & AI insights."
        />
      </Head>
      <main style={{ padding: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1>Intelligence</h1>
        </div>
        <div className="intelligence-page-desktop">
            <div style={{ width: '60%', margin: '0 auto' }}>
                <BrowserOnly fallback={<div>Loading graph...</div>}>
                    {() => <GraphContainer />}
                </BrowserOnly>
            </div>
        </div>
        <div className="intelligence-page-mobile">
            <div style={{ textAlign: 'center', padding: '2rem', position: 'relative' }}>
            <ThemedImage
                alt="Second Brain"
                sources={{
                    light: '/img/intelligence_graph_mobile_light.webp',
                    dark: '/img/intelligence_graph_mobile_dark.webp',
                }}
                style={{ width: '100%', filter: 'blur(2px)' }}
                />
                <div className="intelligence-bubble">
                    Visualize my second brain on desktop
                </div>
            </div>
        </div>
      </main>
    </Layout>
  );
}

export default IntelligencePage; 