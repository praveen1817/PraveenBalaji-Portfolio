import React from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    index: '01',
    title: 'AI Stock Analyzer',
    year: '2026',
    category: 'AI / Infrastructure',
    desc: 'Context-aware AI Stock Analyzer that ingests stock-related data, performs intelligent analysis using LLM reasoning and tools, generating actionable market insights through an automated, scalable AI infrastructure.',
    tags: ['LLM', 'AI Infrastructure', 'Python', 'Data Analysis'],
    live: 'https://ai-stock-project.netlify.app/login',
    repo: 'https://github.com/praveen1817/ai-stock-analyser',
  },
  {
    index: '02',
    title: 'Full Stack Food Application',
    year: '2025',
    category: 'Full Stack / Backend',
    desc: 'A complete Full Stack Food Delivery Application built for learning and mastery. Demonstrates full proficiency in backend design, API architecture, and production-grade deployment patterns.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
    live: '#',
    repo: 'https://github.com/praveen1817/food-delivery-application',
  },
  {
    index: '03',
    title: 'Authentication System',
    year: '2026',
    category: 'Security / Backend',
    desc: 'Backend authentication system with Node.js and Express using SQL database. Features protected routes secured via JWT tokens and Bcrypt password hashing for enterprise-grade security.',
    tags: ['Node.js', 'JWT', 'Bcrypt', 'SQL', 'Express'],
    live: '#',
    repo: 'https://github.com/praveen1817/User-Registeration-Authentication',
  },
];

const Projects = () => {
  return (
    <Section
      id="projects"
      label="04 — Projects"
      title="Selected works"
      subtitle="A curated selection of projects demonstrating technical depth and real-world impact."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="alche-card"
            style={{ padding: '48px', cursor: 'pointer' }}
            onClick={() => project.live !== '#' && window.open(project.live, '_blank')}
          >
            <div className="proj-grid" style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr auto',
              gap: '48px',
              alignItems: 'flex-start',
            }}>

              {/* Index */}
              <div>
                <span className="index-num">{project.index}</span>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.2)',
                  marginTop: '8px',
                  letterSpacing: '0.08em',
                }}>
                  {project.year}
                </div>
              </div>

              {/* Content */}
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '16px',
                }}>
                  <h3 style={{
                    fontSize: '22px',
                    fontWeight: 400,
                    color: 'rgba(255,255,255,0.9)',
                    letterSpacing: '-0.02em',
                  }}>
                    {project.title}
                  </h3>
                  <span className="alche-tag">{project.category}</span>
                </div>

                <p style={{
                  fontSize: '14px',
                  lineHeight: 1.8,
                  color: 'rgba(255,255,255,0.4)',
                  fontWeight: 300,
                  maxWidth: '600px',
                  marginBottom: '28px',
                }}>
                  {project.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.tags.map(tag => (
                    <span key={tag} className="skill-pill">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end', paddingTop: '4px' }}>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={e => e.stopPropagation()}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,0.3)',
                    textTransform: 'uppercase',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
                >
                  GitHub <ArrowUpRight size={12} />
                </a>
                {project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={e => e.stopPropagation()}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      letterSpacing: '0.12em',
                      color: 'rgba(255,255,255,0.3)',
                      textTransform: 'uppercase',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.8)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
                  >
                    Live <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .proj-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .proj-grid > div:last-child { align-items: flex-start !important; flex-direction: row !important; }
        }
      `}</style>
    </Section>
  );
};

export default Projects;
