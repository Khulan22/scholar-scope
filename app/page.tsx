"use client"

import { useState, useMemo, useCallback } from "react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FilterPanel, type Filters } from "@/components/filter-panel"
import { ScholarshipCard } from "@/components/scholarship-card"
import { ScholarshipModal } from "@/components/scholarship-modal"
import {
  scholarships,
  getDeadlineCategory,
  type Scholarship,
} from "@/lib/scholarships"
import { GraduationCap, Search } from "lucide-react"

const defaultFilters: Filters = {
  country: "all",
  degreeLevel: "all",
  fieldOfStudy: "all",
  type: "all",
  deadline: "all",
}

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const filteredScholarships = useMemo(() => {
    return scholarships.filter((s) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const searchable = [
          s.name,
          s.university,
          s.country,
          s.fieldOfStudy,
          s.shortDescription,
          s.degreeLevel,
          s.type,
        ]
          .join(" ")
          .toLowerCase()
        if (!searchable.includes(query)) return false
      }

      // Dropdown filters (all apply in real-time)
      if (filters.country !== "all" && s.country !== filters.country) return false
      if (filters.degreeLevel !== "all" && s.degreeLevel !== filters.degreeLevel)
        return false
      if (filters.fieldOfStudy !== "all" && s.fieldOfStudy !== filters.fieldOfStudy)
        return false
      if (filters.type !== "all" && s.type !== filters.type) return false
      if (filters.deadline !== "all") {
        const category = getDeadlineCategory(s.deadline)
        if (category !== filters.deadline) return false
      }

      return true
    })
  }, [searchQuery, filters])

  const handleFilterChange = useCallback(
    (key: keyof Filters, value: string) => {
      setFilters((prev) => ({ ...prev, [key]: value }))
    },
    []
  )

  const handleResetFilters = useCallback(() => {
    setFilters(defaultFilters)
  }, [])

  const handleViewDetails = useCallback((scholarship: Scholarship) => {
    setSelectedScholarship(scholarship)
    setModalOpen(true)
  }, [])

  const activeFilterCount = Object.values(filters).filter((v) => v !== "all").length

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />

      <main className="flex-1">
        <HeroSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={filteredScholarships.length}
        />

        <section
          id="scholarships"
          className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"
          aria-label="Scholarship results"
        >
          {/* Filter Section */}
          <FilterPanel
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
            activeFilterCount={activeFilterCount}
          />

          {/* Results Header */}
          <div className="mt-8 mb-6 flex items-center justify-between">
            <h2 className="text-lg font-bold font-heading text-foreground sm:text-xl">
              {filteredScholarships.length > 0
                ? `${filteredScholarships.length} Scholarship${filteredScholarships.length !== 1 ? "s" : ""} Found`
                : "No Scholarships Found"}
            </h2>
            {(searchQuery || activeFilterCount > 0) && (
              <p className="hidden text-sm text-muted-foreground sm:block">
                {searchQuery && (
                  <span>
                    {"Searching: \""}
                    {searchQuery}
                    {"\""}
                  </span>
                )}
                {searchQuery && activeFilterCount > 0 && " + "}
                {activeFilterCount > 0 && (
                  <span>
                    {activeFilterCount} filter{activeFilterCount !== 1 ? "s" : ""}
                  </span>
                )}
              </p>
            )}
          </div>

          {/* Results Grid */}
          {filteredScholarships.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredScholarships.map((scholarship, i) => (
                <ScholarshipCard
                  key={scholarship.id}
                  scholarship={scholarship}
                  onViewDetails={handleViewDetails}
                  index={i}
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
                <Search className="h-7 w-7 text-muted-foreground" />
              </div>
              <h3 className="mt-4 text-base font-semibold font-heading text-foreground">
                No scholarships match your criteria
              </h3>
              <p className="mt-1 max-w-sm text-center text-sm text-muted-foreground">
                Try adjusting your search terms or clearing some filters to find
                more results.
              </p>
              {(searchQuery || activeFilterCount > 0) && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("")
                    handleResetFilters()
                  }}
                  className="mt-4 text-sm font-medium text-primary hover:underline"
                >
                  Clear all filters and search
                </button>
              )}
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/40 bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shadow-sm">
                <GraduationCap className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-sm font-bold font-heading text-foreground">
                ScholarPath
              </span>
            </div>
            <p className="text-center text-xs leading-relaxed text-muted-foreground sm:text-right">
              Helping students discover scholarship opportunities worldwide.
              <br className="hidden sm:block" />
              Data is for informational purposes only. Always verify details on
              official websites.
            </p>
          </div>
        </div>
      </footer>

      {/* Scholarship Details Modal */}
      <ScholarshipModal
        scholarship={selectedScholarship}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  )
}
