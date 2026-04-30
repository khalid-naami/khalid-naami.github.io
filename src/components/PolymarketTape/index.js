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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ExecutionEnvironment.canUseDOM) {
      return;
    }

    const fetchMarkets = async () => {
      const apiUrl = 'https://gamma-api.polymarket.com/events?order=createdAt&ascending=false&limit=10';
      
      // Try direct fetch first (more reliable if API allows)
      // If fails, try proxy fallback
      try {
        let response = await fetch(apiUrl);
        
        if (!response.ok) {
          const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(apiUrl)}`;
          const proxyResponse = await fetch(proxyUrl);
          if (!proxyResponse.ok) throw new Error('Proxy failed');
          const proxyData = await proxyResponse.json();
          // allOrigins wraps data in a 'contents' string
          const data = JSON.parse(proxyData.contents);
          processData(data);
        } else {
          const data = await response.json();
          processData(data);
        }
      } catch (error) {
        console.error('Polymarket fetch error:', error);
        setLoading(false);
      }
    };

    const processData = (data) => {
      if (!data || !Array.isArray(data)) {
        setLoading(false);
        return;
      }

      const formattedMarkets = data.map(event => {
        try {
          const market = event.markets?.[0];
          if (!market || !market.outcomes || !market.outcomePrices) {
            return null;
          }
          
          const outcomes = typeof market.outcomes === 'string' ? JSON.parse(market.outcomes) : market.outcomes;
          const outcomePrices = typeof market.outcomePrices === 'string' ? JSON.parse(market.outcomePrices) : market.outcomePrices;

          if (!outcomes.length || !outcomePrices.length) {
            return null;
          }
          
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

      setMarkets(formattedMarkets);
      setLoading(false);
    };

    fetchMarkets();
  }, []);

  if (loading) {
    return <div className={styles.tapeContainer} style={{ opacity: 0.5 }}>Loading Polymarket...</div>;
  }

  if (!markets.length) {
    return null;
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