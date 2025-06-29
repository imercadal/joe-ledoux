import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { inter, azeretMono } from '../styles/fonts';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewsBanner from "./components/NewsBanner";
import ClientCopyHandler from "./components/ClientCopyHandler";


export const metadata: Metadata = {
  title: "Joseph E. Ledoux",
  description: "Neuroscientist, Author and Musician.",
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
