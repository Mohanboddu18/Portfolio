import React from 'react';

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-header reveal">
        <span className="section-label">Get In Touch</span>
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-inner">
        <div className="contact-cards">
          <div className="contact-card reveal">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <div className="contact-label">Address</div>
              <div className="contact-value">
                <a
                  href="https://maps.app.goo.gl/2UWfQYJzzWpLyy7n9?g_st=ac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Narsapur, West Godavari, Andhra Pradesh, India, 534280.
                </a>
              </div>
            </div>
          </div>

          <div className="contact-card reveal">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.44 2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">
                <a href="tel:+917997102207">+91 7997102207</a>
              </div>
            </div>
          </div>

          <div className="contact-card reveal">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <div className="contact-label">Email</div>
              <div className="contact-value">
                <a href="mailto:mohanboddu18@gmail.com">mohanboddu18@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="contact-card reveal">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div>
              <div className="contact-label">LinkedIn</div>
              <div className="contact-value">
                <a
                  href="https://www.linkedin.com/in/mohanboddu18/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/mohanboddu18
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="map-wrap reveal">
          <iframe
            title="K.P.Palem Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15313.417728021124!2d81.61446725!3d16.35589765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4829007d1cd91b%3A0x4d75766ecd3b520!2sMohan%20Boddu%2018!5e0!3m2!1sen!2sin!4v1784825715470!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
