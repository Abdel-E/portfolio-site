export function Favicon({
  domain,
  logo,
  label,
}: {
  domain?: string
  logo?: string
  label: string
}) {
  const initial = label.charAt(0).toUpperCase()
  const src = logo ?? (domain ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64` : undefined)

  return (
    <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-[10px] bg-white text-[12px] font-medium text-ink shadow-[0_0_0_1px_rgba(28,25,22,0.08)] dark:bg-white/10 dark:text-papyrus dark:shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
      {initial}
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : null}
    </span>
  )
}
