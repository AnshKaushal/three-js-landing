import { forwardRef } from "react"
import { Button } from "@/components/ui/button"
import { IconArrowRight } from "@tabler/icons-react"

const Section2 = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="max-w-xl text-right">
      <span className="mb-4 block text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
        What We Do
      </span>
      <h2 className="font-heading text-[clamp(2.5rem,8vw,6rem)] font-bold leading-none tracking-tighter text-foreground">
        OUR SERVICES
      </h2>
      <p className="ml-auto mt-6 max-w-lg text-xs leading-relaxed text-foreground/70">
        We offer a comprehensive suite of digital services designed to
        transform ideas into impact. From strategy and design to engineering
        and scale, our team brings decades of experience across every layer
        of the stack.
      </p>
      <p className="ml-auto mt-4 max-w-lg text-xs leading-relaxed text-foreground/70">
        Whether you need a product built from the ground up, a platform
        scaled to millions, or a design system that brings clarity to
        complexity — we have the craft and the conviction to deliver.
      </p>
      <div className="mt-8 flex justify-end">
        <Button className="group gap-2">
          View Section2
          <IconArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </Button>
      </div>
    </div>
  )
})

Section2.displayName = "Section2"

export default Section2
