import React, { useState, useEffect } from 'react';

export default function Header({ activeSection, onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleResumeClick = (e) => {
    e.preventDefault();
    if (onOpenModal) {
      onOpenModal(
        'Mohan Boddu — Resume',
        './assets/Mohan_Java_Developer.pdf'
      );
    } else {
      window.open('./assets/Mohan_Java_Developer.pdf', '_blank');
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-container">
        {/* Left Logo */}
        <a href="#home" className="header-logo">
          <span className="logo-badge">MB</span>
          <span className="logo-text">Mohan Boddu</span>
        </a>

        {/* Desktop Nav Pill Container */}
        <nav className="header-nav-pill">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-pill-item ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action: Resume Pill Button */}
        <div className="header-actions">
          <button
            onClick={handleResumeClick}
            className="btn-resume-pill"
            aria-label="View Resume"
          >
            Résumé
          </button>

          {/* Mobile Hamburger Button */}
          <button
            className={`hamburger-btn ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-dropdown">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`mobile-nav-item ${
                  activeSection === link.id ? 'active' : ''
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={(e) => {
                setMobileMenuOpen(false);
                handleResumeClick(e);
              }}
              className="btn-resume-pill mobile-resume-btn"
            >
              Résumé
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
