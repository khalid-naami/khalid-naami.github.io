import React from 'react';
import Section from '../common/Section';

function WhoAmI({ level = 2 }) {
  return (
    <Section title="Who am I?" level={level}>
      <div className="text-xl text-center max-w-3xl mx-auto">
        <p>
          <strong>Founder of the <a href="https://x.com/DashboardOption" target="_blank" rel="noopener noreferrer">Dashboard Options</a> project.</strong>
        </p>
      </div>
      
      {/* Mobile/Tablet Version */}
      <div className="md:hidden mt-4">
        <div 
          tabIndex={0}
          role="region"
          aria-label="Profile and platform images"
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 hide-scrollbar"
          style={{ minHeight: '300px', scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="snap-center shrink-0 w-[220px]">
            <img
              className="rounded-xl w-[220px] h-[300px] object-cover"
              src="/img/khalid_profile.webp"
              alt="Khalid Naami - Founder of Dashboard Options"
              width={220}
              height={300}
              style={{ aspectRatio: '220/300' }}
              fetchPriority="high"
            />
          </div>
          <div className="snap-center shrink-0 w-[220px]">
            <img
              className="rounded-xl w-[220px] h-[300px] object-cover"
              src="/img/greeks_anatomy.webp"
              alt="Greeks Options Platform Anatomy"
              width={220}
              height={300}
              style={{ aspectRatio: '220/300' }}
              loading="lazy"
            />
          </div>
          <div className="snap-center shrink-0 w-[220px]">
            <img
              className="rounded-xl w-[220px] h-[300px] object-cover"
              src="/img/khalid_mastermind.webp"
              alt="Strategic Mastermind"
              width={220}
              height={300}
              style={{ aspectRatio: '220/300' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden md:flex items-center content-center mx-auto align-center justify-center sm:flex-nowrap flex-wrap mt-4 gap-4 md:gap-8 mb-4">
        <img
          className="rounded-xl max-h-[300px] w-[220px] object-cover shadow-lg"
          src="/img/khalid_profile.webp"
          alt="Khalid Naami - Founder of Dashboard Options"
          width={220}
          height={300}
          style={{ aspectRatio: '220/300' }}
          fetchPriority="high"
        />
        <img
          className="rounded-xl max-h-[300px] w-[220px] object-cover opacity-90 hover:opacity-100 transition-opacity"
          src="/img/greeks_anatomy.webp"
          alt="Greeks Options Platform Anatomy"
          width={220}
          height={300}
          style={{ aspectRatio: '220/300' }}
          loading="lazy"
        />
        <img
          className="rounded-xl max-h-[300px] w-[220px] object-cover opacity-90 hover:opacity-100 transition-opacity"
          src="/img/khalid_mastermind.webp"
          alt="Strategic Mastermind"
          width={220}
          height={300}
          style={{ aspectRatio: '220/300' }}
          loading="lazy"
        />
      </div>

      <p className="text-center mt-4">
        You can reach me on{' '}
        <a href="https://x.com/khalidnaami0" target="_blank" rel="noopener noreferrer">
          X (@khalidnaami0)
        </a>
        , where I post frequently.
      </p>
    </Section>
  );
}

export default WhoAmI;
