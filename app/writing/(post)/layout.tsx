'use client'

import { usePathname } from 'next/navigation'
import { ArticleMeta } from '@/components/mdx/article-meta'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { WRITING } from '@/content/writing'

export default function WritingPostLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const post = WRITING.find((entry) => pathname === `/writing/${entry.slug}`)

  return (
    <>
      <div className="pointer-events-none fixed left-0 top-0 z-10 h-12 w-full bg-papyrus/80 backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-[#161310]/80" />
      <ScrollProgress
        className="fixed top-0 z-20 h-0.5 bg-gold"
        springOptions={{ bounce: 0 }}
      />
      {post ? (
        <ArticleMeta date={post.date} readingTime={post.readingTime} />
      ) : null}
      <article className="prose prose-neutral mt-2 max-w-none overflow-x-hidden pb-8 prose-headings:font-serif prose-headings:font-normal prose-headings:text-ink prose-headings:break-words prose-p:text-ink/90 prose-p:break-words prose-a:text-nile prose-a:no-underline hover:prose-a:text-gold prose-strong:text-ink prose-code:text-nile prose-pre:overflow-x-auto prose-li:text-ink/90 dark:prose-headings:text-papyrus dark:prose-p:text-papyrus/90 dark:prose-strong:text-papyrus dark:prose-li:text-papyrus/90">
        {children}
      </article>
    </>
  )
}
