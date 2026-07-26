import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import AmbientBackground from './components/AmbientBackground';
import Sidebar from './components/Sidebar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PdfModal from './components/PdfModal';

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const [activeSection, setActiveSection] = useState('home');
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    url: '',
  });

  // Apply theme to documentElement
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Section Observer for Active Navigation Link
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  // Scroll Reveal Observer
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('visible'), i * 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleOpenModal = (title, url) => {
    setModalState({
      isOpen: true,
      title,
      url,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <>
      <Loader />
      <AmbientBackground />

      <MobileNav
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <div className="layout">
        <Sidebar
          activeSection={activeSection}
          theme={theme}
          toggleTheme={toggleTheme}
        />

        <main className="main-content">
          <Hero />
          <About onOpenModal={handleOpenModal} />
          <Experience />
          <Skills />
          <Projects />
          <Certifications onOpenModal={handleOpenModal} />
          <Contact />
          <Footer />
        </main>
      </div>

      <PdfModal
        isOpen={modalState.isOpen}
        title={modalState.title}
        url={modalState.url}
        onClose={handleCloseModal}
      />
    </>
  );
}
