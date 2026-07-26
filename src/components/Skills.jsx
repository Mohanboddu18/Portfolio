import React, { useEffect, useRef } from 'react';

export default function Skills() {
  const containerRef = useRef(null);

  const skillsData = [
    { name: 'Programming', pct: 90, tech: 'C, Java, Python' },
    {
      name: 'Web Development',
      pct: 85,
      tech: 'HTML, CSS, JavaScript, Angular.js, Java Servlets',
    },
    { name: 'Database', pct: 75, tech: 'MySQL' },
    {
      name: 'Data Analysis',
      pct: 70,
      tech: 'Data Cleaning (Pandas), Data Visualization (Matplotlib, Seaborn)',
    },
    { name: 'Tools', pct: 90, tech: 'VS Code, Eclipse, Git, GitHub' },
    {
      name: 'Soft skills',
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
      { threshold: 0.3 }
    );

    bars.forEach((bar) => obs.observe(bar));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={containerRef}>
      <div className="section-header reveal">
        <span className="section-label">What I Know</span>
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <div className="section-line"></div>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, i) => (
          <div key={i} className="skill-card reveal">
            <div className="skill-header">
              <span className="skill-name">{skill.name}</span>
              <span className="skill-percent">{skill.pct}%</span>
            </div>
            <div className="skill-tech">{skill.tech}</div>
            <div className="skill-bar-bg">
              <div className="skill-bar-fill" data-pct={skill.pct}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
