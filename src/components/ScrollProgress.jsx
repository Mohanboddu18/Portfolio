import React, { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;

      if (documentHeight > windowHeight) {
        const percentage = (scrollTop / (documentHeight - windowHeight)) * 100;
        setScrollWidth(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress-bar"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '3px',
        width: `${scrollWidth}%`,
        background: 'linear-gradient(90deg, #1d4ed8, #3b82f6, #60a5fa)',
        boxShadow: '0 0 12px rgba(59, 130, 246, 0.9)',
        zIndex: 99990,
        transition: 'width 0.1s ease-out',
        pointerEvents: 'none',
      }}
    />
  );
}
