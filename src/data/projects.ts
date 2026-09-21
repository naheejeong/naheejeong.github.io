export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectDetailSection {
  heading: string;
  paragraphs?: string[];
  items?: string[];
  ordered?: boolean;
}

export interface ProjectDetails {
  subtitle?: string;
  sections: ProjectDetailSection[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  date: string;
  status: string;
  links: ProjectLink[];
  details?: ProjectDetails;
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
    id: 'p0',
    title: 'Automated Attendance Pipeline',
    description:
      "An internal tool I built as Head TA for UC Berkeley's CS10. It merges five iClicker exports, the roster, and two Google Forms into one accurate, explainable attendance record per student, then emails each student an itemized report.",
    tags: ['Python', 'Google Sheets', 'Apps Script'],
    date: 'Fall 2026',
    status: 'Internal tool',
    links: [],
    details: {
      subtitle: "Internal tool for UC Berkeley's CS10 course staff (Fall 2026)",
      sections: [
        {
          heading: 'Overview',
          paragraphs: [
            'As Head TA for CS10, I built an internal tool that turns raw attendance data into one accurate, explainable record for every student. Attendance comes from five separate iClicker exports (lecture, two labs, two discussions), and it has to be combined with the enrollment roster, a late-add form, and an attendance-waiver form before anyone can say how many absences a student has, whether they have passes left, or whether their exam retakes are locked. Doing this by hand for 175 students across a dozen recurring sessions is slow and easy to get wrong.',
            'The tool does it with a couple of commands and produces a staff-only Google Sheet. It can also write a personalized status email to each student showing exactly which sessions counted against them and why.',
          ],
        },
        {
          heading: 'Key features',
          items: [
            'One record per student: absences, passes used and left, retake lock status, and a full absence-by-absence audit trail.',
            'Applies the course policy exactly: it merges lab and discussion sections, honors excused absences, late-add start dates, and attendance waivers, and assigns passes in date order. Nothing is guessed. Anything the data cannot support is flagged for a human to review, and no number is changed silently.',
            'Fully recomputed on every run from the source files, so a correction made in iClicker or a form shows up in the next run. No stale state, and the same inputs always give the same output.',
            "Built-in safety checks: it stops on malformed or missing input, cross-checks iClicker's own totals, catches an export column that is dated a day off, and warns if an older export is imported by mistake.",
            'Personalized emails for every student, generated from an editable template. Each one lists the exact date, time, and type of every counted absence and every session that did not count, and refuses to generate if the list and the count disagree.',
            'Send-safety in Google Apps Script: test mode, small-batch-first sending, a permanent send log, and guards that stop a student from being emailed twice or a batch from being sent from the wrong tab.',
            'Privacy by design: student data stays out of version control, the repository is private, the Sheet is view-only for named staff, and the automated tests use only invented students.',
          ],
        },
        {
          heading: 'Pipeline',
          ordered: true,
          items: [
            'Export the five iClicker courses, the bCourses roster, and the two Google Form responses.',
            'A Python pipeline validates and merges everything, applies the attendance policy, and writes a multi-tab workbook (student summary, attendance grid, absence details, waivers, warnings, and data-quality checks).',
            'Import the workbook into Google Sheets as a staff-only dashboard.',
            'Optionally generate one personalized email draft per student from a template.',
            'Send from a Google Sheet with Apps Script: test to myself first, then a small batch, then everyone, with every send logged.',
          ],
        },
        {
          heading: 'Impact',
          items: [
            'Tracked 208 people across 12 session slots and five data sources, with results I could trust: an independent re-implementation of the rules matched the tool for every student, and a suite of 70+ automated tests (including deliberate rule-breaking checks) guards the logic.',
            'Gave staff one clear place to see who is at risk, instead of piecing it together from five exports and two forms.',
            'Sent a personalized, itemized attendance report to all 175 enrolled students in a single session (the final batch of 165 went out in about four minutes), each with a clear way to report a mistake, so errors can be fixed at the source.',
            "Built with care for real students' records: honest about missing data, conservative about what it assumes, and hardened with safeguards (test sends, a permanent send log, duplicate-send and wrong-tab guards) after real-world use.",
          ],
        },
        {
          heading: 'Tools',
          paragraphs: [
            'Python 3.13, pytest, openpyxl, Google Sheets, Google Apps Script (GmailApp), Git/GitHub',
          ],
        },
      ],
    },
  },
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
