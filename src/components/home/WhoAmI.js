import React from 'react';
import Section from '../common/Section';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function WhoAmI({ level = 2 }) {
  return (
    <Section title="Who am I?" level={level}>
      <div className="text-xl">
        Founder & CEO at Dashboard Options.
      </div>
      
      {/* Mobile/Tablet Version - Hidden on Desktop via CSS */}
      <div className="md:hidden mt-4">
        <div 
          className="flex items-center content-center mx-auto align-center justify-center flex-wrap gap-8 mb-4"
          style={{ minHeight: '300px' }}
        >
          <Carousel
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            dynamicHeight={false}
            renderArrowPrev={(clickHandler, hasPrev) =>
              hasPrev && (
                <button
                  type="button"
                  onClick={clickHandler}
                  className="absolute left-0 z-10 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
              )
            }
            renderArrowNext={(clickHandler, hasNext) =>
              hasNext && (
                <button
                  type="button"
                  onClick={clickHandler}
                  className="absolute right-0 z-10 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )
            }
          >
            <div>
              <img
                className="rounded-xl max-w-[220px]"
                src="/img/khalid_profile.webp"
                alt="Khalid Naami - Founder & CEO"
                width={220}
                height={300}
                style={{ aspectRatio: '220/300' }}
                fetchPriority="high"
              />
            </div>
            <div>
              <img
                className="rounded-xl max-w-[220px]"
                src="/img/greeks_anatomy.webp"
                alt="Greeks Options Platform Anatomy"
                width={220}
                height={220}
                style={{ aspectRatio: '220/220' }}
                loading="lazy"
              />
            </div>
            <div>
              <img
                className="rounded-xl max-w-[220px]"
                src="/img/khalid_mastermind.webp"
                alt="Strategic Mastermind"
                width={220}
                height={220}
                style={{ aspectRatio: '220/220' }}
                loading="lazy"
              />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Desktop Version - Hidden on Mobile via CSS */}
      <div className="hidden md:flex items-center content-center mx-auto align-center justify-center sm:flex-nowrap flex-wrap mt-4 gap-4 md:gap-8 mb-4">
        <img
          className="rounded-xl max-h-[300px] object-cover shadow-lg"
          src="/img/khalid_profile.webp"
          alt="Khalid Naami - Founder & CEO"
          width={220}
          height={300}
          style={{ aspectRatio: '220/300' }}
          fetchPriority="high"
        />
        <img
          className="rounded-xl max-h-[300px] object-cover opacity-90 hover:opacity-100 transition-opacity"
          src="/img/greeks_anatomy.webp"
          alt="Greeks Options Platform Anatomy"
          width={220}
          height={300}
          style={{ aspectRatio: '220/300' }}
          loading="lazy"
        />
        <img
          className="rounded-xl max-h-[300px] object-cover opacity-90 hover:opacity-100 transition-opacity"
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