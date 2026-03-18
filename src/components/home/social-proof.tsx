"use client";

import { Reveal } from "@/components/ui/reveal";

const STATS = [
  { value: "100+", label: "Hundeorte entdeckt" },
  { value: "500+", label: "Sessions gestartet" },
  { value: "4.9", label: "Community Rating" },
  { value: "24/7", label: "Immer verfügbar" },
];

export function SocialProof() {
  return (
    <section className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-black text-brand">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 font-medium">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
