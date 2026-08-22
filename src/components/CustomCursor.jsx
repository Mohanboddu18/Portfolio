import React, { useEffect, useState, useRef } from 'react';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameIdRef = useRef(null);

  useEffect(() => {
    // Hide default cursor on desktop devices with fine pointer
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = target.closest(
        'a, button, input, textarea, select, [role="button"], .project-card, .stat-card, .skill-card, .cert-card, .contact-info-card'
      );
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp loop for the outer cursor ring
    const renderLoop = () => {
      const lerp = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerp;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerp;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameIdRef.current = requestAnimationFrame(renderLoop);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    renderLoop();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glowing Follower Ring */}
      <div
        ref={ringRef}
        className={`custom-cursor-ring ${isHovered ? 'is-hovered' : ''}`}
      />
      {/* Center Solid Glowing Dot */}
      <div
        ref={dotRef}
        className={`custom-cursor-dot ${isHovered ? 'is-hovered' : ''}`}
      />
    </>
  );
}
