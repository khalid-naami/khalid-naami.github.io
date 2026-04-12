import React from 'react';
import { useLocation } from '@docusaurus/router';
import { useThemeConfig } from '@docusaurus/theme-common';
import TickerTape from '../TickerTape';
import PolymarketTape from '../PolymarketTape';

// Suppress TradingView cross-origin errors during development across the whole site
if (typeof window !== 'undefined') {
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

  // Hide the webpack overlay if it still sneaks in
  const style = document.createElement('style');
  style.innerHTML = '#webpack-dev-server-client-overlay { display: none !important; }';
  document.head.appendChild(style);
}

export default function CustomFooter() {
  const location = useLocation();
  const pagesToHideTapes = ['/intelligence', '/blog', '/chat'];

  const shouldShowTapes = !pagesToHideTapes.some((page) =>
    location.pathname.startsWith(page),
  );

  return (
    <div className="mt-4">
      {shouldShowTapes && (
        <>
          <PolymarketTape />
          <TickerTape />
        </>
      )}
      <footer className="bg-[#f8f9fa] dark:bg-[#000] text-[var(--ifm-footer-color)] pb-8">
        <div className="container container-fluid">
          <div className="row flex justify-center items-center">
            <div className="col text-center">
              <h4 className="mb-4">Let's stay in touch.</h4>
              <div className="flex justify-center space-x-4">
                <a href="https://x.com/GamesOfOptions" target="_blank" rel="noreferrer" className="text-black dark:text-white hover:text-ds-blue-primary dark:hover:text-ds-blue-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-label="Twitter">
                    <title>Twitter</title>
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/khalid-naami-a953263bb/" target="_blank" rel="noreferrer" className="text-black dark:text-white hover:text-ds-blue-primary dark:hover:text-ds-blue-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
                    <title>LinkedIn</title>
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/khalid-naami" target="_blank" rel="noreferrer" className="text-[#333] dark:text-[#f5f5f5] hover:text-ds-blue-primary dark:hover:text-ds-blue-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
                    <title>GitHub</title>
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://share.streamlit.io/user/khalidnaami3-wq" target="_blank" rel="noreferrer" className="text-black dark:text-white hover:text-ds-blue-primary dark:hover:text-ds-blue-accent" aria-label="Streamlit">
                  <svg width="24" height="24" viewBox="0 0 128 128" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-label="Streamlit">
                    <title>Streamlit</title>
                    <path d="M 63.992579,72.521325 41.553732,60.660321 2.6034211,40.074058 c -0.035557,-0.03555 -0.1066637,-0.03555 -0.1422174,-0.03555 -1.4221913,-0.675528 -2.87993927,0.746641 -2.3466152,2.168863 l 19.8466965,50.619383 0.0035,0.0109 c 0.02134,0.04994 0.03912,0.09944 0.06046,0.149334 0.814189,1.887956 2.591938,3.054 4.526143,3.512657 0.163538,0.03587 0.280527,0.06782 0.476917,0.107073 0.195451,0.04351 0.46881,0.10282 0.703471,0.120745 0.03912,0.0033 0.07467,0.0033 0.113789,0.0065 h 0.02846 c 0.02841,0.0044 0.05687,0.0044 0.08533,0.0076 h 0.03908 c 0.02491,0.0033 0.05333,0.0033 0.07824,0.0033 h 0.04621 c 0.02846,0.0044 0.05687,0.0044 0.08533,0.0044 v 0 c 25.135232,2.740415 50.493562,2.740415 75.628755,0 v 0 c 0.30207,0 0.59732,-0.0145 0.88147,-0.04263 0.0926,-0.0109 0.18133,-0.02137 0.27051,-0.03195 0.0107,-0.0044 0.0247,-0.0044 0.0354,-0.0076 0.0606,-0.0076 0.12074,-0.01788 0.18133,-0.02857 0.0887,-0.0109 0.17791,-0.02813 0.26666,-0.04612 0.17791,-0.03925 0.25855,-0.06738 0.50004,-0.1506 0.24106,-0.08276 0.64169,-0.22784 0.89214,-0.348585 0.25087,-0.120746 0.42452,-0.236792 0.63444,-0.368201 0.2594,-0.163837 0.50644,-0.331086 0.75689,-0.518812 0.10794,-0.08276 0.18175,-0.135683 0.25983,-0.210351 l -0.0427,-0.02475 z"/>
                    <path d="m 125.44606,40.07457 h -0.0354 L 86.445785,60.660834 108.10586,92.919776 127.90272,42.207855 v -0.07109 c 0.49791,-1.493346 -1.0308,-2.844391 -2.45668,-2.062205"/>
                    <path d="m 66.069117,30.286053 c -0.995816,-1.454191 -3.164512,-1.454191 -4.124488,0 L 41.553817,60.660572 63.992579,72.521761 106.51616,94.995458 c 0.26709,-0.261532 0.48127,-0.516249 0.7074,-0.785468 0.31999,-0.394664 0.61865,-0.817481 0.8819,-1.290639 L 86.445379,60.660572 Z"/>
                  </svg>
                </a>
                <a href="https://cal.com/khnaami" target="_blank" rel="noreferrer" className="text-black dark:text-white hover:text-ds-blue-primary dark:hover:text-ds-blue-accent" aria-label="Book a meeting">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-label="Calendar">
                    <title>Cal.com</title>
                    <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
