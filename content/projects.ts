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
      'Exact distributed Top-K kNN on an SDK-simulated WSE-2 wafer grid, cutting kernel cycle counts by up to ~85%.',
    stack: ['CSL', 'Python', 'WSE-2', 'Parallel Computing'],
    bullets: [
      'Implemented an exact distributed Top-K kNN algorithm on an SDK-simulated Cerebras WSE-2 wafer chip grid using query broadcast, vectorized L2 distance computation, and hierarchical + heap-adjacent Top-K reduction.',
      'Reduced kernel cycle counts by up to ~85%, cutting the baseline case from ~160K to ~25K cycles and the K=256 case from ~851K to ~318K using vector FMACs, blocked memory layouts, and K-specific optimizations.',
    ],
    href: 'https://github.com/Abdel-E/cerebras-kernel-challenge/blob/main/src-starter/DESIGN.md',
  },
  {
    id: 'twin',
    name: 'Twin',
    award: 'MakeUofT 1st Place Overall',
    summary:
      'A Pi/Arduino AI wearable that won 1st Place Overall at MakeUofT by cutting vision inference latency 80% with real-time YOLO-v8 label analysis.',
    stack: ['Python', 'C++', 'Computer Vision', 'Raspberry Pi', 'Arduino'],
    bullets: [
      'Won 1st Place Overall among 250+ hackers by engineering a Pi/Arduino AI wearable and reducing vision inference latency by 80% through the analysis of real-time YOLO-v8 model labels in place of full image processing.',
    ],
    href: 'https://devpost.com/software/twin-pywkb4',
  },
  {
    id: 'cro-agent',
    name: 'Conversion Rate Optimization Agent',
    summary:
      'An autonomous storefront optimization agent that replaces static A/B testing with Thompson Sampling reinforcement learning across the full user journey.',
    stack: ['Python', 'RL', 'Gemini API', 'FastAPI'],
    bullets: [
      'Built an autonomous storefront optimization agent to orchestrate the full user journey, from landing to checkout, replacing static A/B testing with real-time reinforcement learning using Thompson Sampling.',
      'Mapped visitor signals into behavioral segments to drive targeted content across landing, cart, and checkout, outperforming traditional A/B testing by 40% in simulations.',
    ],
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
    href: 'https://github.com/Abdel-E/asset-risk-detector',
  },
]
