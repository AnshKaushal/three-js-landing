import { motion } from "motion/react"
import {
  IconBrandX,
  IconBrandDribbble,
  IconBrandGithub,
  IconBrandBehance,
  IconArrowUp,
  IconCopyright,
} from "@tabler/icons-react"

const linkGroups = [
  {
    label: "Services",
    links: ["Design", "Engineering", "Strategy", "Consulting"],
  },
  {
    label: "Company",
    links: ["About", "Careers", "Blog", "Press"],
  },
  {
    label: "Connect",
    links: ["hello@carx.studio", "+1 (555) 000-0000", "Book a Call", "Support"],
  },
]

const socialLinks = [
  { icon: IconBrandX, label: "X / Twitter" },
  { icon: IconBrandDribbble, label: "Dribbble" },
  { icon: IconBrandGithub, label: "GitHub" },
  { icon: IconBrandBehance, label: "Behance" },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative border-t border-white/5 bg-background px-4 pb-6 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
      {/* Subtle gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -bottom-1/3 left-1/2 h-[50vh] w-[60vw] -translate-x-1/2 rounded-full opacity-[0.04] blur-[120px]"
          style={{
            background:
              "radial-gradient(ellipse, oklch(0.6 0.25 292) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Top section: brand + links */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-1"
          >
            <span className="font-heading text-lg font-bold tracking-tight text-white">
              CARX
            </span>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/40">
              Crafting digital experiences at the intersection of design and
              engineering. Based where the sea meets the hills.
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="flex size-8 items-center justify-center border border-white/10 text-white/30 transition-colors duration-200 hover:border-white/30 hover:text-white/70"
                  aria-label={s.label}
                >
                  <s.icon className="size-3.5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Link columns */}
          {linkGroups.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="text-[10px] font-medium tracking-[0.2em] text-white/40 uppercase">
                {group.label}
              </div>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-white/50 transition-colors duration-200 hover:text-white/90"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row sm:pt-8"
        >
          <p className="flex items-center gap-1.5 text-[10px] tracking-[0.1em] text-white/30">
            <IconCopyright className="size-3" />
            2026 CARX. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-[10px] tracking-[0.1em] text-white/30 transition-colors hover:text-white/60"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[10px] tracking-[0.1em] text-white/30 transition-colors hover:text-white/60"
            >
              Terms
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex size-7 items-center justify-center border border-white/10 text-white/30 transition-colors duration-200 hover:border-white/30 hover:text-white/70"
              aria-label="Back to top"
            >
              <IconArrowUp className="size-3" />
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
