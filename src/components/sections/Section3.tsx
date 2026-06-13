import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"

const Section3 = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="max-w-xl">
      <span className="mb-4 block text-[10px] font-medium tracking-[0.2em] text-white/60 uppercase">
        Our Work
      </span>
      <h2 className="font-heading text-[clamp(2.5rem,8vw,6rem)] leading-none font-bold tracking-tighter text-white">
        PROJECTS
      </h2>
      <p className="mt-6 max-w-lg text-xs leading-relaxed text-white/70">
        Every project is a story waiting to be told. From concept to launch, we
        partner with ambitious teams to build products that make a real impact.
        Our portfolio spans fintech, health, education, and creative tools.
      </p>
      <div className="mt-8">
        <Button>
          View All Section3
          <IconArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
})

Section3.displayName = "Section3"

export default Section3
