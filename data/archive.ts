interface IArchiveDownload {
  platform: "Android" | "iOS" | "Windows" | "macOS";
  url: string;
}

interface IArchiveLink {
  gitHubUrl: string;
  webUrl: string;
  downloadUrl?: IArchiveDownload[];
}

export interface IArchive {
  id: string;
  year: number;
  title: string;
  madeAt: string;
  buildWith: string[];
  link: IArchiveLink;
  detail: boolean;
  imageCover?: {
    fileUrl: string;
  };
  detailPhoto?: string[];
  status: "Done" | "In Progress" | "Coming Soon";
}

export const Archives: IArchive[] = [
  {
    id: "mobile-digits",
    year: 2025,
    title: "Mobile App DIGITS",
    madeAt: "Telkom Foundation",
    buildWith: ["Flutter", "Dart"],
    link: {
      webUrl: "https://digitsone.telkomschools.sch.id",
      downloadUrl: [
        {
          platform: "Android",
          url: "https://play.google.com/store/apps/details?id=com.ypt.tsmobile&hl=id",
        },
        {
          platform: "iOS",
          url: "https://apps.apple.com/id/app/digits/id6737196253",
        },
      ],
      gitHubUrl: "",
    },
    detail: false,
    status: "Done",
  },
  {
    id: "and-project",
    year: 2025,
    title: "And Project",
    madeAt: "Personal Project",
    buildWith: ["Next.Js", "TailwindCss", "Framer Motion"],
    link: {
      gitHubUrl: "https://github.com/marmdhn/and-project",
      webUrl: "https://and.marmdhn.com/",
    },
    detail: false,
    status: "In Progress",
  },
  {
    id: "digits-telkom-schools",
    year: 2024,
    title: "DigiTs Telkom Schools",
    madeAt: "Telkom Foundation",
    buildWith: ["Nuxt.Js", "Vue.Js", "CSS", "Bootstrap"],
    link: {
      gitHubUrl: "",
      webUrl: "https://digits.telkomschools.sch.id",
    },
    detail: false,
    status: "Done",
  },
  {
    id: "school-profile-website",
    year: 2024,
    title: "School Profile Website",
    madeAt: "Baitul Adab Islamic School",
    buildWith: ["React.Js", "TailwindCss", "DaisyUi"],
    link: {
      gitHubUrl: "",
      webUrl: "https://baituladab.com/",
    },
    detail: false,
    status: "Done",
  },
  {
    id: "ppdb-telkom-schools",
    year: 2024,
    title: "PPDB Telkom Schools",
    madeAt: "Telkom Foundation",
    buildWith: ["Next.Js", "React.Js", "CSS", "Bootstrap"],
    link: {
      gitHubUrl: "",
      webUrl: "https://ppdb.telkomschools.sch.id/",
    },
    detail: false,
    status: "Done",
  },
  {
    id: "halo-ypt",
    year: 2023,
    title: "Halo YPT",
    madeAt: "Telkom Foundation",
    buildWith: ["HTML", "CSS", "JS", "Bootstrap"],
    link: {
      gitHubUrl: "",
      webUrl: "",
    },
    detail: true,
    imageCover: {
      fileUrl: "halo-ypt/image-cover.png",
    },
    status: "Done",
  },
  {
    id: "dashboard-monitoring-server",
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
    status: "Done",
  },
  {
    id: "mar-quran-app",
    year: 2023,
    title: "MAR Quran App",
    madeAt: "Personal Project",
    buildWith: ["Flutter", "Dart"],
    link: {
      gitHubUrl: "https://github.com/marmdhn/mar-quran-app",
      webUrl: "",
      downloadUrl: [
        {
          platform: "Android",
          url: "https://drive.google.com/file/d/1Dwc0zNCEe3rV5m9_r6JVX-LXHD48a1_F/view",
        },
      ],
    },
    detail: true,
    imageCover: {
      fileUrl: "mar-quran/image-cover.png",
    },
    status: "Done",
  },
  {
    id: "atm-athaloka",
    year: 2023,
    title: "ATM Athaloka",
    madeAt: "Personal Project",
    buildWith: [".Net", "Blazor", "PostgreSQL"],
    link: {
      gitHubUrl: "https://github.com/marmdhn/atm-athaloka",
      webUrl: "",
    },
    detail: true,
    imageCover: {
      fileUrl: "atm-athaloka/image-cover.png",
    },
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
    status: "Done",
  },
];
