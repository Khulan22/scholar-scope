"use client"

import { MapPin, CalendarDays, GraduationCap, BookOpen, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Scholarship } from "@/lib/scholarships"

interface ScholarshipCardProps {
  scholarship: Scholarship
  onViewDetails: (scholarship: Scholarship) => void
  index: number
}

function formatDeadline(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function getDaysUntil(dateStr: string): number {
  const now = new Date()
  const deadline = new Date(dateStr)
  return Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

function getTypeBadgeVariant(type: string): "default" | "secondary" | "outline" {
  switch (type) {
    case "Fully Funded":
      return "default"
    case "Merit-based":
      return "outline"
    default:
      return "secondary"
  }
}

export function ScholarshipCard({ scholarship, onViewDetails, index }: ScholarshipCardProps) {
  const daysLeft = getDaysUntil(scholarship.deadline)
  const isUrgent = daysLeft <= 30 && daysLeft > 0
  const isPast = daysLeft <= 0

  return (
    <article
      className="group relative flex flex-col rounded-2xl border border-border/60 bg-card shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:border-primary/25 animate-fade-in-up"
      style={{ animationDelay: `${Math.min(index * 60, 600)}ms` }}
    >
      <div className="flex flex-1 flex-col p-5">
        {/* Header */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0 flex-1">
            <h3 className="truncate text-base font-bold font-heading leading-snug text-foreground transition-colors group-hover:text-primary">
              {scholarship.name}
            </h3>
            <p className="mt-0.5 truncate text-sm text-muted-foreground">
              {scholarship.university}
            </p>
          </div>
          <Badge
            variant={getTypeBadgeVariant(scholarship.type)}
            className="shrink-0 text-[11px]"
          >
            {scholarship.type}
          </Badge>
        </div>

        {/* Metadata grid */}
        <div className="mb-3 grid grid-cols-2 gap-y-2 gap-x-3">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary/60" />
            <span className="truncate">{scholarship.country}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <GraduationCap className="h-3.5 w-3.5 shrink-0 text-primary/60" />
            <span className="truncate">{scholarship.degreeLevel}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5 shrink-0 text-primary/60" />
            <span className="truncate">{scholarship.fieldOfStudy}</span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <CalendarDays className="h-3.5 w-3.5 shrink-0 text-primary/60" />
            <span className={isUrgent ? "font-semibold text-destructive" : isPast ? "line-through opacity-60" : ""}>
              {formatDeadline(scholarship.deadline)}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {scholarship.shortDescription}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between gap-3 border-t border-border/40 pt-3">
          {isPast ? (
            <span className="text-xs text-muted-foreground/60">Deadline passed</span>
          ) : isUrgent ? (
            <span className="text-xs font-semibold text-destructive">
              {daysLeft} day{daysLeft !== 1 ? "s" : ""} left
            </span>
          ) : (
            <span className="text-xs text-muted-foreground">
              {daysLeft} days remaining
            </span>
          )}
          <Button
            variant="ghost"
            size="sm"
            className="gap-1 rounded-lg text-xs font-semibold text-primary hover:bg-primary/10 hover:text-primary"
            onClick={() => onViewDetails(scholarship)}
          >
            Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
    </article>
  )
}
