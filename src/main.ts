import './style.css';

interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
}

const experiences: Experience[] = [
  {
    company: 'CBB Analytics',
    role: 'Data Science Intern',
    period: '01/2026 - Present',
    bullets: [
      'Built regression models on CBB Analytics\' lineup-level efficiency and on-off ratings to quantify player impact',
      'Developing an AI agent that automatically generates detailed, broadcast-ready game notes for CBB Analytics\' college basketball broadcast partners by synthesizing advanced stats, trends, matchup context, and key narrative storylines',
      'Worked on end-to-end data science workflows including cleaning, feature engineering, and statistical analysis'
    ]
  },
  {
    company: 'ShotQuality',
    role: 'Data Science Intern',
    period: '09/2025 - 01/2026',
    bullets: [
      'Worked with data science team to produce actionable reports and visualizations used by college basketball partners',
      'Designed predictive models in Python for shot quality evaluation leveraging large-scale player tracking data',
      'Lead the end-to-end development of new AI agent, architecting a retrieval-augmented generation (RAG) system with LangChain and LangGraph for scalable player and team analysis over ShotQuality\'s proprietary tracking data'
    ]
  },
  {
    company: 'UMD First Year Immersive Research Experience',
    role: 'Quantum Machine Learning Undergraduate Researcher',
    period: '09/2025 - Present',
    bullets: [
      'Worked with IonQ hardware and software tools through UMD\'s National Quantum Laboratory (QLab) collaboration, gaining hands-on exposure to real quantum computing ecosystems',
      'Analyzed data and built quantum machine learning models using Qiskit and Jupyter Notebook'
    ]
  }
];

const projects: Project[] = [
  {
    title: 'CBB Shot Analysis',
    description: 'Implemented Python web app that creates 3D college basketball shot charts for teams and individual players. Plots trends such as heat maps, assist distribution, and shot locations. Uses DeepSeek LLM to provide AI scouting reports for teams and player breakdowns for draft prospects.',
    image: 'https://private-user-images.githubusercontent.com/160825414/493779994-2217b724-69d9-4849-a30c-87d9aac7702f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA0ODM1ODgsIm5iZiI6MTc3MDQ4MzI4OCwicGF0aCI6Ii8xNjA4MjU0MTQvNDkzNzc5OTk0LTIyMTdiNzI0LTY5ZDktNDg0OS1hMzBjLTg3ZDlhYWM3NzAyZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIwN1QxNjU0NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT05MDQ0YWU4MTI1YTYzMGRlM2I0ZmQ4NmZhNmFlZWM0NzJhNWU4OTE3ZDZjZmI5YjhiZjAxYmY3MDIzMmYwYmQxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.ivpbqsTk6QuScT76SLdZjx-lk6mN9A4qvjDwWv87F6k',
    link: 'https://cbbshotanalysis.streamlit.app/',
    github: 'https://github.com/rj7002/CBBShotAnalysis'
  },
  {
    title: 'NHL Shot Analysis',
    description: 'Dashboard that visualizes NHL shot attempts using data from MoneyPuck. Uses LightGBM model to calculate goal probability for each shot attempt. Incorporates DeepSeek LLM to analyze and breakdown individual shot attempts.',
    image: 'https://private-user-images.githubusercontent.com/160825414/418374906-e26f45fd-3c90-4c6b-91a0-4cf31891b75f.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA0ODM2NzEsIm5iZiI6MTc3MDQ4MzM3MSwicGF0aCI6Ii8xNjA4MjU0MTQvNDE4Mzc0OTA2LWUyNmY0NWZkLTNjOTAtNGM2Yi05MWEwLTRjZjMxODkxYjc1Zi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIwN1QxNjU2MTFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0yYjk2OWFjZWRlMTE5OWFhNTNjNDg5MzM3YzYwMmNmNzZjM2MyOTY1MDVkMTgzNmM3ODE1OGNkNTEzYWQ5MTY1JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.FdphcMgO45-2gcrD3xEO-cLm7t9Q5qdi0pVGmv5Q9_E',
    link: 'https://nhlshotanalysis.streamlit.app/',
    github: 'https://github.com/rj7002/NHLShotAnalysis'
  },
  {
    title: '3D MLB Visualizer',
    description: 'Visualizes hits and pitches from MLB games with 3D hit chart along with a 3D pitch chart using MLB Statcast data. Includes machine learning models to predict home run and strike probability for individual hits and pitches.',
    image: 'https://private-user-images.githubusercontent.com/160825414/385162292-665d3159-4672-4371-9080-2a62a8ae2a01.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA0ODM2OTYsIm5iZiI6MTc3MDQ4MzM5NiwicGF0aCI6Ii8xNjA4MjU0MTQvMzg1MTYyMjkyLTY2NWQzMTU5LTQ2NzItNDM3MS05MDgwLTJhNjJhOGFlMmEwMS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIwN1QxNjU2MzZaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wMGM0NzZkY2Y0YjQ5MWE0NmI4NzQyYzIzMzFiYzc4ZDMyNjBmOGY2ODJmMDdjY2QxOGFhZDQwMjg2MTZmZTNhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.3PyWBiL7VJUtJrZFyu_WdVjNA8zXlzeQy1ibVfx2uuw',
    link: 'https://mlbvisualizer.streamlit.app/',
    github: 'https://github.com/rj7002/MLBVisualizer'
  },
  {
    title: 'NFL Passing Analyzer',
    description: 'Analyzes NFL passing data to provide insights into quarterback performance and passing trends. Features interactive visualizations and statistical breakdowns.',
    image: 'https://private-user-images.githubusercontent.com/160825414/385161934-16770cf5-9132-4df2-854a-027ba0877529.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA0ODM3NDEsIm5iZiI6MTc3MDQ4MzQ0MSwicGF0aCI6Ii8xNjA4MjU0MTQvMzg1MTYxOTM0LTE2NzcwY2Y1LTkxMzItNGRmMi04NTRhLTAyN2JhMDg3NzUyOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIwN1QxNjU3MjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kYmIwZTI3NDI3MzEzZWQxMWZiNWE2NDU2MDNiMDQ1OGE5OTU3ZmU0ZWNjZjUzOGMzNzFmZWRiOTgyMTRjNDc0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.kuVe863MF9AiiWPH6zasq-dIAht_CicYzjX0alL5nPM',
    link: 'https://nflpassinganalyzer.streamlit.app/',
    github: 'https://github.com/rj7002/NFLPassingAnalysis'
  },
  {
    title: '3D Soccer Visualizer',
    description: 'Plots and visualizes soccer match data such as shots, passes, pressures, etc. on a 3D field. Uses statsbombpy Python API.',
    image: 'https://private-user-images.githubusercontent.com/160825414/385161656-1a3aac01-00ca-49a1-b032-60381f73b118.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA0ODM3NjgsIm5iZiI6MTc3MDQ4MzQ2OCwicGF0aCI6Ii8xNjA4MjU0MTQvMzg1MTYxNjU2LTFhM2FhYzAxLTAwY2EtNDlhMS1iMDMyLTYwMzgxZjczYjExOC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIwN1QxNjU3NDhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iYjFiYTQ2ZmNkOTFjMDkyN2QyOTMxN2RiYWJlMjQ5ODUxNDVhMWRlNjk5OTk1ZTU2NzY0NDNkZDEzMzMyZTRjJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.beLwSm9iaH2QYJQlb68GvMWTrvNJa9sWEhEyHcpweWo',
    link: 'https://3dsoccervisualizer.streamlit.app/',
    github: 'https://github.com/rj7002/Soccer3DVisualizer'
  },
  {
    title: 'NBA Shot Quality Predictor',
    description: 'A Streamlit dashboard that applies a trained xFG model to tracking data to compute shot-level xFG% and xPts. Provides player filtering, 3D court visualizations with shot arcs, per-game charts, descriptor radar, and summary metrics for shot analysis.',
    image: 'https://private-user-images.githubusercontent.com/160825414/546635627-498606eb-a71f-4261-8f4b-16143990ee1b.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NzA0ODQxNjQsIm5iZiI6MTc3MDQ4Mzg2NCwicGF0aCI6Ii8xNjA4MjU0MTQvNTQ2NjM1NjI3LTQ5ODYwNmViLWE3MWYtNDI2MS04ZjRiLTE2MTQzOTkwZWUxYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjYwMjA3JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI2MDIwN1QxNzA0MjRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jNWU1MjcxZDc1Y2QxNDM2ZGQ5NjY0MjllYWE4NmQ4ZDY2ZmE1NjJmMWIxODg5ODg5ZGMxMzZkNWI4NjU5NjY0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.GKp9cJPbR7Ov3swWspb1bAFhPhQy0nES43e6aVV32Jg',
    link: 'https://nbashotqualitypredictor.streamlit.app/',
    github: 'https://github.com/rj7002/NBAShotQualityPredictor'
  }
];

const skills = {
  languages: ['Python', 'Java', 'R', 'TypeScript', 'JavaScript', 'SQL', 'HTML/CSS'],
  frameworks: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Qiskit', 'LangChain', 'LangGraph', 'Flask'],
  tools: ['Git', 'Docker', 'Jupyter', 'Streamlit', 'Plotly', 'React']
};

class Portfolio {
  private app: HTMLElement;

  constructor() {
    this.app = document.getElementById('app')!;
    this.render();
    this.attachEventListeners();
  }

  private createNav(): string {
    return `
      <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <div class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ryan Joseph
            </div>
            <div class="hidden md:flex space-x-8">
              <a href="#about" class="nav-link">About</a>
              <a href="#experience" class="nav-link">Experience</a>
              <a href="#projects" class="nav-link">Projects</a>
              <a href="#skills" class="nav-link">Skills</a>
              <a href="#contact" class="nav-link">Contact</a>
            </div>
            <button id="mobile-menu-btn" class="md:hidden text-white">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    `;
  }

  private createHero(): string {
    return `
      <section class="min-h-screen flex items-center justify-center pt-16 px-4">
        <div class="max-w-5xl mx-auto text-center animate-fade-in">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-slide-up">
            Ryan Joseph
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-4">
            Data Science • AI/Machine Learning • Sports Analytics • Software Engineering
          </p>
          <p class="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
            Computer Science @ University of Maryland College Park
          </p>
          
          <div class="flex justify-center space-x-6 mb-12">
            <a href="https://www.linkedin.com/in/ryan-joseph-4303a1317/" target="_blank" 
               class="transform hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-blue-400 hover:text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/rj7002" target="_blank" 
               class="transform hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-gray-400 hover:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://x.com/ryanjoseph7002?s=11" target="_blank" 
               class="transform hover:scale-110 transition-transform duration-300">
              <svg class="w-8 h-8 text-sky-400 hover:text-sky-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          <a href="#about" class="btn-primary inline-block">
            Explore My Work
          </a>
        </div>
      </section>
    `;
  }

  private createAbout(): string {
    return `
      <section id="about" class="py-20 px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="section-title">About Me</h2>
          <div class="card text-gray-200 space-y-4 text-lg leading-relaxed">
            <p>
              Hi, my name is Ryan Joseph. I am a Computer Science major at the University of Maryland College Park. 
              I am interested in data science, AI/ML, software engineering, and computer vision along with their 
              application to real world problems in fields such as sports and healthcare. I am especially passionate 
              about sports analytics and love diving into new datasets to create models and visualizations for various sports.
            </p>
            <p>
              At the University of Maryland, I am currently involved in the sports analytics club, where we discuss 
              sports trends, and analytics and create projects to work with UMD Athletics. I am also a part of the 
              First-Year Innovation & Research Experience (FIRE) program where I am a part of the Quantum Machine 
              Learning research group.
            </p>
          </div>
        </div>
      </section>
    `;
  }

  private createExperience(): string {
    return `
      <section id="experience" class="py-20 px-4 bg-slate-800/30">
        <div class="max-w-6xl mx-auto">
          <h2 class="section-title">Experience</h2>
          <div class="space-y-8">
            ${experiences.map((exp, index) => `
              <div class="card animate-slide-up" style="animation-delay: ${index * 0.1}s">
                <div class="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 class="text-2xl font-bold text-blue-400 mb-1">${exp.company}</h3>
                    <p class="text-xl text-gray-300">${exp.role}</p>
                  </div>
                  <span class="text-accent font-semibold mt-2 md:mt-0">${exp.period}</span>
                </div>
                <ul class="space-y-3 text-gray-300">
                  ${exp.bullets.map(bullet => `
                    <li class="flex items-start">
                      <svg class="w-5 h-5 text-accent mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                      <span>${bullet}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  private createProjects(): string {
    return `
      <section id="projects" class="py-20 px-4">
        <div class="max-w-7xl mx-auto">
          <h2 class="section-title">Technical Projects</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${projects.map((project, index) => `
              <div class="card group animate-slide-up" style="animation-delay: ${index * 0.1}s">
                <div class="overflow-hidden rounded-lg mb-4">
                  <img src="${project.image}" alt="${project.title}" 
                       class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500">
                </div>
                <h3 class="text-2xl font-bold mb-3 text-blue-400">${project.title}</h3>
                <p class="text-gray-300 mb-4 leading-relaxed">${project.description}</p>
                <div class="flex space-x-4">
                  <a href="${project.link}" target="_blank" 
                     class="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    View Demo
                  </a>
                  <a href="${project.github}" target="_blank" 
                     class="flex-1 text-center bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    Code
                  </a>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </section>
    `;
  }

  private createSkills(): string {
    return `
      <section id="skills" class="py-20 px-4 bg-slate-800/30">
        <div class="max-w-6xl mx-auto">
          <h2 class="section-title">Skills & Technologies</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card">
              <h3 class="text-2xl font-bold mb-6 text-center text-blue-400">Languages</h3>
              <div class="flex flex-wrap gap-3 justify-center">
                ${skills.languages.map(lang => `
                  <span class="bg-blue-600/30 text-blue-200 px-4 py-2 rounded-full text-sm font-semibold border border-blue-400/30 hover:bg-blue-600/50 transition-colors duration-300">
                    ${lang}
                  </span>
                `).join('')}
              </div>
            </div>
            <div class="card">
              <h3 class="text-2xl font-bold mb-6 text-center text-purple-400">Frameworks & Libraries</h3>
              <div class="flex flex-wrap gap-3 justify-center">
                ${skills.frameworks.map(framework => `
                  <span class="bg-purple-600/30 text-purple-200 px-4 py-2 rounded-full text-sm font-semibold border border-purple-400/30 hover:bg-purple-600/50 transition-colors duration-300">
                    ${framework}
                  </span>
                `).join('')}
              </div>
            </div>
            <div class="card">
              <h3 class="text-2xl font-bold mb-6 text-center text-pink-400">Tools & Platforms</h3>
              <div class="flex flex-wrap gap-3 justify-center">
                ${skills.tools.map(tool => `
                  <span class="bg-pink-600/30 text-pink-200 px-4 py-2 rounded-full text-sm font-semibold border border-pink-400/30 hover:bg-pink-600/50 transition-colors duration-300">
                    ${tool}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  private createContact(): string {
    return `
      <section id="contact" class="py-20 px-4">
        <div class="max-w-2xl mx-auto text-center">
          <h2 class="section-title">Let's Connect</h2>
          <p class="text-xl text-gray-300 mb-8">
            I'm always open to discussing new opportunities, collaborations, or just chatting about sports analytics and data science!
          </p>
          <a href="mailto:rjseph007@gmail.com" class="btn-primary inline-flex items-center space-x-2">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>Contact Me</span>
          </a>
        </div>
      </section>
    `;
  }

  private createFooter(): string {
    return `
      <footer class="bg-slate-900 py-8 px-4 border-t border-white/10">
        <div class="max-w-7xl mx-auto text-center">
          <p class="text-gray-400">© 2025 Ryan Joseph. All rights reserved.</p>
        </div>
      </footer>
    `;
  }

  private render(): void {
    this.app.innerHTML = `
      ${this.createNav()}
      <main>
        ${this.createHero()}
        ${this.createAbout()}
        ${this.createExperience()}
        ${this.createProjects()}
        ${this.createSkills()}
        ${this.createContact()}
      </main>
      ${this.createFooter()}
    `;
  }

  private attachEventListeners(): void {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Mobile menu toggle (basic implementation)
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', () => {
        alert('Mobile menu implementation - add your navigation logic here');
      });
    }

    // Add scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.card').forEach(card => observer.observe(card));
  }
}

// Initialize the portfolio
new Portfolio();
