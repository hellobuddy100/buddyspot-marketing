"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-5">
        <Reveal>
          <div className="relative rounded-3xl bg-gradient-to-br from-brand to-brand-dark p-10 md:p-16 text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight">
                Werde Teil der Community
              </h2>
              <p className="mt-4 text-white/80 max-w-md mx-auto leading-relaxed">
                Dein Hund verdient die besten Freundschaften. Starte jetzt und finde Buddies in deiner Nähe.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="https://buddyspot.app"
                  target="_blank"
                  className="flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-brand font-bold text-base hover:bg-gray-50 active:scale-[0.97] transition-all"
                >
                  Jetzt loslegen
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-xl border border-white/30 text-white text-sm font-semibold hover:bg-white/10 transition"
                >
                  Kontakt aufnehmen
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
