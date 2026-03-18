"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/reveal";
import { Heart, Target, Sparkles, Users } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">{t("label")}</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">{t("title")}</h1>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
              <Heart className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">{t("whyTitle")}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t("whyText")}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
              <Target className="h-6 w-6 text-brand" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">{t("visionTitle")}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t("visionText")}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
              <Sparkles className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">{t("specialTitle")}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">{t("specialText")}</p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                {(["specialList1", "specialList2", "specialList3", "specialList4"] as const).map((key) => (
                  <li key={key} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
              <Users className="h-6 w-6 text-amber-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">{t("communityTitle")}</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{t("communityText")}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
