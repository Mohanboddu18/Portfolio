import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import AmbientBackground from './components/AmbientBackground';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import PdfModal from './components/PdfModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    url: '',
  });

  // Default theme is dark navy luxury aesthetic matching demo images
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

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
      { rootMargin: '-30% 0px -50% 0px', threshold: 0 }
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
            setTimeout(() => entry.target.classList.add('visible'), i * 60);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
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
      <ScrollProgress />
      <CustomCursor />
      <Header activeSection={activeSection} onOpenModal={handleOpenModal} />

      <main className="main-app-content">
        <Hero />
        <About onOpenModal={handleOpenModal} />
        <Projects />
        <Experience />
        <Skills />
        <Certifications onOpenModal={handleOpenModal} />
        <Contact onOpenModal={handleOpenModal} />
        <CtaBanner />
        <Footer />
      </main>

      <PdfModal
        isOpen={modalState.isOpen}
        title={modalState.title}
        url={modalState.url}
        onClose={handleCloseModal}
      />
    </>
  );
}
