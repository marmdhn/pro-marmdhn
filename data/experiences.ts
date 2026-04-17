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
    title: "Software Developer",
    current: true,
    corporate: "Taiwan Mobile",
    description:
      "As a Software Developer at Taiwan Mobile, I contributed as a backend engineer, developing robust services and APIs that support large-scale applications. Focused on performance optimization, system stability, and delivering reliable solutions for end users.",
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
