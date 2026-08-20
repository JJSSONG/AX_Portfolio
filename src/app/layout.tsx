import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://ax-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "송정섭 | Enterprise Full Stack Developer",
  description: "Enterprise Full Stack Developer transitioning toward AX & AI Automation",
  openGraph: {
    title: "송정섭 | Enterprise Full Stack Developer",
    description: "Enterprise experience evolving with AI automation",
    url: siteUrl,
    siteName: "Song Jeongseop Portfolio",
    locale: "ko_KR",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-[#07090D] text-white antialiased">{children}</body>
    </html>
  );
}
