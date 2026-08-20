import type { Metadata } from 'next'
import Link from 'next/link'
import { WRITING } from '@/content/writing'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Notes on systems, perception, and building under constraints.',
}

export default function WritingIndexPage() {
  return (
    <main className="page-enter">
      <h1 className="font-serif text-[1.7rem] font-semibold tracking-tight text-ink dark:text-papyrus sm:text-[2.15rem]">
        Writing
      </h1>
      <p className="mt-1.5 text-[15px] text-muted">
        Short notes. More when something is worth keeping.
      </p>

      <ul className="mt-6 space-y-5">
        {WRITING.map((post) => (
          <li key={post.slug}>
            <Link href={`/writing/${post.slug}`} className="group block">
              <p className="text-xs text-muted">
                {new Date(post.date).toLocaleDateString('en-CA', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </p>
              <h2 className="mt-1 text-base font-semibold text-ink group-hover:text-nile dark:text-papyrus">
                {post.title}
              </h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  )
}
