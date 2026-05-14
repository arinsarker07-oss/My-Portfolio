import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiShoppingCart, FiUsers } from 'react-icons/fi'
import {
  SiMongodb, SiExpress, SiReact, SiNodedotjs, SiSocketdotio,
  SiStripe, SiRedux, SiJsonwebtokens
} from 'react-icons/si'

const projects = [
  {
    id: 'aura-shop',
    title: 'Aura Shop',
    emoji: '✨',
    type: 'eCommerce Website',
    gradient: 'linear-gradient(135deg, #7c3aed22, #ec489922)',
    glowColor: 'rgba(124,58,237,0.3)',
    accentColor: '#7c3aed',
    description:
      'A premium eCommerce experience with real-time inventory management, Stripe payment integration, and a sleek storefront UI.',
    techStack: [
      { icon: SiReact,   name: 'React',   color: '#61DAFB' },
      { icon: SiRedux,   name: 'Redux',   color: '#764ABC' },
      { icon: SiExpress, name: 'Express', color: '#ffffff' },
      { icon: SiStripe,  name: 'Stripe',  color: '#6772e5' },
    ],
    features: [
      'Real-time inventory with WebSocket updates',
      'Stripe payment gateway integration',
      'Admin dashboard with sales analytics',
    ],
    icon: FiShoppingCart,
    githubLink: 'https://github.com/arinsarker07-oss/vivid-ecommerce',
    liveLink: 'https://vivid-ecommerce-ui9y.vercel.app/',
  },
  {
    id: 'anon',
    title: 'Anon eCommerce Website',
    emoji: '🛒',
    type: 'eCommerce Website',
    gradient: 'linear-gradient(135deg, #00d4ff22, #7c3aed22)',
    glowColor: 'rgba(0,212,255,0.3)',
    accentColor: '#00d4ff',
    description:
      'A privacy-first eCommerce platform enabling anonymous, secure shopping experiences with modern UX and robust backend infrastructure.',
    techStack: [
      { icon: SiReact,           name: 'React',   color: '#61DAFB' },
      { icon: SiNodedotjs,       name: 'Node.js', color: '#8CC84B' },
      { icon: SiMongodb,         name: 'MongoDB', color: '#00ED64' },
      { icon: SiJsonwebtokens,   name: 'JWT',     color: '#fbba00' },
    ],
    features: [
      'Anonymous user sessions with JWT-based auth',
      'Product filtering, cart management & order history',
      'RESTful API with Express.js backend',
    ],
    icon: FiShoppingCart,
    githubLink: 'https://github.com/arinsarker07-oss/ecommerce-website',
    liveLink: 'https://arinsarker07-oss.github.io/ecommerce-website/#',
  },
  {
    id: 'friend-zone',
    title: 'Friend Zone',
    emoji: '🌐',
    type: 'Social Networking Platform',
    gradient: 'linear-gradient(135deg, #ec489922, #00d4ff22)',
    glowColor: 'rgba(236,72,153,0.3)',
    accentColor: '#ec4899',
    description:
      'A full-featured social networking platform with real-time chat, post feed, friend requests, and interactive user profiles.',
    techStack: [
      { icon: SiReact,       name: 'React',     color: '#61DAFB' },
      { icon: SiNodedotjs,   name: 'Node.js',   color: '#8CC84B' },
      { icon: SiMongodb,     name: 'MongoDB',   color: '#00ED64' },
      { icon: SiSocketdotio, name: 'Socket.io', color: '#ffffff' },
    ],
    features: [
      'Real-time chat with Socket.io',
      'Dynamic post feed with likes & comments',
      'Friend request & notification system',
    ],
    icon: FiUsers,
    githubLink: 'https://github.com/arinsarker07-oss/Friend-Zone',
    liveLink: 'https://friends-zone-theta.vercel.app/',
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: i * 0.15 },
  }),
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ position: 'relative' }}>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', right: '-10%', top: '20%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(236,72,153,0.05), transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', left: '-10%', bottom: '20%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(0,212,255,0.05), transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
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
          <span className="section-tag">🗂 Portfolio</span>
          <h2 style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-1px',
            marginBottom: '12px',
          }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto' }}>
            A selection of full-stack applications I've built — each solving real problems with clean, scalable code.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px',
        }}>
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const { Icon } = project
  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="card-gradient-border"
      style={{
        position: 'relative',
        padding: '32px',
        borderRadius: '20px',
        background: 'rgba(255,255,255,0.04)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.08)',
        cursor: 'default',
        overflow: 'hidden',
        transition: 'box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 20px 60px ${project.glowColor}`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Background gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: project.gradient,
        opacity: 0.5,
        pointerEvents: 'none',
      }} />

      {/* Corner glow */}
      <div style={{
        position: 'absolute', top: -20, right: -20,
        width: 120, height: 120,
        background: `radial-gradient(circle, ${project.accentColor}22, transparent 70%)`,
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div>
            <div style={{
              width: 48, height: 48, borderRadius: '12px',
              background: `${project.accentColor}18`,
              border: `1px solid ${project.accentColor}33`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '14px',
              fontSize: '1.4rem',
            }}>
              {project.emoji}
            </div>
            <h3 style={{
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              fontSize: '1.4rem',
              marginBottom: '4px',
              color: 'var(--text-primary)',
            }}>{project.title}</h3>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: project.accentColor,
              letterSpacing: '1px',
              textTransform: 'uppercase',
              opacity: 0.8,
            }}>{project.type}</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: project.accentColor }}
              style={{ color: 'var(--text-muted)', padding: '6px' }}
            >
              <FiGithub size={18} />
            </motion.a>
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: project.accentColor }}
              style={{ color: 'var(--text-muted)', padding: '6px' }}
            >
              <FiExternalLink size={18} />
            </motion.a>
          </div>
        </div>

        {/* Description */}
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          lineHeight: 1.75,
          marginBottom: '20px',
        }}>{project.description}</p>

        {/* Key Features */}
        <div style={{ marginBottom: '24px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: project.accentColor,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px',
          }}>Key Features</span>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '7px' }}>
            {project.features.map((f, i) => (
              <li key={i} style={{
                display: 'flex', alignItems: 'flex-start', gap: '8px',
                fontSize: '0.85rem',
                color: 'rgba(240,240,255,0.7)',
              }}>
                <span style={{ color: project.accentColor, marginTop: '2px', flexShrink: 0 }}>▸</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Badges */}
        <div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: project.accentColor,
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '10px',
          }}>Tech Stack Used</span>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {project.techStack.map(({ icon: TechIcon, name, color }) => (
              <span key={name} style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '5px 12px',
                background: `${color}14`,
                border: `1px solid ${color}33`,
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-head)',
                fontWeight: 600,
                color: color,
              }}>
                <TechIcon size={11} />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
