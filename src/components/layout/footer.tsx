"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");

  const footerLinks: { title: string; links: { href?: string; label: string; external?: string }[] }[] = [
    {
      title: t("product"),
      links: [
        { href: "/features", label: nav("features") },
        { href: "/faq", label: nav("faq") },
        { label: nav("openApp"), external: "https://buddyspot.app" },
      ],
    },
    {
      title: t("company"),
      links: [
        { href: "/about", label: nav("about") },
        { href: "/contact", label: nav("contact") },
      ],
    },
    {
      title: t("legal"),
      links: [
        { href: "/impressum", label: t("impressum") },
        { href: "/datenschutz", label: t("datenschutz") },
      ],
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="BuddySpot" width={32} height={32} className="w-8 h-8" />
              <span className="font-extrabold text-base">
                Buddy<span className="text-brand">Spot</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {t("tagline")}<br />
              {t("community")}
            </p>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a href={link.external} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand transition">
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href as any} className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand transition">
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            {t("rights", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
