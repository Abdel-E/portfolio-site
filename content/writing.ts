export type WritingPost = {
  slug: string
  title: string
  description: string
  date: string
  readingTime: number
}

export const WRITING: WritingPost[] = [
  {
    slug: 'closing-an-8-7-km-lidar-slam-loop',
    title: 'Closing an 8.7 km LiDAR SLAM loop',
    description:
      'How I closed an 8.7 km urban LiDAR loop on NavINST by fixing a timestamp bug and improving loop-closure recall.',
    date: '2026-08-22',
    readingTime: 6,
  },
  {
    slug: 'topk-on-a-wafer',
    title: 'Top-K on a wafer',
    description:
      'Notes from the Cerebras kernel challenge: exact distributed Top-K kNN on WSE-2, and where the cycles actually went.',
    date: '2026-05-01',
    readingTime: 7,
  },
  {
    slug: 'a-wearable-that-had-to-see',
    title: 'A wearable that had to see',
    description:
      'Twin, a hard-hat survival assistant we built at MakeUofT: camera, heart rate, and on-device guidance when judgment gets expensive.',
    date: '2026-02-16',
    readingTime: 5,
  },
]
