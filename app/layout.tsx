import "./globals.css";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
