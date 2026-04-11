import React from 'react';
import Section from '../common/Section';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function WhoAmI({ isDesktop, isTablet }) {
  return (
    <Section title="Who am I?">
      <div className="text-xl">
        Founder & CEO at
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
                alt="Khalid Naami Profile"
              />
            </div>
            <div>
              <img
                className="rounded-xl max-w-[220px]"
                src="img/greeks_anatomy.png"
                alt="Greeks Options Platform Anatomy"
              />
            </div>
            <div>
              <img
                className="rounded-xl max-w-[220px]"
                src="img/khalid_mastermind.png"
                alt="Khalid Strategic Mastermind"
              />
            </div>
          </Carousel>
        </div>
      ) : (
        <div className="flex items-center content-center mx-auto align-center justify-center sm:flex-nowrap flex-wrap mt-4 gap-4 md:gap-8 mb-4">
          <img
            className="rounded-xl max-h-[250px] md:max-h-[300px] object-cover"
            src="img/greeks_anatomy.png"
            alt="Greeks Options Platform Anatomy"
          />
          <img
            className="rounded-xl max-h-[250px] md:max-h-[300px] object-cover"
            src="img/khalid_profile.jpg"
            alt="Khalid Naami Profile"
          />
          <img
            className="rounded-xl max-h-[250px] md:max-h-[300px] object-cover"
            src="img/khalid_mastermind.png"
            alt="Khalid Strategic Mastermind"
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