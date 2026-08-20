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
    <footer className="relative mt-6 flex items-center justify-between border-t border-sand/80 pt-5 dark:border-white/10">
      <div className="flex items-center gap-1 text-muted">
        {ICONS.map(({ href, label, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
            aria-label={label}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors hover:text-ink dark:hover:text-papyrus"
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
      <ScarabHome />
      <p className="text-[13px] text-muted">
        {new Date().getFullYear()} © {SITE.name}
      </p>
    </footer>
  )
}
