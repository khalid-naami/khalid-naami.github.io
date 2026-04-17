import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Head from '@docusaurus/Head';
import Layout from '@theme/Layout';
import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Section from '../components/common/Section';
import WhoAmI from '../components/home/WhoAmI';
import Beliefs from '../components/home/Beliefs';
import LatestPosts from '../components/home/LatestPosts';
import OutsideWork from '../components/home/OutsideWork';
import Journey from '../components/home/Journey';
import NewsletterCTA from '../components/NewsletterCTA';

if (typeof window !== 'undefined') {
  // Prevent TradingView cross-origin "Script error." from triggering the dev-server overlay
  window.addEventListener(
    'error',
    (evt) => {
      if (evt.message === 'Script error.') {
        evt.preventDefault();
        evt.stopImmediatePropagation();
        return false;
      }
    },
    true,
  );

  // Fallback: hide the overlay element if it still shows up
  const style = document.createElement('style');
  style.innerHTML =
    '#webpack-dev-server-client-overlay { display: none !important; }';
  document.head.appendChild(style);
}

export default function Home() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [githubSrc, setGithubSrc] = useState(
    'https://github-stats-alpha.vercel.app/api?username=khalid-naami&cc=fff&tc=000&ic=000&bc=000',
  );
  const [githubChartSrc, setGithubChartSrc] = useState(
    'https://contribution.oooo.so/_/khalid-naami?chart=3dbar&gap=0.6&scale=2&flatten=1&gradient=false&legend=true&legendPosition=bottomLeft&legendDirection=row&strokeWidth=2&strokeColor=222222&animation=mess&animation_duration=4&animation_loop=true&format=html&weeks=30&theme=blue_orbit&dark=true',
  );

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const handleResize = () => {
        // Using 576px as the mobile breakpoint and 992px as the tablet breakpoint
        setIsTablet(window.innerWidth > 576 && window.innerWidth <= 992);
        setIsDesktop(window.innerWidth > 992);
      };

      // Initial check
      handleResize();

      // Add resize listener to handle window resizing
      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      // Function to update sources based on theme
      const updateSources = () => {
        const isDarkTheme =
          document.documentElement.getAttribute('data-theme') === 'dark';

        setGithubSrc(
          isDarkTheme
            ? 'https://github-stats-alpha.vercel.app/api?username=khalid-naami&cc=000&tc=fff&ic=fff&bc=fff'
            : 'https://github-stats-alpha.vercel.app/api?username=khalid-naami&cc=fff&tc=000&ic=000&bc=000',
        );

        setGithubChartSrc(
          isDarkTheme
            ? 'https://contribution.oooo.so/_/khalid-naami?chart=3dbar&gap=0.6&scale=2&flatten=1&gradient=false&legend=true&legendPosition=bottomLeft&legendDirection=row&strokeWidth=2&strokeColor=222222&animation=mess&animation_duration=4&animation_loop=true&format=html&weeks=30&theme=blue_orbit&dark=true'
            : 'https://contribution.oooo.so/_/khalid-naami?chart=3dbar&gap=0.6&scale=2&flatten=1&gradient=false&legend=true&legendPosition=bottomLeft&legendDirection=row&strokeWidth=2&strokeColor=222222&animation=mess&animation_duration=4&animation_loop=true&format=html&weeks=30&theme=blue_orbit',
        );
      };

      // Initial update
      updateSources();

      // Create mutation observer
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'data-theme'
          ) {
            updateSources();
          }
        }
      });

      // Start observing
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      });

      // Cleanup
      return () => observer.disconnect();
    }
  }, []);

  const { siteConfig } = useDocusaurusContext();
  const { url: siteUrl } = siteConfig;
  const [postsHighlight, setPostsHighlight] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    fetch('/graph-data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setAllPosts(data.items);
        setPostsHighlight(data.items.slice(0, 3));
      })
      .catch((error) => {
        console.log(
          `There was a problem with the fetch operation: ${error.message}`,
        );
      });
  }, [siteUrl]);

  return (
    <Layout
      title="Homepage"
      description="Khalid Naami personal website"
    >
      <Head>
        <meta property="og:title" content="Khalid Naami - Personal Website" />
        <meta
          property="og:description"
          content="Where you can find my posts, projects and insights on technology, finance and markets."
        />
        <meta property="og:image" content={`${siteUrl}/img/khalid_zoro_pixel.jpg`} />
        <meta property="og:url" content="https://khalid-naami.github.io" />

        {/* Add X-specific meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GamesOfOptions" />
        <meta name="twitter:creator" content="@GamesOfOptions" />
        <meta
          name="twitter:title"
          content="Khalid Naami - Fintech & Software Developer"
        />
        <meta
          name="twitter:description"
          content="Specializing in the intersection of technology and finance - Python expert, derivatives analyst"
        />
        <meta name="twitter:image" content={`${siteUrl}/img/khalid_zoro_pixel.jpg`} />
        
        {/* Desktop Performance Optimization: Preload LCP Images */}
        <link rel="preload" as="image" href={`${siteUrl}/img/khalid_profile.jpg`} />
        <link rel="preload" as="image" href={`${siteUrl}/img/terminal_bg_dark.png`} />

        {/* Apple Identity & Mobile Optimization */}
        <link rel="apple-touch-icon" href={`${siteUrl}/img/zoro-final.png`} />
        <meta name="apple-mobile-web-app-title" content="Khalid Naami" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </Head>
      <main>
        <h1 className="visually-hidden">Khalid Naami - Quantitative Analyst & Options Trading</h1>
        <div className="w-full py-3 sm:py-4">
          <div className="max-w-[880px] mx-auto px-4 flex items-center justify-center">
            <a
              href="https://substack.com/@khnaami"
              target="_blank"
              rel="noreferrer"
              className="pill-banner-link"
            >
              <span className="pill-banner-text">Get updates on AI, open source, startups and finance.</span>
            </a>
          </div>
        </div>
        <div className="w-full py-3 sm:py-4">
          <div className="max-w-[880px] mx-auto px-4 flex items-center justify-center">
            <a
              href="https://x.com/GamesOfOptions"
              target="_blank"
              rel="noreferrer"
              className="pill-banner-link"
            >
              <span className="pill-banner-text">
                Follow me on X to explore insights on fintech, derivatives and market analysis
              </span>
            </a>
          </div>
        </div>
        {/* Home Sections */}
        <WhoAmI isDesktop={isDesktop} isTablet={isTablet} />

        <Beliefs
          isDesktop={isDesktop}
          isTablet={isTablet}
          githubSrc={githubSrc}
          githubChartSrc={githubChartSrc}
        />

        <LatestPosts
          allPosts={allPosts}
          postsHighlight={postsHighlight}
          isDesktop={isDesktop}
          isTablet={isTablet}
        />

        {/* Newsletter CTA */}
        <Section className="max-w-[880px] px-4 !mt-0">
          <NewsletterCTA variant="compact" />
        </Section>

        <OutsideWork isDesktop={isDesktop} />

        <Journey />
      </main>
    </Layout>
  );
}
