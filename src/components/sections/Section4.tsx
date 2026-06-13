import { forwardRef } from "react"
import { IconStar } from "@tabler/icons-react"

const partners = [
  "Acme Corp", "Nexus Labs", "Polaris", "Aether",
  "Vanguard", "Meridian", "Summit", "Catalyst",
]

const Section4 = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="max-w-xl">
      <span className="mb-4 block text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
        Trusted By
      </span>
      <h2 className="font-heading text-[clamp(2.5rem,8vw,6rem)] font-bold leading-none tracking-tighter text-foreground">
        CLIENTS
      </h2>
      <p className="mt-6 max-w-lg leading-relaxed text-foreground/70">
        We're proud to work with forward-thinking companies around the globe.
        Our clients trust us to deliver products that elevate their brands and
        drive measurable results.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {partners.map((name) => (
          <div
            key={name}
            className="flex items-center gap-2 rounded border border-foreground/10 px-3 py-2 text-[11px] font-medium tracking-wide text-foreground/90 uppercase"
          >
            <IconStar className="size-3 shrink-0 text-foreground/20" />
            {name}
          </div>
        ))}
      </div>
    </div>
  )
})

Section4.displayName = "Section4"

export default Section4
