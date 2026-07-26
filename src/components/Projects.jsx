import React from 'react';

export default function Projects() {
  const projectsData = [
    {
      title: 'Ekart WebPage',
      date: 'April 2025 - May 2025',
      desc: 'Developed a full-stack E-Commerce (Ekart) website using Angular, Spring Boot, and MySQL. Implemented user authentication, product management, shopping cart, and RESTful APIs for a seamless shopping experience.',
      img: './assets/projects/Ekart_Webpage.png',
      tags: ['Angular', 'Spring Boot', 'MySQL', 'REST APIs'],
      github: 'https://github.com/Mohanboddu18/Ekart-Website',
      demo: 'https://ekart-website.netlify.app/',
    },
    {
      title: 'Expense Tracker',
      date: 'March 2025 - April 2025',
      desc: 'Built an Expense Tracker using HTML, CSS, and JavaScript with transaction management, category-wise expense tracking, financial summaries, and localStorage for offline data persistence.',
      img: './assets/projects/Expense_Tracker.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'localStorage'],
      github: 'https://github.com/Mohanboddu18/Exppense-tracker',
      demo: 'https://expense-tracker-web1.netlify.app/',
    },
  ];

  return (
    <section id="projects">
      <div className="section-header reveal">
        <span className="section-label">What I've Built</span>
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <p className="section-subtext">
          Here are some of my projects I have done lately. Feel free to check them out.
        </p>
        <div className="section-line"></div>
      </div>

      <div className="projects-grid">
        {projectsData.map((project, idx) => (
          <div key={idx} className="project-card reveal">
            <div className="project-img">
              <img src={project.img} alt={project.title} />
            </div>
            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-date">{project.date}</div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <svg viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                    <svg viewBox="0 0 24 24">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
