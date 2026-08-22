import React, { useState } from 'react';

export default function About({ onOpenModal }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about" className="about-section">
      <div className="section-container">
        <div className="section-header-pill reveal">
          <span className="section-mono-tag">GET TO KNOW ME</span>
          <h2 className="section-serif-title">
            About <span className="title-blue-script">me</span>
          </h2>
          <p className="section-subtext">
            A Final Year Engineering graduate specializing in Computer Science, with expertise in Programming, Web app development and Data analysis.
          </p>
        </div>

        <div className="about-grid reveal">
          <div className="about-text-card">
            <p className="about-bio-text">
              A self starter, learner, has strong problem solving skills and has a passion for technology. Previously been a Full stack Java development Intern for 6 months, thus gained hands-on experience. Currently seeking internship and full-time opportunities to improve skills and perform to the best of my abilities to contribute to company growth.
            </p>

            <div className="about-details-grid">
              <div className="detail-item">
                <span className="detail-label">NAME</span>
                <span className="detail-value">Mohan Boddu</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">DATE OF BIRTH</span>
                <span className="detail-value">18-05-2005</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">EMAIL</span>
                <span className="detail-value">mohanboddu18@gmail.com</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">LOCATION</span>
                <span className="detail-value">
                  Narsapur, West Godavari, AP, India
                </span>
              </div>
              <div className="detail-item">
                <span className="detail-label">LANGUAGES</span>
                <span className="detail-value">Telugu, English, Hindi</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">STATUS</span>
                <span className="detail-value">Open to Opportunities</span>
              </div>
            </div>

            <div className="about-actions-row">
              <button
                className="btn-navy-pill"
                onClick={() =>
                  onOpenModal('Mohan Boddu — Resume', './assets/Mohan_Java_Developer.pdf')
                }
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                View Resume
              </button>
              <a
                href="./assets/Mohan_Java_Developer.pdf"
                className="btn-dark-outline-pill"
                download
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          <div className="about-img-card">
            <div className="about-portrait-wrapper">
              {!imgError ? (
                <img
                  src="./assets/IMG_7926.png"
                  alt="Mohan Boddu"
                  className="about-portrait-img"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="about-portrait-fallback">MB</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
