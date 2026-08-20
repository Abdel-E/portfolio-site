'use client'

import Link from 'next/link'
import { MoonIcon, SunIcon } from 'lucide-react'
import { ScrambleName } from '@/components/scramble-name'
import { useTheme } from '@/components/theme-provider'
import { SITE } from '@/content/site'

const NAV = [
  { href: '/projects', label: 'projects' },
  { href: '/writing', label: 'writing' },
]

export function Header() {
  const { theme, toggle } = useTheme()

  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
      <div className="min-w-0">
        <ScrambleName />
        <p className="mt-1 text-[15px] text-muted">{SITE.tagline}</p>
      </div>

      <nav className="flex shrink-0 items-center gap-4 text-[15px] text-muted sm:gap-5 sm:pt-2">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="py-1 transition-colors hover:text-ink dark:hover:text-papyrus"
          >
            {item.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={toggle}
          className="inline-flex h-9 w-9 items-center justify-center text-muted transition-colors hover:text-ink dark:hover:text-papyrus sm:h-auto sm:w-auto"
          aria-label={
            theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
          }
        >
          {theme === 'dark' ? (
            <MoonIcon className="h-3.5 w-3.5" />
          ) : (
            <SunIcon className="h-3.5 w-3.5" />
          )}
        </button>
      </nav>
    </header>
  )
}
