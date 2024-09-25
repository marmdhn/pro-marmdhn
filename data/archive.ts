interface IArchive {
  id: number;
  year: number;
  title: string;
  madeAt: string;
  buildWith: string[];
  link: { gitHubUrl: string; webUrl: string };
}

export const Archives: IArchive[] = [
  {
    id: 1,
    year: 2024,
    title: "DigiTs Telkom Schools",
    madeAt: "Telkom Foundation",
    buildWith: ["Nuxt.Js", "Vue.Js", "CSS", "Bootstrap"],
    link: {
      gitHubUrl: "",
      webUrl: "https://digits.telkomschools.sch.id/",
    },
  },
  {
    id: 2,
    year: 2024,
    title: "School Profile Website",
    madeAt: "Baitul Adab Islamic School",
    buildWith: ["Nuxt.Js", "Vue.Js", "Bootstrap"],
    link: {
      gitHubUrl: "",
      webUrl: "https://digits.telkomschools.sch.id/",
    },
  },
  {
    id: 3,
    year: 2024,
    title: "PPDB Telkom Schools",
    madeAt: "Telkom Foundation",
    buildWith: ["Next.Js", "React.Js", "CSS", "Bootstrap"],
    link: {
      gitHubUrl: "",
      webUrl: "https://ppdb.telkomschools.sch.id/",
    },
  },
];
