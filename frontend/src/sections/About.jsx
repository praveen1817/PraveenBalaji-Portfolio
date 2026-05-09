import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section
      id="about"
      label="01 — About"
      title="Architect of backend systems"
      subtitle="Building the invisible infrastructure that powers great products."
    >
      <div className="grid-about" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>

        {/* Left — bio text */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p style={{
            fontSize: '18px',
            lineHeight: 1.9,
            color: 'rgba(255,255,255,0.6)',
            marginBottom: '24px',
            fontWeight: 300,
          }}>
            I am a <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>Backend-focused Software Developer</strong> with hands-on experience in Node.js, FastAPI, Express.js, MongoDB, and robust REST API development. Throughout my academic journey and industrial internships, I have cultivated a strong foundation in designing backend logic and database models that scale efficiently.
          </p>
          <p style={{
            fontSize: '18px',
            lineHeight: 1.9,
            color: 'rgba(255,255,255,0.6)',
            fontWeight: 300,
          }}>
            Beyond traditional backend systems, my true passion lies in <strong style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>scalable systems, AI-powered applications, and intelligent automation</strong>. I've built context-aware tools using LLMs to drive actionable insights from data, bridging the gap between standard development and next-generation AI agents.
          </p>

          <div style={{ marginTop: '48px', display: 'flex', gap: '48px' }}>
            {[
              { num: '2+', label: 'Years Building' },
              { num: '3+', label: 'Projects Shipped' },
              { num: '8.03', label: 'CGPA Score' },
            ].map(({ num, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '40px',
                  fontWeight: 400,
                  color: 'var(--white)',
                  letterSpacing: '-0.03em',
                }}>
                  {num}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.3)',
                  textTransform: 'uppercase',
                  marginTop: '4px',
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — capability cards */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}
        >
          {[
            {
              index: '01',
              title: 'Backend Engineering',
              desc: 'Structured backend logic, database modeling, and scalable REST APIs using Node.js, Express, FastAPI.',
            },
            {
              index: '02',
              title: 'AI Integration',
              desc: 'Practical exposure to agent-based applications and leveraging LLMs for automated intelligent systems.',
            },
            {
              index: '03',
              title: 'System Architecture',
              desc: 'Passionate about building intelligent automation, resilient software architectures, and clean code.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="alche-card"
              style={{ padding: '28px 32px', cursor: 'default' }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                <span className="index-num">{item.index}</span>
                <div>
                  <h3 style={{
                    fontSize: '15px',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.9)',
                    marginBottom: '8px',
                    letterSpacing: '-0.01em',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.35)',
                    letterSpacing: '0.02em',
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile responsive override */}
      <style>{`
        @media (max-width: 768px) {
          #about .grid-about { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </Section>
  );
};

export default About;
