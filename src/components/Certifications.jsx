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
    <section id="certifications">
      <div className="section-header reveal">
        <span className="section-label">My Achievements</span>
        <h2 className="section-title">
          My <span>Certifications</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="certs-grid">
        {certsData.map((cert, idx) => (
          <div key={idx} className="cert-card reveal">
            <div className="cert-icon">
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <div className="cert-title">{cert.title}</div>
            <div className="cert-meta">
              <span className="cert-issuer">{cert.issuer}</span>
              <span className="cert-date">{cert.date}</span>
            </div>
            <div className="cert-actions">
              <button
                className="cert-btn"
                onClick={() => onOpenModal(cert.title, cert.pdf)}
              >
                <svg viewBox="0 0 24 24">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Preview
              </button>
              <a
                className="cert-btn cert-btn-secondary"
                href={cert.drive}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Original Link
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
