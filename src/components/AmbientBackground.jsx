import React, { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: null, y: null, radius: 160 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const particleCount = Math.floor(Math.min(width, 1400) / 22);
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.4 + 0.6,
      alpha: Math.random() * 0.35 + 0.15,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const maxDistance = 120;
      const mouseMaxDistance = mouse.radius;

      // 1. Draw subtle particle-to-particle constellation connections (decreased line opacity)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            // Decreased line opacity to 0.07 for crystal clear readability
            const lineAlpha = (1 - dist / maxDistance) * 0.07;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // 2. Draw subtle particle-to-mouse cursor connections (decreased line opacity)
      particles.forEach((p) => {
        // Move particles
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around screen edges
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // If mouse is on screen, connect background dots to cursor with clean subtle opacity
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mdist < mouseMaxDistance) {
            // Decreased mouse line opacity to 0.22 for subtle elegant visualization
            const mouseLineAlpha = (1 - mdist / mouseMaxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${mouseLineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();

            // Subtle particle glow near mouse
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius * 1.2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(147, 197, 253, ${Math.min(p.alpha + 0.2, 0.7)})`;
            ctx.fill();
          } else {
            // Standard particle render
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha})`;
            ctx.fill();
          }
        } else {
          // Standard particle render
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${p.alpha})`;
          ctx.fill();
        }
      });

      // 3. Draw subtle soft glowing dot at mouse position on canvas
      if (mouse.x !== null && mouse.y !== null) {
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(96, 165, 250, 0.7)';
        ctx.shadowColor = 'rgba(59, 130, 246, 0.5)';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="ambient-gradient-navy" aria-hidden="true" />
      <canvas
        ref={canvasRef}
        className="constellation-canvas"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 0,
          opacity: 0.55,
        }}
      />
    </>
  );
}
