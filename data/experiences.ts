interface IExperience {
  year: number;
  title: string;
  current: boolean;
  corporate: string;
  description: string;
}

export const Experiences: IExperience[] = [
  {
    year: 2026,
    title: "Full Stack Developer",
    current: true,
    corporate: "PT Bank Mandiri (Persero) Tbk.",
    description:
      "As a Full Stack Developer at Bank Mandiri, I build internal tools and data-driven dashboards using Angular and Spring Boot. I also work with the ELK stack (Elasticsearch, Logstash, Kibana) for log data processing and visualization, collaborating with cross-functional teams to support data analytics and system monitoring initiatives.",
  },
  {
    year: 2026,
    title: "Software Developer",
    current: false,
    corporate: "Taiwan Mobile",
    description:
      "As a Software Developer at Taiwan Mobile, I developed and maintained internal enterprise web applications using React.js, Spring Boot, and DB2. I took part in legacy system modernization and application rewrite initiatives, analyzing legacy codebases to support migration planning, while handling API integration, feature enhancement, and bug fixing across front-end and back-end systems alongside QA, PM, Infrastructure, and technical leads in Agile teams.",
  },
  {
    year: 2025,
    title: "Mobile Developer",
    current: false,
    corporate: "Telkom Foundation",
    description:
      "I was responsible for developing and maintaining mobile applications for Telkom Schools using Flutter, creating development standards and starter templates to streamline projects. I collaborated with UI/UX, backend, and DevOps teams to ensure design consistency, optimize performance, and align app functionality with business needs.",
  },
  {
    year: 2024,
    title: "Front End Developer",
    current: false,
    corporate: "Telkom Foundation",
    description:
      "I was responsible for developing responsive user interfaces for Telkom Schools' web applications, optimizing performance, and ensuring a seamless user experience. I collaborated with UI/UX, backend, and DevOps teams to maintain smooth operations and aligned the application flow with business requirements.",
  },
  {
    year: 2023,
    title: "Software Engineer",
    current: false,
    corporate: "PT. Akhdani Reka Solusi",
    description:
      "I was responsible for designing, developing, and maintaining software in line with the business needs or project requirements. My role also involved collaborating closely with a cross-functional team of developers, designers, and project managers to ensure that projects were completed on schedule and met their objectives.",
  },
];
