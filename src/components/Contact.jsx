import React from 'react';

export default function Contact({ onOpenModal }) {
  const contactItems = [
    {
      id: 'email',
      label: 'EMAIL',
      value: 'mohanboddu18@gmail.com',
      href: 'mailto:mohanboddu18@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22 6 12 13 2 6" />
        </svg>
      ),
    },
    {
      id: 'phone',
      label: 'PHONE',
      value: '+91 7997102207',
      href: 'tel:+917997102207',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      id: 'location',
      label: 'LOCATION',
      value: 'Narsapur, West Godavari, Andhra Pradesh, India',
      href: 'https://maps.app.goo.gl/2UWfQYJzzWpLyy7n9?g_st=ac',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      id: 'linkedin',
      label: 'LINKEDIN',
      value: 'linkedin.com/in/mohanboddu18',
      href: 'https://www.linkedin.com/in/mohanboddu18/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      id: 'github',
      label: 'GITHUB',
      value: 'github.com/Mohanboddu18',
      href: 'https://github.com/Mohanboddu18',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
  ];

  const handleResumeClick = (e) => {
    e.preventDefault();
    if (onOpenModal) {
      onOpenModal('Mohan Boddu Resume', './assets/Mohan_Boddu_Resume.pdf');
    } else {
      window.open('./assets/Mohan_Boddu_Resume.pdf', '_blank');
    }
  };

  return (
    <section id="contact" className="contact-new-section">
      <div className="contact-new-container">
        {/* Left Column: Stacked Contact Info Cards */}
        <div className="contact-list-col reveal">
          {contactItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="contact-pill-card"
            >
              <div className="pill-icon-box">{item.icon}</div>
              <div className="pill-content">
                <span className="pill-label">{item.label}</span>
                <span className="pill-value">{item.value}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Right Column: Available for work card */}
        <div className="contact-card-col reveal">
          <div className="available-work-card">
            <h2 className="available-heading">
              Available for <span className="italic-accent">work</span>
            </h2>

            <p className="available-desc">
              I reply to every genuine message within a day. Send over the role, the stack and the timeline — I'll tell you honestly whether I'm the right fit.
            </p>

            <div className="available-actions">
              <a href="mailto:mohanboddu18@gmail.com" className="email-me-btn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22 6 12 13 2 6" />
                </svg>
                Email me
              </a>

              <button type="button" onClick={handleResumeClick} className="resume-subtext-btn">
                Or download my résumé
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

