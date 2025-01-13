import { Outfit } from "next/font/google";
import "./globals.css";


import { ThemeProvider } from "@/components/ui/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://jeffersongudiel.dev/"),
  title: "Jefferson Gudiel - Full-Stack Dev - template",
  description:
    "Hire Jefferson for your next project as a Full-Stack Developer and Programmer",
  openGraph: {
    title: "Jefferson Gudiel - Full-Stack Dev - template",
    description:
      "Hire Jefferson for your next project as a Full-Stack Developer and Programmer",
    type: "website",
    url: "https://jeffersongudiel.dev/",
    siteName: "template by Jefferson Gudiel",
  },
};

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressContentEditableWarning>
      <body className={outfit.className}>
        <div className="background-gradient"></div>

        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
