import React from 'react';
import Section from '../common/Section';

function WhoAmI({ level = 2 }) {
  return (
    <Section title="Who am I?" level={level}>
      <div className="text-xl space-y-4 text-left md:text-center max-w-3xl mx-auto">
        <p>
          <strong>Founder, Owner, & CEO at Dashboard Options.</strong>
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300">
          I am a professional academic writer, specialist, and strategic analyst. As a professional programmer in <strong>Science & Technologies</strong>, I develop critical software systems. My foundational work is anchored in deep academic formation and completed formal studies, particularly in <strong>Global Macroeconomics</strong>. 
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300">
          When writing on <strong>Political Economy and Geopolitics</strong>, I rely on rigorous investigative journalism, utilizing both open-source intelligence (OSINT) and highly specialized intelligence sources. In the realms of <strong>Quantitative Finance, Data Science, and AI</strong>, my analysis is driven by specialized academic expertise, ensuring that all financial models are highly authoritative.
        </p>
        <p className="text-base text-gray-700 dark:text-gray-300">
          As the owner and founder of <strong>Dashboard Options</strong>—a platform dedicated to analyzing live options data across multiple global exchanges—I publish authoritative <strong>Daily Analysis</strong> on trading and markets, driven strictly by quantitative options data.
        </p>
      </div>
      
      {/* Mobile/Tablet Version - Native CSS Scroller for Instant LCP Render (0ms Delay) */}
      <div className="md:hidden mt-4">
        <div 
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 hide-scrollbar"
          style={{ minHeight: '300px', scrollBehavior: 'smooth', WebkitOverflowScrolling: 'touch' }}
        >
          <div className="snap-center shrink-0 w-[220px]">
            <img
              className="rounded-xl w-[220px] h-[300px] object-cover"
              src="/img/khalid_profile.webp"
              alt="Khalid Naami - Founder & CEO"
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

      {/* Desktop Version - Hidden on Mobile via CSS */}
      <div className="hidden md:flex items-center content-center mx-auto align-center justify-center sm:flex-nowrap flex-wrap mt-4 gap-4 md:gap-8 mb-4">
        <img
          className="rounded-xl max-h-[300px] w-[220px] object-cover shadow-lg"
          src="/img/khalid_profile.webp"
          alt="Khalid Naami - Founder & CEO"
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
        <a href="https://x.com/khalidnaami0" target="_blank" rel="noreferrer">
          X
        </a>{' '}
        and{' '}
        <a href="https://www.linkedin.com/in/khalid-naami-a953263bb/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        , where I post frequently.
      </p>
    </Section>
  );
}

export default WhoAmI;