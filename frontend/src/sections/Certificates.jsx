import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const certificates = [
  { name: 'Business Intelligence & Analytics', issuer: 'NPTEL' },
  { name: 'Azure Fundamentals', issuer: 'Microsoft' },
  { name: 'Java Programming', issuer: 'PrepInsta' },
  { name: 'React JS', issuer: 'Udemy' },
  { name: 'Enterprise Design Thinking', issuer: 'IBM' },
  { name: 'Product Management', issuer: 'MBA' },
  { name: 'Java', issuer: 'GreatLearning' },
];

const Certificates = () => {
  return (
    <Section
      id="certificates"
      label="05 — Education"
      title="Credentials & learning"
      subtitle="Academic foundation and continuous professional development."
    >
      <div className="cert-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '2px',
      }}>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="alche-card corner-mark"
          style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <span className="index-num" style={{ display: 'block', marginBottom: '32px' }}>01</span>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.2em',
              color: 'rgba(255,255,255,0.25)',
              textTransform: 'uppercase',
              marginBottom: '16px',
            }}>
              2022 — 2026
            </div>

            <h3 style={{
              fontSize: '24px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '-0.02em',
              lineHeight: 1.3,
              marginBottom: '12px',
            }}>
              Bachelor of Computer<br />Science & Design
            </h3>

            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              letterSpacing: '0.06em',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '32px',
            }}>
              SNS College of Engineering
            </p>
          </div>

          <div>
            <div className="alche-divider" style={{ marginBottom: '24px' }} />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.25)',
                textTransform: 'uppercase',
              }}>
                CGPA
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '28px',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.85)',
                letterSpacing: '-0.03em',
              }}>
                8.03
              </span>
            </div>
          </div>
        </motion.div>

        {/* Certificates Grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="alche-card"
          style={{ padding: '56px 48px' }}
        >
          <span className="index-num" style={{ display: 'block', marginBottom: '32px' }}>02</span>

          <h3 style={{
            fontSize: '18px',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.85)',
            letterSpacing: '-0.01em',
            marginBottom: '32px',
          }}>
            Professional Certificates
          </h3>

          <div className="alche-divider" style={{ marginBottom: '24px' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {certificates.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  cursor: 'default',
                  transition: 'background 0.2s',
                }}
              >
                <span style={{
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.82)',
                  letterSpacing: '-0.01em',
                }}>
                  {cert.name}
                </span>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  flexShrink: 0,
                  marginLeft: '16px',
                }}>
                  {cert.issuer}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .cert-grid {
            grid-template-columns: 1fr !important;
          }
          .cert-grid .alche-card {
            padding: 32px 20px !important;
          }
        }
      `}</style>
    </Section>
  );
};

export default Certificates;
