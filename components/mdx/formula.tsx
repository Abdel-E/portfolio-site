export function Formula({
  caption,
  children,
}: {
  caption?: string
  children: React.ReactNode
}) {
  return (
    <figure className="not-prose my-7">
      <div className="overflow-x-auto rounded-xl border border-sand bg-sand/40 px-4 py-4 text-center dark:border-white/12 dark:bg-white/[0.04] sm:px-6">
        <div className="font-serif text-[1.05rem] leading-relaxed text-ink dark:text-papyrus sm:text-[1.15rem]">
          {children}
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-2 text-center text-sm text-muted">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}
