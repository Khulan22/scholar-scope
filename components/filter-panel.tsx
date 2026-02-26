"use client"

import { useState } from "react"
import { SlidersHorizontal, X, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  countries,
  degreeLevels,
  fieldsOfStudy,
  scholarshipTypes,
  deadlineOptions,
} from "@/lib/scholarships"

export interface Filters {
  country: string
  degreeLevel: string
  fieldOfStudy: string
  type: string
  deadline: string
}

interface FilterPanelProps {
  filters: Filters
  onFilterChange: (key: keyof Filters, value: string) => void
  onReset: () => void
  activeFilterCount: number
}

const filterConfig: {
  key: keyof Filters
  label: string
  placeholder: string
  options: string[]
}[] = [
  { key: "country", label: "Country", placeholder: "All Countries", options: countries },
  { key: "degreeLevel", label: "Degree Level", placeholder: "All Degrees", options: degreeLevels },
  { key: "fieldOfStudy", label: "Field of Study", placeholder: "All Fields", options: fieldsOfStudy },
  { key: "type", label: "Type", placeholder: "All Types", options: scholarshipTypes },
  { key: "deadline", label: "Deadline", placeholder: "Any Deadline", options: deadlineOptions },
]

export function FilterPanel({
  filters,
  onFilterChange,
  onReset,
  activeFilterCount,
}: FilterPanelProps) {
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="rounded-2xl border border-border/60 bg-card shadow-sm">
      {/* Header - always visible */}
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        className="flex w-full items-center justify-between px-5 py-4"
        aria-expanded={expanded}
      >
        <div className="flex items-center gap-2.5">
          <SlidersHorizontal className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold text-foreground">Filters</span>
          {activeFilterCount > 0 && (
            <Badge variant="default" className="h-5 min-w-5 rounded-full px-1.5 text-[10px]">
              {activeFilterCount}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          {activeFilterCount > 0 && (
            <span
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation()
                onReset()
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation()
                  onReset()
                }
              }}
              className="flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <X className="h-3 w-3" />
              Clear
            </span>
          )}
          {expanded ? (
            <ChevronUp className="h-4 w-4 text-muted-foreground" />
          ) : (
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          )}
        </div>
      </button>

      {/* Filter dropdowns */}
      {expanded && (
        <div className="border-t border-border/40 px-5 pb-5 pt-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {filterConfig.map(({ key, label, placeholder, options }) => (
              <div key={key} className="flex flex-col gap-1.5">
                <label
                  htmlFor={`filter-${key}`}
                  className="text-xs font-medium text-muted-foreground"
                >
                  {label}
                </label>
                <Select
                  value={filters[key]}
                  onValueChange={(v) => onFilterChange(key, v)}
                >
                  <SelectTrigger
                    id={`filter-${key}`}
                    className="h-10 w-full rounded-lg text-sm"
                  >
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{placeholder}</SelectItem>
                    {options.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>

          {/* Active filter chips */}
          {activeFilterCount > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs text-muted-foreground">Active:</span>
              {filterConfig
                .filter(({ key }) => filters[key] !== "all")
                .map(({ key, label }) => (
                  <Badge
                    key={key}
                    variant="secondary"
                    className="gap-1 rounded-full pl-2.5 pr-1.5 text-xs"
                  >
                    {label}: {filters[key]}
                    <button
                      type="button"
                      onClick={() => onFilterChange(key, "all")}
                      className="ml-0.5 rounded-full p-0.5 hover:bg-muted-foreground/20"
                      aria-label={`Remove ${label} filter`}
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={onReset}
                className="h-6 px-2 text-xs text-muted-foreground"
              >
                Clear all
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
