import React from 'react';
import Section from '../common/Section';


function Beliefs({ isDesktop, isTablet, githubSrc, githubChartSrc }) {
  const subtitleDesktop = 'Continuous learning to build a legacy that benefits everyone, step by step.';
  const subtitleMobile = 'Continuous learning to build a legacy\nthat benefits everyone, step by step.';

  const [showChart, setShowChart] = React.useState(false);

  React.useEffect(() => {
    const trigger = () => setShowChart(true);
    window.addEventListener('scroll', trigger, { once: true, passive: true });
    window.addEventListener('mousemove', trigger, { once: true, passive: true });
    window.addEventListener('touchstart', trigger, { once: true, passive: true });
    return () => {
      window.removeEventListener('scroll', trigger);
      window.removeEventListener('mousemove', trigger);
      window.removeEventListener('touchstart', trigger);
    };
  }, []);

  return (
    <Section title="What I believe in" subtitle="Mastery is a journey, not a destination. Despite my deep expertise in quantitative finance and technology, I maintain a student's mindset. My core belief is that constant evolution and daily self-development are the only ways to stay ahead in an ever-changing world—because in the realm of innovation, learning never truly ends." className="px-4">
      <div className="mb-2">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-4" style={{ scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}>
          <div className="snap-center shrink-0 w-full flex items-center justify-center">
            <picture className="flex justify-center">
              <source srcSet={githubSrc} />
              {/* fallback */}
              <img
                alt="GitHub stats"
                src="https://github-stats-alpha.vercel.app/api?username=khalid-naami&cc=fff&tc=000&ic=000&bc=000"
                width={700}
                height={380}
                style={{ width: '700px', height: 'auto', maxWidth: '100%' }}
              />
            </picture>
          </div>
          <div className="snap-center shrink-0 w-full flex items-center justify-center">
            {showChart ? (
              <iframe
                title="GitHub contribution chart"
                src={githubChartSrc}
                loading="lazy"
                style={{
                  width: isDesktop ? '700px' : isTablet ? '500px' : '300px',
                  height: isDesktop ? '380px' : isTablet ? '320px' : '260px',
                  border: 'none',
                  margin: 'auto',
                  maxWidth: '100%',
                }}
              />
            ) : (
              <div style={{ 
                width: isDesktop ? '700px' : isTablet ? '500px' : '300px',
                height: isDesktop ? '380px' : isTablet ? '320px' : '260px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(0,0,0,0.05)',
                borderRadius: '8px',
                maxWidth: '100%',
              }}>
                Interactive chart loads on scroll...
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="text-center mb-4">
        Follow my progress on{' '}
        <a href="https://github.com/khalid-naami" target="_blank" rel="noreferrer">
          GitHub
        </a>
        .
      </p>
    </Section>
  );
}

export default Beliefs; 
