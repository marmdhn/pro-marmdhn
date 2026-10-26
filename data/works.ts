interface IWorks {
  imgUrl: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  websiteUrl: string;
}

interface IMobileWorks {
  imgUrl?: string;
  title: string;
  description: string;
  techStack: string[];
  playStoreUrl: string;
  appStoreUrl: string;
}

export const MobileWorks: IMobileWorks[] = [
  {
    imgUrl: "digits-mobile.jpg",
    title: "DIGITS",
    description:
      "DIGITS is an integrated academic super app for Telkom Schools, where students and parents can manage and track class schedules, attendance, and student achievement in real time.",
    techStack: ["Flutter", "Dart"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.ypt.tsmobile&hl=en_US",
    appStoreUrl: "https://apps.apple.com/id/app/digits/id6737196253",
  },
  {
    imgUrl: "digits-paud-mobile.jpg",
    title: "DIGITS For PAUD",
    description:
      "DIGITS For PAUD lets parents keep an eye on their children at school by viewing school CCTV footage from anywhere, staying connected to their daily activities.",
    techStack: ["Flutter", "Dart"],
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.ypt.digitk&hl=en_US",
    appStoreUrl: "https://apps.apple.com/id/app/digits-for-paud/id6803765613",
  },
];

export const Works: IWorks[] = [
  {
    imgUrl: "ppdb-telkomschools.png",
    title: "PPDB Telkom Schools",
    description:
      "The PPDB Telkom Schools website streamlines the registration process for Telkom Schools in Indonesia, offering a user-friendly interface for easy application, document submission, and status tracking.",
    techStack: ["Next.Js", "React.Js", "CSS", "Bootstrap"],
    githubUrl: "",
    websiteUrl: "https://ppdb.telkomschools.sch.id",
  },
  {
    imgUrl: "digits-telkomschools.png",
    title: "DigiTS Telkom Schools",
    description:
      "The DigiTS platform simplifies the re-registration process for students, while also providing comprehensive management tools for schools, covering everything from student and teacher data to academic, curriculum, and department management.",
    techStack: ["Nuxt.Js", "Vue.Js", "CSS", "Bootstrap"],
    githubUrl: "",
    websiteUrl: "https://digits.telkomschools.sch.id",
  },
  {
    imgUrl: "baitul-adab-islamic-school.png",
    title: "Baitul Adab Islamic School Website",
    description:
      "The Baitul Adab Islamic School website serves as a comprehensive landing page, providing key information on admission requirements, facilities, and school activities. It also features an online registration form for prospective students, making the enrollment process easy and accessible.",
    techStack: ["React.Js", "TailwindCss", "DaisyUI"],
    githubUrl: "",
    websiteUrl: "https://baituladab.com",
  },
];
