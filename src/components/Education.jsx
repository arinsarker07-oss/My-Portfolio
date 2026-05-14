import { motion } from 'framer-motion'
import { FiBookOpen, FiAward, FiMapPin } from 'react-icons/fi'

const education = [
  {
    id: 1,
    period: 'Current',
    degree: 'Computer Science and Engineering (CSE)',
    institution: 'United International University (UIU)',
    location: 'Dhaka, Bangladesh',
    icon: FiBookOpen,
    color: '#00d4ff',
    desc: 'Currently pursuing a Bachelor of Science degree, focusing on software engineering, algorithms, and full-stack development.',
  },
  {
    id: 2,
    period: '2025',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Rajshahi Court College',
    location: 'Rajshahi, Bangladesh',
    icon: FiAward,
    color: '#7c3aed',
    desc: 'Completed secondary education with a focus on Science and Mathematics.',
  },
  {
    id: 3,
    period: '2023',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Saint Louis High School',
    location: 'Rajshahi, Bangladesh',
    icon: FiAward,
    color: '#ec4899',
    desc: 'Foundational education with strong academic performance in technical subjects.',
  },
]

export default function Education() {
  return (
    <section id="education" className="section-pad" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background glow */}
      <div style={{
        position: 'absolute', right: '-10%', top: '30%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(124,58,237,0.05), transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
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
          <span className="section-tag">🎓 Academic</span>
          <h2 style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-1px',
          }}>
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px 0',
        }}>
          
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '50%',
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, rgba(0,212,255,0.3) 15%, rgba(124,58,237,0.3) 85%, transparent)',
            transform: 'translateX(-50%)',
          }} className="timeline-line" />

          {education.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start',
                width: '100%',
                marginBottom: '40px',
                position: 'relative',
              }}
              className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`}
            >
              {/* Timeline Dot */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '20px',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: item.color,
                border: '4px solid #050510',
                boxShadow: `0 0 15px ${item.color}`,
                transform: 'translateX(-50%)',
                zIndex: 5,
              }} />

              {/* Content Card */}
              <div style={{
                width: '45%',
                padding: '24px',
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                position: 'relative',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = item.color
                e.currentTarget.style.boxShadow = `0 10px 30px ${item.color}15`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px',
                }}>
                  <div style={{
                    width: 36, height: 36,
                    borderRadius: '10px',
                    background: `${item.color}15`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <item.icon size={18} color={item.color} />
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: item.color,
                    fontWeight: 600,
                  }}>{item.period}</span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-head)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  marginBottom: '6px',
                  color: 'var(--text-primary)',
                }}>{item.degree}</h3>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.85rem',
                  color: 'var(--text-muted)',
                  marginBottom: '12px',
                }}>
                  <FiMapPin size={12} />
                  {item.institution}, {item.location}
                </div>

                <p style={{
                  fontSize: '0.8rem',
                  color: 'rgba(240,240,255,0.6)',
                  lineHeight: 1.6,
                }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line {
            left: 20px !important;
          }
          .timeline-item {
            justify-content: flex-start !important;
            padding-left: 45px !important;
          }
          .timeline-item > div:last-child {
            width: 100% !important;
          }
          .timeline-item.left {
            flex-direction: row !important;
          }
          .timeline-item > div:first-child {
            left: 20px !important;
          }
        }
      `}</style>
    </section>
  )
}
