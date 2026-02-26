"use client"

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

interface HeroSectionProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  totalResults: number
}

export function HeroSection({
  searchQuery,
  onSearchChange,
  totalResults,
}: HeroSectionProps) {
  return (
    <section
      id="search"
      className="relative overflow-hidden border-b border-border/40 bg-gradient-to-b from-secondary/50 to-background"
    >
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/[0.04] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Discover Opportunities
          </p>
          <h1 className="text-balance text-3xl font-bold font-heading tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Find Your Perfect Scholarship
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            Search through thousands of scholarships worldwide. Filter by
            country, degree, field of study, and more.
          </p>

          {/* Search bar */}
          <div className="mx-auto mt-8 max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name, university, country, or field..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="h-12 rounded-xl border-border/60 bg-card pl-11 pr-4 text-sm shadow-sm transition-all focus-visible:shadow-md focus-visible:ring-2"
                aria-label="Search scholarships"
              />
            </div>
            <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
              {totalResults} scholarship{totalResults !== 1 ? "s" : ""}{" "}
              {searchQuery ? "matched" : "available"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
