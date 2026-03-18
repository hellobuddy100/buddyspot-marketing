import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Impressum – BuddySpot" };

export default async function ImpressumPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <ImpressumContent />;
}

function ImpressumContent() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-5 prose prose-gray dark:prose-invert prose-sm">
        <ImpressumInner />
      </div>
    </div>
  );
}

function ImpressumInner() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const t = useTranslations("impressum");

  return (
    <>
      <h1>{t("title")}</h1>
      <h2>{t("info")}</h2>
      <p>
        <strong>[TODO: Name]</strong><br />
        [TODO: Street]<br />
        [TODO: City]<br />
        Deutschland / Germany
      </p>
      <h2>{t("contact")}</h2>
      <p>
        E-Mail: hello@buddyspot.app<br />
        Telefon: [TODO]
      </p>
      <h2>{t("responsible")}</h2>
      <p>
        <strong>[TODO: Name]</strong><br />
        [TODO: Address]
      </p>
      <h2>{t("disclaimer")}</h2>
      <h3>{t("contentTitle")}</h3>
      <p>{t("contentText")}</p>
      <h3>{t("linksTitle")}</h3>
      <p>{t("linksText")}</p>
      <h3>{t("copyrightTitle")}</h3>
      <p>{t("copyrightText")}</p>
    </>
  );
}
