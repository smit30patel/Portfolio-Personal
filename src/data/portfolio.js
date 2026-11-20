/**
 * Content for the portfolio.
 * Keep this in sync with the resume PDF — recruiters compare the two.
 *
 * Featured project fields: problem → built → insight/decision → stack → links → deployment.
 * Leave a field out (or null) and its line is simply not rendered.
 */

export const profile = {
  name: 'Smit Patel',
  headline: 'Software Engineer · Backend & AI',
  focus: 'Java · Spring Boot · TypeScript · LLM Pipelines',
  openTo: 'Open to full-time & internship roles · Backend & AI',
  // Intro segments: plain strings, or [text, tone] pairs rendered in color.
  intro: [
    'I build the backend that AI products run on: ',
    ['APIs and data models', 'teal'],
    ', ',
    ['LLM services', 'violet'],
    ', and the ',
    ['cloud infra', 'amber'],
    ' that keeps them running in production.',
  ],
  photo: '/profile.jpg',
  portrait: '/portrait.jpg', // close-up crop of photo for the About circle
  resume: '/resumes/Smit_Patel_Software_Engineer.pdf',
  email: 'smitpatel30071@gmail.com',
  phone: '+1 480-803-4141',
  location: 'Tempe, AZ',
  github: 'https://github.com/smit30patel',
  linkedin: 'https://www.linkedin.com/in/smit3062',
};

export const experience = [
  {
    company: '99 Yards',
    role: 'Backend Software Engineer Intern',
    period: 'Aug 2026 – Present',
    location: 'Remote',
    points: [
      'Shipped ~30 REST endpoints in Java 17 and Spring Boot across the profile, booking, organization, wallet, and communication domains.',
      'Built organization membership and role-based access control — tokenized invites, email verification, and transactional invariants that guarantee every organization keeps an owner or admin.',
      'Built a ledger-backed wallet on PostgreSQL integrated with Stripe PaymentIntents and Payouts, with full transaction history and CSV export.',
      'Hardened services with 20 Mockito unit tests and configured and troubleshot GCP App Engine and Cloud SQL deployments.',
    ],
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'Stripe', 'GCP', 'Mockito'],
  },
  {
    company: 'XPet Technologies',
    role: 'Data Scientist Intern',
    period: 'Aug 2026 – Nov 2026',
    location: 'Remote',
    points: [
      'Built the backend orchestration for an AI-powered veterinary records service: a five-stage workflow coordinating Azure Document Intelligence and Azure OpenAI, with persisted execution state, timeout/retry recovery, duplicate detection, and a human-approval step.',
      'Redesigned Convex data models around indexed access patterns, with integrity checks and backward-compatible reads/writes; ran resumable backfills that restored provenance for 2,889 historical events.',
      'Shipped web and mobile review interfaces in Next.js and React Native (Expo) with authenticated Cloudflare R2 document previews, backed by 154 Jest tests across 13 suites.',
    ],
    tags: ['Azure OpenAI', 'Azure Document Intelligence', 'TypeScript', 'Convex', 'Next.js', 'React Native', 'Jest'],
  },
  {
    company: 'Opportunity Hack',
    role: 'Full Stack Engineer',
    period: 'Oct 2025 – May 2026',
    location: 'Phoenix, AZ',
    points: [
      'Helped evolve a 24-hour hackathon prototype into a production content-management system for a Phoenix nonprofit over an eight-month engagement.',
      'Built role-based admin dashboards, form workflows, and content-management features that let non-technical staff run the site themselves.',
      'Implemented AWS S3 media workflows so staff upload and manage assets with no developer in the loop.',
    ],
    tags: ['Next.js', 'TypeScript', 'AWS S3'],
    live: 'https://nmtsa.org',
    github: 'https://github.com/NMTSa2025/NMTSA-Website',
  },
  {
    company: 'Arth Infosoft Pvt. Ltd.',
    role: 'Full Stack Developer Intern',
    period: 'Jan 2023 – May 2023',
    location: 'Ahmedabad, India',
    points: [
      'Built expense-tracking features end to end across React, Node.js/Express, and MongoDB.',
      'Integrated REST APIs into user-facing workflows and authored the API and module documentation.',
      'Shipped iteratively in Scrum sprints, demoing working software every iteration.',
    ],
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
  },
];

export const projectFilters = ['All', 'Backend', 'AI & ML', 'Full Stack', 'Security'];

/* Featured projects render as case studies (problem → built → insight);
   the rest render as compact cards from `summary`. */
export const projects = [
  {
    id: 'loop_it',
    featured: true,
    categories: ['Full Stack', 'Security'],
    title: 'Loop IT — Certified Data-Wipe & Device Reuse Platform',
    context: 'SunHacks 2025 · 1st Place of 137+ projects · Built in 36 hours',
    problem: 'Companies retire working laptops because they can’t prove the old data is gone — so usable hardware becomes e-waste.',
    built: 'A full-stack platform that runs secure device wipes, certifies each wipe, and routes certified devices to donations and a marketplace, managed through organization dashboards.',
    insight: 'The blocker is trust, not hardware. A verifiable wipe certificate gives an organization the proof it needs to release a device instead of shredding it.',
    stack: [],
    github: 'https://github.com/smit30patel/Sunhacks-2025',
  },
  {
    id: 'sona_space',
    featured: true,
    categories: ['AI & ML', 'Full Stack'],
    title: 'SONA — RAG-Grounded Voice Wellness Assistant',
    context: 'Spark AI Challenge · 24-hour hackathon · Nov 2025',
    problem: 'Adults with autism need emotional support that is available at any hour and calm to use.',
    built: 'A voice and text assistant built on retrieval-augmented generation, with real-time emotion detection, behavioral insights, and Alexa/Echo integration for hands-free support.',
    insight: 'Retrieval grounds each response in source material instead of free-form generation — the property that matters most when the person on the other end is vulnerable.',
    stack: ['RAG', 'LLMs', 'Next.js', 'TypeScript', 'Alexa'],
    live: 'https://spark-ai-phi.vercel.app/',
    github: 'https://github.com/smit30patel/Spark-AI',
  },
  {
    id: 'fraud_detection',
    featured: true,
    categories: ['AI & ML', 'Backend'],
    title: 'Streaming Fraud Detection on Apache Kafka',
    context: 'Event-driven ML · May – Jun 2025',
    problem: 'Fraud has to be caught while a transaction is in flight, not in a nightly batch job.',
    built: 'A Kafka producer–consumer pipeline that streams PaySim transactions into an SVM classifier for per-event scoring, with a Streamlit console for live monitoring and manual transaction testing.',
    insight: 'Kafka decouples ingestion from scoring, so the model consumer can restart or scale on its own and resume from its offset without losing transactions.',
    stack: ['Apache Kafka', 'Python', 'scikit-learn', 'Streamlit'],
    github: 'https://github.com/smit30patel/Real-Time-Fraud-Detection-with-SVM-and-Kafka',
    video: 'https://www.youtube.com/watch?v=fcNGd0Q9y3M',
  },
  {
    id: 'secom',
    featured: true,
    categories: ['AI & ML'],
    title: 'SECOM — Semiconductor Failure Prediction on Imbalanced Sensor Data',
    context: 'Imbalanced classification · Dec 2024',
    problem: 'Predict manufacturing failures from 590+ sensor signals when only ~6.6% of production runs fail.',
    built: 'An ML pipeline with F-test feature selection (SelectKBest), rebalancing through SMOTE and XGBoost’s scale_pos_weight, and an XGBoost classifier evaluated on F1 and the confusion matrix, with feature importance tracing failures back to individual sensors.',
    insight: 'A model that always predicts “pass” would score ~93% accuracy, so the pipeline optimizes F1 and attacks imbalance at both the data level (SMOTE) and the loss level (scale_pos_weight).',
    stack: ['Python', 'XGBoost', 'scikit-learn', 'SMOTE'],
    github: 'https://github.com/smit30patel/SECOM_Classification',
  },
  {
    id: 'captcha',
    featured: true,
    categories: ['Security'],
    title: 'Stroke-Tracing CAPTCHA — DFS-Verified Human Detection',
    context: 'Arizona State University · Aug – Nov 2024',
    problem: 'Classic text and image-selection CAPTCHAs are increasingly solved by machine-learning models.',
    built: 'A CAPTCHA where users redraw a missing image region hidden under random noise lines; a depth-first-search path tracer follows the drawn stroke pixel by pixel and scores it against the original to separate humans from bots.',
    insight: 'The noise lines are deliberate distractors: DFS path tracking verifies that the stroke follows the true contour, not just any line through the region.',
    stack: ['Python', 'DFS', 'Image Processing'],
  },
  {
    id: 'fashion_api',
    title: 'Fashion Recommendation API',
    categories: ['Backend'],
    summary: 'REST backend for a fashion discovery app — image upload, retrieval, and recommendation endpoints — with apparel images in AWS S3 and item attributes in PostgreSQL feeding a rule-based recommendation engine.',
    tags: ['Node.js', 'PostgreSQL', 'AWS S3', 'REST APIs'],
    github: 'https://github.com/smit30patel/cloth-recommender-backend',
  },
  {
    id: 'landlord',
    title: 'Is Landlord Legit? — Verified Rental Reviews',
    categories: ['Full Stack'],
    summary: 'Student housing platform with verified landlord reviews and rental analytics, so students compare landlords on evidence instead of word of mouth.',
    tags: ['Next.js', 'TypeScript'],
    github: 'https://github.com/smit30patel/is-landlord-legit',
  },
  {
    id: 'ai_doctor',
    title: 'AI Doctor — BioBERT Medical Q&A',
    categories: ['AI & ML', 'Full Stack'],
    date: 'Nov 2023',
    summary: 'Flutter app that answers medical questions with BioBERT, a biomedical-domain BERT, through spaCy and Hugging Face Transformers, served by a Django backend on AWS.',
    tags: ['BioBERT', 'Hugging Face', 'Django', 'Flutter', 'AWS'],
    github: 'https://github.com/smit30patel/AI-Doctor-Chatbot',
  },
  {
    id: 'churn',
    title: 'Customer Churn Intelligence — RFM Segmentation & Prediction',
    categories: ['AI & ML'],
    summary: 'RFM features and K-Means clustering split customers into loyal, high-value, and at-risk cohorts; churn models on top flag accounts for retention, surfaced in Power BI dashboards.',
    tags: ['Python', 'K-Means', 'Power BI'],
    github: 'https://github.com/smit30patel/Customer-Churn-Analysis',
  },
  {
    id: 'book_recommender',
    title: 'Collaborative-Filtering Book Recommender',
    categories: ['AI & ML'],
    date: 'Fall 2024',
    summary: 'User-based collaborative filtering on a sparse user–book rating matrix: cosine similarity finds each reader’s 10 nearest neighbors, and similarity-weighted ratings rank their top 5 books.',
    tags: ['Python', 'Collaborative Filtering', 'scikit-learn'],
  },
  {
    id: 'stock_lstm',
    title: 'LSTM Stock Price Forecasting',
    categories: ['AI & ML'],
    date: '2022',
    summary: 'LSTM sequence model that learns temporal patterns in historical prices to forecast stock movement.',
    tags: ['Python', 'LSTM', 'Time Series'],
  },
  {
    id: 'object_detection',
    title: 'Real-Time Object Detection on Live Video',
    categories: ['AI & ML'],
    date: '2021',
    summary: 'Detects and labels objects frame by frame in live webcam and video streams using OpenCV with pretrained deep-learning models.',
    tags: ['Python', 'OpenCV', 'Computer Vision'],
  },
];

export const skills = [
  { group: 'Languages', items: ['Java', 'TypeScript', 'JavaScript', 'Python', 'SQL', 'C++', 'HTML/CSS'] },
  { group: 'Backend', items: ['Spring Boot', 'Spring MVC', 'Node.js', 'Express.js', 'REST APIs', 'Role-Based Access Control', 'Stripe API'] },
  { group: 'AI & ML', items: ['Azure OpenAI', 'Azure Document Intelligence', 'LLM APIs', 'RAG', 'Prompt Engineering', 'scikit-learn', 'XGBoost', 'Hugging Face'] },
  { group: 'Databases', items: ['PostgreSQL', 'MongoDB', 'Firestore', 'Convex'] },
  { group: 'Cloud & Data', items: ['GCP (App Engine, Cloud SQL)', 'AWS S3', 'Azure', 'Cloudflare R2', 'Docker', 'Apache Kafka'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'React Native', 'Expo'] },
  { group: 'Testing & Tools', items: ['JUnit', 'Mockito', 'Jest', 'Git', 'Maven', 'Postman', 'Claude Code', 'OpenCode'] },
];

export const education = [
  {
    degree: 'M.S. Data Science, Analytics & Engineering',
    school: 'Arizona State University',
    location: 'Tempe, AZ',
    period: 'May 2026',
    gpa: '3.58 / 4.00',
  },
  {
    degree: 'B.E. Information Technology',
    school: 'Gujarat Technological University',
    detail: 'G H Patel College of Engineering & Technology',
    location: 'Gujarat, India',
    period: 'June 2023',
    gpa: '8.20 / 10',
  },
];

export const publications = [
  {
    title: 'Time Series Forecasting Approaches — A Literature Review',
    venue: 'International Journal of Novel Research and Development (IJNRD)',
    date: 'Jul 2023',
    summary: 'Compares statistical and machine-learning approaches to forecasting trend and seasonality.',
  },
];

export const writing = [
  { label: 'Medium', handle: '@smitpatel30071', href: 'https://medium.com/@smitpatel30071' },
  { label: 'Substack', handle: '@originalsmit', href: 'https://substack.com/@originalsmit' },
];

export const terminalSummary = [
  ['role', 'Software Engineer · Backend & AI'],
  ['stack', ['Java', 'Spring Boot', 'TypeScript', 'PostgreSQL', 'Azure OpenAI']],
  ['now', '99 Yards — REST APIs, RBAC, Stripe ledger'],
  ['focus', ['APIs', 'LLM services', 'Infra']],
  ['based_in', 'Tempe, AZ'],
  ['open_to', 'Full-time or internship · Backend & AI'],
];

export const highlights = [
  { value: '4', label: 'Engineering roles' },
  { value: '1st', label: 'SunHacks 2025, of 137+' },
  { value: 'M.S.', label: 'Data Science, ASU' },
  { value: '12', label: 'Projects' },
];

export const about = {
  whoIAm:
    'A software engineer from India, now based in Tempe, Arizona. I have a degree in Information Technology and a Master’s in Data Science from Arizona State University. Most of my work sits on the backend side of AI: LLM services, agent orchestration, and the DevOps and infra that keep it all running. For the past while I’ve been at early-stage startups, building products from scratch with small teams.',
  bring: [
    'I can take a vague problem and run with it. I don’t need every step spelled out.',
    'I ship small and ship often. Getting something working in front of people today beats a perfect version next month.',
    'One feature, start to finish: API, data model, LLM pipeline, deployment. That’s the kind of work I’m comfortable owning.',
    'I keep people posted. If I’m stuck or something’s off, the team hears about it early, not at the deadline.',
    'I think about who’s using the thing. If there’s a simpler way to solve the problem, I’ll say so.',
  ],
  lookingFor:
    'A software engineering role, full-time or internship, where I can do backend, AI, DevOps, and infra work on a real product. I’d love a team that moves fast and gives engineers room to own what they build.',
};

export const howIBuild =
  'If I build it, it’s mine, including the fix when it breaks after launch. I use AI coding agents like Claude Code to move fast, but the design calls are mine, and every change gets reviewed and tested before it goes out. When something’s unclear, I’d rather build a rough version and get feedback than wait around for a perfect spec. And I try to leave things cleaner than I found them, so the next person isn’t stuck guessing.';
