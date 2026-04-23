export interface Skill {
  name: string;
  icon: string; // Devicon class name (e.g., "devicon-react-original")
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: [
      { name: "Python", icon: "devicon-python-plain" },
      { name: "Java", icon: "devicon-java-plain" },
      { name: "C++", icon: "devicon-cplusplus-plain" },
      { name: "C", icon: "devicon-c-plain" },
      { name: "C#", icon: "devicon-csharp-plain" },
      { name: "JavaScript", icon: "devicon-javascript-plain" },
      { name: "TypeScript", icon: "devicon-typescript-plain" },
      { name: "MATLAB", icon: "devicon-matlab-plain" },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      { name: "React.js", icon: "devicon-react-original" },
      { name: "React Native", icon: "devicon-react-original" },
      { name: "Expo", icon: "devicon-react-original" }, // Expo uses React icon
      { name: "Node.js", icon: "devicon-nodejs-plain" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Boost.Asio", icon: "devicon-cplusplus-plain" }, // No Boost icon in Devicons
      { name: "SvelteKit", icon: "devicon-svelte-plain" },
      { name: "scikit-learn", icon: "devicon-scikitlearn-plain" },
      { name: "pandas", icon: "devicon-pandas-plain" },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git", icon: "devicon-git-plain" },
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
      { name: "Vercel", icon: "devicon-vercel-original" },
      { name: "Docker", icon: "devicon-docker-plain" },
      { name: "Apache Kafka", icon: "devicon-apachekafka-original" },
      { name: "Jira", icon: "devicon-jira-plain" },
      { name: "Confluence", icon: "devicon-confluence-plain" },
      { name: "Unity", icon: "devicon-unity-plain" },
      { name: "Azure", icon: "devicon-azure-plain" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
      { name: "MySQL", icon: "devicon-mysql-plain" },
      { name: "Supabase", icon: "devicon-supabase-plain" },
    ],
  },
];
