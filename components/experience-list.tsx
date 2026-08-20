'use client'

import { XIcon } from 'lucide-react'
import {
  MorphingDialog,
  MorphingDialogClose,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogDescription,
  MorphingDialogSubtitle,
  MorphingDialogTitle,
  MorphingDialogTrigger,
} from '@/components/ui/morphing-dialog'
import { Favicon } from '@/components/favicon'
import type { Experience } from '@/content/experience'

export function ExperienceList({ jobs }: { jobs: Experience[] }) {
  return (
    <ul className="space-y-2.5">
      {jobs.map((job) => (
        <li key={job.id}>
          <ExperienceRow job={job} />
        </li>
      ))}
    </ul>
  )
}

function ExperienceRow({ job }: { job: Experience }) {
  return (
    <MorphingDialog
      transition={{ type: 'spring', bounce: 0.05, duration: 0.28 }}
    >
      <MorphingDialogTrigger className="-mx-1.5 rounded-md px-1.5 py-1 text-left transition-colors hover:bg-sand/60 dark:hover:bg-white/5">
        <div className="flex items-start gap-3">
          <Favicon domain={job.domain} logo={job.logo} label={job.company} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
              <MorphingDialogTitle className="text-[16px] font-semibold leading-tight text-ink dark:text-papyrus sm:truncate">
                {job.company}
              </MorphingDialogTitle>
              <span className="shrink-0 text-[13px] text-muted sm:text-[14px]">
                {job.start} — {job.end}
              </span>
            </div>
            <MorphingDialogSubtitle className="mt-0.5 text-[14px] leading-tight text-muted">
              {job.title}
            </MorphingDialogSubtitle>
          </div>
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="relative max-h-[min(85dvh,36rem)] w-[min(100vw-1.5rem,32rem)] overflow-y-auto rounded-2xl border border-gold/35 bg-papyrus p-5 shadow-[0_20px_50px_-24px_rgba(28,25,22,0.45)] dark:border-gold/25 dark:bg-[#161310] sm:p-6">
          <MorphingDialogClose className="absolute right-4 top-4 rounded-full p-1 text-muted transition-colors hover:text-ink dark:hover:text-papyrus">
            <XIcon size={18} />
          </MorphingDialogClose>

          <MorphingDialogTitle className="pr-8 font-serif text-xl text-ink dark:text-papyrus">
            {job.title}
          </MorphingDialogTitle>
          <MorphingDialogSubtitle className="mt-1 text-sm text-muted">
            {job.company}
            <span className="mx-1.5 text-gold">·</span>
            {job.start} — {job.end}
          </MorphingDialogSubtitle>

          <MorphingDialogDescription
            disableLayoutAnimation
            className="mt-4"
            variants={{
              initial: { opacity: 0, y: 8, filter: 'blur(4px)' },
              animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
              exit: { opacity: 0, filter: 'blur(4px)' },
            }}
          >
            <ul className="space-y-2.5 text-sm leading-relaxed text-ink/90 dark:text-papyrus/90">
              {job.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            {job.link ? (
              <a
                href={job.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-sm text-nile hover:text-gold"
              >
                {new URL(job.link).hostname.replace(/^www\./, '')} ↗
              </a>
            ) : null}
          </MorphingDialogDescription>
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  )
}
