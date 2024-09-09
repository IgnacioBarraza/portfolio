import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nach0 | Software developer",
  description: "Portfolio created by Nach0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
