import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import OrbitalRings from '../components/OrbitalRings';

/* ─────────────────────────────────────────────────────────────────
   Rotating words — typewriter style with smooth in/out animation
───────────────────────────────────────────────────────────────── */
const rotatingWords = [
  'Backend Systems',
  'REST APIs',
  'AI Applications',
  'Scalable Code',
  'Node.js Apps',
  'Smart Automation',
];

const RotatingWord = () => {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const timerRef = useRef(null);

  useEffect(() => {
    const word = rotatingWords[index];

    if (isTyping) {
      if (displayed.length < word.length) {
        timerRef.current = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1));
        }, 70);
      } else {
        // Pause at full word, then start erasing
        timerRef.current = setTimeout(() => setIsTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timerRef.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 40);
      } else {
        // Move to next word
        setIndex(i => (i + 1) % rotatingWords.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timerRef.current);
  }, [displayed, isTyping, index]);

  return (
    <span style={{
      color: 'rgba(255,255,255,0.95)',
      position: 'relative',
      display: 'inline-block',
    }}>
      {displayed}
      <span
        style={{
          display: 'inline-block',
          width: '2px',
          height: '0.8em',
          background: 'rgba(255,255,255,0.8)',
          marginLeft: '3px',
          verticalAlign: 'middle',
          animation: 'blink-cursor 0.8s step-end infinite',
        }}
      />
      <style>{`
        @keyframes blink-cursor {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </span>
  );
};

/* ─────────────────────────────────────────────────────────────────
   Word-by-word entrance animation
───────────────────────────────────────────────────────────────── */
const WordReveal = ({ text, delay = 0, style = {} }) => {
  const words = text.split(' ');
  return (
    <span style={{ display: 'inline', ...style }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ display: 'inline-block', marginRight: '0.25em' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
};

/* ─────────────────────────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────────────────────────── */
const Hero = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
        padding: '100px 64px 60px',
        overflow: 'hidden',
      }}
    >
      {/* Corner coordinate labels — hidden on mobile to prevent collision */}
      <div className="hero-corner-left" style={{
        position: 'absolute',
        top: '100px',
        left: '64px',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.2)',
        letterSpacing: '0.1em',
        lineHeight: 2,
      }}>
        <div>LAT 11.0168° N</div>
        <div>LON 76.9558° E</div>
      </div>

      <div className="hero-corner-right" style={{
        position: 'absolute',
        top: '100px',
        right: '64px',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        color: 'rgba(255,255,255,0.2)',
        letterSpacing: '0.1em',
        lineHeight: 2,
        textAlign: 'right',
      }}>
        <div>PORTFOLIO — 2026</div>
        <div style={{ color: '#4ade80' }}>● AVAILABLE</div>
      </div>

      {/* Main two-column layout */}
      <div className="hero-layout-wrapper" style={{
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
      }}>

        {/* ── LEFT: Text content ── */}
        <div className="hero-content" style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '36px' }}
          >
            <span className="alche-tag" style={{ fontSize: '11px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
              Backend-focused Software Developer
            </span>
          </motion.div>

          {/* Big name — word-by-word */}
          <h1 style={{
            fontSize: 'clamp(64px, 9vw, 130px)',
            fontWeight: 300,
            letterSpacing: '-0.04em',
            lineHeight: 0.92,
            marginBottom: '36px',
            fontFamily: 'var(--font-sans)',
            overflow: 'visible',
          }}>
            <WordReveal text="Praveen" delay={0.1} />
            <br />
            <WordReveal
              text="Balaji S"
              delay={0.22}
              style={{ color: 'rgba(255,255,255,0.28)' }}
            />
          </h1>

          {/* Rotating words line */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(14px, 1.8vw, 20px)',
              letterSpacing: '0.04em',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              flexWrap: 'wrap',
            }}
          >
            <span>Building</span>
            <RotatingWord />
          </motion.div>

          {/* Sub description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(13px, 1.4vw, 15px)',
              letterSpacing: '0.05em',
              color: 'rgba(255,255,255,0.55)',
              maxWidth: '480px',
              lineHeight: 1.9,
              marginBottom: '52px',
            }}
          >
            Scalable backend systems, REST APIs, and AI-powered applications.
            Passionate about intelligent automation and clean architectures.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="cta-buttons"
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '64px' }}
          >
            <a href="#projects" className="btn-primary" style={{ fontSize: '12px', padding: '16px 36px' }}>
              <span>View Work</span>
              <ArrowRight size={15} />
            </a>
            <a
              href="https://drive.google.com/file/d/11fP7WdW1wKsfks-9PTv1eDL7uKqbBU3X/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
              style={{ fontSize: '12px', padding: '16px 36px' }}
            >
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="social-links"
            style={{ display: 'flex', gap: '32px' }}
          >
            {[
              { href: 'https://github.com/praveen1817', icon: <Github size={17} />, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/praveenbalaji-s', icon: <Linkedin size={17} />, label: 'LinkedIn' },
              { href: 'mailto:praveen42165@gmail.com', icon: <Mail size={17} />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  color: 'rgba(255,255,255,0.28)',
                  transition: 'color 0.25s',
                  textTransform: 'uppercase',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.85)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.28)'}
              >
                {icon}
                {label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Orbital Rings animation ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ flexShrink: 0 }}
          className="orbital-wrapper"
        >
          <div className="orbital-scaler">
            <OrbitalRings />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.18)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: '1px', height: '44px', background: 'linear-gradient(to bottom, rgba(255,255,255,0.22), transparent)' }}
        />
      </motion.div>

      {/* Left sidebar label */}
      <div style={{
        position: 'absolute',
        left: '18px',
        bottom: '140px',
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        letterSpacing: '0.2em',
        color: 'rgba(255,255,255,0.14)',
        textTransform: 'uppercase',
      }}>
        Portfolio — 2026
      </div>

      <style>{`
        @media (max-width: 900px) {
          /* Hide corner labels to prevent collision with status badge */
          .hero-corner-left,
          .hero-corner-right { display: none !important; }

          /* Stack layout vertically — orbital on top, text below */
          .hero-layout-wrapper {
            flex-direction: column-reverse !important;
            text-align: center;
            gap: 0 !important;
          }
          .hero-content {
            align-items: center !important;
            text-align: center;
            padding-top: 8px;
            position: relative;
            z-index: 2;
          }
          .hero-content p { margin-left: auto; margin-right: auto; }
          .cta-buttons { justify-content: center !important; }
          .social-links { justify-content: center !important; }

          /* Orbital — large, prominent, centered, clipped at bottom so badges don't bleed into text */
          .orbital-wrapper {
            width: 100%;
            height: 360px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            margin-bottom: 24px;
            position: relative;
            z-index: 1;
          }
          .orbital-scaler {
            transform: scale(0.85);
            transform-origin: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          #hero { padding: 110px 20px 80px !important; }
          #hero h1 { font-size: clamp(50px, 13vw, 80px) !important; }
        }

        @media (max-width: 600px) {
          .orbital-wrapper { height: 320px; }
          .orbital-scaler { transform: scale(0.74); }
        }

        @media (max-width: 420px) {
          .orbital-wrapper { height: 280px; }
          .orbital-scaler { transform: scale(0.62); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
