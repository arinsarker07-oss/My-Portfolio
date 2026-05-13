import { motion } from 'framer-motion'
import { FiCode, FiLayers, FiZap, FiCpu } from 'react-icons/fi'

const traits = [
  { icon: FiCode,   label: 'Clean Code',        desc: 'Readable, maintainable, and well-structured code first.' },
  { icon: FiLayers, label: 'Full-Stack',         desc: 'Comfortable across the entire JavaScript ecosystem.' },
  { icon: FiZap,    label: 'Performance-First',  desc: 'Optimized APIs and lean frontend bundles.' },
  { icon: FiCpu,    label: 'Architecture',       desc: 'Scalable systems designed to grow with the product.' },
]

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Background glow */}
      <div style={{
        position: 'absolute', left: '50%', bottom: 0,
        transform: 'translateX(-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(0,212,255,0.04), transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container-lg" style={{ position: 'relative', zIndex: 2 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <span className="section-tag">👤 About</span>
          <h2 style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-1px',
          }}>
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}>

          {/* Left: Avatar + floating card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative' }}>
              {/* Avatar frame */}
              <motion.div
                className="float-anim-slow"
                style={{
                  width: 280,
                  height: 280,
                  borderRadius: '30px',
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
                  border: '1px solid rgba(0,212,255,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 0 60px rgba(0,212,255,0.15)',
                }}
              >
                <img
                  src="/images/my-photo.png"
                  alt="Arin Samuel Sarker"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    e.currentTarget.nextSibling.style.display = 'flex'
                  }}
                />
                {/* Initials fallback */}
                <div style={{
                  display: 'none',
                  position: 'relative',
                  textAlign: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-head)',
                    fontWeight: 900,
                    fontSize: '5rem',
                    lineHeight: 1,
                    background: 'linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>AS</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    marginTop: '8px',
                  }}>Arin Samuel</div>
                </div>
              </motion.div>

              {/* Floating stat chips */}
              <motion.div
                className="float-anim"
                style={{
                  position: 'absolute', top: -16, right: -24,
                  padding: '10px 16px',
                  background: 'rgba(0,212,255,0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(0,212,255,0.2)',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--accent-cyan)',
                  whiteSpace: 'nowrap',
                }}
              >
                💻 MERN Developer
              </motion.div>

              <motion.div
                className="float-anim-delay"
                style={{
                  position: 'absolute', bottom: -16, left: -24,
                  padding: '10px 16px',
                  background: 'rgba(124,58,237,0.08)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(124,58,237,0.2)',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: '#a78bfa',
                  whiteSpace: 'nowrap',
                }}
              >
                ⚡ JavaScript Enthusiast
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              fontSize: '1.8rem',
              marginBottom: '20px',
              letterSpacing: '-0.5px',
            }}>
              Hi, I'm{' '}
              <span className="gradient-text-cyan">Arin Samuel Sarker</span>
            </h3>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '18px', fontSize: '0.95rem' }}>
              I'm a <strong style={{ color: 'var(--text-primary)' }}>Fresher MERN Stack Developer</strong> with a deep
              passion for JavaScript and building full-stack web applications from the ground up. I believe great
              software starts with clean architecture and a user-first mindset.
            </p>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '18px', fontSize: '0.95rem' }}>
              My journey into development started with curiosity — pulling apart websites to understand how they worked.
              Today, I bring that same curiosity to every project, whether it's designing RESTful APIs,
              building responsive React UIs, or managing data pipelines in MongoDB.
            </p>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '36px', fontSize: '0.95rem' }}>
              I'm currently seeking opportunities where I can contribute, grow, and continue pushing the boundaries
              of what's possible with the{' '}
              <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>JavaScript ecosystem</span>.
            </p>

            {/* Trait pills */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}>
              {traits.map(({ icon: Icon, label, desc }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4, boxShadow: '0 8px 24px rgba(0,212,255,0.15)' }}
                  style={{
                    padding: '14px 16px',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <Icon size={14} color="var(--accent-cyan)" />
                    <span style={{ fontFamily: 'var(--font-head)', fontWeight: 600, fontSize: '0.85rem' }}>{label}</span>
                  </div>
                  <p style={{ fontSize: '0.76rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about .container-lg > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
