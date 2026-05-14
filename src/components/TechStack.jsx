import { motion } from 'framer-motion'
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiRedux, SiTypescript, SiJavascript, SiTailwindcss, SiNextdotjs, SiGit, SiFirebase, SiFramer } from 'react-icons/si'
import { FiGithub } from 'react-icons/fi'
import { MdVerifiedUser } from 'react-icons/md'

const coreTech = [
  { name: 'React.js', icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { name: 'Express.js', icon: SiExpress, color: '#f7df1e' }, // Yellow as requested
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { name: 'Redux', icon: SiRedux, color: '#764ABC' },
]

const extendedTech = [
  { name: 'GitHub', icon: FiGithub, color: '#ffffff' },
  { name: 'Better Auth', icon: MdVerifiedUser, color: '#00d4ff' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
  { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Git', icon: SiGit, color: '#F05032' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28' },
  { name: 'Framer', icon: SiFramer, color: '#0055FF' },
]

export default function TechStack() {
  return (
    <section id="tech" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Background glow */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800, height: 800,
        background: 'radial-gradient(circle, rgba(0,212,255,0.05), transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%',
      }} />

      <div className="container-lg" style={{ position: 'relative', zIndex: 2 }}>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span className="section-tag">⚡ Arsenal</span>
          <h2 style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
            letterSpacing: '-1px',
          }}>
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '16px auto 0' }}>
            A fusion of modern tools and frameworks used to craft high-performance, futuristic web experiences.
          </p>
        </motion.div>

        {/* Orbit Section */}
        <div style={{
          position: 'relative',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '100px',
        }}>
          {/* Central Logo / Pulse */}
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 100, height: 100,
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(0,212,255,0.2), transparent)',
              border: '1px solid rgba(0,212,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '2rem',
              zIndex: 5,
            }}
          >
            🚀
          </motion.div>

          {/* Core Orbit Icons */}
          {coreTech.map((tech, i) => (
            <motion.div
              key={tech.name}
              style={{
                position: 'absolute',
                width: 64, height: 64,
                borderRadius: '16px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: `0 0 20px ${tech.color}15`,
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
                delay: -i * (20 / coreTech.length),
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear', delay: -i * (20 / coreTech.length) }}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
              >
                <tech.icon size={28} color={tech.color} />
              </motion.div>

              {/* This inner div handles the orbital positioning */}
              <style dangerouslySetInnerHTML={{
                __html: `
                #tech .orbit-item-${i} {
                  transform-origin: 200px center;
                  left: calc(50% - 200px);
                }
              `}} />
            </motion.div>
          ))}

          {/* Custom orbit positioning logic using a wrapper */}
          <div style={{ position: 'absolute', width: '100%', height: '100%', pointerEvents: 'none' }}>
            {coreTech.map((tech, i) => (
              <motion.div
                key={`orbit-${tech.name}`}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: 60, height: 60,
                  marginTop: -30, marginLeft: -30,
                }}
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: -i * (25 / coreTech.length),
                }}
              >
                <motion.div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 160, // Radius of orbit
                    width: 60, height: 60,
                    borderRadius: '15px',
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 30px ${tech.color}20`,
                  }}
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear', delay: -i * (25 / coreTech.length) }}
                >
                  <tech.icon size={26} color={tech.color} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Floating Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '20px',
        }}>
          {extendedTech.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{
                y: -5,
                background: 'rgba(255,255,255,0.06)',
                borderColor: tech.color + '40',
                boxShadow: `0 10px 30px ${tech.color}15`,
              }}
              style={{
                padding: '24px',
                background: 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
            >
              <div style={{
                width: 44, height: 44,
                borderRadius: '12px',
                background: tech.color + '10',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <tech.icon size={22} color={tech.color} />
              </div>
              <span style={{
                fontFamily: 'var(--font-head)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}>{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
