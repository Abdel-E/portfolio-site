import type { Metadata } from 'next'
import { PROJECTS } from '@/content/projects'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Selected engineering work — kernels, wearables, and anomaly detection.',
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

      <ul className="mt-6 space-y-8">
        {PROJECTS.map((project) => (
          <li key={project.id} id={project.id} className="scroll-mt-8">
            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <h2 className="text-base font-semibold text-ink dark:text-papyrus">{project.name}</h2>
              {project.award ? (
                <span className="text-sm text-gold">{project.award}</span>
              ) : null}
              {project.href ? (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-nile hover:text-gold"
                >
                  ↗
                </a>
              ) : null}
            </div>

            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-sand px-2.5 py-0.5 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/90 dark:text-papyrus/90">
              {project.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-2.5">
                  <span
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold"
                    aria-hidden="true"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </main>
  )
}
