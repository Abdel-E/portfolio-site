'use client'

import { useEffect, useState } from 'react'
import { SITE } from '@/content/site'

export function CopyEmail() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timeout = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timeout)
  }, [copied])

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={async () => {
          await navigator.clipboard.writeText(SITE.email)
          setCopied(true)
        }}
        className="text-nile transition-colors hover:text-gold"
      >
        {SITE.email}
      </button>
      <span
        role="status"
        className={`pointer-events-none absolute left-0 top-full z-10 mt-1 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-xs text-papyrus shadow-sm transition-opacity ${
          copied ? 'opacity-100' : 'opacity-0'
        }`}
      >
        Email copied to clipboard!
      </span>
    </span>
  )
}
