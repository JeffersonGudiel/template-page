import React from "react";

export function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-neutral-900">
      <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

const background = () => {
  return (
    <BackgroundWrapper>
      <div>background</div>
    </BackgroundWrapper>
  );
};

export default background;
