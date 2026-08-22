import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const roles = ['Full Stack Developer', 'Java Developer', 'Data Analyst', 'Tech Enthusiast'];
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
          timeoutId = setTimeout(tick, 2000);
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

  const stats = [
    { value: '5+', label: 'PROJECTS SHIPPED' },
    { value: '5', label: 'CERTIFICATIONS' },
    { value: '6 mo', label: 'INTERNSHIP' },
    { value: '8.02', label: 'CGPA' },
  ];

  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        {/* Left Hero Content */}
        <div className="hero-left-content reveal">
          <div className="hero-status-pill">
            <span className="status-dot"></span>
            <span className="status-label">OPEN TO OPPORTUNITIES</span>
          </div>

          <h1 className="hero-serif-title">
            <span className="name-white">Mohan</span>
            <span className="name-blue-italic">Boddu</span>
          </h1>

          <div className="hero-role-typing">
            <span className="role-text">{typedText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            Computer Science undergrad building fast, reliable web applications — from REST APIs to production dashboards.
          </p>

          <div className="hero-action-buttons">
            <a href="#projects" className="btn-navy-pill">
              View projects
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>

            <a href="#contact" className="btn-dark-outline-pill">
              Hire me
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22 6 12 13 2 6" />
              </svg>
            </a>

            <a
              href="https://github.com/Mohanboddu18"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-circle-social"
              aria-label="GitHub"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/mohanboddu18/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-circle-social"
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Hero Media Wrapper - Exact Demo Code Structure */}
        <div className="hero-right-media reveal">
          <div className="hero-portrait-relative">
            {/* Main Portrait Card (rounded-3xl surface-card aspect-[4/5]) */}
            <div className="hero-portrait-card">
              <div className="portrait-image-wrapper">
                {!imgError ? (
                  <img
                    src="./assets/IMG_7926.png"
                    alt="Portrait of Mohan Boddu, full stack developer"
                    className="hero-portrait-img"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="hero-portrait-fallback">MB</div>
                )}
              </div>
            </div>

            {/* Offset Floating Corner Box (-bottom-6 -left-6 -z-10 h-32 w-32 rounded-2xl border border-primary/20) */}
            <div className="hero-floating-corner-box"></div>

            {/* Floating Location Badge (surface-card absolute -bottom-5 left-4 rounded-2xl px-4 py-3 backdrop-blur-xl) */}
            <div className="hero-location-badge">
              <p className="badge-sub">Based in</p>
              <p className="badge-main">Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Bottom Stats Grid */}
      <div className="hero-stats-grid reveal">
        {stats.map((item, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
