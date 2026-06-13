import { useRef, useEffect, useState, Suspense } from "react"
import { motion } from "motion/react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment } from "@react-three/drei"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { Group } from "three"
import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"

import model1Url from "@/assets/model1.glb"
import model2Url from "@/assets/model2.glb"
import model3Url from "@/assets/model3.glb"
import model4Url from "@/assets/model4.glb"

gsap.registerPlugin(ScrollTrigger)

interface ModelConfig {
  url: string
  position: [number, number, number]
  scale: number
  rotationSpeed: number
  floatSpeed: number
  floatAmp: number
}

const desktopModels: ModelConfig[] = [
  {
    url: model1Url,
    position: [-3.5, 1.5, -2],
    scale: 0.15,
    rotationSpeed: 0.12,
    floatSpeed: 0.4,
    floatAmp: 0.5,
  },
  {
    url: model2Url,
    position: [3.5, 1.5, -1.5],
    scale: 0.15,
    rotationSpeed: 0.18,
    floatSpeed: 0.6,
    floatAmp: 0.4,
  },
  {
    url: model3Url,
    position: [-3, -2, -2.5],
    scale: 0.2,
    rotationSpeed: 0.15,
    floatSpeed: 0.5,
    floatAmp: 0.6,
  },
  {
    url: model4Url,
    position: [3, -1.5, -3],
    scale: 0.35,
    rotationSpeed: 0.2,
    floatSpeed: 0.35,
    floatAmp: 0.45,
  },
]

const mobileModels: ModelConfig[] = [
  {
    url: model1Url,
    position: [-1.5, 1.5, -1],
    scale: 0.1,
    rotationSpeed: 0.12,
    floatSpeed: 0.4,
    floatAmp: 0.3,
  },
  {
    url: model2Url,
    position: [1, 1, -1],
    scale: 0.15,
    rotationSpeed: 0.18,
    floatSpeed: 0.6,
    floatAmp: 0.25,
  },
  {
    url: model3Url,
    position: [-1.5, -1.5, -1.5],
    scale: 0.15,
    rotationSpeed: 0.15,
    floatSpeed: 0.5,
    floatAmp: 0.35,
  },
  {
    url: model4Url,
    position: [1, -1, -1.5],
    scale: 0.25,
    rotationSpeed: 0.2,
    floatSpeed: 0.35,
    floatAmp: 0.25,
  },
]

function FloatingModel({
  config,
  index,
}: {
  config: ModelConfig
  index: number
}) {
  const { scene } = useGLTF(config.url)
  const groupRef = useRef<Group>(null!)
  const baseY = config.position[1]
  const phase = index * Math.PI * 0.5

  useFrame((state, delta) => {
    if (!groupRef.current) return
    const t = state.clock.elapsedTime
    groupRef.current.rotation.y += delta * config.rotationSpeed
    groupRef.current.position.y =
      baseY + Math.sin(t * config.floatSpeed + phase) * config.floatAmp
  })

  return (
    <group ref={groupRef} position={config.position} scale={config.scale}>
      <primitive object={scene} />
    </group>
  )
}

function Scene({ isMobile }: { isMobile: boolean }) {
  const configs = isMobile ? mobileModels : desktopModels

  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <directionalLight position={[-3, -2, -3]} intensity={0.3} />
      <Suspense fallback={null}>
        {configs.map((cfg, i) => (
          <FloatingModel key={i} config={cfg} index={i} />
        ))}
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null!)
  const textRef = useRef<HTMLDivElement>(null!)
  const sceneRef = useRef<HTMLDivElement>(null!)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(textRef.current, {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      })
      gsap.to(sceneRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background"
    >
      <div ref={sceneRef} className="absolute inset-0">
        <Scene isMobile={isMobile} />
      </div>

      <div className="relative z-10 px-4">
        <div ref={textRef} className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-heading text-[clamp(2.5rem,12vw,10rem)] leading-none font-bold tracking-tighter text-foreground">
              BUILD THE
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-heading text-[clamp(2.5rem,12vw,10rem)] leading-none font-bold tracking-tighter text-foreground">
              FUTURE
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-6 max-w-md text-xs text-muted-foreground"
          >
            We craft digital experiences that redefine industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex items-center justify-center gap-4"
          >
            <Button className="group gap-2">
              Get in Touch
              <IconArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </Button>
            <Button variant="ghost">View Work</Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
