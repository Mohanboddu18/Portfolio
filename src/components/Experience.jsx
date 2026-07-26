import React from 'react';

export default function Experience() {
  return (
    <section id="experience">
      <div className="section-header reveal">
        <span className="section-label">My Journey</span>
        <h2 className="section-title">
          Education &amp; <span>Experience</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="experience-grid reveal">
        <div className="experience-col">
          <h3 className="experience-col-title">Education</h3>
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-header">
                <div className="timeline-title">
                  B.Tech Computer Science &amp; Engineering
                </div>
                <span className="timeline-badge badge-edu">CGPA: 8.02</span>
              </div>
              <div className="timeline-org">
                Swarnandhra College of Engineering and Technology, Narasapuram
              </div>
              <div className="timeline-date">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                July 2024 – Present
              </div>
              <p className="timeline-desc">
                Pursuing Bachelor's in Computer Science and Engineering with a
                focus on software development, data structures, algorithms, and
                full-stack web technologies.
              </p>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-header">
                <div className="timeline-title">Intermediate — MPC</div>
                <span className="timeline-badge badge-edu">90.7%</span>
              </div>
              <div className="timeline-org">
                Aditya Junior College, Narsapur
              </div>
              <div className="timeline-date">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                June 2021 – April 2023
              </div>
              <p className="timeline-desc">
                Completed a two-year Intermediate (MPC) program, building a
                strong foundation in Mathematics, Physics, and Chemistry with
                analytical and problem-solving skills.
              </p>
            </div>

            <div className="timeline-item reveal">
              <div className="timeline-header">
                <div className="timeline-title">
                  10th Class — Secondary Education
                </div>
                <span className="timeline-badge badge-edu">CGPA: 9.5</span>
              </div>
              <div className="timeline-org">
                ST Dominics EM High School, K.P.Palem, West Godavari
              </div>
              <div className="timeline-date">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                2020 – 2021
              </div>
              <p className="timeline-desc">
                Completed secondary education with excellent academic
                performance and consistent top rankings throughout the year.
              </p>
            </div>
          </div>
        </div>

        <div className="experience-col">
          <h3 className="experience-col-title">Professional Experience</h3>
          <div className="timeline">
            <div className="timeline-item reveal">
              <div className="timeline-header">
                <div className="timeline-title">Java Web Developer Intern</div>
                <span className="timeline-badge badge-internship">
                  Internship
                </span>
              </div>
              <div className="timeline-org">
                Swarnandhra College of Engineering and Technology, Narasapuram
              </div>
              <div className="timeline-date">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                December 2025 – March 2026
              </div>
              <ul className="timeline-points">
                <li>
                  Developed a full-stack Student Result Processing System using
                  Java, Spring Boot, Hibernate, MySQL, HTML, CSS, Bootstrap, and
                  JavaScript.
                </li>
                <li>
                  Designed RESTful APIs and implemented CRUD operations for
                  efficient student and result management.
                </li>
                <li>
                  Integrated Hibernate with MySQL for secure data storage,
                  validation, and reliable record retrieval.
                </li>
                <li>
                  Used Git, modular architecture, and responsive UI design to
                  improve scalability, maintainability, and performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
