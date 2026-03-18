"use client";

import { useTranslations } from "next-intl";
import { Reveal } from "@/components/ui/reveal";
import { Map, PawPrint, MessageCircle, MapPinned, Users, ShieldCheck, Route, Dog } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function FeaturesPage() {
  const t = useTranslations("features");

  const features: { icon: LucideIcon; titleKey: string; descKey: string; color: string }[] = [
    { icon: Map, titleKey: "liveMap", descKey: "liveMapDesc", color: "bg-blue-500/10 text-blue-500" },
    { icon: Dog, titleKey: "dogProfiles", descKey: "dogProfilesDesc", color: "bg-amber-500/10 text-amber-500" },
    { icon: PawPrint, titleKey: "pawSystem", descKey: "pawSystemDesc", color: "bg-brand/10 text-brand" },
    { icon: MessageCircle, titleKey: "chat", descKey: "chatDesc", color: "bg-green-500/10 text-green-500" },
    { icon: Route, titleKey: "routes", descKey: "routesDesc", color: "bg-indigo-500/10 text-indigo-500" },
    { icon: MapPinned, titleKey: "hotspots", descKey: "hotspotsDesc", color: "bg-orange-500/10 text-orange-500" },
    { icon: Users, titleKey: "events", descKey: "eventsDesc", color: "bg-purple-500/10 text-purple-500" },
    { icon: ShieldCheck, titleKey: "security", descKey: "securityDesc", color: "bg-red-500/10 text-red-500" },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">{t("label")}</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">{t("title")}</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">{t("subtitle")}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <Reveal key={f.titleKey} delay={i * 0.07}>
              <div className="group p-7 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-brand/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{t(f.titleKey)}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{t(f.descKey)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
