"use client"

import {
  MapPin,
  CalendarDays,
  GraduationCap,
  BookOpen,
  ExternalLink,
  CheckCircle2,
  FileText,
  Award,
  Clock,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import type { Scholarship } from "@/lib/scholarships"

interface ScholarshipModalProps {
  scholarship: Scholarship | null
  open: boolean
  onOpenChange: (open: boolean) => void
}

function formatDeadline(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

function getDaysUntil(dateStr: string): number {
  const now = new Date()
  const deadline = new Date(dateStr)
  return Math.ceil((deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
}

function InfoSection({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ComponentType<{ className?: string }>
  title: string
  items: string[]
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2">
        <Icon className="h-4 w-4 text-primary" />
        <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </h3>
      </div>
      <ul className="flex flex-col gap-2" role="list">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-foreground/90">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/50" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ScholarshipModal({ scholarship, open, onOpenChange }: ScholarshipModalProps) {
  if (!scholarship) return null

  const daysLeft = getDaysUntil(scholarship.deadline)
  const isPast = daysLeft <= 0
  const isUrgent = daysLeft > 0 && daysLeft <= 30

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-2xl border-border/60 p-0 sm:p-0">
        <div className="p-5 sm:p-6">
          <DialogHeader className="text-left">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0 flex-1">
                <DialogTitle className="text-xl font-bold font-heading text-foreground sm:text-2xl">
                  {scholarship.name}
                </DialogTitle>
                <DialogDescription className="mt-1 text-sm text-muted-foreground">
                  {scholarship.university}
                </DialogDescription>
              </div>
              <Badge
                variant={scholarship.type === "Fully Funded" ? "default" : "secondary"}
                className="shrink-0"
              >
                {scholarship.type}
              </Badge>
            </div>
          </DialogHeader>

          {/* Quick Info Bar */}
          <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-secondary/50 px-4 py-3 sm:flex sm:flex-wrap sm:gap-5">
            <div className="flex items-center gap-1.5 text-sm text-foreground">
              <MapPin className="h-4 w-4 shrink-0 text-primary" />
              <span className="truncate">{scholarship.country}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-foreground">
              <GraduationCap className="h-4 w-4 shrink-0 text-primary" />
              <span>{scholarship.degreeLevel}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-foreground">
              <BookOpen className="h-4 w-4 shrink-0 text-primary" />
              <span>{scholarship.fieldOfStudy}</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-foreground">
              <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
              <span>{formatDeadline(scholarship.deadline)}</span>
            </div>
          </div>

          {/* Deadline alert */}
          {!isPast && isUrgent && (
            <div className="mt-4 flex items-center gap-2 rounded-lg border border-destructive/20 bg-destructive/5 px-3 py-2">
              <Clock className="h-4 w-4 shrink-0 text-destructive" />
              <span className="text-sm font-medium text-destructive">
                Only {daysLeft} day{daysLeft !== 1 ? "s" : ""} left to apply
              </span>
            </div>
          )}

          {/* Full Description */}
          <div className="mt-6">
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              About This Scholarship
            </h3>
            <p className="text-sm leading-relaxed text-foreground/90">
              {scholarship.fullDescription}
            </p>
          </div>

          <Separator className="my-5" />

          <InfoSection icon={CheckCircle2} title="Eligibility Criteria" items={scholarship.eligibility} />

          <Separator className="my-5" />

          <InfoSection icon={Award} title="Benefits" items={scholarship.benefits} />

          <Separator className="my-5" />

          <InfoSection icon={FileText} title="Required Documents" items={scholarship.requiredDocuments} />

          {/* CTA */}
          <div className="mt-6">
            <Button asChild size="lg" className="w-full rounded-xl text-sm font-semibold">
              <a
                href={scholarship.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Official Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
