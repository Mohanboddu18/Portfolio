import React, { useState, useEffect } from 'react';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const criticalAssets = [
      './assets/IMG_7926.png',
      './assets/Mohan_Java_Developer.pdf'
    ];

    let loadedCount = 0;
    const totalAssets = criticalAssets.length;

    if (totalAssets === 0) {
      setFadeOut(true);
      setTimeout(() => setHidden(true), 600);
      return;
    }

    const markSettled = () => {
      loadedCount += 1;
      const pct = Math.round((loadedCount / totalAssets) * 100);
      setProgress(pct);
      if (loadedCount >= totalAssets) {
        setFadeOut(true);
        setTimeout(() => setHidden(true), 600);
      }
    };

    criticalAssets.forEach((src) => {
      if (src.endsWith('.pdf')) {
        // PDF fallback timer / loader
        const timer = setTimeout(markSettled, 1000);
        return () => clearTimeout(timer);
      } else {
        const img = new Image();
        img.onload = markSettled;
        img.onerror = markSettled;
        img.src = src;
        if (img.complete) {
          markSettled();
        }
      }
    });
  }, []);

  if (hidden) return null;

  return (
    <div className={`loader-overlay ${fadeOut ? 'fadeOut' : ''}`} id="loader">
      <div className="loader-container">
        <div className="loader-spinner"></div>
        <p className="loader-text">
          Loading <span className="loader-progress">{progress}</span>%
        </p>
        <div className="loader-bar">
          <div
            className="loader-progress-bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
