export type ContributionDay = {
  date: string
  count: number
  level: number
}

export type GithubActivity = {
  total: number
  weeks: Array<Array<ContributionDay | null>>
}

const USER = 'Abdel-E'

export async function getGithubActivity(): Promise<GithubActivity | null> {
  try {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${USER}?y=last`,
      { next: { revalidate: 3600 } },
    )
    if (!response.ok) return null

    const payload = (await response.json()) as {
      total?: { lastYear?: number }
      contributions?: ContributionDay[]
    }
    const days = Array.isArray(payload.contributions)
      ? payload.contributions
      : []
    if (days.length === 0) return null

    const total =
      payload.total?.lastYear ??
      days.reduce((sum, day) => sum + (day.count || 0), 0)

    const firstDow = new Date(`${days[0].date}T00:00:00Z`).getUTCDay()
    const padded: Array<ContributionDay | null> = [
      ...Array.from({ length: firstDow }, () => null),
      ...days,
    ]
    const weeks: GithubActivity['weeks'] = []
    for (let i = 0; i < padded.length; i += 7) {
      weeks.push(padded.slice(i, i + 7))
    }

    return { total, weeks: weeks.slice(-52) }
  } catch {
    return null
  }
}
