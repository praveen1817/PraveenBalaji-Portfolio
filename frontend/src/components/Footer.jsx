import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{
      position: 'relative',
      zIndex: 1,
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px',
      background: 'transparent',
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '24px',
      }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
            <polygon points="11,2 21,20 1,20" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none" />
            <line x1="6" y1="14" x2="16" y2="14" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
          </svg>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '12px',
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.5)',
          }}>
            PRAVEEN BALAJI S
          </span>
        </div>

        {/* Center copyright */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          letterSpacing: '0.12em',
          color: 'rgba(255,255,255,0.2)',
          textTransform: 'uppercase',
        }}>
          © {new Date().getFullYear()} — All rights reserved
        </p>

        {/* Social links */}
        <div style={{ display: 'flex', gap: '24px' }}>
          {[
            { href: 'https://github.com/praveen1817', icon: <Github size={15} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/praveenbalaji-s', icon: <Linkedin size={15} />, label: 'LinkedIn' },
            { href: 'mailto:praveen42165@gmail.com', icon: <Mail size={15} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noreferrer"
              aria-label={label}
              style={{
                color: 'rgba(255,255,255,0.25)',
                transition: 'color 0.2s',
                display: 'flex',
                alignItems: 'center',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer > div { flex-direction: column; text-align: center; }
          footer > div > div:last-child { justify-content: center; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
