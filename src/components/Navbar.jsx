import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Home',      href: '#home' },
  { label: 'Tech',      href: '#tech' },
  { label: 'Projects',  href: '#projects' },
  { label: 'About',     href: '#about' },
  { label: 'Contact',   href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: '0 24px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(5,5,16,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <a href="#home" style={{ textDecoration: 'none' }}>
        <span style={{
          fontFamily: 'var(--font-head)',
          fontWeight: 700,
          fontSize: '1.2rem',
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          &lt;Arin /&gt;
        </span>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}
           className="nav-desktop">
        {navLinks.map(link => (
          <a key={link.href} href={link.href} style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontFamily: 'var(--font-body)',
            fontSize: '0.9rem',
            fontWeight: 500,
            transition: 'color 0.3s',
            letterSpacing: '0.5px',
          }}
          onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
          onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            {link.label}
          </a>
        ))}
        <a href="#contact" className="btn-primary" style={{ padding: '8px 22px', fontSize: '0.85rem' }}>
          Hire Me
        </a>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
        }
      `}</style>
    </motion.nav>
  )
}
