import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Outlearn — Learn Beyond Limits",
    template: "%s | Outlearn"
  },
  description:
    "Explore courses, insightful articles, technology, AI, finance, mathematics and practical learning resources with Outlearn.",
  applicationName: "Outlearn"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
