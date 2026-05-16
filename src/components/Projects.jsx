import { motion } from 'framer-motion'
import { FaChartPie } from 'react-icons/fa'
import { FiExternalLink, FiGithub, FiShoppingCart, FiUsers, FiCode } from 'react-icons/fi'
import { IoLogoVercel } from 'react-icons/io5'
import { RiNextjsLine } from 'react-icons/ri'
import {
  SiMongodb, SiReact, SiNodedotjs, SiSocketdotio,
  SiStripe, SiRedux, SiJsonwebtokens,
  SiHtml5,
  SiTailwindcss,
  SiJavascript,
  SiMongoosedotws,
  SiCss
} from 'react-icons/si'

/* ─── Projects Data ─────────────────────────────────────── */
const projects = [
  {
    id: 'aura-shop',
    title: 'Aura Shop',
    emoji: '✨',
    type: 'eCommerce Website',
    description: 'A premium eCommerce experience with real-time inventory management, Stripe payment integration, and a sleek storefront UI.',
    image: '/images/aurashop.png',
    icon: FiShoppingCart,
    accentColor: '#7c3aed',
    glowColor: 'rgba(124, 58, 237, 0.2)', // গ্লো কিছুটা হালকা করা হলো ক্লিন লুকের জন্য
    gradient: 'linear-gradient(135deg, rgba(124, 58, 237, 0.08), transparent)',
    githubLink: 'https://github.com/arinsarker07-oss/vivid-ecommerce',
    liveLink: 'https://vivid-ecommerce-ui9y.vercel.app/',
    features: ['Real-time inventory with WebSocket updates', 'Stripe payment gateway integration', 'Admin dashboard with sales analytics'],
    techStack: [
      { name: 'Next-JS', icon: RiNextjsLine, color: "#ffffff" },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#764ABC' },
      { name: 'Javascript', icon: SiJavascript, color: '#fbba00' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
    ]
  },
  {
    id: 'anon',
    title: 'Anon Ecommerce Website',
    emoji: '🛒',
    type: 'eCommerce Website',
    description: 'A privacy-first eCommerce platform enabling anonymous, secure shopping experiences with modern UX and robust backend infrastructure.',
    image: '/images/ecomarce.png',
    icon: FiShoppingCart,
    accentColor: '#00d4ff',
    glowColor: 'rgba(0, 212, 255, 0.2)',
    gradient: 'linear-gradient(135deg, rgba(0, 212, 255, 0.08), transparent)',
    githubLink: 'https://github.com/arinsarker07-oss/ecommerce-website',
    liveLink: 'https://arinsarker07-oss.github.io/ecommerce-website/#',
    features: ['Anonymous user sessions with JWT-based auth', 'Product filtering, cart management & order history', 'RESTful API with Express.js backend'],
    techStack: [
      { name: 'React', icon: SiReact, color: '#61DAFB' },
      { name: 'Javascript', icon: SiJavascript, color: '#fbba00' },
      { name: 'CSS', icon: SiCss, color: '#1572b6' },
      { name: 'HTML', icon: SiHtml5, color: '#e34f26' }
    ]
  },
  {
    id: 'friend-zone',
    title: 'Friend Zone',
    emoji: '🌐',
    type: 'Social Networking Platform',
    description: 'A full-featured social networking platform with real-time chat, post feed, friend requests, and interactive user profiles.',
    image: '/images/friendzone.png',
    icon: FiUsers,
    accentColor: '#ec4899',
    glowColor: 'rgba(236, 72, 153, 0.2)',
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.08), transparent)',
    githubLink: 'https://github.com/arinsarker07-oss/Friend-Zone',
    liveLink: 'https://friends-zone-theta.vercel.app/',
    features: ['Real-time chat with Socket.io', 'Dynamic post feed with likes & comments', 'Friend request & notification system'],
    techStack: [
      { name: 'Next-JS', icon: RiNextjsLine, color: '#ffffff' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#764ABC' },
      { name: 'Recharts', icon: FaChartPie, color: '#47A248' },
      { name: 'Vercel', icon: IoLogoVercel, color: '#00dfd8' }
    ]
  }
]

/* ─── Animation Variants ────────────────────────────────── */
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

function ProjectCard({ project, index }) {
  const Icon = project.icon

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -6 }}
      style={{
        position: 'relative',
        padding: '22px', // প্যাডিং কমিয়ে ২৪px থেকে ২২px করা হলো যাতে হাইট কমে
        borderRadius: '20px',
        background: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: '14px', // উপাদানগুলোর ভেতরের স্পেসিং কমানো হলো
        height: '100%',
        transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        overflow: 'hidden',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = `0 15px 40px ${project.glowColor}`
        e.currentTarget.style.borderColor = `rgba(255, 255, 255, 0.12)`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)'
        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'
      }}
    >
      {/* Background Gradient */}
      <div style={{
        position: 'absolute', inset: 0,
        background: project.gradient,
        opacity: 0.4,
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: '14px', height: '100%' }}>

        {/* Project Image - Height কমানো হলো */}
        <div style={{
          width: '100%',
          height: '145px', // ১৮০px থেকে কমিয়ে ১৪৫px করা হলো যাতে কার্ড লম্বা না দেখায়
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          background: 'rgba(0, 0, 0, 0.2)'
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              transition: 'transform 0.5s ease'
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          />
        </div>

        {/* Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: `${project.accentColor}15`,
              border: `1px solid ${project.accentColor}25`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: project.accentColor,
            }}>
              <Icon size={16} />
            </div>
            <div>
              <h3 style={{
                fontFamily: 'var(--font-head)',
                fontSize: '1.2rem',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.3px',
                lineHeight: '1.2'
              }}>{project.title}</h3>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: project.accentColor,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>{project.type}</span>
            </div>
          </div>

          <p style={{
            fontSize: '0.82rem',
            lineHeight: '1.5',
            color: 'rgba(255, 255, 255, 0.5)',
          }}>{project.description}</p>
        </div>

        {/* Features List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'rgba(255, 255, 255, 0.35)',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>Key Features</span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
            {project.features.map((feature, i) => (
              <span key={i} style={{
                fontSize: '0.7rem',
                padding: '3px 8px',
                background: 'rgba(255, 255, 255, 0.04)',
                borderRadius: '5px',
                color: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.04)'
              }}>
                {feature}
              </span>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{ paddingTop: '2px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {project.techStack.map(({ name, icon: TechIcon, color }) => (
              <div key={name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '4px 10px',
                background: `${color}08`,
                border: `1px solid ${color}20`,
                borderRadius: '50px',
                fontSize: '0.7rem',
                fontWeight: 600,
                color: color,
                fontFamily: 'var(--font-head)'
              }}>
                <TechIcon size={10} />
                {name}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          marginTop: 'auto',
          paddingTop: '14px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '10px',
          borderTop: '1px solid rgba(255,255,255,0.04)'
        }}>
          <motion.a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              boxShadow: `0 0 15px ${project.glowColor}`,
              y: -1
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px 0',
              background: project.accentColor,
              color: '#050510',
              borderRadius: '10px',
              fontFamily: 'var(--font-head)',
              fontWeight: 700,
              fontSize: '0.82rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <FiExternalLink size={14} />
            <p>  Live Demo</p>
           
          </motion.a>

          <motion.a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              background: 'rgba(255, 255, 255, 0.05)',
              y: -1
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px 0',
              background: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '10px',
              fontFamily: 'var(--font-head)',
              fontWeight: 600,
              fontSize: '0.82rem',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <FiGithub size={14} />
            Source Code
          </motion.a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '100px 0', position: 'relative' }}>
      <div style={{
        position: 'absolute', top: '20%', left: '-10%', width: '40%', height: '60%',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.02), transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* container-lg এর সাথে maxWidth বাড়িয়ে চওড়া করা হলো */}
      <div className="container-lg" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <span className="section-tag" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '5px 14px',
            background: 'rgba(0, 212, 255, 0.06)', border: '1px solid rgba(0, 212, 255, 0.15)',
            borderRadius: '50px', fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
            color: '#00d4ff', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '16px'
          }}>
            <FiCode size={12} />
            My Creations
          </span>
          <h2 style={{
            fontFamily: 'var(--font-head)', fontWeight: 800,
            fontSize: 'clamp(2.2rem, 4vw, 3rem)', color: '#ffffff',
            letterSpacing: '-1px', marginBottom: '12px'
          }}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p style={{
            maxWidth: '550px', margin: '0 auto', fontSize: '1rem',
            color: 'rgba(255, 255, 255, 0.45)', lineHeight: '1.5'
          }}>
            A selection of full-stack applications I've built — each solving real problems with clean, scalable code.
          </p>
        </motion.div>

        {/* Grid - minmax বাড়িয়ে উইডথ বাড়ানো হলো */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>

      {/* Mobile Styles */}
      <style>{`
        @media (max-width: 768px) {
          #projects { padding: 60px 0 !important; }
          #projects div[style*="grid-template-columns"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}