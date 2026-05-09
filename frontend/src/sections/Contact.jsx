import React, { useState } from 'react';
import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });
    try {
      await new Promise(r => setTimeout(r, 1200));
      window.location.href = `mailto:praveen42165@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AReply to: ${formData.email}`;
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(prev => ({ ...prev, submitted: false })), 5000);
    } catch {
      setStatus({ submitting: false, submitted: false, error: 'Something went wrong. Please email me directly.' });
    }
  };

  return (
    <Section
      id="contact"
      label="06 — Contact"
      title="Let's collaborate"
      subtitle="Open to backend roles, AI projects, and interesting technical challenges."
    >
      <div className="contact-grid" style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1.4fr',
        gap: '2px',
        alignItems: 'stretch',
      }}>

        {/* Left — info */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="alche-card"
          style={{ padding: '56px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
        >
          <div>
            <span className="index-num" style={{ display: 'block', marginBottom: '40px' }}>Get in Touch</span>

            <h3 style={{
              fontSize: '32px',
              fontWeight: 300,
              color: 'rgba(255,255,255,0.9)',
              letterSpacing: '-0.03em',
              lineHeight: 1.2,
              marginBottom: '24px',
            }}>
              Have a project<br />in mind?
            </h3>

            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '12px',
              lineHeight: 1.8,
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '0.04em',
              maxWidth: '280px',
            }}>
              I'm always open to discussing new opportunities, interesting problems, or just a good conversation about technology.
            </p>
          </div>

          <div style={{ marginTop: '48px' }}>
            <div className="alche-divider" style={{ marginBottom: '32px' }} />
            {[
              { label: 'Email', value: 'praveen42165@gmail.com', href: 'mailto:praveen42165@gmail.com' },
              { label: 'LinkedIn', value: 'praveenbalaji-s', href: 'https://www.linkedin.com/in/praveenbalaji-s' },
              { label: 'GitHub', value: 'praveen1817', href: 'https://github.com/praveen1817' },
            ].map(({ label, value, href }) => (
              <div key={label} style={{ marginBottom: '20px' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.2)',
                  textTransform: 'uppercase',
                  marginBottom: '4px',
                }}>
                  {label}
                </div>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.55)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,255,255,0.9)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="alche-card"
          style={{ padding: '56px 48px' }}
        >
          <span className="index-num" style={{ display: 'block', marginBottom: '40px' }}>Send a Message</span>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="contact-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.3)',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}>
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  disabled={status.submitting}
                  className="alche-input"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.15em',
                  color: 'rgba(255,255,255,0.3)',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={status.submitting}
                  className="alche-input"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label style={{
                display: 'block',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase',
                marginBottom: '10px',
              }}>
                Message
              </label>
              <textarea
                name="message"
                id="contact-message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={status.submitting}
                rows="5"
                className="alche-input"
                placeholder="Hi Praveen, I'd like to discuss..."
                style={{ resize: 'vertical', fontFamily: 'var(--font-sans)' }}
              />
            </div>

            {status.error && (
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#ef4444' }}>
                {status.error}
              </p>
            )}

            {status.submitted && (
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '12px',
                color: '#4ade80',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80', display: 'inline-block' }} />
                Opening email client...
              </div>
            )}

            <button
              type="submit"
              id="contact-submit"
              disabled={status.submitting || status.submitted}
              className="btn-primary"
              style={{ alignSelf: 'flex-start', opacity: (status.submitting || status.submitted) ? 0.5 : 1 }}
            >
              <span>
                {status.submitting ? 'Sending...' : status.submitted ? 'Sent!' : 'Send Message'}
              </span>
              {status.submitting ? <Loader2 size={14} className="animate-spin" /> : <Send size={14} />}
            </button>
          </form>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .contact-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </Section>
  );
};

export default Contact;
