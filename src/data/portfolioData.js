/**
 * Data store for Smit Patel's Portfolio
 * Projects use descPoints (array) for point-wise bullet rendering.
 */

export const roles = [
  { id: 'data_scientist', label: 'DATA SCIENTIST', title: 'Data Scientist' },
  { id: 'full_stack', label: 'SOFTWARE ENGINEER', title: 'Software Engineer' },
];

export const portfolioData = {
  data_scientist: {
    hero: {
      greeting: "Hi, I'm Smit Patel",
      roleTitle: "Data Scientist",
      tagline: "passionate about solving complex problems through AI, statistical modeling, and data-driven actionable insights.",
      bioParagraph: "Data Scientist Intern at XPet Technologies with a Master of Science in Data Science from Arizona State University (GPA 3.58/4.00). Over 4 years of experience using Data Science and AI to solve creative problems through structured thinking, attention to detail, and an implementation mindset. Experienced in machine learning, deep learning, LLMs, RAG, recommendation systems, and real-time Kafka data pipelines.",
      resumePdf: "/resumes/Data_Scientist_resume-v1.pdf",
    },
    skills: [
      {
        category: "AI / ML & DATA SCIENCE",
        skills: [
          { name: "Machine Learning & Deep Learning", icon: "sklearn" },
          { name: "PyTorch & scikit-learn", icon: "pytorch" },
          { name: "LLMs, RAG & LangChain", icon: "nlp" },
          { name: "Computer Vision & OpenCV", icon: "cv" },
          { name: "Pandas & NumPy", icon: "python" },
          { name: "Statistical Modeling & A/B Testing", icon: "ab" },
          { name: "Recommendation Systems", icon: "cluster" }
        ]
      },
      {
        category: "LANGUAGES & FRAMEWORKS",
        skills: [
          { name: "Python", icon: "python" },
          { name: "SQL", icon: "sql" },
          { name: "R Language", icon: "r" },
          { name: "Java & TypeScript", icon: "ts" },
          { name: "Spring Boot & FastAPI", icon: "node" }
        ]
      },
      {
        category: "DATA ENGINEERING & PLATFORMS",
        skills: [
          { name: "Apache Spark & Kafka", icon: "kafka" },
          { name: "PostgreSQL & Snowflake", icon: "postgres" },
          { name: "AWS & Docker", icon: "aws" },
          { name: "Tableau & Power BI", icon: "tableau" },
          { name: "Git & Jupyter Notebook", icon: "jupyter" }
        ]
      }
    ],
    projects: [
      {
        id: "sona_space",
        title: "SONA Space — AI Emotional Wellness Assistant",
        date: "Nov 2025",
        org: "Spark AI Challenge (24h Hackathon)",
        descPoints: [
          "Built an AI assistant delivering personalized mental health support for astronauts using Retrieval-Augmented Generation (RAG) and conversational AI.",
          "Deployed a 24/7 voice and text support platform for adults with autism featuring real-time emotion detection and behavioral insights.",
          "Integrated with Alexa/Echo smart devices within a fully accessible, calming user experience."
        ],
        tags: ["Python", "RAG", "Conversational AI", "Alexa/Echo", "Emotion Detection"],
        github: "https://github.com/smit30patel/Spark-AI",
        live: "https://spark-ai-phi.vercel.app/"
      },
      {
        id: "realtime_fraud",
        title: "Real-Time Fraud Detection with SVM & Kafka",
        date: "May 2025 – Jun 2025",
        descPoints: [
          "Built a real-time fraud detection system using Support Vector Machine (SVM) and Apache Kafka for streaming transaction processing.",
          "Implemented a Kafka producer-consumer architecture for real-time transaction data ingestion and classification.",
          "Developed an interactive Streamlit dashboard for visualization, monitoring, and manual transaction testing."
        ],
        tags: ["Apache Kafka", "Python", "SVM", "Streaming ML", "Streamlit"],
        github: "https://github.com/smit30patel/Real-Time-Fraud-Detection-with-SVM-and-Kafka",
        video: "https://www.youtube.com/watch?v=fcNGd0Q9y3M"
      },
      {
        id: "book_recommender",
        title: "Personalized Book Recommender System",
        date: "Aug 2024 – Dec 2024",
        org: "Arizona State University",
        descPoints: [
          "Created a Book Recommender to suggest books to users based on their past ratings and reading preferences.",
          "Applied a collaborative filtering approach and constructed a sparse user-book matrix to capture rating behavior.",
          "Computed cosine similarity to retrieve top 10 most similar users and generated recommendations using weighted average ratings, returning top 5 books per user."
        ],
        tags: ["Python", "Collaborative Filtering", "Cosine Similarity", "Scikit-Learn"],
        github: "https://github.com/smit30patel"
      },
      {
        id: "secom_classification",
        title: "SECOM Sensor Failure Prediction Pipeline",
        date: "Dec 2024",
        descPoints: [
          "Built a production-ready ML pipeline to predict product failures in semiconductor manufacturing using the SECOM dataset (590+ sensor features, ~6.6% failure rate).",
          "Applied SelectKBest (F-test) for feature selection and handled class imbalance with SMOTE and scale_pos_weight.",
          "Used XGBoost for classification, evaluated with F1-score and confusion matrix, and visualized feature importance for interpretability."
        ],
        tags: ["XGBoost", "SMOTE", "Feature Selection", "Imbalanced Classification", "Python"],
        github: "https://github.com/smit30patel/SECOM_Classification"
      },
      {
        id: "ai_doctor_chatbot",
        title: "AI Doctor Chatbot App",
        date: "Nov 2023",
        descPoints: [
          "Developed an AI chatbot app using Flutter that provides medical advice similar to a real doctor.",
          "Integrated BioBERT model for the advice module using NLP libraries SpaCy and Huggingface Transformers.",
          "Hosted on AWS with Django as the backend framework."
        ],
        tags: ["Flutter", "BioBERT", "SpaCy", "HuggingFace", "AWS", "Django"],
        github: "https://github.com/smit30patel/AI-Doctor-Chatbot"
      },
      {
        id: "stock_market_lstm",
        title: "Stock Market Analysis using Machine Learning",
        date: "Jun 2022 – Jul 2022",
        org: "G H Patel College of Engineering & Technology",
        descPoints: [
          "Built a data-driven application utilizing machine learning and Long Short-Term Memory (LSTM) neural networks to predict stock prices.",
          "Provided insights for investment decision-making based on historical trend analysis and temporal pattern learning."
        ],
        tags: ["Python", "LSTM", "Financial Time Series", "Scikit-Learn"],
        github: "https://github.com/smit30patel"
      },
      {
        id: "opencv_object_detection",
        title: "Real-Time Object Detection using OpenCV",
        date: "Aug 2021 – Nov 2021",
        org: "G H Patel College of Engineering & Technology",
        descPoints: [
          "Built a real-time object detection system leveraging OpenCV and deep learning models.",
          "Detected and identified objects in live video streams from webcams or video files.",
          "Applicable to surveillance, security, and automation use cases."
        ],
        tags: ["OpenCV", "Deep Learning", "Computer Vision", "Python"],
        github: "https://github.com/smit30patel"
      },
      {
        id: "customer_churn_rfm",
        title: "Customer Segmentation & Churn Prediction",
        descPoints: [
          "Executed behavioral segmentation utilizing RFM methodology and K-Means clustering to categorize customer cohorts into loyal, high-margin, and at-risk profiles.",
          "Developed machine learning models to forecast potential churn events and enable proactive retention strategies.",
          "Synthesized actionable intelligence through dynamic Power BI visualization dashboards."
        ],
        tags: ["Python", "RFM Segmentation", "K-Means", "Power BI", "Machine Learning"],
        github: "https://github.com/smit30patel/Customer-Churn-Analysis"
      }
    ]
  },

  full_stack: {
    hero: {
      greeting: "Hi, I'm Smit Patel",
      roleTitle: "Software Engineer",
      tagline: "passionate about building robust backend services, REST APIs, custom CMS platforms, and scalable cloud solutions.",
      bioParagraph: "Software Developer Intern at 99 Yards and Founding Engineer at Opportunity Hacks × NMTSA (1st Place Winner). Expert in Java, Spring Boot, Node.js, TypeScript, Next.js, PostgreSQL, AWS, Docker, and high-performance microservices.",
      resumePdf: "/resumes/Software-Dev-Resume_v1.pdf",
    },
    skills: [
      {
        category: "LANGUAGES & BACKEND",
        skills: [
          { name: "Java & Spring Boot", icon: "node" },
          { name: "TypeScript & JavaScript", icon: "ts" },
          { name: "Node.js & FastAPI", icon: "node" },
          { name: "REST APIs & Microservices", icon: "api" },
          { name: "Python & SQL", icon: "python" }
        ]
      },
      {
        category: "FRONTEND & CLOUD",
        skills: [
          { name: "Next.js & React", icon: "nextjs" },
          { name: "HTML5 & CSS3 / Tailwind", icon: "css" },
          { name: "AWS Services (S3, EC2)", icon: "aws" },
          { name: "Docker Containerization", icon: "docker" },
          { name: "PostgreSQL & Snowflake", icon: "postgres" }
        ]
      },
      {
        category: "DEVELOPMENT & TOOLS",
        skills: [
          { name: "Git & GitHub", icon: "git" },
          { name: "Apache Kafka & Shell Scripting", icon: "kafka" },
          { name: "Jupyter & Tableau", icon: "jupyter" },
          { name: "Agile & Product Delivery", icon: "agile" }
        ]
      }
    ],
    projects: [
      {
        id: "nmtsa_website",
        title: "NMTSA Non-Profit Organization Website",
        date: "Sep 2025 – May 2026",
        org: "Opportunity Hacks — 1st Place",
        descPoints: [
          "Built a scalable website for a nonprofit organization with an admin dashboard that allows administrators to edit and manage every aspect of the site.",
          "The platform securely handles media and form submissions through cloud-based storage (AWS S3) and data management for reliable day-to-day operations.",
          "Led end-to-end delivery from a 24-hour hackathon prototype to a full 8-month production deployment."
        ],
        tags: ["Next.js", "TypeScript", "AWS S3", "Admin Dashboard", "Serverless"],
        live: "https://nmtsa.org",
        github: "https://github.com/NMTSa2025/NMTSA-Website"
      },
      {
        id: "sona_space_se",
        title: "SONA Space — AI Emotional Wellness Assistant",
        date: "Nov 2025",
        org: "Spark AI Challenge",
        descPoints: [
          "Built an AI assistant delivering personalized mental health support using RAG and conversational AI.",
          "Deployed a 24/7 voice and text support platform for adults with autism featuring real-time emotion detection and behavioral insights.",
          "Integrated with Alexa/Echo smart devices within a fully accessible, calming user experience."
        ],
        tags: ["TypeScript", "Next.js", "RAG", "Conversational AI", "Alexa/Echo"],
        github: "https://github.com/smit30patel/Spark-AI",
        live: "https://spark-ai-phi.vercel.app/"
      },
      {
        id: "loop_it",
        title: "Loop IT — Device Sanitization & Sustainability",
        date: "Sep 2025",
        org: "Sun Hacks",
        descPoints: [
          "Proposed a computer device sanitization solution using shell scripting to perform low-level memory and I/O operations.",
          "Enables secure device reuse while reducing e-waste and lowering a company's carbon footprint.",
        ],
        tags: ["Shell Scripting", "Hardware I/O", "Memory Operations", "Linux"],
        github: "https://github.com/smit30patel/Sunhacks-2025"
      },
      {
        id: "realtime_fraud_se",
        title: "Real-Time Fraud Detection with SVM & Kafka",
        date: "May 2025 – Jun 2025",
        descPoints: [
          "Built a real-time fraud detection system using Support Vector Machine (SVM) and Apache Kafka for streaming transaction processing.",
          "Implemented a Kafka producer-consumer architecture for real-time data ingestion and classification.",
          "Built an interactive Streamlit dashboard for live monitoring and testing."
        ],
        tags: ["Apache Kafka", "Python", "SVM", "Streamlit", "Streaming"],
        github: "https://github.com/smit30patel/Real-Time-Fraud-Detection-with-SVM-and-Kafka",
        video: "https://www.youtube.com/watch?v=fcNGd0Q9y3M"
      },
      {
        id: "captcha_dfs",
        title: "CAPTCHA: Human vs. AI Detection using Image Completion",
        date: "Aug 2024 – Nov 2024",
        org: "Arizona State University",
        descPoints: [
          "Created a CAPTCHA system where users complete an image with a missing part overlaid with random noisy lines.",
          "The drawn part is compared to the original, and an algorithm verifies accuracy to determine if the user is human or a bot.",
          "Implemented a Depth-First Search (DFS) approach to track line paths and count pixels for accuracy assessment."
        ],
        tags: ["DFS Algorithm", "Image Completion", "Pixel Path Tracking", "Security"],
        paper: "https://www.linkedin.com/in/smit3062/overlay/Project/948213289/treasury/?profileId=ACoAADZPbbQBTs0YXzWYzrohSehnvVnprUTRk8s"
      },
      {
        id: "clothing_recommender_backend",
        title: "Clothing Recommendation System",
        descPoints: [
          "Developed a hackathon-driven backend for a fashion discovery platform that processes user-uploaded apparel imagery.",
          "Implemented cloud-based asset management using AWS S3 and a PostgreSQL schema for item attributes.",
          "Engineered a rule-based AI recommendation engine with RESTful API endpoints for uploads, recommendations, and image retrieval."
        ],
        tags: ["AWS S3", "PostgreSQL", "Node.js", "RESTful APIs", "Recommendation"],
        github: "https://github.com/smit30patel/cloth-recommender-backend"
      },
      {
        id: "is_landlord_legit",
        title: "Is LandLord Legit?",
        descPoints: [
          "Engineered a digital platform enhancing transparency and accountability within the off-campus student housing sector.",
          "The platform features verified landlord evaluations and comprehensive rental analytics to help university students make data-driven residential choices."
        ],
        tags: ["Next.js", "TypeScript", "Full Stack", "Rental Analytics"],
        github: "https://github.com/smit30patel/is-landlord-legit"
      },
      {
        id: "ai_doctor_chatbot_se",
        title: "AI Doctor Chatbot App",
        date: "Nov 2023",
        descPoints: [
          "Developed an AI chatbot app using Flutter that provides medical advice similar to a real doctor.",
          "Integrated the BioBERT model using SpaCy and Huggingface Transformers, with AWS for cloud hosting and Django as backend framework."
        ],
        tags: ["Flutter", "BioBERT", "Django", "AWS", "NLP"],
        github: "https://github.com/smit30patel/AI-Doctor-Chatbot"
      },
      {
        id: "opencv_object_detection_se",
        title: "Real-Time Object Detection using OpenCV",
        date: "Aug 2021 – Nov 2021",
        descPoints: [
          "Built a real-time object detection system leveraging OpenCV and deep learning models.",
          "Detects and identifies objects in live video streams from webcams or video files for surveillance, security, and automation."
        ],
        tags: ["OpenCV", "Deep Learning", "Python", "Video Streams"],
        github: "https://github.com/smit30patel"
      }
    ]
  },

  ux_researcher: {
    hero: {
      greeting: "Hi, I'm Smit Patel",
      roleTitle: "UX Researcher & Data Analyst",
      tagline: "passionate about combining rigorous statistical data analysis with human-centered product discovery.",
      bioParagraph: "UX Researcher and Data Analyst combining statistical hypothesis testing, A/B experimentation, user discovery research, and product metrics. Skilled in translating complex data into clear actionable solutions for product decision-making.",
      resumePdf: "/resumes/Data_Scientist_resume-v1.pdf",
    },
    skills: [
      {
        category: "ANALYTICS & EXPERIMENTATION",
        skills: [
          { name: "A/B Testing & Hypothesis Testing", icon: "ab" },
          { name: "Statistical Modeling & EDA", icon: "stats" },
          { name: "Tableau & Power BI", icon: "tableau" },
          { name: "Python & Pandas", icon: "python" },
          { name: "SQL & Data Warehousing", icon: "sql" }
        ]
      },
      {
        category: "UX RESEARCH & DISCOVERY",
        skills: [
          { name: "Product Discovery & User Metrics", icon: "journey" },
          { name: "Neurodivergent Accessibility Design", icon: "usability" },
          { name: "Requirement Translation & Wireframing", icon: "figma" },
          { name: "Recommendation Engine Analytics", icon: "cluster" }
        ]
      },
      {
        category: "TOOLS & COLLABORATION",
        skills: [
          { name: "Jupyter Notebook & Git", icon: "jupyter" },
          { name: "PostgreSQL & Snowflake", icon: "postgres" },
          { name: "Cross-Functional Agile Delivery", icon: "agile" }
        ]
      }
    ],
    projects: [
      {
        id: "sona_space_ux",
        title: "SONA Space — Neurodivergent AI Wellness UX",
        date: "Nov 2025",
        descPoints: [
          "Designed a 24/7 voice and text AI emotional wellness platform targeting adults with autism with a calming, accessible user experience.",
          "Implemented real-time emotion detection and behavioral insights integrated with Alexa/Echo smart devices.",
          "Focused on neurodivergent accessibility, reducing cognitive load and maximizing usability for diverse users."
        ],
        tags: ["Neurodivergent UX", "Accessibility", "Conversational AI", "Alexa/Echo"],
        github: "https://github.com/smit30patel/Spark-AI",
        live: "https://spark-ai-phi.vercel.app/"
      },
      {
        id: "nmtsa_ux",
        title: "NMTSA Non-Profit Stakeholder UX",
        date: "Sep 2025 – May 2026",
        descPoints: [
          "Translated complex non-technical stakeholder requirements into an intuitive admin interface design.",
          "Enabled medical personnel to independently manage and update patient-facing resources without developer assistance.",
          "Designed scalable content management UX that reduced ongoing maintenance overhead for the organization."
        ],
        tags: ["Usability", "Stakeholder UX", "Accessibility", "Admin Portal"],
        live: "https://nmtsa.org",
        github: "https://github.com/NMTSa2025/NMTSA-Website"
      },
      {
        id: "is_landlord_legit_ux",
        title: "Is LandLord Legit?",
        descPoints: [
          "Engineered a platform enhancing transparency in off-campus student housing.",
          "The platform features verified landlord evaluations and rental analytics to help students make data-driven residential choices."
        ],
        tags: ["Student Housing UX", "Rental Analytics", "Transparency", "Next.js"],
        github: "https://github.com/smit30patel/is-landlord-legit"
      },
      {
        id: "ai_doctor_ux",
        title: "AI Doctor Chatbot — Conversational UX",
        date: "Nov 2023",
        descPoints: [
          "Developed an AI chatbot app using Flutter that provides medical advice similar to a real doctor.",
          "Integrated BioBERT model using SpaCy and Huggingface Transformers, hosted on AWS with Django backend."
        ],
        tags: ["Conversational UX", "BioBERT", "NLP", "Flutter"],
        github: "https://github.com/smit30patel/AI-Doctor-Chatbot"
      }
    ]
  }
};

export const publicationsData = [
  {
    title: "TIME SERIES FORECASTING APPROACHES — Literature Review",
    authors: "Smit Patel",
    journal: "International Journal of Novel Research and Development (IJNRD)",
    year: "Jul 27, 2023",
    description: "Literature review evaluating and comparing statistical time series models and machine learning approaches for forecasting patterns, seasonality, and trend analysis.",
    graphType: "time_series"
  }
];
