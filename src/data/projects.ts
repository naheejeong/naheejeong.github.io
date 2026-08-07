export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  status: string;
  links: ProjectLink[];
}

// TODO: replace with real projects, dates, tags, and links before publishing.

export const research: Project[] = [
  {
    id: 'r1',
    title: 'Modeling Housing Price Volatility with Bayesian Hierarchical Models',
    description:
      'A Bayesian approach to regional housing volatility, using partial pooling across metro areas to borrow strength from data-sparse regions. Compares posterior predictive accuracy against standard OLS and fixed-effects baselines, with a focus on how uncertainty estimates shift under sparse local data.',
    tags: ['Bayesian Stats', 'R', 'Housing Policy'],
    date: 'Fall 2025',
    status: 'Working paper',
    links: [
      { label: 'Paper', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
  {
    id: 'r2',
    title: 'Attention Mechanisms for Time-Series Anomaly Detection',
    description:
      'Independent study extending transformer attention mechanisms to flag anomalies in multivariate sensor streams. Explores whether attention weights themselves can serve as an interpretable anomaly signal, benchmarked against LSTM autoencoders on industrial IoT data.',
    tags: ['Deep Learning', 'PyTorch'],
    date: 'Spring 2026',
    status: 'In progress',
    links: [{ label: 'Code', url: '#' }],
  },
  {
    id: 'r3',
    title: 'Sparse Regression Methods for High-Dimensional Genomic Data',
    description:
      'Compared LASSO, elastic net, and spike-and-slab priors for variable selection on a gene expression dataset with far more features than samples, focusing on stability of selected variables across resampling.',
    tags: ['Statistics', 'Genomics'],
    date: 'Fall 2024',
    status: 'Complete',
    links: [{ label: 'Paper', url: '#' }],
  },
];

export const personalProjects: Project[] = [
  {
    id: 'p1',
    title: 'Berkeley Bites',
    description:
      "A scraper and small dashboard tracking daily food truck locations around campus, because I got tired of guessing where the good tacos were parked. Pulls from Instagram captions and a group chat, then plots everything on a live campus map, updated a few times a day.",
    tags: ['Web Scraping', 'Dashboards'],
    date: 'Ongoing',
    status: 'Side project',
    links: [
      { label: 'Demo', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
  {
    id: 'p2',
    title: 'Study Buddy',
    description:
      'A lightweight Slack bot that matches classmates into weekly study pods based on shared courses and free time, built after one too many semesters studying alone.',
    tags: ['Slack API', 'Automation'],
    date: 'Ongoing',
    status: 'Side project',
    links: [{ label: 'Code', url: '#' }],
  },
  {
    id: 'p3',
    title: 'Darkroom Log',
    description:
      'A tiny personal app for logging film development times, chemistry, and notes across rolls, since I kept losing track of what worked in a paper notebook.',
    tags: ['SQLite', 'Personal Tools'],
    date: 'Spring 2026',
    status: 'Side project',
    links: [{ label: 'Code', url: '#' }],
  },
  {
    id: 'p4',
    title: 'Personal Portfolio Website',
    description:
      "This site — a single-page React and TypeScript build for tracking my research, projects, and hobbies in one place, deployed to GitHub Pages. Built with Vite and plain CSS, with a typed data layer so new projects are a one-file edit.",
    tags: ['React', 'TypeScript', 'Vite'],
    date: 'Ongoing',
    status: 'Side project',
    links: [
      { label: 'Site', url: 'https://naheejeong.github.io' },
      { label: 'Code', url: 'https://github.com/naheejeong/naheejeong.github.io' },
    ],
  },
];

export const classProjects: Project[] = [
  {
    id: 'c1',
    title: 'Data 102: Causal Inference on Wildfire Policy',
    description:
      'Estimated treatment effects of prescribed-burn policy on subsequent wildfire severity using propensity score matching and difference-in-differences. Final report argued for expanded prescribed-burn funding based on observed severity reductions across matched counties.',
    tags: ['Causal Inference', 'Python'],
    date: 'Spring 2025',
    status: 'Complete',
    links: [
      { label: 'Report', url: '#' },
      { label: 'Code', url: '#' },
    ],
  },
  {
    id: 'c2',
    title: 'CS 189: Building a CNN from Scratch',
    description:
      'Implemented convolution, backpropagation, and pooling layers from raw NumPy to classify CIFAR-10, without relying on any autograd framework. Placed in the top bracket of the class Kaggle leaderboard for validation accuracy.',
    tags: ['Machine Learning', 'NumPy'],
    date: 'Fall 2024',
    status: 'Complete',
    links: [{ label: 'Code', url: '#' }],
  },
  {
    id: 'c3',
    title: 'Data 100: Predicting Bay Area Rent Prices',
    description:
      'Built a feature-engineered regression pipeline on Craigslist listings, exploring how neighborhood, transit access, and unit age drive rent, and where the model breaks down.',
    tags: ['Regression', 'Pandas'],
    date: 'Fall 2023',
    status: 'Complete',
    links: [{ label: 'Code', url: '#' }],
  },
];
