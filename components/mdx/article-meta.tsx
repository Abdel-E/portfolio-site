export function ArticleMeta({
  date,
  readingTime,
}: {
  date: string
  readingTime: number
}) {
  const formatted = new Date(date).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  return (
    <p className="not-prose mb-5 text-sm text-muted">
      {formatted} · {readingTime} min read
    </p>
  )
}
