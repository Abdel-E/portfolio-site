import { ExperienceList } from '@/components/experience-list'
import { Favicon } from '@/components/favicon'
import { GithubHeatmap } from '@/components/github-heatmap'
import { EXPERIENCE } from '@/content/experience'
import { SITE } from '@/content/site'
import { getGithubActivity } from '@/lib/github'

export default async function HomePage() {
  const activity = await getGithubActivity()

  return (
    <main className="page-enter space-y-5">
      <section>
        <h2 className="mb-2 text-base font-semibold text-ink dark:text-papyrus">
          Experience
        </h2>
        <ExperienceList jobs={EXPERIENCE} />
      </section>

      <section>
        <h2 className="mb-2 text-base font-semibold text-ink dark:text-papyrus">
          Education
        </h2>
        <div className="flex items-start gap-3">
          <Favicon logo="/logos/uoft.png" label={SITE.education.school} />
          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-3">
              <p className="text-[16px] font-semibold leading-tight text-ink dark:text-papyrus">
                {SITE.education.school}
              </p>
              <p className="shrink-0 text-[13px] text-muted sm:text-[14px]">
                {SITE.education.status}
              </p>
            </div>
            <p className="mt-0.5 text-[14px] leading-tight text-muted">
              {SITE.education.program}
            </p>
          </div>
        </div>
      </section>

      {activity ? <GithubHeatmap activity={activity} /> : null}
    </main>
  )
}
