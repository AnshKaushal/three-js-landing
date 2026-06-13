import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { IconArrowRight, IconSend } from "@tabler/icons-react"

const stats = [
  { label: "Projects Delivered", value: "200+" },
  { label: "Happy Clients", value: "98%" },
  { label: "Avg. NPS Score", value: "72" },
]

export default function CTASection() {
  return (
    <section className="relative flex min-h-[80vh] w-full items-center justify-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/3 h-[60vh] w-[50vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.6 0.25 292) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="mb-6 block text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">
            Let's Work Together
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-[clamp(2.5rem,10vw,7rem)] leading-none font-bold tracking-tighter text-white"
        >
          READY TO BUILD
          <br />
          SOMETHING{" "}
          <span className="bg-linear-to-r from-white via-white/80 to-white/40 bg-clip-text text-transparent">
            EXTRAORDINARY
          </span>
          ?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-lg text-xs leading-relaxed text-white/50"
        >
          Every great project starts with a conversation. Tell us about your
          vision, and let's craft something that pushes the boundaries of what's
          possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Button size="lg" className="gap-2">
            Start a Project
            <IconSend className="size-3.5" />
          </Button>
          <Button variant="outline" size="lg" className="gap-2">
            View Case Studies
            <IconArrowRight className="size-3.5" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 grid grid-cols-3 gap-8 pt-10"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-heading text-2xl font-bold tracking-tighter text-white sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] tracking-[0.15em] text-white/40 uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
