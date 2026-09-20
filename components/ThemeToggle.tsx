"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

const emptySubscribe = () => () => {};

// Hydration-safe "mounted" flag, without an effect-based setState.
const useHasMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

interface ViewTransition {
  ready: Promise<void>;
}

type DocumentWithViewTransitions = Document & {
  startViewTransition?: (callback: () => void) => ViewTransition;
};

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();
  const isDark = hasMounted && resolvedTheme === "dark";

  const toggleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
    const next = isDark ? "light" : "dark";
    const doc = document as DocumentWithViewTransitions;

    if (!doc.startViewTransition) {
      setTheme(next);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    const transition = doc.startViewTransition(() => setTheme(next));

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 600,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        },
      );
    });
  };

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="text-ink-muted hover:text-primary transition-colors duration-200"
    >
      {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
};

export default ThemeToggle;
