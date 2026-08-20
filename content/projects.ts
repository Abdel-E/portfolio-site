export type Project = {
  id: string
  name: string
  award?: string
  summary: string
  stack: string[]
  bullets: string[]
  href?: string
}

export const PROJECTS: Project[] = [
  {
    id: 'cerebras',
    name: 'Cerebras Kernel Challenge',
    award: 'Distributed Top-K kNN on WSE-2',
    summary:
      'Exact distributed Top-K kNN across a 2D WSE-2 PE grid, cutting kernel cycle counts by up to ~85%.',
    stack: ['CSL', 'Python', 'WSE-2', 'Parallel Computing'],
    bullets: [
      'Implemented exact distributed Top-K kNN using query broadcast, vectorized L2 distance, and hierarchical Top-K reduction.',
      'Reduced kernel cycle counts by up to ~85%, cutting the baseline from ~160K to ~25K cycles and K=256 from ~851K to ~318K.',
      'Got there with vector FMACs, blocked memory layouts, and K-specific optimizations.',
    ],
  },
  {
    id: 'twin',
    name: 'Twin',
    award: 'MakeUofT 1st Place Overall',
    summary:
      'A Raspberry Pi / Arduino AI wearable that cut vision inference latency by 80% with localized YOLO-v8 models.',
    stack: ['Python', 'C++', 'Computer Vision', 'Raspberry Pi', 'Arduino'],
    bullets: [
      'Won 1st Place Overall against 250+ hackers with a Pi/Arduino AI wearable.',
      'Reduced vision inference latency by 80% using localized YOLO-v8 models.',
    ],
    href: 'https://github.com/Abdel-E',
  },
  {
    id: 'telemetry',
    name: 'Telemetry Logs Risk Detector',
    summary:
      'Automated security-event triage that pairs rule-based detection with Isolation Forest scoring for exfiltration and anomalous behavior.',
    stack: ['Python', 'Scikit-learn', 'PyTorch', 'Pandas', 'NumPy'],
    bullets: [
      'Combined rule-based detection with Isolation Forest anomaly scoring to surface exfiltration and anomalous behavior.',
      'Weighted risk alerts so operators could triage security events without reading every log line.',
    ],
  },
]
