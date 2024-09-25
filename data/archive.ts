export interface IArchive {
  id: number;
  year: number;
  title: string;
  madeAt: string;
  buildWith: string[];
  link: { gitHubUrl: string; webUrl: string };
  detail: boolean;
  imageCover?: string;
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
    detail: false,
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
    detail: false,
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
    detail: false,
  },
  {
    id: 4,
    year: 2023,
    title: "Halo YPT",
    madeAt: "Telkom Foundation",
    buildWith: ["HTML", "CSS", "JS", "Bootstrap"],
    link: {
      gitHubUrl: "",
      webUrl: "",
    },
    detail: true,
    imageCover: "halo-ypt/image-cover.png",
  },
  {
    id: 5,
    year: 2023,
    title: "Dashboard Monitoring Server",
    madeAt: "PT Akhdani Reka Solusi",
    buildWith: ["Nuxt.Js", "Vue.Js", "TailwindCss"],
    link: {
      gitHubUrl: "",
      webUrl: "",
    },
    detail: true,
    imageCover: "dashboard-monitoring-server/image-cover.png",
  },
];
