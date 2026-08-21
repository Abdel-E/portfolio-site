export type WritingPost = {
  slug: string
  title: string
  description: string
  date: string
}

export const WRITING: WritingPost[] = [
  {
    slug: 'topk-on-a-wafer',
    title: 'Top-K on a wafer',
    description:
      'Notes from the Cerebras kernel challenge: exact distributed Top-K kNN on WSE-2, and where the cycles actually went.',
    date: '2026-05-01',
  },
  {
    slug: 'a-wearable-that-had-to-see',
    title: 'A wearable that had to see',
    description:
      'Twin, a hard-hat survival assistant we built at MakeUofT: camera, heart rate, and on-device guidance when judgment gets expensive.',
    date: '2026-02-16',
  },
]
