import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";
  return {
    title: "BuddySpot – Light Up Your Walk",
    description: isEn
      ? "Find dog buddies nearby. Live map, Paw system, Dog Hotspots and Community Events — all in one app."
      : "Finde Hundefreunde in deiner Nähe. Live-Karte, Paw-System, Dog Hotspots und Community Events – alles in einer App.",
    keywords: isEn
      ? ["Dogs", "Dog Walking", "Dog Friends", "Community", "BuddySpot"]
      : ["Hunde", "Gassi", "Hundefreunde", "Dog Walking", "Community", "BuddySpot"],
    openGraph: {
      title: "BuddySpot – Light Up Your Walk",
      description: isEn
        ? "The app for dog people. Find playmates, walking partners and dog-friendly spots."
        : "Die App für Hundemenschen. Finde Spielkameraden, Spaziergänger und hundefreundliche Orte.",
      type: "website",
      locale: isEn ? "en_US" : "de_DE",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "de" | "en")) notFound();

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(){try{var d=document.documentElement;var c=localStorage.getItem('theme');if(c==='dark'||(!c&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}else{d.classList.remove('dark')}}catch(e){}})()`,
        }} />
      </head>
      <body className="bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
