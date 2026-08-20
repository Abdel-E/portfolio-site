import { Github, Linkedin, Mail } from 'lucide-react'
import { ScarabHome } from '@/components/scarab-home'
import { SITE } from '@/content/site'

const ICONS = [
  {
    href: SITE.links.linkedin,
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: SITE.links.github,
    label: 'GitHub',
    icon: Github,
  },
  {
    href: `mailto:${SITE.email}`,
    label: 'Email',
    icon: Mail,
  },
] as const

export function Footer() {
  return (
    <footer className="relative mt-6 flex flex-col items-center gap-4 border-t border-sand/80 pt-5 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
      <div className="order-2 flex items-center gap-1 text-muted sm:order-1">
        {ICONS.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
            aria-label={label}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md transition-colors hover:text-ink dark:hover:text-papyrus sm:h-10 sm:w-10"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <ScarabHome />
      <p className="order-3 text-center text-[13px] text-muted sm:text-right">
        {new Date().getFullYear()} © {SITE.name}
      </p>
    </footer>
  )
}
