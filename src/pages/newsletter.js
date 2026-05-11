import React, { useEffect } from 'react';
import Layout from '@theme/Layout';

export default function Newsletter() {
  useEffect(() => {
    window.location.href = 'https://substack.com/@khnaami';
  }, []);

  return (
    <Layout 
      title="Newsletter Redirect"
      description="Subscribe to the khalid naami Newsletter. Receive elite quantitative research, AI insights, and options trading analysis directly to your inbox."
    >
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
        <div style={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          border: '0'
        }}>
          Subscribe to the official Khalid Naami Newsletter and join a growing community of traders, researchers, and technology enthusiasts dedicated to mastering the modern financial landscape. By joining our list, you will receive exclusive, high-impact research delivered directly to your inbox, focusing on the sophisticated intersection of Quantitative Finance, Artificial Intelligence, and advanced Options Greeks analysis. Our weekly insights go beyond simple market commentary, providing deep dives into market-maker positioning, structural liquidity shifts, and actionable intelligence that helps you stay ahead of the curve. Whether you are a professional quant or an aspiring algorithmic trader, our content is curated to provide the technical depth and strategic clarity needed to navigate today's volatile markets. Don't miss out on elite financial strategies and the latest developments in AI-driven trading technology. Enter your email now to secure your access to this professional resource and start elevating your market understanding today. Our newsletter provides comprehensive data-driven updates on global macro trends and derivatives market structure for the modern era of finance.
        </div>
        <p>If you are not redirected automatically, <a href="https://substack.com/@khnaami">click here</a>.</p>
      </div>
    </Layout>
  );
}
