import React from 'react';

export default function CtaBanner() {
  return (
    <section className="cta-section">
      <div className="section-container">
        <div className="cta-card reveal">
          <h2 className="cta-title">
            Looking for a developer who <span className="title-blue-script">ships?</span>
          </h2>
          <p className="cta-description">
            I'm open to internships and entry-level software engineering roles. Let's talk about what you're building.
          </p>
          <a href="#contact" className="btn-navy-pill cta-btn">
            Get in touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
