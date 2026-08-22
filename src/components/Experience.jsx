import React from 'react';

export default function Experience() {
  const workItems = [
    {
      period: 'DECEMBER 2025 — MARCH 2026',
      title: 'Java Web Developer Intern',
      org: 'Swarnandhra College of Engineering and Technology, Narasapuram',
      points: [
        'Developed a full-stack Student Result Processing System using Java, Spring Boot, Hibernate, MySQL, HTML, CSS, Bootstrap, and JavaScript.',
        'Designed RESTful APIs and implemented CRUD operations for efficient student and result management.',
        'Integrated Hibernate with MySQL for secure data storage, validation, and reliable record retrieval.',
        'Used Git, modular architecture, and responsive UI design to improve scalability, maintainability, and performance.',
      ],
    },
  ];

  const eduItems = [
    {
      period: 'JULY 2024 — PRESENT',
      badge: 'CGPA 8.02',
      title: 'B.Tech, Computer Science & Engineering',
      org: 'Swarnandhra College of Engineering and Technology, Narasapuram',
      desc: "Pursuing Bachelor's in Computer Science and Engineering with a focus on software development, data structures, algorithms, and full-stack web technologies.",
    },
    {
      period: 'JUNE 2021 — APRIL 2023',
      badge: '90.7%',
      title: 'Intermediate — MPC',
      org: 'Aditya Junior College, Narsapur',
      desc: 'Completed a two-year Intermediate (MPC) program, building a strong foundation in Mathematics, Physics, and Chemistry with analytical and problem-solving skills.',
    },
    {
      period: '2020 — 2021',
      badge: 'CGPA 9.5',
      title: '10th Class — Secondary Education',
      org: 'ST Dominics EM High School, K.P.Palem, West Godavari',
      desc: 'Completed secondary education with excellent academic performance and consistent top rankings throughout the year.',
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-container">
        <div className="experience-columns-grid reveal">
          {/* Work Column */}
          <div className="exp-column">
            <div className="exp-column-header">
              <div className="exp-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h2 className="exp-column-title">Work</h2>
            </div>

            <div className="exp-timeline">
              {workItems.map((item, index) => (
                <div key={index} className="exp-timeline-item">
                  <div className="exp-timeline-node"></div>
                  <div className="exp-item-period">{item.period}</div>
                  <h3 className="exp-item-title">{item.title}</h3>
                  <div className="exp-item-org">{item.org}</div>
                  <ul className="exp-item-points">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="exp-column">
            <div className="exp-column-header">
              <div className="exp-icon-box">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h2 className="exp-column-title">Education</h2>
            </div>

            <div className="exp-timeline">
              {eduItems.map((item, index) => (
                <div key={index} className="exp-timeline-item">
                  <div className="exp-timeline-node"></div>
                  <div className="exp-header-row">
                    <span className="exp-item-period">{item.period}</span>
                    <span className="exp-badge">{item.badge}</span>
                  </div>
                  <h3 className="exp-item-title">{item.title}</h3>
                  <div className="exp-item-org">{item.org}</div>
                  <p className="exp-item-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
