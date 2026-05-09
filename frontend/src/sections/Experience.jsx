import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const experiences = [
  {
    index: '01',
    company: 'ST Software Solutions',
    location: 'Tirupur, IN',
    role: 'Full Stack Development Intern',
    period: 'Dec 2026',
    desc: 'Contributed to development of a portfolio website for a civil construction materials company. Gained hands-on experience with production-grade frontend and backend integration.',
  },
  {
    index: '02',
    company: 'ACCENT TECHNO SOFT (ATS)',
    location: 'Coimbatore, IN',
    role: 'Full Stack Development Intern',
    period: 'Dec 2024 — Jan 2025',
    desc: 'Completed full stack development internship, gaining proficiency in Express.js and Node.js while executing assigned production tasks and building REST APIs.',
  },
];

const Experience = () => {
  return (
    <Section
      id="experience"
      label="03 — Experience"
      title="Professional journey"
      subtitle="Industrial internships and real-world development experience."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {experiences.map((exp, i) => (
          <motion.div
            key={exp.index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="alche-card"
            style={{ padding: '48px' }}
          >
            <div className="exp-grid" style={{
              display: 'grid',
              gridTemplateColumns: '120px 1fr 200px',
              gap: '48px',
              alignItems: 'flex-start',
            }}>

              {/* Index + Period */}
              <div>
                <span className="index-num" style={{ display: 'block', marginBottom: '16px' }}>{exp.index}</span>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.3)',
                  lineHeight: 1.6,
                }}>
                  {exp.period}
                </div>
              </div>

              {/* Main content */}
              <div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.9)',
                  letterSpacing: '-0.02em',
                  marginBottom: '8px',
                }}>
                  {exp.role}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '24px',
                }}>
                  {exp.company} — {exp.location}
                </p>
                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.45)',
                  fontWeight: 300,
                  maxWidth: '520px',
                }}>
                  {exp.desc}
                </p>
              </div>

              {/* Status badge */}
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '4px' }}>
                <span className="alche-tag">Internship</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .exp-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .exp-grid > div:last-child { justify-content: flex-start !important; }
        }
      `}</style>
    </Section>
  );
};

export default Experience;
