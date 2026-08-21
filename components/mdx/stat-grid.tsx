export function StatGrid({
  items,
}: {
  items: { label: string; from: string; to: string }[]
}) {
  return (
    <div className="not-prose my-7 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-sand bg-sand/40 px-4 py-3.5 dark:border-white/12 dark:bg-white/[0.04]"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted">
            {item.label}
          </p>
          <p className="mt-1.5 font-serif text-lg text-ink dark:text-papyrus">
            <span className="text-muted line-through decoration-ink/25 dark:decoration-papyrus/25">
              {item.from}
            </span>
            <span className="mx-2 text-gold" aria-hidden="true">
              →
            </span>
            <span>{item.to}</span>
          </p>
        </div>
      ))}
    </div>
  )
}
