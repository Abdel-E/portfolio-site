'use client'

import { useEffect, useRef, useState } from 'react'
import type { GithubActivity } from '@/lib/github'

const LEVELS = [
  'bg-[#eadfcd] dark:bg-white/10',
  'bg-[#d4c0a0]',
  'bg-[#c4a35a]',
  'bg-[#8a7a4a]',
  'bg-[#5c5340]',
]

const CELL = 13

export function GithubHeatmap({ activity }: { activity: GithubActivity }) {
  const ref = useRef<HTMLDivElement>(null)
  const [weeks, setWeeks] = useState(activity.weeks.length)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const measure = () => {
      const width = node.clientWidth
      const fit = Math.max(8, Math.floor(width / CELL))
      setWeeks(Math.min(activity.weeks.length, fit))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(node)
    return () => observer.disconnect()
  }, [activity.weeks.length])

  const visible = activity.weeks.slice(-weeks)

  return (
    <section>
      <h2 className="mb-2 text-base font-semibold text-ink dark:text-papyrus">
        GitHub
      </h2>
      <div ref={ref} className="overflow-hidden">
        <div className="flex gap-[3px]">
          {visible.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px]">
              {Array.from({ length: 7 }, (_, dayIndex) => {
                const day = week[dayIndex]
                const level = day ? Math.min(4, day.level || 0) : -1
                return (
                  <span
                    key={`${weekIndex}-${dayIndex}`}
                    title={
                      day
                        ? `${day.date}: ${day.count} contribution${day.count === 1 ? '' : 's'}`
                        : undefined
                    }
                    className={`h-[10px] w-[10px] rounded-[2px] ${
                      level < 0 ? 'bg-transparent' : LEVELS[level]
                    }`}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
