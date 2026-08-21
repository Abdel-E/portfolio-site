import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'
import { Callout } from '@/components/mdx/callout'
import { Formula } from '@/components/mdx/formula'
import { StatGrid } from '@/components/mdx/stat-grid'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Callout,
    Formula,
    StatGrid,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure className="not-prose my-8">
          <img
            src={src}
            alt={alt}
            className="w-full rounded-xl border border-sand bg-sand/30 dark:border-white/12 dark:bg-white/[0.03]"
          />
          <figcaption className="mt-2.5 text-center text-sm text-muted">
            {caption}
          </figcaption>
        </figure>
      )
    },
    table: (props: ComponentPropsWithoutRef<'table'>) => (
      <div className="not-prose my-7 overflow-x-auto rounded-xl border border-sand dark:border-white/12">
        <table
          className="w-full min-w-[28rem] border-collapse text-left text-sm [&_tr:last-child_td]:border-b-0"
          {...props}
        />
      </div>
    ),
    th: (props: ComponentPropsWithoutRef<'th'>) => (
      <th
        className="border-b border-sand bg-sand/50 px-3 py-2 font-medium text-ink dark:border-white/10 dark:bg-white/[0.04] dark:text-papyrus"
        {...props}
      />
    ),
    td: (props: ComponentPropsWithoutRef<'td'>) => (
      <td
        className="border-b border-sand px-3 py-2 align-top text-ink/90 dark:border-white/10 dark:text-papyrus/90"
        {...props}
      />
    ),
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
  }
}
