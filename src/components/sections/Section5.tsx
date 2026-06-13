import { forwardRef } from "react"

const photos = Array.from({ length: 12 }, (_, i) => {
  const hue = i * 30
  return {
    label: `Photo ${i + 1}`,
    gradient: `linear-gradient(135deg, hsl(${hue}, 70%, 50%), hsl(${hue + 60}, 70%, 40%))`,
  }
})

const MarqueeRow = ({
  photos,
  reverse,
}: {
  photos: { label: string; gradient: string }[]
  reverse?: boolean
}) => (
  <div
    className={`flex shrink-0 items-center gap-6 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
  >
    {photos.map((p, i) => (
      <div
        key={`${reverse ? "r" : "f"}-${i}`}
        className="h-48 w-72 shrink-0 overflow-hidden rounded-lg"
        style={{ background: p.gradient }}
      >
        <div className="flex h-full items-end p-4">
          <span className="rounded bg-black/40 px-2 py-1 text-[10px] font-medium tracking-wide text-white/80 uppercase backdrop-blur-sm">
            {p.label}
          </span>
        </div>
      </div>
    ))}
  </div>
)

const Section5 = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className="w-full">
      <span className="mb-4 block text-center text-[10px] font-medium tracking-[0.2em] text-white/60 uppercase">
        Moments
      </span>
      <h2 className="mb-12 text-center font-heading text-[clamp(2.5rem,8vw,6rem)] leading-none font-bold tracking-tighter text-white">
        THE BRIDGE
      </h2>

      <div className="group/marquee overflow-hidden">
        <div className="flex flex-nowrap gap-6 hover:[animation-play-state:paused]">
          <MarqueeRow photos={photos} />
          <MarqueeRow photos={photos} reverse />
        </div>
      </div>
    </div>
  )
})

Section5.displayName = "Section5"

export default Section5
