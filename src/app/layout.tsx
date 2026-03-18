import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "BuddySpot – Light Up Your Walk",
  description: "Finde Hundefreunde in deiner Nähe. Live-Karte, Paw-System, Dog Hotspots und Community Events – alles in einer App.",
  keywords: ["Hunde", "Gassi", "Hundefreunde", "Dog Walking", "Community", "BuddySpot"],
  openGraph: {
    title: "BuddySpot – Light Up Your Walk",
    description: "Die App für Hundemenschen. Finde Spielkameraden, Spaziergänger und hundefreundliche Orte.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var d=document.documentElement;var c=localStorage.getItem('theme');if(c==='dark'||(!c&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()`,
        }} />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
