"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { GraduationCap, Moon, Sun, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center gap-2.5" aria-label="ScholarPath home">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-sm">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-heading tracking-tight text-foreground">
            ScholarPath
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 sm:flex">
          <a
            href="#search"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Search
          </a>
          <a
            href="#scholarships"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Browse
          </a>
        </div>

        <div className="flex items-center gap-1">
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
              className="rounded-full"
            >
              {resolvedTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem]" />
              ) : (
                <Moon className="h-[1.2rem] w-[1.2rem]" />
              )}
            </Button>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full sm:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border/40 bg-background px-4 pb-4 pt-2 sm:hidden">
          <div className="flex flex-col gap-2">
            <a
              href="#search"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Search
            </a>
            <a
              href="#scholarships"
              onClick={() => setMobileOpen(false)}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              Browse
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
