import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Datenschutz – BuddySpot" };

export default async function DatenschutzPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <DatenschutzContent />;
}

function DatenschutzContent() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-5 prose prose-gray dark:prose-invert prose-sm">
        <DatenschutzInner />
      </div>
    </div>
  );
}

function DatenschutzInner() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("datenschutz");

  return (
    <>
      <h1>{t("title")}</h1>
      <h2>{t("responsible")}</h2>
      <p>
        <strong>[TODO: Name]</strong><br />
        [TODO: Address]<br />
        E-Mail: hello@buddyspot.app
      </p>
      <h2>{t("collection")}</h2>
      <p>{t("collectionText")}</p>
      <h2>{t("contactForm")}</h2>
      <p>{t("contactFormText")}</p>
      <h2>{t("app")}</h2>
      <p>{t("appIntro")}</p>
      <ul>
        <li><strong>{t("appLocation")}</strong></li>
        <li><strong>{t("appProfile")}</strong></li>
        <li><strong>{t("appChat")}</strong></li>
      </ul>
      <h2>{t("cookies")}</h2>
      <p>{t("cookiesText")}</p>
      <h2>{t("hosting")}</h2>
      <p>{t("hostingText")} <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a></p>
      <h2>{t("rights")}</h2>
      <p>{t("rightsText")}</p>
      <p>{t("rightsContact")}</p>
      <h2>{t("deletion")}</h2>
      <p>{t("deletionText")}</p>
      <p className="text-gray-400 dark:text-gray-500 mt-8">{t("updated")}</p>
    </>
  );
}
