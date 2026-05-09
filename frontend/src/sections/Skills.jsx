import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'Java'],
  },
  {
    category: 'Backend Frameworks & Deployment',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST API', 'React JS', 'Middleware Design','AWS-S3-EC2'],
  },
  {
    category: 'Database & Infrastructure',
    items: [ 'SQL', 'Docker', 'Git', 'Postman', 'Render'],
  },
];

const Skills = () => {
  return (
    <Section
      id="skills"
      label="02 — Skills"
      title="Technical expertise"
      subtitle="Tools and technologies I work with to build robust systems."
    >
      {/* Horizontal divider with label */}
      <div className="grid-skills" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2px',
      }}>
        {skillsData.map((cat, idx) => (
          <motion.div
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="alche-card"
            style={{ padding: '40px 32px' }}
          >
            {/* Category header */}
            <div style={{ marginBottom: '32px' }}>
              <span className="index-num" style={{ display: 'block', marginBottom: '12px' }}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 style={{
                fontSize: '15px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '-0.01em',
              }}>
                {cat.category}
              </h3>
            </div>

            {/* Divider */}
            <div className="alche-divider" style={{ marginBottom: '28px' }} />

            {/* Skills list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {cat.items.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 + i * 0.05 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    letterSpacing: '0.06em',
                    color: 'rgba(255,255,255,0.45)',
                    padding: '6px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    transition: 'color 0.2s',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                >
                  <span>{skill}</span>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', flexShrink: 0 }} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          #skills .grid-skills { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          #skills > div > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
};

export default Skills;
