interface IExperience {
  year: number;
  title: string;
  current: boolean;
  corporate: string;
  description: string;
}

export const Experiences: IExperience[] = [
  {
    year: 2025,
    title: "Mobile Developer",
    current: true,
    corporate: "Telkom Foundation",
    description:
      "I was responsible for developing and maintaining mobile applications for Telkom Schools using Flutter, creating development standards and starter templates to streamline projects. I collaborated with UI/UX, backend, and DevOps teams to ensure design consistency, optimize performance, and align app functionality with business needs.",
  },
  {
    year: 2024,
    title: "Front End Developer",
    current: true,
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
  {
    year: 2022,
    title: "Mobile Apps Develope (Intern)",
    current: false,
    corporate: "PT. Otak Kanan",
    description:
      "I developed an Android application to streamline document management for users. I proactively optimized the app's performance to ensure responsiveness and fast document processing. I also worked closely with the team to ensure project alignment and meet deadlines.",
  },
];
