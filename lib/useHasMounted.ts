"use client";

import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

// Hydration-safe "mounted" flag, without an effect-based setState.
export const useHasMounted = () =>
  useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
