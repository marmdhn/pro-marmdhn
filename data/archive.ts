export interface IArchive {
  id: number;
  year: number;
  title: string;
  madeAt: string;
  buildWith: string[];
  link: { gitHubUrl: string; webUrl: string; downloadUrl?: string };
  detail: boolean;
  imageCover?: { fileUrl: string };
  detailPhoto?: string[];
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
      webUrl: "",
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
      webUrl: "https://baituladab.com/",
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
    imageCover: { fileUrl: "halo-ypt/image-cover.png" },
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
    imageCover: {
      fileUrl: "dashboard-monitoring-server/image-cover.png",
    },
  },
  {
    id: 6,
    year: 2023,
    title: "MAR Quran App",
    madeAt: "Personal Project",
    buildWith: ["Flutter", "Dart"],
    link: {
      gitHubUrl: "https://github.com/marmdhn/mar-quran-app",
      webUrl: "",
      downloadUrl:
        "https://drive.google.com/file/d/1Dwc0zNCEe3rV5m9_r6JVX-LXHD48a1_F/view",
    },
    detail: true,
    imageCover: { fileUrl: "mar-quran/image-cover.png" },
  },
  {
    id: 7,
    year: 2023,
    title: "ATM Athaloka",
    madeAt: "Personal Project",
    buildWith: ["Flutter", "Dart"],
    link: {
      gitHubUrl: "https://github.com/marmdhn/ATM-Athaloka",
      webUrl: "",
    },
    detail: true,
    imageCover: { fileUrl: "atm-athaloka/image-cover.png" },
    detailPhoto: [
      "atm-athaloka/image-admin-1.png",
      "atm-athaloka/image-admin-2.png",
      "atm-athaloka/image-admin-3.png",
      "atm-athaloka/image-admin-4.png",
      "atm-athaloka/image-user-1.png",
      "atm-athaloka/image-user-2.png",
      "atm-athaloka/image-user-3.png",
      "atm-athaloka/image-user-4.png",
      "atm-athaloka/image-user-5.png",
    ],
  },
];
