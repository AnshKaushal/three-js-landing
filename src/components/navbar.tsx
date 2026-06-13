"use client"

import * as React from "react"
import {
  IconMenu2,
  IconChevronDown,
  IconChartBar,
  IconLock,
  IconCloud,
  IconPuzzle,
  IconFileText,
  IconBook,
  IconUsers,
  IconLifebuoy,
  IconBuilding,
  IconRocket,
  IconSparkles,
  IconArrowRight,
  type TablerIcon,
} from "@tabler/icons-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Link } from "react-router-dom"

const navItems = [
  {
    label: "Products",
    items: [
      {
        label: "Analytics",
        description: "Real-time data insights",
        icon: IconChartBar,
      },
      {
        label: "Security",
        description: "Enterprise-grade protection",
        icon: IconLock,
      },
      {
        label: "Cloud",
        description: "Scalable infrastructure",
        icon: IconCloud,
      },
      {
        label: "Integrations",
        description: "Connect your tools",
        icon: IconPuzzle,
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        label: "Documentation",
        description: "Guides and API reference",
        icon: IconFileText,
      },
      { label: "Blog", description: "Latest updates and tips", icon: IconBook },
      {
        label: "Community",
        description: "Join the conversation",
        icon: IconUsers,
      },
      {
        label: "Support",
        description: "We're here to help",
        icon: IconLifebuoy,
      },
    ],
  },
  {
    label: "Company",
    items: [
      {
        label: "About",
        description: "Our story and mission",
        icon: IconBuilding,
      },
      { label: "Careers", description: "Join our team", icon: IconRocket },
    ],
  },
]

function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2.5">
      <div className="relative flex size-8 items-center justify-center">
        <div className="absolute size-full rotate-45 border border-foreground/20" />
        <div className="absolute size-3 bg-foreground" />
        <IconSparkles className="relative size-4 text-background" />
      </div>
      <span className="text-sm font-medium tracking-tight">carx</span>
    </Link>
  )
}

function MobileAccordionItem({
  label,
  items,
  onItemClick,
}: {
  label: string
  items: { label: string; description: string; icon: TablerIcon }[]
  onItemClick?: () => void
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3.5 text-sm font-medium transition-colors hover:text-foreground/80"
      >
        {label}
        <IconChevronDown
          className={cn(
            "size-4 text-muted-foreground transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>
      <div
        className={cn(
          "grid transition-all duration-200",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <div className="space-y-0.5 pr-4 pb-3 pl-4">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={onItemClick}
                className="group flex w-full items-center gap-3 rounded-none px-3 py-2.5 text-left text-xs transition-colors hover:bg-muted"
              >
                <div className="flex size-7 items-center justify-center border border-border">
                  <item.icon className="size-3.5 text-muted-foreground" />
                </div>
                <div>
                  <div className="text-xs font-medium">{item.label}</div>
                  <div className="text-[10px] text-muted-foreground">
                    {item.description}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [sheetOpen, setSheetOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((group) => (
            <DropdownMenu key={group.label}>
              <DropdownMenuTrigger asChild>
                <button className="group relative flex h-8 items-center gap-1 px-3 text-xs font-medium transition-colors hover:text-foreground/80">
                  {group.label}
                  <IconChevronDown className="size-3 text-muted-foreground transition-transform duration-200 group-data-open:rotate-180" />
                  <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-foreground transition-all duration-300 group-hover:w-4/5 group-data-open:w-4/5" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-56 p-1.5"
                align="start"
                sideOffset={8}
              >
                <DropdownMenuLabel className="px-2.5 pt-2 pb-1 text-[10px] font-medium tracking-wider text-muted-foreground uppercase">
                  {group.label}
                </DropdownMenuLabel>
                {group.items.map((item, idx) => (
                  <React.Fragment key={item.label}>
                    {idx === group.items.length - 1 &&
                    group.items.length > 1 ? (
                      <DropdownMenuSeparator className="my-1" />
                    ) : null}
                    <DropdownMenuItem className="group/item gap-3 px-2.5 py-2">
                      <div className="flex size-7 items-center justify-center border border-border bg-background transition-colors group-hover/item:bg-muted">
                        {React.createElement(item.icon, {
                          className: "size-3.5 text-muted-foreground",
                        })}
                      </div>
                      <div>
                        <div className="text-xs font-medium">{item.label}</div>
                        <div className="text-[10px] text-muted-foreground">
                          {item.description}
                        </div>
                      </div>
                    </DropdownMenuItem>
                  </React.Fragment>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm" className="group gap-1.5">
            Get Started
            <IconArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </div>

        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon-sm" className="ml-auto">
              <IconMenu2 className="size-4" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="flex w-full max-w-sm flex-col p-0"
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3.5">
              <Logo />
            </div>
            <div className="flex-1 overflow-y-auto">
              {navItems.map((group) => (
                <MobileAccordionItem
                  key={group.label}
                  label={group.label}
                  items={group.items}
                  onItemClick={() => setSheetOpen(false)}
                />
              ))}
              <div className="border-b border-border px-4 py-3.5">
                <a
                  href="#"
                  className="flex items-center gap-3 rounded-none px-3 py-2.5 text-xs font-medium transition-colors hover:bg-muted"
                  onClick={() => setSheetOpen(false)}
                >
                  <div className="flex size-7 items-center justify-center border border-border">
                    <IconSparkles className="size-3.5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-xs font-medium">Pricing</div>
                    <div className="text-[10px] text-muted-foreground">
                      See our plans
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="border-t border-border p-4">
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setSheetOpen(false)}
                >
                  Sign In
                </Button>
                <Button
                  className="w-full gap-1.5"
                  onClick={() => setSheetOpen(false)}
                >
                  Get Started
                  <IconArrowRight className="size-3.5" />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
