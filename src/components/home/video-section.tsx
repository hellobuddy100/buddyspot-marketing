"use client";

import { Play } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function VideoSection() {
  return (
    <section className="py-20 md:py-28 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Film</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Sieh BuddySpot in Aktion
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative aspect-video rounded-2xl bg-gray-200 dark:bg-gray-800 overflow-hidden border border-gray-100 dark:border-gray-700 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-brand/5 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/90 dark:bg-gray-900/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Play className="h-8 w-8 text-brand ml-1" fill="currentColor" />
              </div>
            </div>
            <p className="absolute bottom-6 left-0 right-0 text-center text-sm font-medium text-gray-500 dark:text-gray-400">
              Werbefilm kommt bald
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
