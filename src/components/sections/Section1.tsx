import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"

const Section1 = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="max-w-xl">
      <span className="mb-4 block text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
        About Us
      </span>
      <h2 className="font-heading text-[clamp(2.5rem,8vw,6rem)] leading-none font-bold tracking-tighter text-foreground">
        OUR STORY
      </h2>
      <p className="mt-6 max-w-lg text-xs leading-relaxed text-foreground/70">
        Founded where the sea meets the hills, we set out to build something
        that would outlast us all. Our journey began with a simple idea — that
        great design and bold engineering can shape the future. Today, we craft
        digital experiences that push boundaries and redefine what's possible.
      </p>
      <p className="mt-4 max-w-lg text-xs leading-relaxed text-foreground/70">
        From our headquarters perched above the coastline, we've grown into a
        global team of thinkers, makers, and dreamers — united by a shared
        belief in the power of creativity and code.
      </p>
      <div className="mt-8">
        <Button>
          Read Our Manifesto
          <IconArrowRight className="size-3.5" />
        </Button>
      </div>
    </div>
  )
})

Section1.displayName = "Section1"

export default Section1
