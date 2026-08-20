'use client'

import { TextMorph } from '@/components/ui/text-morph'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { useEffect, useState } from 'react'

function CopyButton() {
  const [text, setText] = useState('Copy')

  useEffect(() => {
    if (text === 'Copy') return
    const timeout = window.setTimeout(() => setText('Copy'), 2000)
    return () => window.clearTimeout(timeout)
  }, [text])

  return (
    <button
      onClick={() => {
        setText('Copied')
        navigator.clipboard.writeText(window.location.href)
      }}
      className="flex items-center gap-1 text-sm text-muted transition-colors hover:text-nile"
      type="button"
    >
      <TextMorph>{text}</TextMorph>
      <span>URL</span>
    </button>
  )
}

export default function WritingPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-papyrus/80 backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-[#161310]/80" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gold"
        springOptions={{ bounce: 0 }}
      />
      <div className="absolute right-5 top-24 sm:right-6">
        <CopyButton />
      </div>
      <article className="prose prose-neutral mt-6 max-w-none pb-8 prose-headings:font-serif prose-headings:font-normal prose-headings:text-ink prose-p:text-ink/90 prose-a:text-nile prose-a:no-underline hover:prose-a:text-gold prose-strong:text-ink prose-code:text-nile prose-li:text-ink/90 dark:prose-headings:text-papyrus dark:prose-p:text-papyrus/90 dark:prose-strong:text-papyrus dark:prose-li:text-papyrus/90">
        {children}
      </article>
    </>
  )
}
