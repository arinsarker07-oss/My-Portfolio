import { motion } from 'framer-motion'
import { FiArrowDown, FiCode, FiZap } from 'react-icons/fi'

/* Floating orb particles */
const orbs = [
  { size: 320, x: '5%', y: '10%', color: 'rgba(0,212,255,0.07)', delay: 0, dur: 8 },
  { size: 250, x: '70%', y: '5%', color: 'rgba(124,58,237,0.09)', delay: 2, dur: 10 },
  { size: 180, x: '80%', y: '60%', color: 'rgba(236,72,153,0.06)', delay: 1, dur: 7 },
  { size: 200, x: '10%', y: '65%', color: 'rgba(0,212,255,0.05)', delay: 3, dur: 9 },
  { size: 120, x: '45%', y: '80%', color: 'rgba(124,58,237,0.07)', delay: 1.5, dur: 6 },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const badges = ['MERN Stack', 'Full-Stack Dev']

/* Sinusoidal zero-gravity float: y + gentle rotation */
const floatVariants = {
  animate: {
    y: [0, -20, -8, -22, 0],
    rotate: [0, -2, 1, 2, 0],
    transition: {
      duration: 6,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background orbs */}
      {orbs.map((orb, i) => (
        <div key={i} style={{
          position: 'absolute',
          width: orb.size,
          height: orb.size,
          left: orb.x,
          top: orb.y,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
          animation: `float-slow ${orb.dur}s ease-in-out ${orb.delay}s infinite`,
          pointerEvents: 'none',
          filter: 'blur(1px)',
        }} />
      ))}

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        animation: 'grid-glow 4s ease-in-out infinite',
      }} />

      {/* ── Two-column layout ── */}
      <div className="container-lg" style={{
        paddingTop: '100px',
        position: 'relative',
        zIndex: 2,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center',
      }}>

        {/* ── LEFT: Text content ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Availability tag */}
          <motion.div variants={itemVariants}>
            <span className="section-tag">
              <FiZap size={12} />
              Available for opportunities
            </span>
          </motion.div>

          {/* Badges */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '28px' }}>
            {badges.map(b => (
              <span key={b} style={{
                padding: '5px 14px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '50px',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                letterSpacing: '0.5px',
              }}>{b}</span>
            ))}
          </motion.div>

          {/* Name */}
          <motion.h1 variants={itemVariants} style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 800,
            fontSize: 'clamp(2.4rem, 5vw, 5rem)',
            lineHeight: 1.05,
            marginBottom: '20px',
            letterSpacing: '-2px',
          }}>
            <span className="gradient-text">Arin Samuel</span>
            <br />
            <span style={{ color: 'var(--text-primary)' }}>Sarker</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={itemVariants} style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 500,
            fontSize: 'clamp(1rem, 2vw, 1.35rem)',
            color: 'var(--text-muted)',
            marginBottom: '16px',
            letterSpacing: '-0.5px',
          }}>
            Building{' '}
            <span className="gradient-text-cyan">Scalable Full-Stack Solutions</span>
            {' '}— one commit at a time.
          </motion.p>

          {/* Description */}
          <motion.p variants={itemVariants} style={{
            fontSize: '1rem',
            color: 'var(--text-muted)',
            maxWidth: '480px',
            lineHeight: 1.8,
            marginBottom: '44px',
          }}>
            Fresher MERN Stack Developer passionate about crafting high-performance web experiences
            with clean architecture and modern JavaScript.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">
              <FiCode size={16} />
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Floating profile image ── */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative', overflow: 'visible' }}
        >
          {/* Decorative blurred ring behind the image */}
          <div style={{
            position: 'absolute',
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.1), rgba(124,58,237,0.08) 50%, transparent 75%)',
            filter: 'blur(30px)',
            pointerEvents: 'none',
          }} />

          {/* Orbit ring decoration */}
          <div style={{
            position: 'absolute',
            width: 360,
            height: 360,
            borderRadius: '50%',
            border: '1px solid rgba(0,212,255,0.12)',
            animation: 'spin-slow 20s linear infinite',
            pointerEvents: 'none',
          }}>
            {/* Ring dot */}
            <div style={{
              position: 'absolute',
              top: -5, left: '50%',
              transform: 'translateX(-50%)',
              width: 10, height: 10,
              borderRadius: '50%',
              background: 'var(--accent-cyan)',
              boxShadow: '0 0 12px var(--glow-cyan)',
            }} />
          </div>

          {/* Floating image wrapper — entire circle floats as one unit */}
          <motion.div
            variants={floatVariants}
            animate="animate"
            style={{ position: 'relative', zIndex: 2 }}
          >
            {/* Radial glow halo behind the circle */}
            <div style={{
              position: 'absolute',
              inset: '-50px',
              borderRadius: '50%',
              background: 'radial-gradient(ellipse at center, rgba(0,212,255,0.2) 0%, rgba(124,58,237,0.15) 45%, transparent 75%)',
              filter: 'blur(28px)',
              pointerEvents: 'none',
              zIndex: -1,
            }} />

            {/* Neon border ring — sits outside the circle */}
            <div style={{
              position: 'absolute',
              inset: '-3px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(0,212,255,0.7), rgba(124,58,237,0.5), rgba(236,72,153,0.4))',
              zIndex: -1,
            }} />

            {/* ── Circular clip container ── */}
            <div style={{
              width: 300,
              height: 300,
              borderRadius: '50%',
              overflow: 'hidden',
              position: 'relative',
              /* Subtle dark glassmorphism background for depth */
              background: 'rgba(8,8,32,0.6)',
              backdropFilter: 'blur(4px)',
            }}>
              <img
                src="/images/my-photo.png"
                alt="Arin Samuel Sarker"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                  display: 'block',
                  userSelect: 'none',
                }}
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />

              {/* Initials fallback — only shows when photo is missing */}
              <div style={{
                display: 'none',
                width: '100%',
                height: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                background: 'linear-gradient(135deg, rgba(0,212,255,0.08), rgba(124,58,237,0.08))',
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
                  fontSize: '0.65rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  marginTop: '8px',
                }}>Arin Samuel</div>
              </div>
            </div>

            {/* Floating status chip */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              style={{
                position: 'absolute',
                bottom: -20,
                left: '50%',
                transform: 'translateX(-50%)',
                whiteSpace: 'nowrap',
                padding: '8px 18px',
                background: 'rgba(0,212,255,0.08)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(0,212,255,0.2)',
                borderRadius: '50px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--accent-cyan)',
              }}
            >
              💻 Open to Work
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          color: 'var(--text-muted)',
          fontSize: '0.7rem',
          fontFamily: 'var(--font-mono)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}
        className="float-anim"
      >
        <span>Scroll</span>
        <FiArrowDown size={14} />
      </motion.div>

      {/* Mobile responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          #home .container-lg {
            grid-template-columns: 1fr !important;
          }
          #home .container-lg > div:last-child {
            order: -1;
            margin-bottom: 20px;
          }
          #home .container-lg > div:last-child > div > div:nth-child(3) {
            width: 220px !important;
            height: 220px !important;
          }
        }
      `}</style>
    </section>
  )
}
