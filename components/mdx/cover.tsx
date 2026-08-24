'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Cover({
  src,
  alt,
  caption,
}: {
  src: string
  alt: string
  caption: string
}) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  return (
    <>
      <figure className="not-prose my-8">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full cursor-zoom-in rounded-xl text-left"
          aria-label={`View larger: ${alt}`}
        >
          <img
            src={src}
            alt={alt}
            className="w-full rounded-xl border border-sand bg-sand/30 transition-colors group-hover:border-gold/40 dark:border-white/12 dark:bg-white/[0.03] dark:group-hover:border-gold/35"
          />
        </button>
        <figcaption className="mt-2.5 text-center text-sm text-muted">
          {caption}
        </figcaption>
      </figure>

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-label={alt}
              onClick={() => setOpen(false)}
            >
              <div
                className="absolute inset-0 bg-ink/70 backdrop-blur-sm dark:bg-black/75"
                aria-hidden="true"
              />
              <div
                className={cn(
                  'relative flex max-h-[min(92dvh,56rem)] w-full max-w-[min(96vw,72rem)] flex-col',
                  'rounded-2xl border border-sand/80 bg-papyrus shadow-2xl dark:border-white/12 dark:bg-[#1c1814]',
                )}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-sand/80 bg-papyrus/95 text-muted transition-colors hover:text-ink dark:border-white/12 dark:bg-[#1c1814]/95 dark:hover:text-papyrus"
                  aria-label="Close image"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="overflow-auto p-3 pt-11 sm:p-5 sm:pt-12">
                  <img
                    src={src}
                    alt={alt}
                    className="mx-auto max-h-[min(72dvh,44rem)] w-full object-contain"
                  />
                  <p className="mt-4 text-center text-sm leading-relaxed text-muted">
                    {caption}
                  </p>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  )
}
