"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Link as ScrollLink, scroller } from "react-scroll";
import MarLogo from "@/components/MarLogo";

const NAV_ITEMS = [
  { label: "About", to: "about" },
  { label: "Experience", to: "experience" },
  { label: "Work", to: "work" },
  { label: "Contact", to: "contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const scrollTarget = useRef<string | null>(null);
  const isHome = pathname === "/";

  useEffect(() => {
    if (isHome && scrollTarget.current) {
      scroller.scrollTo(scrollTarget.current, { duration: 500, smooth: true });
      scrollTarget.current = null;
    }
  }, [isHome]);

  const goTo = (to: string) => {
    if (isHome) {
      scroller.scrollTo(to, { duration: 500, smooth: true });
    } else {
      scrollTarget.current = to;
      router.push("/");
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {isHome ? (
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            aria-label="Marmdhn"
            className="text-neutral-900 hover:text-primary hover:cursor-pointer transition-colors duration-200"
          >
            <MarLogo className="h-7 w-auto" />
          </ScrollLink>
        ) : (
          <Link
            href="/"
            aria-label="Marmdhn"
            className="text-neutral-900 hover:text-primary transition-colors duration-200"
          >
            <MarLogo className="h-7 w-auto" />
          </Link>
        )}

        <div className="flex items-center gap-6 md:gap-8">
          {NAV_ITEMS.map((item) =>
            isHome ? (
              <ScrollLink
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-primary"
                className="hidden sm:block text-sm text-neutral-600 hover:text-primary hover:cursor-pointer transition-colors duration-200"
              >
                {item.label}
              </ScrollLink>
            ) : (
              <button
                key={item.to}
                onClick={() => goTo(item.to)}
                className="hidden sm:block text-sm text-neutral-600 hover:text-primary hover:cursor-pointer transition-colors duration-200"
              >
                {item.label}
              </button>
            ),
          )}
          <Link
            href="/v1/cv"
            className="inline-block leading-none pt-[13px] pb-[9px] px-4 text-sm border border-neutral-300 rounded-full hover:border-primary hover:text-primary transition-colors duration-200"
          >
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
