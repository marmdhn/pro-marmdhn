interface IWorks {
  imgUrl: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  websiteUrl: string;
}

export const Works: IWorks[] = [
  {
    imgUrl: "ppdb-telkomschools.png",
    title: "PPDB TelkomSchools",
    description:
      "The PPDB Telkom Schools website streamlines the registration process for Telkom Schools in Indonesia, offering a user-friendly interface for easy application, document submission, and status tracking.",
    techStack: ["NextJs", "CSS", "Bootstrap"],
    githubUrl: "",
    websiteUrl: "https://ppdb.telkomschools.sch.id/",
  },
  {
    imgUrl: "digits-telkomschools.png",
    title: "DigiTS TelkomSchools",
    description:
      "The DigiTS platform simplifies the re-registration process for students, while also providing comprehensive management tools for schools, covering everything from student and teacher data to academic, curriculum, and department management.",
    techStack: ["NuxtJs", "CSS", "Bootstrap"],
    githubUrl: "",
    websiteUrl: "https://digits.telkomschools.sch.id/",
  },
  {
    imgUrl: "baitul-adab-islamic-school.png",
    title: "Baitul Adab Islamic School Website",
    description:
      "The Baitul Adab Islamic School website serves as a comprehensive landing page, providing key information on admission requirements, facilities, and school activities. It also features an online registration form for prospective students, making the enrollment process easy and accessible.",
    techStack: ["ReactJs", "TailwindCss", "DaisyUI"],
    githubUrl: "",
    websiteUrl: "https://digits.telkomschools.sch.id/",
  },
];
