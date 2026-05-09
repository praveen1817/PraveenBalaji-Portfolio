import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, label, title, subtitle, children, className = '', centered = false }) => {
  return (
    <section
      id={id}
      className={`alche-section ${className}`}
      style={{ position: 'relative', zIndex: 1 }}
    >
      <div className="section-inner" style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 48px' }}>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '80px', textAlign: centered ? 'center' : 'left' }}
        >
          {label && (
            <div className="section-label" style={{ justifyContent: centered ? 'center' : 'flex-start' }}>
              {label}
            </div>
          )}

          {title && (
            <h2 className="alche-title-sm" style={{ marginBottom: subtitle ? '16px' : 0 }}>
              {title}
            </h2>
          )}

          {subtitle && (
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '15px',
              letterSpacing: '0.04em',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '560px',
              lineHeight: 1.8,
              marginTop: '12px',
              fontWeight: 400,
            }}>
              {subtitle}
            </p>
          )}
        </motion.div>

        {children}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .section-inner { padding: 0 20px !important; }
        }
      `}</style>
    </section>
  );
};

export default Section;
