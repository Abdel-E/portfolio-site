'use client'

import { ScrollProgress } from '@/components/ui/scroll-progress'

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
      <article className="prose prose-neutral mt-6 max-w-none pb-8 prose-headings:font-serif prose-headings:font-normal prose-headings:text-ink prose-p:text-ink/90 prose-a:text-nile prose-a:no-underline hover:prose-a:text-gold prose-strong:text-ink prose-code:text-nile prose-li:text-ink/90 dark:prose-headings:text-papyrus dark:prose-p:text-papyrus/90 dark:prose-strong:text-papyrus dark:prose-li:text-papyrus/90">
        {children}
      </article>
    </>
  )
}
