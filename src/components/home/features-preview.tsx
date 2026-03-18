"use client";

import { Map, PawPrint, MapPinned, Users } from "lucide-react";
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/reveal";
import type { LucideIcon } from "lucide-react";

export function FeaturesPreview() {
  const t = useTranslations("featuresPreview");

  const features: { icon: LucideIcon; titleKey: string; descKey: string; color: string }[] = [
    { icon: Map, titleKey: "liveMap", descKey: "liveMapDesc", color: "bg-blue-500/10 text-blue-500" },
    { icon: PawPrint, titleKey: "pawSystem", descKey: "pawSystemDesc", color: "bg-brand/10 text-brand" },
    { icon: MapPinned, titleKey: "hotspots", descKey: "hotspotsDesc", color: "bg-amber-500/10 text-amber-500" },
    { icon: Users, titleKey: "community", descKey: "communityDesc", color: "bg-purple-500/10 text-purple-500" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">{t("label")}</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">{t("title")}</h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">{t("subtitle")}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.titleKey} delay={i * 0.1}>
              <div className="group p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-brand/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-base mb-2">{t(f.titleKey)}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{t(f.descKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
