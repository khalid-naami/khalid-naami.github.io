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
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM || shouldLoad) return;

    const handleInteraction = () => {
      setShouldLoad(true);
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };

    window.addEventListener('scroll', handleInteraction, { passive: true });
    window.addEventListener('mousemove', handleInteraction, { passive: true });
    window.addEventListener('touchstart', handleInteraction, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleInteraction);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;

    setLoading(true);
    const fetchMarkets = async () => {
      const apiUrl = 'https://gamma-api.polymarket.com/events?order=createdAt&ascending=false&limit=60';
      try {
        let response;
        try {
          response = await fetch(apiUrl);
          if (!response.ok) throw new Error('Direct fetch returned non-200');
        } catch (err) {
          // CORS error or network failure, use proxy
          const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
          response = await fetch(proxyUrl);
          if (!response.ok) throw new Error('Proxy fetch failed');
          
          const proxyData = await response.json();
          const data = JSON.parse(proxyData.contents);
          processData(data);
          return;
        }

        // If direct fetch succeeded
        const data = await response.json();
        processData(data);
      } catch (error) {
        console.error('Polymarket fetch error, retrying in 5s...', error);
        // Silently retry after 5 seconds
        setTimeout(fetchMarkets, 5000);
      }
    };

    const processData = (data) => {
      if (!data || !Array.isArray(data) || data.length === 0) {
        // Retry if we got empty data
        setTimeout(fetchMarkets, 5000);
        return;
      }

      const formattedMarkets = data.map(event => {
        try {
          const market = event.markets?.[0];
          if (!market || !market.outcomes || !market.outcomePrices) return null;
          const outcomes = typeof market.outcomes === 'string' ? JSON.parse(market.outcomes) : market.outcomes;
          const outcomePrices = typeof market.outcomePrices === 'string' ? JSON.parse(market.outcomePrices) : market.outcomePrices;
          if (!outcomes.length || !outcomePrices.length) return null;
          const price = Number.parseFloat(outcomePrices[0]);
          const percentage = Math.round(price * 100);
          return {
            id: event.id,
            title: event.title,
            image: event.image,
            url: `https://polymarket.com/event/${event.slug}`,
            outcomePercentage: percentage,
            gaugeColor: getGaugeColor(percentage),
          };
        } catch (e) {
          return null;
        }
      }).filter(Boolean);

      if (formattedMarkets.length === 0) {
        setTimeout(fetchMarkets, 5000);
      } else {
        setMarkets(formattedMarkets.slice(0, 10));
        setLoading(false);
      }
    };

    fetchMarkets();
  }, [shouldLoad]);

  if (!shouldLoad || markets.length === 0) {
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