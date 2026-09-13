"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    // Sync initial value from the browser API on mount (server has no
    // matchMedia, so this can't be a lazy useState initializer without a
    // hydration mismatch); listener below keeps it in sync afterward.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMatches(mql.matches);
    const handler = (event: MediaQueryListEvent) => setMatches(event.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/** True on devices with an accurate pointer (mouse/trackpad), used to gate cursor-follow effects. */
export function useFinePointer(): boolean {
  return useMediaQuery("(pointer: fine)");
}
