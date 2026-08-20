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
    <header className="flex items-start justify-between gap-6">
      <div>
        <ScrambleName />
        <p className="mt-1 text-[15px] text-muted">{SITE.tagline}</p>
      </div>

      <nav className="flex items-center gap-5 pt-2 text-[15px] text-muted">
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="transition-colors hover:text-ink dark:hover:text-papyrus"
          >
            {item.label}
          </Link>
        ))}
        <button
          type="button"
          onClick={toggle}
          className="text-muted transition-colors hover:text-ink dark:hover:text-papyrus"
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
