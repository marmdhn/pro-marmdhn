"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useLenis } from "lenis/react";
import { FaBars, FaXmark } from "react-icons/fa6";
import MarLogo from "@/components/MarLogo";
import ThemeToggle from "@/components/ThemeToggle";
import { scrollToSection } from "@/lib/scrollToSection";

const NAV_ITEMS = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Work", to: "work" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const pendingTarget = useRef<string | null>(null);
  const isHome = pathname === "/";
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isHome && pendingTarget.current && lenis) {
      scrollToSection(lenis, pendingTarget.current);
      pendingTarget.current = null;
    }
  }, [isHome, lenis]);

  useEffect(() => {
    if (!isHome) return;

    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.to),
    ).filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  const goTo = (to: string) => {
    setMenuOpen(false);
    if (isHome) {
      scrollToSection(lenis, to);
    } else {
      pendingTarget.current = to;
      router.push("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-surface/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {isHome ? (
          <button
            onClick={() => scrollToSection(lenis, "hero")}
            aria-label="Marmdhn"
            className="text-ink hover:text-primary hover:cursor-pointer transition-colors duration-200"
          >
            <MarLogo className="h-7 w-auto" />
          </button>
        ) : (
          <Link
            href="/"
            aria-label="Marmdhn"
            className="text-ink hover:text-primary transition-colors duration-200"
          >
            <MarLogo className="h-7 w-auto" />
          </Link>
        )}

        <div className="flex items-center gap-6 md:gap-8">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.to}
              onClick={() => goTo(item.to)}
              className={`hidden sm:block text-sm hover:text-primary hover:cursor-pointer transition-colors duration-200 ${
                isHome && activeSection === item.to
                  ? "text-primary"
                  : "text-ink-muted"
              }`}
            >
              {item.label}
            </button>
          ))}
          <ThemeToggle />
          <Link
            href="/cv"
            className="hidden sm:inline-block leading-none pt-[13px] pb-[9px] px-4 text-sm border border-line rounded-full hover:border-primary hover:text-primary transition-colors duration-200"
          >
            Resume
          </Link>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
            className="sm:hidden text-ink-muted hover:text-primary transition-colors duration-200"
          >
            {menuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden border-t border-line bg-surface px-6 py-6 flex flex-col gap-5">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.to}
              onClick={() => goTo(item.to)}
              className={`text-left text-base hover:text-primary transition-colors duration-200 ${
                isHome && activeSection === item.to
                  ? "text-primary"
                  : "text-ink-muted"
              }`}
            >
              {item.label}
            </button>
          ))}
          <Link
            href="/cv"
            onClick={() => setMenuOpen(false)}
            className="text-left text-base text-ink-muted hover:text-primary transition-colors duration-200"
          >
            Resume
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
