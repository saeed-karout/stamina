import { useEffect, useState } from "react";

const tailwindBreakpoints: Record<string, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

type Breakpoint = keyof typeof tailwindBreakpoints;

const getInitialBreakpoint = (): Breakpoint => {
  const width = window.innerWidth;

  let initialBreakpoint: Breakpoint = "sm"; // Default to smallest breakpoint
  for (const [key, value] of Object.entries(tailwindBreakpoints)) {
    if (width >= value) {
      initialBreakpoint = key as Breakpoint;
    }
  }

  return initialBreakpoint;
};

export const useTailwindBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] =
    useState<Breakpoint>(getInitialBreakpoint);

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      let currentBreakpoint: Breakpoint = "sm";

      for (const [key, value] of Object.entries(tailwindBreakpoints)) {
        if (width >= value) {
          currentBreakpoint = key as Breakpoint;
        }
      }

      setBreakpoint(currentBreakpoint);
    };

    window.addEventListener("resize", updateBreakpoint);

    return () => window.removeEventListener("resize", updateBreakpoint);
  }, []);

  return breakpoint;
};
