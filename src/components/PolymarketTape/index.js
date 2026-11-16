import React, { useState, useEffect } from 'react';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './styles.module.css';
import GaugeChart from './GaugeChart';

const getGaugeColor = (percentage) => {
  const hue = percentage * 1.2;
  return `hsl(${hue}, 90%, 50%)`;
};

const PolymarketTape = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) return;

    let isMounted = true;
    let retryTimer = null;
    let retryCount = 0;
    const MAX_RETRIES = 3;
    const controller = new AbortController();

    const scheduleRetry = () => {
      if (!isMounted || retryCount >= MAX_RETRIES) return;
      retryCount += 1;
      retryTimer = setTimeout(fetchMarkets, 5000);
    };

    setLoading(true);
    const fetchMarkets = async () => {
      if (!isMounted) return;
      const apiUrl = 'https://gamma-api.polymarket.com/events?order=createdAt&ascending=false&limit=60';
      try {
        let response;
        try {
          response = await fetch(apiUrl, { signal: controller.signal });
          if (!response.ok) throw new Error('Direct fetch returned non-200');
        } catch (err) {
          if (err.name === 'AbortError') return;
          // CORS error or network failure, use proxy
          const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
          response = await fetch(proxyUrl, { signal: controller.signal });
          if (!response.ok) throw new Error('Proxy fetch failed');
          
          const proxyData = await response.json();
          const data = typeof proxyData.contents === 'string' ? JSON.parse(proxyData.contents) : null;
          processData(data);
          return;
        }

        // If direct fetch succeeded
        const data = await response.json();
        processData(data);
      } catch (error) {
        if (error.name === 'AbortError') return;
        console.error('Polymarket fetch error, retrying in 5s...', error);
        scheduleRetry();
      }
    };

    const processData = (data) => {
      if (!isMounted) return;
      if (!data || !Array.isArray(data) || data.length === 0) {
        scheduleRetry();
        return;
      }

      const formattedMarkets = data.map(event => {
        try {
          const market = event.markets?.[0];
          if (!market || !market.outcomes || !market.outcomePrices || !event.slug) return null;
          const outcomes = typeof market.outcomes === 'string' ? JSON.parse(market.outcomes) : market.outcomes;
          const outcomePrices = typeof market.outcomePrices === 'string' ? JSON.parse(market.outcomePrices) : market.outcomePrices;
          if (!Array.isArray(outcomes) || !Array.isArray(outcomePrices) || !outcomes.length || !outcomePrices.length) return null;
          const price = Number.parseFloat(outcomePrices[0]);
          if (Number.isNaN(price)) return null;
          const percentage = Math.max(0, Math.min(100, Math.round(price * 100)));
          const safeImage = typeof event.image === 'string' && event.image.startsWith('https://') ? event.image : '';
          return {
            id: String(event.id || event.slug),
            title: String(event.title || ''),
            image: safeImage,
            url: `https://polymarket.com/event/${encodeURIComponent(String(event.slug))}`,
            outcomePercentage: percentage,
            gaugeColor: getGaugeColor(percentage),
          };
        } catch (e) {
          return null;
        }
      }).filter(Boolean);

      if (formattedMarkets.length === 0) {
        scheduleRetry();
      } else {
        setMarkets(formattedMarkets.slice(0, 10));
        setLoading(false);
      }
    };

    fetchMarkets();

    return () => {
      isMounted = false;
      controller.abort();
      if (retryTimer) clearTimeout(retryTimer);
    };
  }, []);

  if (markets.length === 0) {
    return <div className={styles.tapeContainer} style={{ minHeight: '64px', backgroundColor: 'transparent' }} />;
  }
  
  const duplicatedMarkets = [...markets, ...markets];

  return (
    <div className={styles.tapeContainer}>
      <div className={styles.tape}>
        {duplicatedMarkets.map((market, index) => (
          <a href={market.url} target="_blank" rel="noopener noreferrer" key={`${market.id}-${index}`} className={styles.tapeItem}>
            <img src={market.image} alt={market.title} className={styles.marketImage} />
            <span className={styles.title}>{market.title}</span>
            <GaugeChart
              percentage={market.outcomePercentage}
              gaugeColor={market.gaugeColor}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default PolymarketTape; 