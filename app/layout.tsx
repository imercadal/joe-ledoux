import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { inter, azeretMono } from '../styles/fonts';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsBanner from "./components/NewsBanner";
import ClientCopyHandler from "./components/ClientCopyHandler";


export const metadata: Metadata = {
  metadataBase: new URL('https://www.joseph-ledoux.com'),
  title: {
    default: 'Joseph LeDoux — Neuroscientist, Author & Musician',
    template: '%s | Joseph LeDoux',
  },
  description: 'Joseph LeDoux is a neuroscientist at NYU, author of The Emotional Brain and Anxious, and lead singer of The Amygdaloids. His research focuses on fear, memory, and consciousness.',
  keywords: ['Joseph LeDoux', 'Joe LeDoux', 'NYU neuroscientist', 'amygdala', 'fear and memory', 'The Emotional Brain', 'Anxious', 'The Amygdaloids', 'emotion consciousness'],
  openGraph: {
    siteName: 'Joseph LeDoux',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/102_About_BG_02.webp', width: 1200, height: 800, alt: 'Joseph LeDoux' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/102_About_BG_02.webp'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${azeretMono.className} antialiased min-h-screen flex flex-col`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Joseph LeDoux",
            "alternateName": "Joe LeDoux",
            "url": "https://www.joseph-ledoux.com",
            "jobTitle": "Professor Emeritus",
            "affiliation": { "@type": "Organization", "name": "New York University" },
            "sameAs": [
              "https://www.linkedin.com/in/joseph-ledoux/",
              "https://www.facebook.com/joseph.ledoux"
            ],
            "knowsAbout": ["Neuroscience", "Fear conditioning", "Amygdala", "Memory", "Consciousness"]
          })}}
        />
        <NewsBanner />
        <Header />
        <ClientCopyHandler />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
