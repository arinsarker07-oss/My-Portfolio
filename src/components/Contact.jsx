import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'

const socials = [
  {
    id: 'github',
    icon: FiGithub,
    label: 'GitHub',
    handle: 'arinsarker07-oss',
    href: 'https://github.com/arinsarker07-oss',
    color: '#ffffff',
    bg: 'rgba(255,255,255,0.05)',
    border: 'rgba(255,255,255,0.1)',
    glow: 'rgba(255,255,255,0.15)',
    desc: 'Check out my repositories & open source work.',
  },
  {
    id: 'linkedin',
    icon: FiLinkedin,
    label: 'LinkedIn',
    handle: 'Arin Sarker',
    href: 'https://www.linkedin.com/in/arin-sarker/',
    color: '#0A66C2',
    bg: 'rgba(10,102,194,0.08)',
    border: 'rgba(10,102,194,0.25)',
    glow: 'rgba(10,102,194,0.3)',
    desc: 'Connect with me professionally.',
  },
  {
    id: 'email',
    icon: FiMail,
    label: 'Email',
    handle: 'arinsarker07@gmail.com',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=arinsarker07@gmail.com&su=Contacting+from+Portfolio',
    color: '#00d4ff',
    bg: 'rgba(0,212,255,0.06)',
    border: 'rgba(0,212,255,0.2)',
    glow: 'rgba(0,212,255,0.3)',
    desc: 'Drop me a message anytime.',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="section-pad flex flex-col items-center" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 400,
        background: 'radial-gradient(ellipse, rgba(124,58,237,0.07), transparent 70%)',
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
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <span className="section-tag">📬 Connect</span>
          <h2 style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-1px',
            marginBottom: '16px',
          }}>
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto' }}>
            I'm open to freelance projects, full-time roles, and interesting collaborations.
            Reach out — I'd love to chat!
          </p>
        </motion.div>

        {/* CTA Glass Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            maxWidth: '700px',
            margin: '0 auto 64px',
            padding: '48px',
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(30px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Inner glow */}
          <div style={{
            position: 'absolute', top: 0, left: '50%',
            transform: 'translateX(-50%)',
            width: 200, height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.5), transparent)',
          }} />

          <div style={{
            width: 72, height: 72,
            borderRadius: '20px',
            background: 'linear-gradient(135deg, rgba(0,212,255,0.15), rgba(124,58,237,0.15))',
            border: '1px solid rgba(0,212,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
            fontSize: '2rem',
          }}>
            🚀
          </div>

          <h3 style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 700,
            fontSize: '1.6rem',
            marginBottom: '12px',
            letterSpacing: '-0.5px',
          }}>
            Ready to build something <span className="gradient-text-cyan">great?</span>
          </h3>

          <p style={{
            color: 'var(--text-muted)',
            marginBottom: '32px',
            lineHeight: 1.75,
            fontSize: '0.95rem',
          }}>
            Whether you have a project in mind or just want to connect,
            I'm always open to new opportunities.
          </p>

          <motion.a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=arinsarker07@gmail.com&su=Contacting+from+Portfolio'
            className="btn-primary"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{ display: 'inline-flex' }}
          >
            <FaDownload size={16} />
            Download Resume
          </motion.a>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-6 w-full px-4 max-w-[1200px] mx-auto">
          {socials.map(({ id, icon: Icon, label, handle, href, color, bg, border, glow, desc }, i) => (
            <motion.a
              key={id}
              href={href}
              target={id === 'email' ? undefined : "_blank"}
              rel={id === 'email' ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{
                y: -8,
                boxShadow: `0 20px 40px ${glow}`,
                borderColor: color,
              }}
              style={{
                display: 'block',
                padding: '24px',
                background: bg,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${border}`,
                borderRadius: '16px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
            >
              <div style={{
                width: 44, height: 44,
                borderRadius: '12px',
                background: `${color}15`,
                border: `1px solid ${color}30`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '14px',
              }}>
                <Icon size={20} color={color} />
              </div>
              <div style={{
                fontFamily: 'var(--font-head)',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--text-primary)',
                marginBottom: '4px',
              }}>{label}</div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: color,
                marginBottom: '10px',
                opacity: 0.9,
              }}>{handle}</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
