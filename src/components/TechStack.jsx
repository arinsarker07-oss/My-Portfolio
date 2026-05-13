import * as THREE from 'three'
import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { EffectComposer, N8AO } from '@react-three/postprocessing'
import { BallCollider, Physics, RigidBody, CylinderCollider } from '@react-three/rapier'
import { motion } from 'framer-motion'

// ─── Asset setup ──────────────────────────────────────────
const textureLoader = new THREE.TextureLoader()
const imageUrls = [
  '/images/react2.webp',
  '/images/next2.webp',
  '/images/node2.webp',
  '/images/express.webp',
  '/images/mongo.webp',
  '/images/mysql.webp',
  '/images/typescript.webp',
  '/images/javascript.webp',
]
const textures = imageUrls.map((url) => textureLoader.load(url))
const sphereGeometry = new THREE.SphereGeometry(1, 28, 28)

// Pre-calculated to avoid random jumps on re-render
const sphereData = [...Array(30)].map(() => ({
  scale: [0.7, 1, 0.8, 1, 1][Math.floor(Math.random() * 5)],
  materialIndex: Math.floor(Math.random() * textures.length),
}))

// ─── Sphere ───────────────────────────────────────────────
function SphereGeo({ vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, material, isActive }) {
  const api = useRef(null)

  useFrame((_state, delta) => {
    if (!isActive || !api.current) return
    delta = Math.min(0.1, delta)
    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiply(new THREE.Vector3(-50 * delta * scale, -150 * delta * scale, -50 * delta * scale))
    api.current.applyImpulse(impulse, true)
  })

  return (
    <RigidBody
      linearDamping={0.75}
      angularDamping={0.15}
      friction={0.2}
      position={[r(20), r(20) - 25, r(20) - 10]}
      ref={api}
      colliders={false}
    >
      <BallCollider args={[scale]} />
      <CylinderCollider
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, 0, 1.2 * scale]}
        args={[0.15 * scale, 0.275 * scale]}
      />
      <mesh
        castShadow
        receiveShadow
        scale={scale}
        geometry={sphereGeometry}
        material={material}
        rotation={[0.3, 1, 1]}
      />
    </RigidBody>
  )
}

// ─── Invisible mouse pointer collider ─────────────────────
function Pointer({ vec = new THREE.Vector3(), isActive }) {
  const ref = useRef(null)

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return
    const targetVec = vec.lerp(
      new THREE.Vector3(
        (pointer.x * viewport.width) / 2,
        (pointer.y * viewport.height) / 2,
        0
      ),
      0.2
    )
    ref.current.setNextKinematicTranslation(targetVec)
  })

  return (
    <RigidBody position={[100, 100, 100]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[2]} />
    </RigidBody>
  )
}

// ─── Main Section ─────────────────────────────────────────
export default function TechStack() {
  const [isActive, setIsActive] = useState(false)

  // Activate physics when section scrolls into view
  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById('tech')
      if (!target) return
      const rect = target.getBoundingClientRect()
      setIsActive(rect.top < window.innerHeight * 0.75)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // run on mount in case already in view
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Build materials once
  const materials = useMemo(() =>
    textures.map(
      (texture) =>
        new THREE.MeshPhysicalMaterial({
          map: texture,
          emissive: '#ffffff',
          emissiveMap: texture,
          emissiveIntensity: 0.3,
          metalness: 0.5,
          roughness: 1,
          clearcoat: 0.1,
        })
    ), [])

  return (
    <section
      id="tech"
      className="section-pad"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(124,58,237,0.08), transparent 70%)',
        pointerEvents: 'none',
        borderRadius: '50%',
      }} />

      <div className="container-lg" style={{ position: 'relative', zIndex: 2 }}>

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '8px' }}
        >
          <span className="section-tag">⚡ Arsenal</span>
          <h2 style={{
            fontFamily: 'var(--font-head)',
            fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            letterSpacing: '-1px',
            marginBottom: '12px',
          }}>
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: '460px', margin: '0 auto 16px' }}>
            Interact with the spheres — move your mouse around to push them. Each one represents a technology I work with.
          </p>
        </motion.div>

        {/* 3D Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{
            width: '100%',
            height: '520px',
            overflow: 'hidden',
            background: 'transparent',
            position: 'relative',
          }}
        >
          {/* Activation hint overlay */}
          {!isActive && (
            <div style={{
              position: 'absolute', inset: 0, zIndex: 10,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(5,5,16,0.4)',
              backdropFilter: 'blur(2px)',
              borderRadius: '24px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--accent-cyan)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
              pointerEvents: 'none',
            }}>
              ↓ Scroll to activate physics
            </div>
          )}

          <Canvas
            shadows
            gl={{ alpha: true, stencil: false, depth: false, antialias: false }}
            camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
            onCreated={(state) => { state.gl.toneMappingExposure = 1.5 }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={1} />
            <spotLight
              position={[20, 20, 25]}
              penumbra={1}
              angle={0.2}
              color="white"
              castShadow
              shadow-mapSize={[512, 512]}
            />
            <directionalLight position={[0, 5, -4]} intensity={2} />

            <Physics gravity={[0, 0, 0]}>
              <Pointer isActive={isActive} />
              {sphereData.map((props, i) => (
                <SphereGeo
                  key={i}
                  scale={props.scale}
                  material={materials[props.materialIndex]}
                  isActive={isActive}
                />
              ))}
            </Physics>

            {/* City preset replaces the custom .hdr file */}
            <Environment preset="city" environmentIntensity={0.5} />

            <EffectComposer enableNormalPass={false}>
              <N8AO color="#0f002c" aoRadius={2} intensity={1.15} />
            </EffectComposer>
          </Canvas>
        </motion.div>

        {/* Tech name pills below canvas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', marginTop: '28px' }}
        >
          {[
            'React', 'Next.js', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'TypeScript', 'JavaScript',
            'Tailwind CSS', 'Firebase', 'Git / GitHub', 'Framer Motion'
          ].map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -3, boxShadow: '0 6px 20px rgba(0,212,255,0.2)' }}
              style={{
                padding: '7px 16px',
                background: 'rgba(0,212,255,0.06)',
                border: '1px solid rgba(0,212,255,0.15)',
                borderRadius: '50px',
                fontFamily: 'var(--font-head)',
                fontWeight: 600,
                fontSize: '0.82rem',
                color: 'var(--text-primary)',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
            >
              {name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
