import React from 'react';
import Section from '../common/Section';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function WhoAmI({ isDesktop, isTablet, level = 2 }) {
  return (
    <Section title="Who am I?" level={level}>
      <div className="text-xl">
        Founder & CEO at Dashboard Options.
      </div>
      {/* Hidden SEO bio - not visible in UI but indexed by search engines */}
      <div className="visually-hidden">
        Specializing in the fusion of Finance AI and Open Source technology, I bridge the gap between complex intermarket analysis and actionable data science. As a strategic quant analyst and financial data provider, I am dedicated to delivering high-precision options data and fundamental insights for the modern trader. 
        Possessing premium financial data for CBOE, OPRA, Deribit, and Binance, I empower market participants with professional-grade analytics.
      </div>
      {!isDesktop ? (
        <div className="flex items-center content-center mx-auto align-center justify-center flex-wrap mt-4 gap-8 mb-4">
          <Carousel
            showThumbs={false}
            showStatus={false}
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
                src="img/khalid_profile.jpg"
                alt="Wolf of Wall Street Spirit - Khalid Naami, Founder & CEO, embodying the philosophy that he who owns the data, owns the market."
              />
            </div>
            <div>
              <img
                className="rounded-xl max-w-[220px]"
                src="img/greeks_anatomy.png"
                alt="Greeks Options Platform Anatomy - A financial data bridge providing real-time technical infrastructure for global exchanges like CBOE, OPRA, Deribit, and Binance."
              />
            </div>
            <div>
              <img
                className="rounded-xl max-w-[220px]"
                src="img/khalid_mastermind.png"
                alt="Strategic Mastermind - Khalid Naami as the architect of the future, controlling the financial game through scientific knowledge and data mastery."
              />
            </div>
          </Carousel>
        </div>
      ) : (
        <div className="flex items-center content-center mx-auto align-center justify-center sm:flex-nowrap flex-wrap mt-4 gap-4 md:gap-8 mb-4">
          <img
            className="rounded-xl max-h-[250px] md:max-h-[300px] object-cover"
            src="img/greeks_anatomy.png"
            alt="Greeks Options Platform Anatomy - A financial data bridge providing real-time technical infrastructure for global exchanges like CBOE, OPRA, Deribit, and Binance."
          />
          <img
            className="rounded-xl max-h-[250px] md:max-h-[300px] object-cover"
            src="img/khalid_profile.jpg"
            alt="Wolf of Wall Street Spirit - Khalid Naami, Founder & CEO, embodying the philosophy that he who owns the data, owns the market."
          />
          <img
            className="rounded-xl max-h-[250px] md:max-h-[300px] object-cover"
            src="img/khalid_mastermind.png"
            alt="Strategic Mastermind - Khalid Naami as the architect of the future, controlling the financial game through scientific knowledge and data mastery."
          />
        </div>
      )}
      <p className="text-center mt-4">
        You can reach me on{' '}
        <a href="https://x.com/GamesOfOptions" target="_blank" rel="noreferrer">
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