import { motion } from "motion/react"
import {
  IconAward,
  IconTrophy,
  IconStar,
  IconMedal,
  IconFlame,
  IconSparkles,
} from "@tabler/icons-react"

const awards = [
  {
    year: "2025",
    title: "Site of the Day",
    org: "Awwwards",
    description:
      "Recognized for exceptional design, creativity, and user experience across all touchpoints.",
    icon: IconTrophy,
    color: "text-yellow-400",
  },
  {
    year: "2025",
    title: "Developer Award",
    org: "Awwwards",
    description:
      "Awarded for technical excellence — clean code architecture, performance, and innovation.",
    icon: IconAward,
    color: "text-purple-400",
  },
  {
    year: "2024",
    title: "Best UI/UX Design",
    org: "CSS Design Awards",
    description:
      "Honored for a groundbreaking interface that redefined how users interact with complex data.",
    icon: IconSparkles,
    color: "text-blue-400",
  },
  {
    year: "2024",
    title: "Innovation of the Year",
    org: "FWA",
    description:
      "Celebrated for pushing the boundaries of what's possible on the modern web.",
    icon: IconFlame,
    color: "text-orange-400",
  },
  {
    year: "2023",
    title: "Honorable Mention",
    org: "Awwwards",
    description:
      "Recognized among the top digital experiences of the year for creative excellence.",
    icon: IconStar,
    color: "text-cyan-400",
  },
  {
    year: "2023",
    title: "Best Portfolio",
    org: "Behance",
    description:
      "Featured for outstanding visual storytelling and cohesive brand presentation.",
    icon: IconMedal,
    color: "text-emerald-400",
  },
]

export default function AwwwardsSection() {
  return (
    <section className="relative w-full border-t border-border bg-background px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 text-center sm:mb-20"
        >
          <span className="mb-4 block text-[10px] font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Recognition
          </span>
          <h2 className="font-heading text-[clamp(2.5rem,8vw,5rem)] leading-none font-bold tracking-tighter text-foreground">
            AWARDS &amp;
            <br />
            ACCOLADES
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-xs leading-relaxed text-foreground/50">
            Our work has been recognized by the industry's most prestigious
            awards bodies for design, innovation, and technical excellence.
          </p>
        </motion.div>

        {/* Award grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, i) => (
            <motion.div
              key={`${award.year}-${award.title}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative border border-border/50 bg-card/30 p-6 transition-colors duration-300 hover:border-border hover:bg-card/50 sm:p-8"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`flex size-10 items-center justify-center border border-border bg-card/50 ${award.color}`}
                >
                  <award.icon className="size-5" />
                </div>
                <span className="text-[11px] font-medium tracking-wider text-muted-foreground/60">
                  {award.year}
                </span>
              </div>

              <div className="mt-5">
                <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                  {award.org}
                </div>
                <h3 className="mt-1.5 font-heading text-lg font-bold tracking-tight text-foreground sm:text-xl">
                  {award.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-foreground/50">
                  {award.description}
                </p>
              </div>

              {/* Hover accent line */}
              <div className="mt-6 h-px w-0 bg-foreground/20 transition-all duration-300 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mt-16 flex flex-col items-center gap-3 border-t border-border pt-10 text-center"
        >
          <IconAward className="size-5 text-muted-foreground/60" />
          <p className="text-xs text-muted-foreground">
            <span className="text-foreground/70">12+ industry awards</span>{" "}
            across design, development &amp; innovation
          </p>
        </motion.div>
      </div>
    </section>
  )
}
