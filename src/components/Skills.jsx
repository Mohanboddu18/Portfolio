import React, { useEffect, useRef } from 'react';

export default function Skills() {
  const containerRef = useRef(null);

  const skillsData = [
    { name: 'Programming', pct: 90, tech: 'C, Java, Python' },
    {
      name: 'Web Development',
      pct: 85,
      tech: 'HTML, CSS, JavaScript, Angular, Java Servlets',
    },
    { name: 'Database', pct: 75, tech: 'MySQL' },
    {
      name: 'Data Analysis',
      pct: 70,
      tech: 'Data Cleaning (Pandas), Data Visualization (Matplotlib, Seaborn)',
    },
    { name: 'Tools & DevOps', pct: 90, tech: 'VS Code, Eclipse, Git, GitHub' },
    {
      name: 'Soft Skills',
      pct: 100,
      tech: 'Problem Solving, Industrious, Growth Oriented, Adaptability',
    },
  ];

  useEffect(() => {
    const bars = containerRef.current?.querySelectorAll('.skill-bar-fill[data-pct]');
    if (!bars) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const pct = entry.target.getAttribute('data-pct');
            entry.target.style.width = pct + '%';
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    bars.forEach((bar) => obs.observe(bar));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section" ref={containerRef}>
      <div className="section-container">
        <div className="section-header-pill reveal">
          <span className="section-mono-tag">WHAT I KNOW</span>
          <h2 className="section-serif-title">
            Skills &amp; <span className="title-blue-script">stack</span>
          </h2>
          <p className="section-subtext">
            The languages, frameworks and tools I use day to day to design, build and deploy applications.
          </p>
        </div>

        <div className="skills-cards-grid reveal">
          {skillsData.map((skill, i) => (
            <div key={i} className="skill-card">
              <div className="skill-card-header">
                <h3 className="skill-card-name">{skill.name}</h3>
                <span className="skill-card-pct">{skill.pct}%</span>
              </div>
              <div className="skill-card-tech">{skill.tech}</div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" data-pct={skill.pct}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
