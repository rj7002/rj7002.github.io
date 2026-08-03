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

interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  logo?: string;
  summary: string;
}

interface Project {
  title: string;
  description: string;
  bullets: string[];
  link: string;
  github: string;
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
    period: 'Jun 2026 - Present',
    location: 'Remote',
    logo: databallrLogo,
    summary: 'Applying machine learning and computer vision to a basketball analytics website with 100,000+ monthly users.'
  },
  {
    company: 'ShotQuality',
    role: 'Data Science Intern',
    period: 'Sep 2025 - Present',
    location: 'Remote',
    logo: shotqualityLogo,
    summary: 'Built predictive models, dashboards, and an AI agent for automated scouting reports and betting analysis using ShotQuality\'s proprietary tracking and play-by-play data.'
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
    title: 'PortalMatch — CBB Transfer Portal Matching Engine',
    description: 'A full-stack college basketball analytics tool that matches transfer portal players to programs using shot profile similarity, opportunity fit, gap analysis, and shooting efficiency.',
    bullets: [
      'Built a fit scoring engine using cosine similarity for shot vectors, opportunity fit, and efficiency with adjustable weights',
      "Developed LightGBM NIL valuation models for men's and women's basketball predicting dollar value and tier per player",
      'Integrated a Gemini-powered agentic chat with function-calling for real-time player and team analysis',
      "Built a React/Vite frontend with live filters, radar chart visualizations, and support for men's and women's basketball"
    ],
    link: 'https://portalmatch.vercel.app/',
    github: 'https://github.com/rj7002/cbbtransfermatch'
  },
  {
    title: 'NBA Shot Analysis Dashboard',
    description: 'Developed an interactive dashboard using Python and Streamlit to predict shot probabilities based on historical shooting data and advanced spatial features.',
    bullets: [
      'Built an interactive Streamlit dashboard integrating an XGBoost model trained on 500,000+ shots to predict shot probabilities using advanced engineered spatial features such as defender distance, defender angle, and shooter velocity',
      'Provided key season-level metrics such as expected field goal percentage, expected points, and field goal percentage over expected, enabling data-driven performance analysis of NBA players'
    ],
    link: 'https://nbashotqualitypredictor.streamlit.app/',
    github: 'https://github.com/rj7002/NBAShotQualityPredictor'
  },
  {
    title: 'ShotIQ — Computer Vision and AI Basketball Shot Tracking App',
    description: 'An iOS app used by several D1 college basketball programs that uses on-device computer vision and ARKit to track shots and shooting mechanics, and generate AI coaching from a phone camera.',
    bullets: [
      'Built a computer vision pipeline combining a custom-trained YOLO11 ball detection model and MediaPipe BlazePose running concurrently on-device for real-time ball trajectory and body pose tracking, deriving 20+ shooting-mechanics metrics from 3D world landmarks',
      "Integrated Apple's on-device Foundation Models framework to power a real-time voice coaching agent and conversational shot-data analyst with tool-calling for filtered statistical queries"
    ],
    link: '',
    github: ''
  },
  {
    title: '3D MLB Visualizer',
    description: 'Visualizes hits and pitches from MLB games with a 3D hit chart and a 3D pitch chart using MLB Statcast data, including machine learning models to predict home run and strike probability for individual hits and pitches.',
    bullets: [],
    link: 'https://mlbvisualizer.streamlit.app/',
    github: 'https://github.com/rj7002/MLBVisualizer'
  },
  {
    title: 'BasketballSilhouette',
    description: "A daily NBA/WNBA guessing game where players watch a silhouetted game clip and identify the player from their shooting form, movement, and playstyle.",
    bullets: [
      'Built with TanStack Start (React + SSR) and Tailwind CSS, rendering real NBA/WNBA game clips as animated pencil-sketch silhouettes in real time using Canvas API Sobel edge detection',
      'Trained and deployed a YOLOv8 ONNX model running in-browser via onnxruntime-web to detect and blur scoreboards, jersey numbers, and identifying colors from video frames',
      'Integrated the NBA Stats API for shot charts, play-by-play, and game logs to power ISO shot filtering and difficulty tiers (easy/medium/hard) based on career PPG rankings across the 2015–2026 seasons',
      'Built a server-side video proxy and background prefetch chain so the next clip loads while the current one plays, keeping the daily game seamless'
    ],
    link: '',
    github: 'https://github.com/rj7002/BasketballSilhouette'
  }
];

type Route = 'home' | 'experience' | 'extracurricular' | 'projects' | 'contact';

const routes: { id: Route; label: string }[] = [
  { id: 'home', label: 'Home' },
  { id: 'experience', label: 'Experience' },
  { id: 'extracurricular', label: 'Extracurricular' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

class Portfolio {
  private app: HTMLElement;

  constructor() {
    this.app = document.getElementById('app')!;
    this.render();
    window.addEventListener('hashchange', () => this.renderPage());
  }

  private getRoute(): Route {
    const hash = window.location.hash.replace('#', '') as Route;
    return routes.some(r => r.id === hash) ? hash : 'home';
  }

  private createNav(): string {
    return `
      <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-white/10">
        <div class="max-w-3xl mx-auto px-6">
          <div class="flex justify-between items-center h-16">
            <a href="#home" class="text-lg font-semibold tracking-tight text-white">
              Ryan <span class="text-accent">Joseph</span>
            </a>
            <div class="flex space-x-1 text-sm overflow-x-auto">
              ${routes.map(r => `
                <a href="#${r.id}" data-route="${r.id}" class="nav-link px-3 py-2 rounded-lg whitespace-nowrap">${r.label}</a>
              `).join('')}
            </div>
          </div>
        </div>
      </nav>
    `;
  }

  private createHero(): string {
    return `
      <section class="min-h-[85vh] flex items-center justify-center pt-16 px-6">
        <div class="max-w-2xl mx-auto text-center">
          <h1 class="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-4">
            Ryan Joseph
          </h1>
          <p class="text-lg text-slate-400 mb-8">
            Software Engineering &amp; Data Science <span class="text-accent">·</span> Computer Science @ University of Maryland
          </p>
          <div class="flex justify-center items-center space-x-6 mb-10">
            <a href="https://www.linkedin.com/in/ryan-joseph-4303a1317/" target="_blank" class="text-slate-400 hover:text-accent transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/rj7002" target="_blank" class="text-slate-400 hover:text-accent transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="mailto:rjseph007@gmail.com" class="text-slate-400 hover:text-accent transition-colors">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </a>
          </div>
          <div class="flex justify-center flex-wrap gap-3">
            <a href="#experience" class="btn-primary">Experience</a>
            <a href="#projects" class="btn-secondary">Projects</a>
          </div>
        </div>
      </section>
    `;
  }

  private renderEntry(exp: Experience): string {
    return `
      <div class="entry-static entry-card">
        <div class="flex items-start gap-4">
          ${exp.logo ? `
            <img src="${exp.logo}" alt="${exp.company} logo" class="w-11 h-11 rounded-lg object-contain bg-white/5 border border-white/10 p-1.5 flex-shrink-0" />
          ` : ''}
          <div class="flex-1">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
              <h3 class="text-base font-semibold text-white">${exp.role}</h3>
              <span class="text-sm text-accent/80 font-medium">${exp.period}</span>
            </div>
            <p class="text-sm text-slate-400 mb-2">${exp.company}${exp.location ? ' · ' + exp.location : ''}</p>
            <p class="text-sm text-slate-300 leading-relaxed">${exp.summary}</p>
          </div>
        </div>
      </div>
    `;
  }

  private createPageHeader(title: string): string {
    return `
      <div class="mb-10">
        <div class="w-8 h-1 rounded-full bg-accent mb-4"></div>
        <h1 class="text-2xl font-semibold tracking-tight text-white">${title}</h1>
      </div>
    `;
  }

  private createExperiencePage(): string {
    return `
      <section class="min-h-screen pt-32 pb-20 px-6">
        <div class="max-w-2xl mx-auto">
          ${this.createPageHeader('Experience')}
          <div class="space-y-4">
            ${professional.map(exp => this.renderEntry(exp)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  private createExtracurricularPage(): string {
    return `
      <section class="min-h-screen pt-32 pb-20 px-6">
        <div class="max-w-2xl mx-auto">
          ${this.createPageHeader('Extracurricular')}
          <div class="space-y-4">
            ${extracurricular.map(exp => this.renderEntry(exp)).join('')}
          </div>
        </div>
      </section>
    `;
  }

  private createProjectsPage(): string {
    return `
      <section class="min-h-screen pt-32 pb-20 px-6">
        <div class="max-w-2xl mx-auto">
          ${this.createPageHeader('Projects')}
          <div class="space-y-4">
            ${projects.map(project => `
              <div class="entry-static entry-card">
                <h3 class="text-base font-semibold text-white mb-1">${project.title}</h3>
                <p class="text-sm text-slate-400 mb-3">${project.description}</p>
                ${project.bullets.length ? `
                  <ul class="space-y-2 mb-3">
                    ${project.bullets.map(bullet => `
                      <li class="text-sm text-slate-300 leading-relaxed pl-4 relative">
                        <span class="absolute left-0 top-2 w-1 h-1 rounded-full bg-accent/60"></span>
                        ${bullet}
                      </li>
                    `).join('')}
                  </ul>
                ` : ''}
                ${(project.link || project.github) ? `
                  <div class="flex space-x-4 text-sm">
                    ${project.link ? `<a href="${project.link}" target="_blank" class="text-accent hover:text-accent-light underline underline-offset-4 decoration-accent/40 transition-colors">Demo</a>` : ''}
                    ${project.github ? `<a href="${project.github}" target="_blank" class="text-accent hover:text-accent-light underline underline-offset-4 decoration-accent/40 transition-colors">Code</a>` : ''}
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  private createContactPage(): string {
    return `
      <section class="min-h-screen pt-32 pb-20 px-6 flex items-center">
        <div class="max-w-2xl mx-auto text-center">
          ${this.createPageHeader("Let's Connect")}
          <p class="text-slate-400 mb-6">
            Open to new opportunities and collaborations.
          </p>
          <a href="mailto:rjseph007@gmail.com" class="btn-primary inline-block">
            Contact Me
          </a>
        </div>
      </section>
    `;
  }

  private createFooter(): string {
    return `
      <footer class="py-8 px-6 border-t border-white/10">
        <div class="max-w-2xl mx-auto text-center">
          <p class="text-sm text-slate-500">© 2026 Ryan Joseph</p>
        </div>
      </footer>
    `;
  }

  private renderPageContent(route: Route): string {
    switch (route) {
      case 'experience': return this.createExperiencePage();
      case 'extracurricular': return this.createExtracurricularPage();
      case 'projects': return this.createProjectsPage();
      case 'contact': return this.createContactPage();
      default: return this.createHero();
    }
  }

  private renderPage(): void {
    const route = this.getRoute();
    const content = document.getElementById('page-content');
    if (content) {
      content.innerHTML = this.renderPageContent(route);
      if (route !== 'home') {
        content.innerHTML += this.createFooter();
      }
    }
    document.querySelectorAll<HTMLElement>('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('data-route') === route);
    });
    window.scrollTo(0, 0);
  }

  private render(): void {
    this.app.innerHTML = `
      ${this.createNav()}
      <main id="page-content"></main>
    `;
    this.renderPage();
  }
}

new Portfolio();
