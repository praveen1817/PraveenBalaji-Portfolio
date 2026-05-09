import React from 'react';

/**
 * OrbitalRings — CSS-only orbital rotation animation
 * Three concentric rings with skill badges orbiting the center "P" mark.
 * Brighter borders and badges for better mobile visibility.
 */
const OrbitalRings = () => {
  const skills1 = ['Node.js', 'Python', 'MongoDB'];
  const skills2 = ['FastAPI', 'React', 'Docker', 'SQL'];
  const skills3 = ['Express', 'REST API', 'Git', 'AI/LLM', 'JWT'];

  return (
    <div
      style={{
        position: 'relative',
        width: '440px',
        height: '440px',
        flexShrink: 0,
      }}
    >
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes counter-cw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(-360deg); }
        }
        @keyframes counter-ccw {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .ring1 { animation: orbit-cw 18s linear infinite; }
        .ring2 { animation: orbit-ccw 24s linear infinite; }
        .ring3 { animation: orbit-cw 32s linear infinite; }

        .ring1 .badge { animation: counter-cw 18s linear infinite; }
        .ring2 .badge { animation: counter-ccw 24s linear infinite; }
        .ring3 .badge { animation: counter-cw 32s linear infinite; }

        /* Orbital badge glow pulse */
        @keyframes badge-glow {
          0%, 100% { box-shadow: 0 0 6px rgba(255,255,255,0.08); }
          50%       { box-shadow: 0 0 14px rgba(255,255,255,0.2); }
        }
        .badge {
          animation-delay: 0ms;
        }
        .ring1 .badge { animation: counter-cw 18s linear infinite, badge-glow 3s ease-in-out infinite; }
        .ring2 .badge { animation: counter-ccw 24s linear infinite, badge-glow 4s ease-in-out infinite; }
        .ring3 .badge { animation: counter-cw 32s linear infinite, badge-glow 5s ease-in-out infinite; }
      `}</style>

      {/* Ring 3 — outermost */}
      <Ring
        className="ring3"
        radius={210}
        badges={skills3}
        borderColor="rgba(255,255,255,0.22)"
        badgeColor="rgba(255,255,255,0.10)"
        textColor="rgba(255,255,255,0.75)"
      />

      {/* Ring 2 — middle */}
      <Ring
        className="ring2"
        radius={150}
        badges={skills2}
        borderColor="rgba(255,255,255,0.28)"
        badgeColor="rgba(255,255,255,0.12)"
        textColor="rgba(255,255,255,0.82)"
      />

      {/* Ring 1 — innermost */}
      <Ring
        className="ring1"
        radius={90}
        badges={skills1}
        borderColor="rgba(255,255,255,0.38)"
        badgeColor="rgba(255,255,255,0.15)"
        textColor="rgba(255,255,255,0.92)"
      />

      {/* Center mark */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '76px',
        height: '76px',
        border: '1px solid rgba(255,255,255,0.45)',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(255,255,255,0.06)',
        boxShadow: '0 0 30px rgba(255,255,255,0.08)',
        zIndex: 10,
      }}>
        {/* Inner dot */}
        <div style={{
          width: '34px',
          height: '34px',
          border: '1px solid rgba(255,255,255,0.55)',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <svg width="16" height="16" viewBox="0 0 22 22" fill="none">
            <polygon points="11,2 21,20 1,20" stroke="rgba(255,255,255,0.95)" strokeWidth="1.5" fill="none" />
            <line x1="6" y1="14" x2="16" y2="14" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Ring = ({ className, radius, badges, borderColor, badgeColor, textColor }) => {
  const size = radius * 2;
  const center = 220; // half of 440px container

  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        top: `${center - radius}px`,
        left: `${center - radius}px`,
        width: `${size}px`,
        height: `${size}px`,
        border: `1px solid ${borderColor}`,
        borderRadius: '50%',
      }}
    >
      {badges.map((badge, i) => {
        const angle = (360 / badges.length) * i;
        const rad = (angle * Math.PI) / 180;
        // Position badge on the ring circumference
        const bx = radius + Math.cos(rad) * radius;
        const by = radius + Math.sin(rad) * radius;

        return (
          <div
            key={badge}
            className="badge"
            style={{
              position: 'absolute',
              top: `${by}px`,
              left: `${bx}px`,
              transform: 'translate(-50%, -50%)',
              padding: '5px 12px',
              background: badgeColor,
              border: '1px solid rgba(255,255,255,0.3)',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.1em',
              color: textColor,
              whiteSpace: 'nowrap',
              userSelect: 'none',
              backdropFilter: 'blur(4px)',
            }}
          >
            {badge}
          </div>
        );
      })}
    </div>
  );
};

export default OrbitalRings;
