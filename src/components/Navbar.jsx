import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Tech', href: '#tech' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // মোবাইল মেনু বন্ধ করার জন্য ফাংশন
  const toggleMenu = () => setMenuOpen(!menuOpen)

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
        width: '90%',
        boxSizing: 'border-box',
        zIndex: 1000,
        padding: '0 24px',
        height: '68px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled || menuOpen ? 'rgba(5,5,16,0.95)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(24px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        transition: 'all 0.4s ease',
      }}
    >
      {/* Logo */}
      <a href="#home" style={{ textDecoration: 'none', zIndex: 1100 }}>
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
      <div className="nav-desktop" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
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

      {/* Mobile Menu Icon (Hamburger) */}
      <div className="nav-mobile-toggle" onClick={toggleMenu} style={{
        display: 'none',
        flexDirection: 'column',
        gap: '6px',
        cursor: 'pointer',
        zIndex: 1100
      }}>
        <div style={{ width: '25px', height: '2px', background: 'var(--accent-cyan)', transition: '0.3s', transform: menuOpen ? 'rotate(45deg) translate(6px, 6px)' : 'none' }}></div>
        <div style={{ width: '25px', height: '2px', background: 'var(--accent-cyan)', opacity: menuOpen ? 0 : 1 }}></div>
        <div style={{ width: '25px', height: '2px', background: 'var(--accent-cyan)', transition: '0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}></div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '100%',
              height: '100vh',
              background: 'rgba(5,5,16,0.98)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
              zIndex: 1050,
            }}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={toggleMenu}
                style={{
                  color: '#fff',
                  fontSize: '1.5rem',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-head)',
                  fontWeight: 600
                }}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={toggleMenu} className="btn-primary" style={{ padding: '12px 40px' }}>
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </motion.nav>
  )
}
