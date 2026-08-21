import { cn } from '@/lib/utils'

const VARIANTS = {
  note: {
    label: 'Note',
    className:
      'border-nile/25 bg-nile/[0.06] dark:border-nile/30 dark:bg-nile/10',
    labelClassName: 'text-nile',
  },
  result: {
    label: 'Result',
    className:
      'border-gold/35 bg-gold/[0.08] dark:border-gold/30 dark:bg-gold/10',
    labelClassName: 'text-gold',
  },
  insight: {
    label: 'Why it mattered',
    className:
      'border-sand bg-sand/50 dark:border-white/12 dark:bg-white/[0.04]',
    labelClassName: 'text-muted',
  },
} as const

export function Callout({
  title,
  variant = 'note',
  children,
}: {
  title?: string
  variant?: keyof typeof VARIANTS
  children: React.ReactNode
}) {
  const style = VARIANTS[variant]

  return (
    <aside
      className={cn(
        'not-prose my-7 rounded-xl border px-4 py-3.5 sm:px-5 sm:py-4',
        style.className,
      )}
    >
      <p
        className={cn(
          'text-[11px] font-medium uppercase tracking-[0.14em]',
          style.labelClassName,
        )}
      >
        {title ?? style.label}
      </p>
      <div className="mt-1.5 text-[15px] leading-relaxed text-ink/90 dark:text-papyrus/90 [&_code]:rounded [&_code]:bg-sand/80 [&_code]:px-1 [&_code]:py-px [&_code]:text-[13px] [&_code]:text-nile dark:[&_code]:bg-white/10 dark:[&_code]:text-[#7ec8c3] [&_p]:m-0 [&_p+p]:mt-2 [&_strong]:text-ink dark:[&_strong]:text-papyrus">
        {children}
      </div>
    </aside>
  )
}
