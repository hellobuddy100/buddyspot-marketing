"use client";

import { Reveal } from "@/components/ui/reveal";
import { Heart, Target, Sparkles, Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Über uns</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Die Geschichte hinter BuddySpot
            </h1>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center shrink-0">
              <Heart className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Warum BuddySpot?</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Jeder Hundebesitzer kennt das Gefühl: Man geht alleine Gassi, sieht andere Hunde in der Ferne, 
                aber weiß nicht, ob der andere Hund freundlich ist oder ob der Besitzer überhaupt Kontakt möchte.
                BuddySpot löst genau dieses Problem. Bevor du jemanden triffst, weißt du bereits den Status, 
                die Hunderasse und das Temperament — und kannst ganz entspannt entscheiden, ob ein Treffen passt.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
              <Target className="h-6 w-6 text-brand" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Unsere Vision</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Wir wollen die Hunde-Landkarte jeder Stadt bauen. Eine lebendige Karte, auf der du nicht nur 
                andere Hundebesitzer findest, sondern auch die besten Hundewiesen, Badestellen und Cafés. 
                Ein Ort, an dem jeder Spaziergang zum sozialen Erlebnis wird — für Hund und Mensch.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-start gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0">
              <Sparkles className="h-6 w-6 text-purple-500" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Was macht uns besonders?</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                Anders als klassische Social-Media-Apps steht bei BuddySpot das echte Treffen im Mittelpunkt. 
                Kein endloses Scrollen, kein Algorithmus — sondern eine Karte, die dir zeigt, wer gerade jetzt 
                in deiner Nähe unterwegs ist und Lust auf Kontakt hat.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  Echtzeit-Karte statt Timeline
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  Datenschutz: Nur ungefährer Standort, genauer erst nach Match
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  &quot;Bitte Abstand&quot;-Modus für unsichere oder reaktive Hunde
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                  Community-bewertete Hundeorte (Dog Hotspots)
                </li>
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
              <h2 className="text-xl font-bold mb-3">Community-Gedanke</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                BuddySpot ist mehr als eine App — es ist eine Bewegung. Hundemenschen, die sich gegenseitig 
                helfen, gemeinsam Spaziergänge planen, Welpenrunden organisieren und die besten Orte für ihre 
                Vierbeiner teilen. Weil jeder Hund die besten Freundschaften verdient.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
