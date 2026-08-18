import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const roles = ['Data Analyst', 'Full Stack Developer', 'Tech Enthusiast'];
    let roleIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId;

    const tick = () => {
      const current = roles[roleIdx];
      if (!isDeleting) {
        setTypedText(current.slice(0, charIdx + 1));
        charIdx++;
        if (charIdx === current.length) {
          isDeleting = true;
          timeoutId = setTimeout(tick, 1800);
          return;
        }
        timeoutId = setTimeout(tick, 90);
      } else {
        setTypedText(current.slice(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          timeoutId = setTimeout(tick, 400);
          return;
        }
        timeoutId = setTimeout(tick, 50);
      }
    };

    tick();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left content */}
        <div className="hero-left-content reveal">
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span className="status-label">OPEN TO OPPORTUNITIES</span>
          </div>

          <h1 className="hero-serif-title">
            <span className="name-top">Mohan</span>
            <span className="name-bottom-accent">Boddu</span>
          </h1>

          <div className="hero-role-typing">
            <span className="role-text">{typedText}</span>
            <span className="typing-cursor"></span>
          </div>

          <p className="hero-description">
            Computer Science undergrad building fast, reliable web applications — from REST APIs to production dashboards.
          </p>

          <div className="hero-action-buttons">
            <a href="#projects" className="btn-accent-pill">
              View projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a href="#contact" className="btn-dark-pill">
              Hire me
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22 6 12 13 2 6" />
              </svg>
            </a>

            <a
              href="https://github.com/Mohanboddu18"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-circle-icon"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/mohanboddu18/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-circle-icon"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right content image */}
        <div className="hero-right-media reveal">
          <div className="hero-portrait-wrapper">
            <div className="hero-image-card">
              {!imgError ? (
                <img
                  src="./assets/IMG_7926.png"
                  alt="Mohan Boddu"
                  className="hero-portrait-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="hero-portrait-fallback">MB</div>
              )}
            </div>

            {/* Subtle offset outline box behind lower-left corner */}
            <div className="hero-portrait-outline"></div>

            {/* Floating location badge */}
            <div className="hero-floating-badge">
              <span className="badge-tag">BASED IN</span>
              <span className="badge-location">Andhra Pradesh, India</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
