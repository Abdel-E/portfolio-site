export type WritingPost = {
  slug: string
  title: string
  description: string
  date: string
}

export const WRITING: WritingPost[] = [
  {
    slug: 'a-wearable-that-had-to-see',
    title: 'A wearable that had to see',
    description:
      'Notes from MakeUofT: putting YOLO on a Pi, cutting inference latency, and why the constraint was the whole point.',
    date: '2026-02-16',
  },
]
