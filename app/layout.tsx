import type { Metadata } from "next";
import Image from "next/image";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile, site } from "@/data/portfolio";
import StickyNav from "@/components/StickyNav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: site.title,
  description: site.description,
  authors: [{ name: profile.name }],
  creator: profile.name,
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    title: site.title,
    description: site.description,
    siteName: profile.name,
  },
  twitter: {
    card: "summary",
    title: site.title,
    description: site.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "AI & Software Developer, Indie Developer",
  description: site.description,
  url: site.url,
  sameAs: [profile.github, profile.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">
        {/* Fixed Global Background Overlay */}
        <div 
          className="pointer-events-none fixed top-[10%] right-[-20px] z-[-1] h-[280px] w-[280px] opacity-[0.04] mix-blend-multiply dark:opacity-[0.08] dark:mix-blend-screen sm:top-[15%] sm:right-10 sm:h-[600px] sm:w-[600px]"
          style={{ 
            filter: "grayscale(100%) contrast(120%)",
            maskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 70%)"
          }}
        >
          <Image
            src="/profile.png"
            alt=""
            fill
            className="object-contain object-center"
            priority
          />
        </div>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded focus:px-3 focus:py-2 focus:text-sm"
          style={{ background: "var(--foreground)", color: "var(--background)" }}
        >
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <StickyNav />
        {children}
      </body>
    </html>
  );
}
