import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Hero from "./components/sections/Hero"
import Section1 from "./components/sections/Section1"
import Section2 from "./components/sections/Section2"
import Section3 from "./components/sections/Section3"
import Section4 from "./components/sections/Section4"
import Section5 from "./components/sections/Section5"
import Section6 from "./components/sections/Section6"
import CTASection from "./components/sections/CTASection"
import SharedScene from "./components/shared/SharedScene"

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const timelineRef = useRef<HTMLDivElement>(null!)
  const section1Ref = useRef<HTMLDivElement>(null!)
  const section2Ref = useRef<HTMLDivElement>(null!)
  const section3Ref = useRef<HTMLDivElement>(null!)
  const section4Ref = useRef<HTMLDivElement>(null!)
  const section5Ref = useRef<HTMLDivElement>(null!)
  const section6Ref = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(section1Ref.current, {
        opacity: 0,
        y: -60,
        ease: "power2.in",
        scrollTrigger: {
          trigger: section1Ref.current,
          start: "top top",
          end: "top bottom",
          scrub: 1,
        },
      })

      gsap.from(section2Ref.current, {
        opacity: 0,
        x: 60,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section2Ref.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      })

      gsap.from(section3Ref.current, {
        opacity: 0,
        x: -60,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section3Ref.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      })

      gsap.from(section4Ref.current, {
        opacity: 0,
        x: -60,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section4Ref.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      })

      gsap.from(section5Ref.current, {
        opacity: 0,
        y: 40,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section5Ref.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      })

      gsap.from(section6Ref.current, {
        opacity: 0,
        x: -60,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section6Ref.current,
          start: "top bottom",
          end: "top center",
          scrub: 1,
        },
      })
    }, timelineRef)

    return () => ctx.revert()
  }, [])

  return (
    <main>
      <Hero />

      <div ref={timelineRef} className="relative overflow-x-clip">
        <div className="sticky top-0 h-screen overflow-hidden">
          <SharedScene containerRef={timelineRef} />
        </div>

        <div className="pointer-events-none relative z-10">
          <section className="pointer-events-auto mx-auto flex h-screen max-w-7xl items-start px-4 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pt-24">
            <Section1 ref={section1Ref} />
          </section>

          <section className="pointer-events-auto mx-auto flex h-screen max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
            <Section2 ref={section2Ref} />
          </section>

          <section className="pointer-events-auto mx-auto flex h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <Section3 ref={section3Ref} />
          </section>

          <section className="pointer-events-auto mx-auto flex h-screen max-w-7xl items-center justify-end px-4 sm:px-6 lg:px-8">
            <Section4 ref={section4Ref} />
          </section>

          <section className="pointer-events-auto mx-auto flex h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <Section5 ref={section5Ref} />
          </section>

          <section className="pointer-events-auto mx-auto flex h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <Section6 ref={section6Ref} />
          </section>
        </div>
      </div>
      <CTASection />
    </main>
  )
}
