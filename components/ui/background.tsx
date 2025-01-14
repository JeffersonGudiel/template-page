"use client";

import { useTheme } from "./ThemeProvider";

export function Background() {
  const { theme } = useTheme();

  return (
    <div className="fixed inset-0 z-[-1]">
      {theme === "light" && (
        <div className="relative h-full w-full bg-neutral-900">
          <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
        </div>
      )}
      {theme === "dark" && (
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      )}
    </div>
  );
}

export default Background;
