export interface Project {
  title: string;
  date: string;
  description: string;
  bullets: string[];
  tags: string[];
  github: string; // TODO: Fill in your GitHub repo URLs for each project
}

export const projects: Project[] = [
  {
    title: "KKYBE – Cloud Storage Cost Optimization",
    date: "September 2025 – April 2026",
    description:
      "A plugin-based benchmarking system for Apache Kafka designed to measure and reduce cloud object storage costs by minimizing redundant GET and PUT operations against AWS S3 and Azure Blob Storage.",
    bullets: [
      "Developed a plugin-based benchmarking system for Apache Kafka to measure and reduce cloud object storage costs by minimizing redundant GET and PUT operations against AWS S3 and Azure Blob Storage",
      "Built a Python experiment harness that orchestrated repeatable Kafka workloads using Docker Compose, collecting JMX throughput metrics, consumer boundary latency, and cold-read recovery times per run",
      "Implemented an AWS S3 log analysis pipeline (ObjectStoreClient) to parse server access logs, aggregate operation counts and costs over configurable time windows, and write summaries to a Supabase PostgreSQL database",
      "Delivered a SvelteKit and TypeScript frontend with a Tailwind CSS dashboard for queuing experiments, connecting distributed worker machines, and visualizing metrics across runs",
      "Followed a full Agile SDLC across two sprints with a team of five, producing sprint retrospectives, burndown charts, a RACI matrix, requirements engineering artifacts, and unit and integration test suites",
    ],
    tags: [
      "Python",
      "Apache Kafka",
      "Docker",
      "AWS S3",
      "Azure",
      "SvelteKit",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "Node.js",
    ],
    github: "", // TODO: Add your GitHub repo URL here
  },
  {
    title: "CS:GO Round Winner Predictor",
    date: "November 2025 – December 2025",
    description:
      "A supervised machine learning pipeline in Python to predict CS:GO round outcomes from a dataset of 122,000 live game state snapshots, achieving 88.13% accuracy with Random Forest.",
    bullets: [
      "Built a supervised machine learning pipeline in Python using scikit-learn to predict CS:GO round outcomes from a dataset of 122,000 live game state snapshots",
      "Responsible for the data preprocessing pipeline, including dimensionality reduction, one-hot encoding of categorical map data, label encoding of binary variables, and StandardScaler normalization",
      "Engineered two binary features derived from raw armor values to better capture threshold effects on round outcomes",
      "Implemented and compared three classifiers — Logistic Regression (75%), Decision Tree (82%), and Random Forest (88.13%) — with the Random Forest exceeding the team's initial 85% accuracy target",
    ],
    tags: ["Python", "scikit-learn", "pandas", "Jupyter Notebook"],
    github: "", // TODO: Add your GitHub repo URL here
  },
  {
    title: "Health Analytics Mobile App",
    date: "January 2025 – April 2025",
    description:
      "A cross-platform mobile application to streamline walk-in clinic checkups, enabling doctors to track and analyze patient symptoms with an analytics dashboard and role-based access control.",
    bullets: [
      "Developed a cross-platform mobile application using React Native and Expo to streamline walk-in clinic checkups, enabling doctors to track and analyze patient symptoms",
      "Designed an analytics dashboard to visualize recurring symptoms and their geographic distribution across a PostgreSQL backend",
      "Built secure multi-role authentication (Doctor/Admin) with role-based access control for managing patient and clinic data",
      "Participated in a requirements elicitation session with industry healthcare professionals to define project scope and align the application with real clinical workflow needs",
      "Coordinated development across a team using Jira and Confluence in weekly Agile scrum meetings",
    ],
    tags: ["React Native", "Expo", "PostgreSQL", "Jira", "Confluence"],
    github: "", // TODO: Add your GitHub repo URL here
  },
  {
    title: "SilentWave – Real-Time Chat Application",
    date: "March 2025 – April 2025",
    description:
      "A full-stack real-time chat application with a multithreaded C++ backend and React TypeScript frontend, supporting group messaging with ACID-compliant database transactions.",
    bullets: [
      "Built a full-stack real-time chat application using a multithreaded C++ (Boost.Asio) backend and a React TypeScript frontend deployed on Vercel",
      "Implemented secure user authentication with session management and persistent login backed by a PostgreSQL database",
      "Enabled real-time group messaging via persistent server connections, supporting simultaneous communication across multiple clients",
      "Enforced full ACID-compliant PostgreSQL transactions to ensure message reliability and database consistency under concurrent load",
      "Leveraged multithreading to handle concurrent user connections efficiently without blocking or performance degradation",
    ],
    tags: [
      "C++",
      "Boost.Asio",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Vercel",
    ],
    github: "https://github.com/hsohail7/SilentWave", // TODO: Add your GitHub repo URL here
  },
  {
    title: "DHT Peer-to-Peer Network",
    date: "March 2025",
    description:
      "A Kademlia-style distributed hash table peer-to-peer network built with raw TCP sockets, featuring a custom binary messaging protocol and XOR-based routing.",
    bullets: [
      "Built a Kademlia-style distributed hash table peer-to-peer network in Node.js using raw TCP sockets",
      "Designed and implemented a custom binary messaging protocol (kPTP) supporting peer discovery, network joining, and liveness detection across four message types",
      "Implemented a 16-slot XOR-based k-bucket routing table to efficiently organize and locate peers across the network",
      "Built a heartbeat system that periodically pings all known peers and automatically evicts any node that misses three consecutive responses, ensuring routing table accuracy",
    ],
    tags: ["Node.js", "TCP", "Kademlia", "Distributed Systems"],
    github: "", // TODO: Add your GitHub repo URL here
  },
];
