import type Lenis from "lenis";

const NAVBAR_HEIGHT = 80;

export function scrollToSection(lenis: Lenis | undefined, id: string) {
  lenis?.scrollTo(`#${id}`, { offset: -NAVBAR_HEIGHT });
}
