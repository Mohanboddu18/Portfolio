import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const roles = ['Dev', 'Data Analyst', 'Tech Enthusiast'];
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
    <section id="home">
      <div className="hero-glow"></div>
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="dot"></span>
            Welcome to my portfolio
          </div>
          <h1 className="hero-heading">
            Hi, I'm<br />
            <span className="name">Mohan Boddu</span>
          </h1>
          <p className="hero-typing">
            I'm a <span className="role">{typedText}</span>
            <span className="cursor"></span>
          </p>
          <p className="hero-desc">
            I build modern, scalable web applications and RESTful APIs.
            Passionate about solving complex problems with clean, efficient code.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn-primary">
              View Projects
              <svg viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo">
            {!imgError ? (
              <img
                src="./assets/IMG_7926.png"
                loading="eager"
                alt="Mohan Boddu"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="hero-photo-initials">MB</div>
            )}
          </div>
          <div className="hero-photo-decoration"></div>
        </div>
      </div>
    </section>
  );
}
