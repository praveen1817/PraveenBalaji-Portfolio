import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BlueprintCanvas from './components/BlueprintCanvas';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';

function App() {
  return (
    <div style={{ minHeight: '100vh', background: '#000', color: '#fff', position: 'relative' }}>
      {/* Blueprint grid background */}
      <div className="blueprint-bg" />

      {/* Animated geometric canvas (Alche Studio A mark) */}
      <BlueprintCanvas />

      {/* Content */}
      <Header />

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
