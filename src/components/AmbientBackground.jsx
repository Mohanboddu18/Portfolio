import React, { useEffect } from 'react';

export default function AmbientBackground() {
  useEffect(() => {
    let lastScroll = window.scrollY;
    let rotation = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const diff = currentScroll - lastScroll;
      lastScroll = currentScroll;
      rotation += diff * 0.15;
      document.documentElement.style.setProperty('--ambient-rotation', rotation + 'deg');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="ambient-gradient" aria-hidden="true"></div>;
}
