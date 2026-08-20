'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { EGYPT_FACTS } from '@/content/egypt-facts'

export function ScarabHome() {
  const [index, setIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const hovering = useRef(false)
  const advanceOnNextHover = useRef(false)

  const onEnter = () => {
    if (hovering.current) return
    hovering.current = true
    if (advanceOnNextHover.current) {
      setIndex((current) => (current + 1) % EGYPT_FACTS.length)
      advanceOnNextHover.current = false
    }
    setOpen(true)
  }

  const onLeave = () => {
    hovering.current = false
    setOpen(false)
    advanceOnNextHover.current = true
  }

  return (
    <Link
      href="/"
      aria-label="Home"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className="scarab-shake relative order-1 inline-flex h-12 w-12 items-center justify-center sm:absolute sm:left-1/2 sm:top-5 sm:-translate-x-1/2 sm:order-none"
    >
      <span
        role="status"
        className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-1.5 w-[min(20rem,calc(100vw-2rem))] -translate-x-1/2 rounded-md bg-ink px-2.5 py-1.5 text-center text-[12px] leading-snug text-papyrus shadow-sm transition-opacity duration-200 dark:bg-papyrus dark:text-ink [@media(hover:hover)]:w-max [@media(hover:hover)]:whitespace-nowrap [@media(hover:hover)]:text-[13px] [@media(hover:hover)]:leading-none ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {EGYPT_FACTS[index]}
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/scarab-toggle.png" alt="" className="h-10 w-10 object-contain" />
    </Link>
  )
}
