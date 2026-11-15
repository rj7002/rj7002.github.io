import './style.css';
import nextgenLogo from '../assets/logos/nextgenlogo.jpeg';
import databallrLogo from '../assets/logos/databallr.webp';
import shotqualityLogo from '../assets/logos/sqlogo.png';
import brooksLogo from '../assets/logos/brooksautomation.png';
import cbbanalyticsLogo from '../assets/logos/cbbanalyticslogo.svg';
import umdFireLogo from '../assets/logos/umdfirelogo.jpeg';
import msaLogo from '../assets/logos/msalogo.jpeg';
import asdrpLogo from '../assets/logos/asdrplogo.jpeg';
import polygenceLogo from '../assets/logos/polygencelogo.jpeg';
import gridironImage from '../assets/projects/gridironmatrix.webp';
import portalmatchImage from '../assets/projects/portalmatch.webp';
import shotQualityImage from '../assets/projects/shot-quality.webp';

/* ------------------------------------------------------------------ */
/* Content — edit the arrays below to update the site                  */
/* ------------------------------------------------------------------ */

const EMAIL = 'rjseph007@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/rj7002/';
const GITHUB = 'https://github.com/rj7002';

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: string;
  summary: string;
}

interface ProjectLink {
  label: string;
  href: string;
}

interface Project {
  name: string;
  tagline?: string;
  description: string;
  bullets: string[];
  tags: string[];
  links: ProjectLink[];
  image?: string;
  imageAlt?: string;
}

const professional: Experience[] = [
  {
    company: 'NextGen Federal Systems',
    role: 'Software Engineer Intern',
    period: 'Aug 2026 - Present',
    location: 'Remote',
    logo: nextgenLogo,
    summary: 'Software engineering intern supporting federal systems development.'
  },
  {
    company: 'databallr',
    role: 'Software Engineer Intern',
    period: 'Jun 2026 - Aug 2026',
    location: 'Remote',
    logo: databallrLogo,
    summary: 'Applied machine learning and computer vision to a basketball analytics website with 100,000+ monthly users.'
  },
  {
    company: 'Brooks Automation',
    role: 'Software Engineer Intern',
    period: 'May 2026 - Jul 2026',
    location: 'Fremont, California · On-site',
    logo: brooksLogo,
    summary: 'Developed YOLO-based wafer notch detection and SAM 3 segmentation models for semiconductor wafer and panel alignment.'
  },
  {
    company: 'CBB Analytics',
    role: 'Data Science Intern',
    period: 'Feb 2026 - May 2026',
    location: 'Remote',
    logo: cbbanalyticsLogo,
    summary: 'Built machine learning and predictive models on advanced college basketball data used by coaches and scouts.'
  },
  {
    company: 'ShotQuality',
    role: 'Data Science Intern',
    period: 'Sep 2025 - Jan 2026',
    location: 'Remote',
    logo: shotqualityLogo,
    summary: 'Built predictive models, dashboards, and an AI agent for automated scouting reports and betting analysis using ShotQuality\'s proprietary tracking and play-by-play data.'
  }
];

const extracurricular: Experience[] = [
  {
    company: 'First Year Innovation and Research Experience (FIRE)',
    role: 'Quantum Machine Learning Undergraduate Researcher',
    period: 'Sep 2025 - Present',
    location: '',
    logo: umdFireLogo,
    summary: 'Developing and extending a hybrid quantum-classical model for EEG brain signal classification across multiple datasets using PennyLane and PyTorch.'
  },
  {
    company: 'Maryland Sports Analytics Club',
    role: 'Vice President',
    period: 'Sep 2025 - Present',
    location: '',
    logo: msaLogo,
    summary: 'Co-founded and scaled UMD\'s sports analytics club to 80+ members, led ML and data viz workshops, and won 1st place ($1,000) in the UMD Sports Analytics Case Competition with a women\'s basketball draft and NIL valuation model.'
  },
  {
    company: 'Aspiring Scholars Directed Research Program (ASDRP)',
    role: 'Researcher',
    period: 'Jan 2023 - Dec 2024',
    location: 'Part-time',
    logo: asdrpLogo,
    summary: 'Trained a CNN with PyTorch and OpenCV to diagnose and classify spinal cord injuries from a spinal MRI dataset.'
  },
  {
    company: 'Polygence',
    role: 'Researcher',
    period: 'Jan 2024 - Jul 2024',
    location: 'Seasonal',
    logo: polygenceLogo,
    summary: 'Conducted sports analytics research under an NBA data scientist, learning data analysis, visualization, and machine learning modeling.'
  }
];

const projects: Project[] = [
  {
    name: 'next-gen-scrapy',
    tagline: 'Computer Vision Pipeline for NFL Next Gen Stats Tracking Data',
    description: 'Open-source Python package (pip-installable, published to PyPI) that scrapes NFL Next Gen Stats chart images and extracts pass, route, and carry coordinates through a fully automated computer vision pipeline.',
    bullets: [
      "Designed a per-chart homography calibration algorithm that recovers exact field coordinates from each image's own pixels with no layout assumptions, achieving 0.07-yard accuracy against hand-measured ground truth across 99.6% of charts",
      'Built ring-detection and skeletonization-based line-tracing algorithms to extract 20,000+ pass, route, and carry trajectories from chart images, cross-validating extracted counts against play-by-play metadata to reach 93–98% full consistency across all chart types'
    ],
    tags: ['Python', 'Computer vision', 'Homography', 'PyPI'],
    links: [
      { label: 'GridironMatrix dashboard', href: 'https://rj7002-gridironmatrix.hf.space/' },
      { label: 'PyPI', href: 'https://pypi.org/project/next-gen-scrapy/' }
    ],
    image: gridironImage,
    imageAlt: 'GridironMatrix dashboard home screen with a perspective football field and player search'
  },
  {
    name: 'PortalMatch',
    tagline: 'CBB Transfer Portal Matching Engine',
    description: 'A full-stack college basketball analytics tool that matches transfer portal players to programs using shot profile similarity, opportunity fit, gap analysis, and shooting efficiency.',
    bullets: [
      'Built a fit scoring engine using cosine similarity for shot vectors, opportunity fit, and efficiency with adjustable weights',
      "Developed LightGBM NIL valuation models for men's and women's basketball predicting dollar value and tier per player",
      'Integrated a Gemini-powered agentic chat with function-calling for real-time player and team analysis',
      "Built a React/Vite frontend with live filters, radar chart visualizations, and support for men's and women's basketball"
    ],
    tags: ['React', 'Vite', 'LightGBM', 'Gemini'],
    links: [
      { label: 'Demo', href: 'https://portalmatch.vercel.app/' },
      { label: 'Code', href: 'https://github.com/rj7002/cbbtransfermatch' }
    ],
    image: portalmatchImage,
    imageAlt: 'PortalMatch home screen with a team search box'
  },
  {
    name: 'ShotIQ',
    tagline: 'Computer Vision and AI Basketball Shot Tracking App',
    description: 'An iOS app used by several D1 college basketball programs that uses on-device computer vision and ARKit to track shots and shooting mechanics, and generate AI coaching from a phone camera.',
    bullets: [
      'Built a computer vision pipeline combining a custom-trained YOLO11 ball detection model and MediaPipe BlazePose running concurrently on-device for real-time ball trajectory and body pose tracking, deriving 20+ shooting-mechanics metrics from 3D world landmarks',
      "Integrated Apple's on-device Foundation Models framework to power a real-time voice coaching agent and conversational shot-data analyst with tool-calling for filtered statistical queries"
    ],
    tags: ['iOS', 'ARKit', 'YOLO11', 'MediaPipe', 'Foundation Models'],
    links: []
  },
  {
    name: 'NBA Shot Analysis Dashboard',
    description: 'Developed an interactive dashboard using Python and Streamlit to predict shot probabilities based on historical shooting data and advanced spatial features.',
    bullets: [
      'Built an interactive Streamlit dashboard integrating an XGBoost model trained on 500,000+ shots to predict shot probabilities using advanced engineered spatial features such as defender distance, defender angle, and shooter velocity',
      'Provided key season-level metrics such as expected field goal percentage, expected points, and field goal percentage over expected, enabling data-driven performance analysis of NBA players'
    ],
    tags: ['Python', 'Streamlit', 'XGBoost'],
    links: [
      { label: 'Demo', href: 'https://nbashotqualitypredictor.streamlit.app/' },
      { label: 'Code', href: 'https://github.com/rj7002/NBAShotQualityPredictor' }
    ],
    image: shotQualityImage,
    imageAlt: 'Dashboard charts comparing expected and actual field goal percentage, shot type frequency, and shot distance'
  },
  {
    name: 'BasketballSilhouette',
    description: 'A daily NBA/WNBA guessing game where players watch a silhouetted game clip and identify the player from their shooting form, movement, and playstyle.',
    bullets: [
      'Built with TanStack Start (React + SSR) and Tailwind CSS, rendering real NBA/WNBA game clips as animated pencil-sketch silhouettes in real time using Canvas API Sobel edge detection',
      'Trained and deployed a YOLOv8 ONNX model running in-browser via onnxruntime-web to detect and blur scoreboards, jersey numbers, and identifying colors from video frames',
      'Integrated the NBA Stats API for shot charts, play-by-play, and game logs to power ISO shot filtering and difficulty tiers (easy/medium/hard) based on career PPG rankings across the 2015–2026 seasons',
      'Built a server-side video proxy and background prefetch chain so the next clip loads while the current one plays, keeping the daily game seamless'
    ],
    tags: ['TanStack Start', 'React', 'YOLOv8', 'ONNX Runtime'],
    links: [
      { label: 'Code', href: 'https://github.com/rj7002/BasketballSilhouette' }
    ]
  },
  {
    name: '3D MLB Visualizer',
    description: 'Visualizes hits and pitches from MLB games with a 3D hit chart and a 3D pitch chart using MLB Statcast data, including machine learning models to predict home run and strike probability for individual hits and pitches.',
    bullets: [],
    tags: ['Python', 'Streamlit', 'Statcast'],
    links: [
      { label: 'Demo', href: 'https://mlbvisualizer.streamlit.app/' },
      { label: 'Code', href: 'https://github.com/rj7002/MLBVisualizer' }
    ]
  }
];

/* ------------------------------------------------------------------ */
/* Icons                                                               */
/* ------------------------------------------------------------------ */

const icons = {
  linkedin: `<svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>`,
  github: `<svg class="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  mail: `<svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  arrow: `<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`,
  external: `<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"/></svg>`,
  chevron: `<svg class="chevron w-3.5 h-3.5 transition-transform duration-200" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>`
};

/* ------------------------------------------------------------------ */
/* Hero shot chart                                                     */
/* ------------------------------------------------------------------ */

/** Small seeded PRNG so the chart is identical on every load. */
function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** A half court drawn to scale (10 units per foot) with a decorative shot chart. */
function createShotChart(): string {
  const rand = mulberry32(7002);
  const hoop = { x: 250, y: 52.5 };
  const zones = [
    { count: 11, min: 8, max: 52, make: 0.66 },
    { count: 16, min: 80, max: 205, make: 0.42 },
    { count: 30, min: 243, max: 272, make: 0.38 }
  ];

  const shots: string[] = [];
  let i = 0;
  for (const zone of zones) {
    for (let n = 0; n < zone.count; n++) {
      const r = zone.min + rand() * (zone.max - zone.min);
      const theta = (0.02 + rand() * 0.96) * Math.PI;
      const x = hoop.x + r * Math.cos(theta);
      const y = hoop.y + r * Math.sin(theta);
      const made = rand() < zone.make;
      if (x < 12 || x > 488 || y > 440) continue;
      const cx = x.toFixed(1);
      const cy = y.toFixed(1);
      shots.push(made
        ? `<circle class="shot" style="--i:${i}" cx="${cx}" cy="${cy}" r="5" fill="currentColor"/>`
        : `<circle class="shot" style="--i:${i}" cx="${cx}" cy="${cy}" r="4.25" fill="none" stroke="rgb(255 255 255 / 0.38)" stroke-width="1.5"/>`);
      i++;
    }
  }

  const line = (d: string) => `<path class="court-line" pathLength="1" d="${d}"/>`;

  return `
    <figure class="relative text-accent" aria-hidden="true">
      <svg viewBox="-6 -6 512 482" class="w-full h-auto" fill="none">
        <g stroke="rgb(255 255 255 / 0.22)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          ${line('M0 0H500V470H0Z')}
          ${line('M30 0V142A237.5 237.5 0 0 0 470 142V0')}
          ${line('M170 0V190H330V0')}
          ${line('M190 190A60 60 0 0 0 310 190')}
          ${line('M210 52.5A40 40 0 0 0 290 52.5')}
          ${line('M220 40H280')}
          ${line('M190 470A60 60 0 0 1 310 470')}
          <circle class="court-line" pathLength="1" cx="250" cy="52.5" r="7.5" stroke="currentColor"/>
        </g>
        ${shots.join('')}
      </svg>
      <figcaption class="mt-3 flex items-center gap-5 font-mono text-[11px] text-slate-500">
        <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-accent"></span>Made</span>
        <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full border border-white/40"></span>Missed</span>
      </figcaption>
    </figure>
  `;
}

/* ------------------------------------------------------------------ */
/* App                                                                 */
/* ------------------------------------------------------------------ */

const sections = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'extracurricular', label: 'Extracurricular' },
  { id: 'contact', label: 'Contact' }
];

const isCurrent = (exp: Experience) => exp.period.endsWith('Present');

function socialLinks(): string {
  return `
    <div class="flex items-center gap-2">
      <a href="${LINKEDIN}" target="_blank" rel="noopener noreferrer" class="icon-link" aria-label="LinkedIn">${icons.linkedin}</a>
      <a href="${GITHUB}" target="_blank" rel="noopener noreferrer" class="icon-link" aria-label="GitHub">${icons.github}</a>
      <a href="mailto:${EMAIL}" class="icon-link" aria-label="Email">${icons.mail}</a>
    </div>
  `;
}

function nav(): string {
  return `
    <header class="sticky top-0 z-50 bg-ink/80 backdrop-blur-md border-b border-line">
      <nav class="container-wide flex flex-col sm:flex-row sm:items-center sm:justify-between sm:h-16" aria-label="Main">
        <a href="#home" class="display text-xl text-white pt-3 sm:pt-0">
          Ryan <span class="text-accent">Joseph</span>
        </a>
        <div class="flex gap-1 overflow-x-auto -mx-3 py-2 sm:m-0 sm:py-0">
          ${sections.map(s => `<a href="#${s.id}" data-section="${s.id}" class="nav-link">${s.label}</a>`).join('')}
        </div>
      </nav>
    </header>
  `;
}

function hero(): string {
  return `
    <section id="home" class="hero-grid relative overflow-hidden border-b border-line">
      <div class="container-wide relative pt-14 pb-16 sm:pt-20 sm:pb-24">
        <div class="grid items-end gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
          <div>
            <p class="label rise" style="--i:0">Computer Science @ University of Maryland</p>
            <h1 class="display rise text-white text-[clamp(4.5rem,17vw,12.5rem)] leading-[0.82] mt-6" style="--i:1">
              Ryan<br><span class="text-accent">Joseph</span>
            </h1>
            <p class="rise text-xl sm:text-2xl text-slate-200 mt-8" style="--i:2">
              Software Engineering <span class="text-accent">&amp;</span> Data Science
            </p>
            <div class="rise flex flex-wrap items-center gap-3 mt-9" style="--i:3">
              <a href="#projects" class="btn-primary">Projects ${icons.arrow}</a>
              <a href="#experience" class="btn-secondary">Experience</a>
              <span class="hidden sm:block w-px h-6 bg-line mx-1"></span>
              ${socialLinks()}
            </div>
          </div>
          <div class="rise max-w-sm w-full mx-auto lg:max-w-none" style="--i:3">
            ${createShotChart()}
          </div>
        </div>
      </div>
    </section>
  `;
}

function sectionHeader(index: number, title: string, note: string): string {
  return `
    <div class="flex items-end gap-4 sm:gap-6 mb-10 sm:mb-14" data-reveal>
      <span class="font-mono text-sm text-accent pb-1 sm:pb-2">${String(index).padStart(2, '0')}</span>
      <h2 class="display text-white text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.85]">${title}</h2>
      <span class="hidden sm:block flex-1 h-px bg-line mb-3"></span>
      <span class="hidden sm:block label pb-2">${note}</span>
    </div>
  `;
}

function projectMeta(project: Project): string {
  return `
    ${project.bullets.length ? `
      <details class="mt-4">
        <summary class="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition-colors">
          ${icons.chevron} How it works
        </summary>
        <ul class="space-y-3 mt-4">
          ${project.bullets.map(bullet => `
            <li class="text-sm text-slate-400 leading-relaxed pl-4 relative">
              <span class="absolute left-0 top-[9px] w-1 h-1 rounded-full bg-accent"></span>
              ${bullet}
            </li>
          `).join('')}
        </ul>
      </details>
    ` : ''}
    <ul class="flex flex-wrap gap-1.5 mt-5" aria-label="Technologies">
      ${project.tags.map(tag => `<li class="tag">${tag}</li>`).join('')}
    </ul>
    ${project.links.length ? `
      <div class="flex flex-wrap gap-x-5 gap-y-2 mt-6">
        ${project.links.map(link => `
          <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="text-link">${link.label} ${icons.external}</a>
        `).join('')}
      </div>
    ` : ''}
  `;
}

/** Wide showcase row for a project that has a screenshot. Image side alternates. */
function showcaseProject(project: Project, index: number): string {
  const flip = index % 2 === 1;
  const href = project.links[0]?.href;
  const image = `<img src="${project.image}" alt="${project.imageAlt ?? ''}" class="w-full aspect-[16/10] object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]" loading="lazy" />`;
  return `
    <article class="grid items-center gap-6 lg:grid-cols-12 lg:gap-12" data-reveal>
      <div class="lg:col-span-7 ${flip ? 'lg:order-2' : ''}">
        ${href
          ? `<a href="${href}" target="_blank" rel="noopener noreferrer" class="shot-frame group block" aria-label="Open ${project.name}">${image}</a>`
          : `<div class="shot-frame group">${image}</div>`}
      </div>
      <div class="lg:col-span-5">
        <p class="font-mono text-xs text-slate-500">${String(index + 1).padStart(2, '0')}</p>
        <h3 class="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-white mt-2">${project.name}</h3>
        ${project.tagline ? `<p class="text-accent mt-2">${project.tagline}</p>` : ''}
        <p class="text-slate-300 leading-relaxed mt-4">${project.description}</p>
        ${projectMeta(project)}
      </div>
    </article>
  `;
}

function projectCard(project: Project, index: number): string {
  return `
    <article class="card p-6 sm:p-7" data-reveal style="--i:${index % 3}">
      <h3 class="font-display text-2xl font-semibold tracking-tight text-white">${project.name}</h3>
      ${project.tagline ? `<p class="text-sm text-accent mt-1.5">${project.tagline}</p>` : ''}
      <p class="text-[15px] text-slate-300 leading-relaxed mt-4">${project.description}</p>
      ${projectMeta(project)}
    </article>
  `;
}

function projectsSection(): string {
  const showcase = projects.filter(p => p.image);
  const rest = projects.filter(p => !p.image);
  return `
    <section id="projects" class="section">
      <div class="container-wide">
        ${sectionHeader(1, 'Projects', `${projects.length} builds`)}
        <div class="space-y-16 sm:space-y-24">
          ${showcase.map(showcaseProject).join('')}
        </div>
        ${rest.length ? `
          <div class="grid items-start gap-5 md:grid-cols-2 lg:grid-cols-3 mt-16 sm:mt-24">
            ${rest.map(projectCard).join('')}
          </div>
        ` : ''}
      </div>
    </section>
  `;
}

function experienceRow(exp: Experience): string {
  const current = isCurrent(exp);
  return `
    <article class="exp-row" data-reveal>
      <p class="flex items-center gap-2 self-start font-mono text-xs whitespace-nowrap md:pt-2 ${current ? 'text-accent' : 'text-slate-500'}">
        ${current ? '<span class="live-dot"></span>' : ''}${exp.period.replace(' - ', ' – ')}
      </p>
      <div class="flex items-start gap-4 sm:gap-5">
        ${exp.logo ? `<img src="${exp.logo}" alt="${exp.company} logo" class="logo-tile" loading="lazy" />` : ''}
        <div class="min-w-0">
          <h3 class="font-display text-xl sm:text-2xl font-semibold tracking-tight text-white">${exp.role}</h3>
          <p class="text-sm text-slate-400 mt-1">${exp.company}${exp.location ? ' · ' + exp.location : ''}</p>
          <p class="text-[15px] text-slate-300 leading-relaxed mt-3 max-w-2xl">${exp.summary}</p>
        </div>
      </div>
    </article>
  `;
}

function experienceSection(id: string, index: number, title: string, entries: Experience[]): string {
  const currentCount = entries.filter(isCurrent).length;
  return `
    <section id="${id}" class="section border-t border-line">
      <div class="container-wide">
        ${sectionHeader(index, title, `${entries.length} roles · ${currentCount} current`)}
        <div class="border-t border-line">
          ${entries.map(experienceRow).join('')}
        </div>
      </div>
    </section>
  `;
}

function contactSection(): string {
  return `
    <section id="contact" class="section hero-grid relative overflow-hidden border-t border-line">
      <div class="container-wide relative" data-reveal>
        <p class="font-mono text-sm text-accent">04</p>
        <h2 class="display text-white text-[clamp(3.5rem,13vw,10rem)] leading-[0.82] mt-4">
          Let's <span class="text-accent">connect</span>
        </h2>
        <p class="text-lg text-slate-400 mt-8">Open to new opportunities and collaborations.</p>
        <div class="flex flex-wrap items-center gap-3 mt-8">
          <a href="mailto:${EMAIL}" class="btn-primary">${icons.mail} ${EMAIL}</a>
          <button type="button" id="copy-email" class="btn-secondary">Copy address</button>
          <span class="hidden sm:block w-px h-6 bg-line mx-1"></span>
          <a href="${LINKEDIN}" target="_blank" rel="noopener noreferrer" class="btn-secondary">${icons.linkedin} LinkedIn</a>
          <a href="${GITHUB}" target="_blank" rel="noopener noreferrer" class="btn-secondary">${icons.github} GitHub</a>
        </div>
      </div>
    </section>
  `;
}

function footer(): string {
  return `
    <footer class="border-t border-line">
      <div class="container-wide py-7 flex items-center justify-between gap-4">
        <p class="text-sm text-slate-500">© ${new Date().getFullYear()} Ryan Joseph</p>
        <a href="#home" class="font-mono text-xs text-slate-500 hover:text-accent transition-colors">Back to top ↑</a>
      </div>
    </footer>
  `;
}

/* ------------------------------------------------------------------ */
/* Behaviour                                                           */
/* ------------------------------------------------------------------ */

function setupCopyEmail(): void {
  const button = document.getElementById('copy-email');
  button?.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      button.textContent = 'Copied';
    } catch {
      button.textContent = EMAIL;
    }
    window.setTimeout(() => { button.textContent = 'Copy address'; }, 2000);
  });
}

/** Fade sections in as they scroll into view. */
function setupReveal(): void {
  const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -8% 0px' });
  targets.forEach(el => observer.observe(el));
}

/** Highlight the nav link for the section currently on screen. */
function setupScrollSpy(): void {
  const links = document.querySelectorAll<HTMLElement>('.nav-link');
  const setActive = (id: string | null) => {
    links.forEach(link => {
      const active = link.dataset.section === id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    });
  };
  if (!('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        setActive(entry.target.id === 'home' ? null : entry.target.id);
      }
    }
  }, { rootMargin: '-45% 0px -50% 0px' });
  ['home', ...sections.map(s => s.id)].forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

function render(): void {
  const app = document.getElementById('app')!;
  app.innerHTML = `
    ${nav()}
    <main>
      ${hero()}
      ${projectsSection()}
      ${experienceSection('experience', 2, 'Experience', professional)}
      ${experienceSection('extracurricular', 3, 'Extracurricular', extracurricular)}
      ${contactSection()}
    </main>
    ${footer()}
  `;
  setupCopyEmail();
  setupReveal();
  setupScrollSpy();

  // Content is rendered by script, so honour a deep link such as /#projects manually.
  const target = window.location.hash.slice(1);
  if (target && target !== 'home') {
    document.getElementById(target)?.scrollIntoView();
  }
}

render();
