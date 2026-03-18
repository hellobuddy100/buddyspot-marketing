"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const FAQS = [
  {
    q: "Was ist BuddySpot?",
    a: "BuddySpot ist eine Web-App für Hundebesitzer. Du siehst auf einer Live-Karte, wer gerade in deiner Nähe mit Hund unterwegs ist, kannst per 'Paw' Kontakt aufnehmen, chatten, Spaziergänge planen und die besten Hundeorte in deiner Stadt entdecken.",
  },
  {
    q: "Wie funktioniert die App?",
    a: "Du erstellst ein Profil für dich und deinen Hund, startest eine Session mit deinem Status (z.B. 'Offen für Kontakt' oder 'Spazierpartner gesucht') und wirst auf der Karte sichtbar. Andere Hundebesitzer können dir ein 'Paw' schicken. Wenn ihr euch gegenseitig bestätigt, wird der Chat freigeschaltet.",
  },
  {
    q: "Wann ist BuddySpot verfügbar?",
    a: "BuddySpot befindet sich aktuell in der Beta-Phase. Du kannst dich bereits registrieren und die App als Early-Access-Nutzer testen. Die offizielle Launch-Phase wird bald bekannt gegeben.",
  },
  {
    q: "Ist BuddySpot kostenlos?",
    a: "Ja, BuddySpot ist kostenlos nutzbar. Alle Kernfunktionen — Karte, Paw-System, Chat, Hotspots und Community — stehen dir ohne Bezahlung zur Verfügung.",
  },
  {
    q: "Wie wird mein Standort geschützt?",
    a: "Dein genauer Standort wird niemals anderen Nutzern angezeigt. Auf der Karte erscheint nur eine ungefähre Position. Erst wenn du aktiv deinen Standort mit einem bestätigten Buddy teilst, sieht dieser deine genaue Position.",
  },
  {
    q: "Was ist der 'Bitte Abstand'-Modus?",
    a: "Wenn dein Hund gerade keinen Kontakt haben soll — z.B. wegen Training, Reaktivität, Krankheit oder Läufigkeit — kannst du den 'Bitte Abstand'-Modus aktivieren. Andere sehen dann deinen roten Status und wissen, dass sie Abstand halten sollen.",
  },
  {
    q: "Kann ich meinen Account löschen?",
    a: "Ja, du kannst deinen Account jederzeit vollständig in den Profileinstellungen löschen. Alle deine Daten werden dabei unwiderruflich entfernt.",
  },
  {
    q: "Wer steckt hinter BuddySpot?",
    a: "BuddySpot wurde von Hundeliebhabern für Hundeliebhaber gebaut. Wir glauben daran, dass jeder Spaziergang besser wird, wenn man ihn teilt — und dass jeder Hund die besten Freundschaften verdient.",
  },
  {
    q: "Was sind Dog Hotspots?",
    a: "Dog Hotspots sind von der Community bewertete Hundeorte: Hundewiesen, Badestellen, Spazierwege und hundefreundliche Cafés. Jeder kann neue Orte hinzufügen, bewerten und mit Tags versehen.",
  },
  {
    q: "Wie kann ich mitmachen oder testen?",
    a: "Besuche buddyspot.app, registriere dich und starte sofort als Early-Access-Nutzer. Wir freuen uns über jedes Feedback! Du kannst uns auch über die Kontaktseite erreichen.",
  },
];

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <Reveal delay={index * 0.05}>
      <div className="border-b border-gray-100 dark:border-gray-800">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between py-5 text-left group"
        >
          <span className="font-semibold text-base pr-4 group-hover:text-brand transition">{q}</span>
          <ChevronDown className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
        </button>
        <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-96 pb-5" : "max-h-0"}`}>
          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed pr-8">{a}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function FaqPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">FAQ</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Häufige Fragen
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Alles was du über BuddySpot wissen musst.
            </p>
          </div>
        </Reveal>

        <div>
          {FAQS.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
