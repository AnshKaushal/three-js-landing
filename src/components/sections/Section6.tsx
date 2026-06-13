import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"

const Section6 = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="max-w-xl">
      <span className="mb-4 block text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
        Insights
      </span>
      <h2 className="font-heading text-[clamp(2.5rem,8vw,6rem)] leading-none font-bold tracking-tighter text-foreground">
        CASE STUDIES
      </h2>
      <p className="mt-6 max-w-lg text-xs leading-relaxed text-foreground/70">
        Deep dives into real projects — the challenges, the process, and the
        results. Each case study breaks down how we turned complex problems into
        elegant, scalable solutions for our clients.
      </p>
      <div className="mt-8">
        <Button>
          Browse Case Studies
          <IconArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
})

Section6.displayName = "Section6"

export default Section6
