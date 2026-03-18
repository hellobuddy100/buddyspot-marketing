"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/reveal";

export function SocialProof() {
  const t = useTranslations("stats");

  const stats = [
    { value: "100+", labelKey: "spots" },
    { value: "500+", labelKey: "sessions" },
    { value: "4.9", labelKey: "rating" },
    { value: "24/7", labelKey: "available" },
  ];

  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.labelKey} delay={i * 0.08}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-black text-brand">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">{t(stat.labelKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
