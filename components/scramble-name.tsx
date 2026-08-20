'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { SITE } from '@/content/site'

const ENGLISH = SITE.displayName
const ARABIC = SITE.nameArabic
const LATIN_POOL = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const ARABIC_POOL = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي'

function pick(pool: string) {
  return pool[Math.floor(Math.random() * pool.length)] ?? pool[0] ?? 'ا'
}

type QueueItem = {
  from: string
  to: string
  start: number
  end: number
}

function buildQueue(from: string, to: string): QueueItem[] {
  const fromChars = Array.from(from)
  const toChars = Array.from(to)
  return toChars.map((char, index) => ({
    from: fromChars[index] ?? '',
    to: char,
    start: index * 2,
    end: index * 2 + 10,
  }))
}

export function ScrambleName() {
  const [text, setText] = useState<string>(ENGLISH)
  const [arabic, setArabic] = useState(false)
  const hovering = useRef(false)
  const generation = useRef(0)
  const holdTimer = useRef(0)
  const raf = useRef(0)
  const currentText = useRef<string>(ENGLISH)
  const reduceMotion = useRef(false)

  const stop = () => {
    window.cancelAnimationFrame(raf.current)
    window.clearTimeout(holdTimer.current)
  }

  const decodeTo = (target: string, then: () => void) => {
    const my = generation.current
    const toArabic = target === ARABIC
    setArabic(toArabic)

    if (reduceMotion.current) {
      currentText.current = target
      setText(target)
      then()
      return
    }

    const pool = toArabic ? ARABIC_POOL : LATIN_POOL
    const queue = buildQueue(currentText.current, target)
    const started = performance.now()

    const tick = (now: number) => {
      if (my !== generation.current) return

      const frame = Math.floor((now - started) / 16)
      let output = ''
      let done = 0

      for (const item of queue) {
        if (item.to === ' ') {
          output += ' '
          done += 1
          continue
        }

        if (frame >= item.end) {
          output += item.to
          done += 1
        } else if (frame >= item.start) {
          output += pick(pool)
        } else {
          output += item.from || pick(pool)
        }
      }

      currentText.current = output
      setText(output)

      if (done === queue.length) {
        currentText.current = target
        setText(target)
        then()
        return
      }

      raf.current = window.requestAnimationFrame(tick)
    }

    stop()
    raf.current = window.requestAnimationFrame(tick)
  }

  const playOnce = () => {
    decodeTo(ARABIC, () => {
      if (!hovering.current) return
      holdTimer.current = window.setTimeout(() => {
        if (!hovering.current) return
        decodeTo(ENGLISH, () => setArabic(false))
      }, 1400)
    })
  }

  const onEnter = () => {
    if (hovering.current) return
    hovering.current = true
    generation.current += 1
    stop()
    playOnce()
  }

  const onLeave = () => {
    hovering.current = false
    generation.current += 1
    stop()
    if (currentText.current === ENGLISH) {
      setArabic(false)
      setText(ENGLISH)
      return
    }
    decodeTo(ENGLISH, () => setArabic(false))
  }

  useEffect(() => {
    reduceMotion.current = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    return () => stop()
  }, [])

  return (
    <Link
      href="/"
      aria-label="Home"
      className="inline-flex min-h-9 min-w-[12rem] items-center font-serif text-[2.15rem] font-semibold leading-tight tracking-tight text-ink dark:text-papyrus"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <span
        dir={arabic ? 'rtl' : 'ltr'}
        lang={arabic ? 'ar' : 'en'}
        className={
          arabic
            ? 'whitespace-nowrap font-[family-name:var(--font-noto-naskh)] text-[1.7rem] font-medium'
            : 'whitespace-nowrap'
        }
      >
        {text}
      </span>
    </Link>
  )
}
