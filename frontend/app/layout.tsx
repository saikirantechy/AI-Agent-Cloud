import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup AI Agent Operations",
  description: "Open-source multi-agent AI orchestration platform for campus, startup, and developer automation.",
  metadataBase: new URL("https://saikirantechy.github.io/AI-Agent-Cloud/"),
  openGraph: {
    title: "Startup AI Agent Operations",
    description: "Open-source multi-agent AI orchestration platform for campus and startup automation.",
    type: "website",
    url: "https://saikirantechy.github.io/AI-Agent-Cloud/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup AI Agent Operations",
    description: "Open-source multi-agent AI orchestration platform.",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
