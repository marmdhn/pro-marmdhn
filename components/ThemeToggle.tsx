"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa6";

const emptySubscribe = () => () => {};

// Server (and the client's first, pre-hydration render) can't know the
// resolved theme, so this must render the same thing on both. This hook
// stays `false` through hydration and only flips to `true` once React
// commits on the client — the same effect as next-themes' documented
// "mounted" guard, but via useSyncExternalStore instead of a useEffect,
// so it doesn't trip the set-state-in-effect lint rule either.
const useHasMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const hasMounted = useHasMounted();
  const isDark = hasMounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="text-ink-muted hover:text-primary transition-colors duration-200"
    >
      {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
    </button>
  );
};

export default ThemeToggle;
