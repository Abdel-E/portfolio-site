export type WritingPost = {
  slug: string
  title: string
  description: string
  date: string
}

export const WRITING: WritingPost[] = [
  {
    slug: 'closing-an-8-7-km-lidar-slam-loop',
    title: 'Closing an 8.7 km LiDAR SLAM loop',
    description:
      'Debugging point timestamps, place retrieval, and ICP initialization in a LiDAR-only 3D SLAM pipeline on the NavINST Urban01 route.',
    date: '2026-08-22',
  },
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
