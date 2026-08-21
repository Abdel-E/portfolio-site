import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight, Github } from 'lucide-react'
import { PROJECTS, type Project } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected engineering work — kernels, wearables, and anomaly detection.',
}

function isGithub(href: string) {
  return href.includes('github.com')
}

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h2 className="text-[1.05rem] font-semibold tracking-tight text-ink dark:text-papyrus">
            {project.name}
          </h2>
          {project.award ? (
            <p className="mt-1 text-sm text-gold">{project.award}</p>
          ) : null}
        </div>
        {project.href ? (
          <span
            className="mt-0.5 shrink-0 text-muted transition-colors group-hover:text-gold"
            aria-hidden="true"
          >
            {isGithub(project.href) ? (
              <Github className="h-4 w-4" />
            ) : (
              <ArrowUpRight className="h-4 w-4" />
            )}
          </span>
        ) : null}
      </div>

      <p className="mt-3 text-[15px] leading-relaxed text-muted">
        {project.summary}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-sand bg-sand/70 px-2.5 py-0.5 text-[11px] tracking-wide text-muted dark:border-white/10 dark:bg-white/5"
          >
            {tech}
          </li>
        ))}
      </ul>
    </>
  )

  const className =
    'group block rounded-2xl border border-sand/90 bg-papyrus/90 p-5 shadow-[0_0_0_1px_rgba(28,25,22,0.04)] transition-colors dark:border-white/12 dark:bg-[#1c1814]/85 dark:shadow-none sm:p-6'

  if (project.href) {
    const hoverClass = `${className} hover:border-gold/50 dark:hover:border-gold/40`
    if (project.href.startsWith('/')) {
      return (
        <Link href={project.href} className={hoverClass}>
          {content}
        </Link>
      )
    }

    return (
      <a
        href={project.href}
        target="_blank"
        rel="noreferrer"
        className={hoverClass}
      >
        {content}
      </a>
    )
  }

  return <div className={className}>{content}</div>
}

export default function ProjectsPage() {
  return (
    <main className="page-enter">
      <h1 className="font-serif text-[1.7rem] font-semibold tracking-tight text-ink dark:text-papyrus sm:text-[2.15rem]">
        Projects
      </h1>
      <p className="mt-1.5 text-[15px] text-muted">
        A short list. The interesting parts are in the constraints.
      </p>

      <ul className="mt-7 space-y-4">
        {PROJECTS.map((project) => (
          <li key={project.id} id={project.id} className="scroll-mt-8">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </main>
  )
}
