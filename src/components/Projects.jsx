import React, { useState } from 'react';

export default function Projects() {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (idx) => {
    setImgErrors((prev) => ({ ...prev, [idx]: true }));
  };

  const projectsData = [
    {
      title: 'Banking Management System',
      date: 'JUNE 2026 — JULY 2026',
      desc: 'Developed a full-stack Banking Management System facilitating secure user authentication, account creation, fund transfers, transaction history tracking, and RESTful API integrations.',
      img: './assets/projects/Banking_Management.png',
      tags: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'REST API'],
      github: 'https://github.com/Mohanboddu18/Banking-Management',
      demo: 'https://godavari-banking-management-system.onrender.com/',
    },
    {
      title: 'Cafe Management System',
      date: 'JULY 2026 — AUG 2026',
      desc: 'Built an interactive Cafe Management System featuring digital menu management, table ordering, real-time order tracking, billing generation, and inventory oversight.',
      img: './assets/projects/Cafe_Management.png',
      tags: ['Angular', 'Java', 'Spring Boot', 'MySQL', 'REST API'],
      github: 'https://github.com/Mohanboddu18/Cafe_Management',
      demo: 'https://cafe-management-zjf6.onrender.com/',
    },
    {
      title: 'Ekart WebPage',
      date: 'APRIL 2025 — MAY 2025',
      desc: 'Developed a full-stack E-Commerce (Ekart) website using Angular, Spring Boot, and MySQL. Implemented user authentication, product management, shopping cart, and RESTful APIs.',
      img: './assets/projects/Ekart_Webpage.png',
      tags: ['Angular', 'Spring Boot', 'MySQL', 'REST APIs'],
      github: 'https://github.com/Mohanboddu18/Ekart-Website',
      demo: 'https://ekart-website.netlify.app/',
    },
    {
      title: 'Expense Tracker',
      date: 'MARCH 2025 — APRIL 2025',
      desc: 'Built an Expense Tracker using HTML, CSS, and JavaScript with transaction management, category-wise expense tracking, financial summaries, and localStorage for offline data persistence.',
      img: './assets/projects/Expense_Tracker.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      github: 'https://github.com/Mohanboddu18/Exppense-tracker',
      demo: 'https://expense-tracker-web1.netlify.app/',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-container">
        <div className="section-header-pill reveal">
          <span className="section-mono-tag">WHAT I'VE BUILT</span>
          <h2 className="section-serif-title">
            Selected <span className="title-blue-script">projects</span>
          </h2>
          <p className="section-subtext">
            Full stack applications, dashboards and APIs — each one built end to end, deployed and documented on GitHub. Tap any card to preview it live, right here.
          </p>
        </div>

        <div className="projects-cards-grid reveal">
          {projectsData.map((project, idx) => (
            <div key={idx} className="project-card">
              <div className="project-card-img">
                {!imgErrors[idx] ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    onError={() => handleImgError(idx)}
                  />
                ) : (
                  <div className="project-card-placeholder">
                    <span>{project.title}</span>
                  </div>
                )}
              </div>
              <div className="project-card-body">
                <div className="project-card-date">{project.date}</div>
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.desc}</p>
                <div className="project-card-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-card-links">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link"
                    >
                      View details ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action-link link-secondary"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
