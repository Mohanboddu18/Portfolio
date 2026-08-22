import React from 'react';

export default function Certifications({ onOpenModal }) {
  const certsData = [
    {
      title: 'Salesforce Certified Agentforce Specialist',
      issuer: 'Salesforce',
      date: '2025',
      pdf: './assets/certifications/AgentforceSpecialist.pdf',
      drive: 'https://drive.google.com/file/d/1TKTVAulnSc0fUB_yfdZX-4qAIvZwQet9/view?pli=1',
    },
    {
      title: 'Java Full Stack Developer Internship',
      issuer: 'EduSkills',
      date: '2025',
      pdf: './assets/certifications/Java_Full_Stack.pdf',
      drive: 'https://drive.google.com/file/d/1J4ke1LaClZJYY7nU0OaoZldJGkJrrODP/view?usp=drive_link',
    },
    {
      title: 'Web Development Internship',
      issuer: 'APEX',
      date: '2025',
      pdf: './assets/certifications/APEX_PALNET_WEB.pdf',
      drive: 'https://drive.google.com/file/d/10kXZXokcwyE3zD43os823p75dMLDCLrj/view',
    },
    {
      title: 'Angular Internship',
      issuer: 'Infosys SpringBoard',
      date: '2026',
      pdf: './assets/certifications/ANGULAR.pdf',
      drive: 'https://drive.google.com/file/d/1PVd4_kYfKuEZU2Zfl1vlhCUm9X2EyQ7z/view?usp=drive_link',
    },
    {
      title: 'Cloud Virtual Internship',
      issuer: 'AWS',
      date: '2025',
      pdf: './assets/certifications/CLOUD_VIRTUAL.pdf',
      drive: 'https://drive.google.com/file/d/1WQ2s4iT77SzGR3CyILHMtpNO3jKb1h3_/view',
    },
  ];

  return (
    <section id="certifications" className="certifications-section">
      <div className="section-container">
        <div className="section-header-pill reveal">
          <span className="section-mono-tag">VERIFIED LEARNING</span>
          <h2 className="section-serif-title">
            Certifications &amp; <span className="title-blue-script">badges</span>
          </h2>
          <p className="section-subtext">
            Credentials from Salesforce, EduSkills, APEX, Infosys SpringBoard and AWS — each one links to the verifiable original.
          </p>
        </div>

        <div className="certs-cards-grid reveal">
          {certsData.map((cert, idx) => (
            <div key={idx} className="cert-card">
              <div className="cert-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3 className="cert-card-title">{cert.title}</h3>
              <div className="cert-card-meta">
                {cert.issuer} · {cert.date}
              </div>
              <div className="cert-card-actions">
                {cert.drive && (
                  <a
                    href={cert.drive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-action-link"
                  >
                    ↗ Verify
                  </a>
                )}
                <button
                  className="cert-action-btn"
                  onClick={() => onOpenModal(cert.title, cert.pdf)}
                >
                  Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
