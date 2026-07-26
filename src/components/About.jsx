import React, { useState } from 'react';

export default function About({ onOpenModal }) {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="about">
      <div className="section-header reveal">
        <span className="section-label">Get To Know Me</span>
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="about-inner">
        <div className="about-text reveal">
          <p>
            A Final Year Engineering graduate specializing in Computer Science,
            with expertise in Programming, Web app development and Data analysis.
            Previously been a Full stack Java development Intern for 6 months, thus
            gained hands-on experience. A self starter, learner, has strong problem
            solving skills and has a passion for technology. Currently seeking for
            internship opportunities to improve skills and perform to the best of
            my abilities and to be a part of company growth.
          </p>

          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Name</span>
              <span className="detail-value">Mohan Boddu</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Date of Birth</span>
              <span className="detail-value">18-05-2005</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email</span>
              <span className="detail-value">mohanboddu18@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location</span>
              <span className="detail-value">
                Narsapur, West Godavari, Andhra Pradesh, India, 534280.
              </span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Languages</span>
              <span className="detail-value">Telugu, English, Hindi</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Status</span>
              <span className="detail-value">Open to Opportunities</span>
            </div>
          </div>

          <div className="about-actions">
            <button
              className="btn-primary"
              onClick={() =>
                onOpenModal('My Resume', './assets/Mohan_Java_Developer.pdf')
              }
            >
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: '16px',
                  height: '16px',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: 2,
                }}
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              View Resume
            </button>
            <a
              href="./assets/Mohan_Java_Developer.pdf"
              className="btn-outline"
              download
            >
              <svg
                viewBox="0 0 24 24"
                style={{
                  width: '16px',
                  height: '16px',
                  fill: 'none',
                  stroke: 'currentColor',
                  strokeWidth: 2,
                }}
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download Resume
            </a>
          </div>
        </div>

        <div className="about-img-col reveal">
          <div className="about-photo">
            {!imgError ? (
              <img
                src="./assets/IMG_7926.png"
                loading="eager"
                alt="Mohan Boddu portrait"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="about-photo-placeholder">MB</div>
            )}
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-num">3+</div>
              <div className="stat-label">Projects</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">5+</div>
              <div className="stat-label">Certifications</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">1+</div>
              <div className="stat-label">Internship</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
