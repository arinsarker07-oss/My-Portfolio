import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '40px 24px',
      textAlign: 'center',
      position: 'relative',
      zIndex: 2,
    }}>
      {/* Top line glow */}
      <div style={{
        position: 'absolute', top: -1, left: '50%',
        transform: 'translateX(-50%)',
        width: 300, height: 1,
        background: 'linear-gradient(90deg, transparent, var(--accent-cyan), transparent)',
      }} />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '16px',
      }}>
        {/* Logo */}
        <span style={{
          fontFamily: 'var(--font-head)',
          fontWeight: 700,
          fontSize: '1.1rem',
          background: 'linear-gradient(90deg, var(--accent-cyan), var(--accent-violet))',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>
          &lt;Arin /&gt;
        </span>

        {/* Credits */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
        }}>
          Crafted with <FiHeart size={12} color="var(--accent-pink)" /> by Arin Samuel Sarker · {new Date().getFullYear()}
        </p>

        {/* Social icons */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {[
            { icon: FiGithub, href: 'https://github.com/arinsarker07-oss' },
            { icon: FiLinkedin, href: 'https://www.linkedin.com/in/arin-sarker/' },
          ].map(({ icon: Icon, href }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer"
              style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent-cyan)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
