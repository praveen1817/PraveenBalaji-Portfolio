import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(0,0,0,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'all 0.4s ease',
        padding: '0 48px',
      }}
    >
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px',
      }}>

        {/* Logo — full name visible */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
          {/* Geometric A mark */}
          <svg width="24" height="24" viewBox="0 0 22 22" fill="none" style={{ flexShrink: 0 }}>
            <polygon
              points="11,2 21,20 1,20"
              stroke="rgba(255,255,255,0.75)"
              strokeWidth="1.2"
              fill="none"
            />
            <line x1="6" y1="14" x2="16" y2="14" stroke="rgba(255,255,255,0.4)" strokeWidth="0.9" />
            <circle cx="11" cy="11" r="9" stroke="rgba(255,255,255,0.14)" strokeWidth="0.7" />
          </svg>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.92)',
            whiteSpace: 'nowrap',
            fontWeight: 400,
          }}>
            PRAVEEN BALAJI S
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="hidden-mobile">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#contact" className="btn-primary hidden-mobile" style={{ padding: '12px 28px' }}>
          <span>Available for Work</span>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ade80', display: 'inline-block', flexShrink: 0 }} />
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'rgba(255,255,255,0.7)',
            cursor: 'pointer',
            padding: '8px',
            display: 'none',
          }}
          className="mobile-toggle"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mobile-nav"
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '24px 48px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="nav-link"
                  onClick={() => setMenuOpen(false)}
                  style={{ fontSize: '15px', letterSpacing: '0.1em' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .hidden-mobile { display: none !important; }
          .mobile-toggle { display: flex !important; }
          header { padding: 0 24px !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
