import React, { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      start += step;
      if (start >= 100) {
        start = 100;
        clearInterval(timer);
        setTimeout(() => setFadeOut(true), 250);
        setTimeout(() => setHidden(true), 850);
      }
      setProgress(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className={`loader-overlay ${fadeOut ? 'fadeOut' : ''}`} id="loader">
      <div className="loader-container">
        {/* Large Minimalist Serif Name matching Image 2 */}
        <h1 className="loader-serif-name">MOHAN BODDU</h1>

        {/* Thin Progress Line + 3-Digit Counter Row matching Image 2 */}
        <div className="loader-progress-row">
          <div className="loader-line-track">
            <div
              className="loader-line-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="loader-counter">
            {String(progress).padStart(3, '0')}
          </span>
        </div>

        {/* PORTFOLIO Sub-tag matching Image 2 */}
        <div className="loader-sub-tag">PORTFOLIO</div>
      </div>
    </div>
  );
}
