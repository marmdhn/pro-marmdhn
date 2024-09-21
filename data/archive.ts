interface IArchive {
  year: number;
  title: string;
  madeAt: string;
  buildWith: string[];
  link: { gitHubUrl: string; webUrl: string };
}

export const Archives: IArchive[] = [
  {
    year: 2024,
    title: "DigiTS",
    madeAt: "Telkom Foundation",
    buildWith: ["Nuxt.Js", "Vue.Js", "Bootstrap"],
    link: {
      gitHubUrl: "",
      webUrl: "",
    },
  },
];
