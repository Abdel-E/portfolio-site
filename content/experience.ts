export type Experience = {
  id: string
  title: string
  company: string
  start: string
  end: string
  link?: string
  domain?: string
  logo?: string
  bullets: string[]
}

export const EXPERIENCE: Experience[] = [
  {
    id: 'navinst',
    title: 'Research Engineer Intern',
    company: 'NavINST Lab, Royal Military College of Canada',
    start: 'May 2026',
    end: 'Aug 2026',
    link: 'https://www.rmc-cmr.ca/en',
    logo: '/logos/maple-leaf.png',
    bullets: [
      'Enabled multimodal perception and sensor fusion for NavINST’s autonomous vehicle by developing and calibrating event-camera and frame-camera synchronization for downstream computer vision pipelines.',
      'Enabled a low-cost 4-channel GNSS array by validating PlutoSDR calibration at 67 dB SNR and evaluating four chirp and wideband calibration methods for synchronized multi-channel SDR operation.',
      'Expanded GNSS interference test coverage across three jammer classes by building a generator for CW, chirp, and wideband signals with configurable parameters and PSD/spectrogram diagnostics.',
      'Guided multi-channel SDR calibration experiments by authoring a technical literature review comparing chirp-based calibration methods, implementation tradeoffs, and experimental validation approaches.',
    ],
  },
  {
    id: 'agentiiv',
    title: 'Machine Learning Engineer Intern',
    company: 'Agentiiv',
    start: 'Jan 2026',
    end: 'Apr 2026',
    link: 'https://agentiiv.com/platform/corporate-intelligence',
    domain: 'agentiiv.com',
    logo: '/logos/agentiiv.png',
    bullets: [
      'Built a Corporate Intelligence platform by architecting a FastAPI MCP gateway across 5+ integrations.',
      'Reduced integration latency by 40% while securing enterprise agent access with JWT/RBAC scoped authorization.',
      'Reduced deployment latency by 80% by deploying Dockerized AWS microservices and building Prometheus/Grafana dashboards for service health and latency.',
    ],
  },
  {
    id: 'utmist',
    title: 'Technical Project Manager',
    company: 'University of Toronto Machine Intelligence Team',
    start: 'Jan 2026',
    end: 'Present',
    link: 'https://utmist.ca',
    domain: 'utmist.ca',
    logo: '/logos/utmist.png',
    bullets: [
      'Leading 2 internal and external engineering projects, driving delivery through Agile sprint planning, milestone tracking, and coordination across teams of 6+ engineers.',
    ],
  },
  {
    id: 'utfr',
    title: 'Autonomous Systems Developer',
    company: 'University of Toronto Formula Racing',
    start: 'Sep 2025',
    end: 'Apr 2026',
    link: 'https://fsaeutoronto.ca/',
    domain: 'fsaeutoronto.ca',
    logo: '/logos/utfr.png',
    bullets: [
      'Enabled simulation-based perception testing by programming 3+ virtual sensors — LiDAR, IMU, and GPS — in Unity/C#.',
      'Improved LiDAR ground detection by 10% by applying C++ linear algebra to autonomous-vehicle sensor pipelines.',
    ],
  },
]
