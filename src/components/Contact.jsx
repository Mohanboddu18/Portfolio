import React, { useState } from 'react';

export default function Contact({ onOpenModal }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Direct Email Delivery via FormSubmit AJAX Service to mohanboddu18@gmail.com
      const res = await fetch('https://formsubmit.co/ajax/mohanboddu18@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        // Fallback: mailto link launch
        window.location.href = `mailto:mohanboddu18@gmail.com?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        setSubmitted(true);
      }
    } catch (err) {
      // Fallback: mailto link launch
      window.location.href = `mailto:mohanboddu18@gmail.com?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactCards = [
    {
      label: 'EMAIL',
      value: 'mohanboddu18@gmail.com',
      link: 'mailto:mohanboddu18@gmail.com',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      ),
    },
    {
      label: 'PHONE',
      value: '+91 7997102207',
      link: 'tel:+917997102207',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
    {
      label: 'LOCATION',
      value: 'Narsapur, West Godavari, Andhra Pradesh, India',
      link: null,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      label: 'LINKEDIN',
      value: 'linkedin.com/in/mohanboddu18',
      link: 'https://www.linkedin.com/in/mohanboddu18/',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      label: 'GITHUB',
      value: 'github.com/Mohanboddu18',
      link: 'https://github.com/Mohanboddu18',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        {/* Contact Title Header */}
        <div className="contact-header reveal">
          <span className="section-mono-tag">GET IN TOUCH</span>
          <h2 className="contact-main-title">
            Let's build <span className="title-blue-script">something</span>
          </h2>
          <p className="contact-sub-title">
            Open to internships, entry-level engineering roles and freelance builds. The fastest way to reach me is email.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="contact-grid reveal">
          {/* Left Info Cards */}
          <div className="contact-info-column">
            {contactCards.map((card, idx) => (
              <div className="contact-info-card" key={idx}>
                <div className="contact-card-icon">{card.icon}</div>
                <div className="contact-card-content">
                  <div className="card-label">{card.label}</div>
                  {card.link ? (
                    <a
                      href={card.link}
                      target={card.link.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      className="card-value-link"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <div className="card-value">{card.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right Form Card */}
          <div className="contact-form-card">
            <h3 className="form-card-title">
              Available for <span className="title-blue-script">work</span>
            </h3>
            <p className="form-card-sub">
              Send it straight from here — role, stack and timeline. I reply to every genuine message within a day.
            </p>

            {submitted ? (
              <div className="contact-success-alert">
                <p style={{ fontSize: '1.05rem', fontWeight: 600 }}>✓ <strong>Message sent successfully!</strong></p>
                <p style={{ marginTop: '8px' }}>
                  Thank you for reaching out. We’ve received your message and will respond to you <strong>within 24 hours</strong>.
                </p>
                <p style={{ marginTop: '6px', opacity: 0.9 }}>Please check your inbox for our reply.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row-grid">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject (optional)"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell me about the role, stack and timeline..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn-send-message" disabled={isSubmitting}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  {isSubmitting ? 'Sending message...' : 'Send message'}
                </button>

                <div className="form-sub-links">
                  <a href="mailto:mohanboddu18@gmail.com" className="sub-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22 6 12 13 2 6" />
                    </svg>
                    Or email me directly
                  </a>
                  <a
                    href="./assets/Mohan_Java_Developer.pdf"
                    download="Mohan_Java_Developer.pdf"
                    className="sub-link-btn"
                  >
                    Download résumé
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
