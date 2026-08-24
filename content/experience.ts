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
    link: 'https://www.navinst.com/',
    logo: '/logos/maple-leaf.png',
    bullets: [
      'Created a lab automation tool with Python/Tkinter for GNSS jamming resilience testing (waveform control, 10 dB gain stepping, receiver outage/recovery event marking, and timestamped CSV logs), improving repeatability and cutting manual test execution and data-labeling time by an estimated 10-15 minutes per run.',
      'Developed a low-cost 4-channel GNSS array using a Dual-AD9361 system controlled by an external 10 MHz clock and local oscillator for synchronized multi-channel operation and Direction of Arrival estimation.',
      'Evaluated four chirp/wideband calibration methods and selected a candidate approach using literature-reported 92-99% calibration-error reductions over single-point techniques.',
      'Improved multimodal sensor alignment for NavINST’s autonomous vehicle by correcting ~840 ms of event/frame-camera timing offset, using motion-signal synchronization and digital markers to support sensor fusion and extrinsic calibration.',
    ],
  },
  {
    id: 'agentiiv',
    title: 'Machine Learning Engineering Intern',
    company: 'Agentiiv',
    start: 'Jan 2026',
    end: 'Apr 2026',
    link: 'https://agentiiv.com/platform/corporate-intelligence',
    domain: 'agentiiv.com',
    logo: '/logos/agentiiv.png',
    bullets: [
      'Built a Corporate Intelligence platform by architecting a FastAPI MCP server that unifies internal systems (Slack, GDrive, PostgreSQL) and monitors external data sources (social media, etc.) to accelerate team processes and execution.',
      'Implemented SSO authentication and Role-Based Access, allowing scoped permissions and granular logging of usage, latency, and uptime metrics across internal and external MCP connections using Prometheus and Grafana.',
      'Cut deployment time from ~20 to ~5 minutes by containerizing services on AWS and automating deployment workflows using Docker Compose.',
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
      'Selected to lead a team of 6+ engineers, owning scope, milestones, and delivery for the 2026/27 school year.',
    ],
  },
  {
    id: 'utfr',
    title: 'Embedded Systems Engineer',
    company: 'University of Toronto Formula Racing',
    start: 'Sep 2025',
    end: 'Apr 2026',
    link: 'https://fsaeutoronto.ca/',
    domain: 'fsaeutoronto.ca',
    logo: '/logos/utfr.png',
    bullets: [
      'Built a custom Unity/C# simulation environment with 3+ virtual sensors (LiDAR, IMU, GPS) to support in-house ROS 2 perception testing and reduce dependency on physical track time for validation and software development.',
      'Improved on-car LiDAR ground detection by 10% by digitally filtering noise and labeling point-cloud data.',
    ],
  },
]
