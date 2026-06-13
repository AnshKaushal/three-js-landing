import { useRef, useEffect, useMemo, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useGLTF, Environment } from "@react-three/drei"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import type { Object3D } from "three"

import sceneUrl from "@/assets/scene.glb"

gsap.registerPlugin(ScrollTrigger)

const storyTarget = { x: 0, y: 1, z: -4 }
const storyCam = { x: 0, y: 2, z: -1 }
const servicesTarget = { x: 0, y: 2, z: -9.5 }
const servicesCam = { x: 0, y: 3, z: -6.5 }
const projectsTarget = { x: -2, y: 3, z: -14 }
const projectsCam = { x: -2, y: 4, z: -11 }
const clientsTarget = { x: 2, y: 3, z: -14 }
const clientsCam = { x: 2, y: 4, z: -11 }
const bridgeTarget = { x: 0, y: 4, z: -14 }
const bridgeCam = { x: 0, y: 5, z: -11 }
const caseStudiesTarget = { x: 0, y: 4, z: -28 }
const caseStudiesCam = { x: 8, y: 0, z: -25 }
const initPos = { x: 8, y: 2.5, z: 8 }
const initTarget = { x: 0, y: 0, z: 0 }

function FloatingBlocks() {
  const { scene } = useGLTF(sceneUrl)
  const blocks = useMemo(() => {
    const found: { obj: Object3D; baseY: number }[] = []
    scene.traverse((child) => {
      if (child.name === "Projects" || child.name === "Clients") {
        found.push({ obj: child, baseY: child.position.y })
      }
    })
    return found
  }, [scene])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    for (const { obj, baseY } of blocks) {
      obj.rotation.y =
        Math.sin(t * 1.6 + (obj.name === "Projects" ? 0 : Math.PI)) * 0.8
      obj.position.y =
        baseY + Math.sin(t * 0.35 + (obj.name === "Projects" ? 0 : 2)) * 0.12
    }
  })

  return null
}

function Landscape() {
  const { scene } = useGLTF(sceneUrl)
  return (
    <group position={[0, -0.5, 0]} scale={0.25}>
      <primitive object={scene} />
    </group>
  )
}

function CameraController({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>
}) {
  const { camera } = useThree()
  const pos = useRef({ ...initPos })
  const target = useRef({ ...initTarget })

  useEffect(() => {
    camera.position.set(initPos.x, initPos.y, initPos.z)
    camera.lookAt(initTarget.x, initTarget.y, initTarget.z)
    pos.current = { ...initPos }
    target.current = { ...initTarget }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=100vh top",
          end: "bottom bottom",
          scrub: 1,
        },
      })

      const D = 1 / 6
      // Phase 1: init → story
      tl.to(
        pos.current,
        {
          x: storyCam.x,
          y: storyCam.y,
          z: storyCam.z,
          duration: D,
          ease: "power2.inOut",
        },
        0
      )
      tl.to(
        target.current,
        {
          x: storyTarget.x,
          y: storyTarget.y,
          z: storyTarget.z,
          duration: D,
          ease: "power2.inOut",
        },
        0
      )

      // Phase 2: story → services
      tl.to(
        pos.current,
        {
          x: servicesCam.x,
          y: servicesCam.y,
          z: servicesCam.z,
          duration: D,
          ease: "power2.inOut",
        },
        D
      )
      tl.to(
        target.current,
        {
          x: servicesTarget.x,
          y: servicesTarget.y,
          z: servicesTarget.z,
          duration: D,
          ease: "power2.inOut",
        },
        D
      )

      // Phase 3: services → projects
      tl.to(
        pos.current,
        {
          x: projectsCam.x,
          y: projectsCam.y,
          z: projectsCam.z,
          duration: D,
          ease: "power2.inOut",
        },
        D * 2
      )
      tl.to(
        target.current,
        {
          x: projectsTarget.x,
          y: projectsTarget.y,
          z: projectsTarget.z,
          duration: D,
          ease: "power2.inOut",
        },
        D * 2
      )

      // Phase 4: projects → clients
      tl.to(
        pos.current,
        {
          x: clientsCam.x,
          y: clientsCam.y,
          z: clientsCam.z,
          duration: D,
          ease: "power2.inOut",
        },
        D * 3
      )
      tl.to(
        target.current,
        {
          x: clientsTarget.x,
          y: clientsTarget.y,
          z: clientsTarget.z,
          duration: D,
          ease: "power2.inOut",
        },
        D * 3
      )

      // Phase 5: clients → bridge
      tl.to(
        pos.current,
        {
          x: bridgeCam.x,
          y: bridgeCam.y,
          z: bridgeCam.z,
          duration: D,
          ease: "power2.inOut",
        },
        D * 4
      )
      tl.to(
        target.current,
        {
          x: bridgeTarget.x,
          y: bridgeTarget.y,
          z: bridgeTarget.z,
          duration: D,
          ease: "power2.inOut",
        },
        D * 4
      )

      // Phase 6: bridge → case studies
      tl.to(
        pos.current,
        {
          x: caseStudiesCam.x,
          y: caseStudiesCam.y,
          z: caseStudiesCam.z,
          duration: D,
          ease: "power2.inOut",
        },
        D * 5
      )
      tl.to(
        target.current,
        {
          x: caseStudiesTarget.x,
          y: caseStudiesTarget.y,
          z: caseStudiesTarget.z,
          duration: D,
          ease: "power2.inOut",
        },
        D * 5
      )
    }, containerRef)

    return () => ctx.revert()
  }, [camera, containerRef])

  useFrame(() => {
    camera.position.set(pos.current.x, pos.current.y, pos.current.z)
    camera.lookAt(target.current.x, target.current.y, target.current.z)
  })

  return null
}

function InnerScene({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>
}) {
  return (
    <Canvas
      camera={{ position: [8, 2.5, 8], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[8, 10, 5]} intensity={1.2} />
      <directionalLight position={[-5, -2, -3]} intensity={0.3} />
      <Suspense fallback={null}>
        <Landscape />
        <FloatingBlocks />
        <Environment preset="sunset" />
        <CameraController containerRef={containerRef} />
      </Suspense>
    </Canvas>
  )
}

export default function SharedScene({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLElement | null>
}) {
  return <InnerScene containerRef={containerRef} />
}
