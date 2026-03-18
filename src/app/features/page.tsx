"use client";

import { Reveal } from "@/components/ui/reveal";
import { Map, PawPrint, MessageCircle, MapPinned, Users, ShieldCheck, Route, Dog } from "lucide-react";

const FEATURES = [
  {
    icon: Map,
    title: "Live-Karte",
    description: "Sieh in Echtzeit, welche Hunde in deiner Nähe gerade unterwegs sind. Farbige Marker zeigen dir sofort den Status: Offen für Kontakt, Spazierpartner gesucht, Spielzeit oder Bitte Abstand.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Dog,
    title: "Hunde-Profile",
    description: "Erstelle ein Profil für jeden deiner Hunde mit Fotos, Rasse, Größe, Geschlecht und Temperament-Tags wie 'Verspielt', 'Ruhig' oder 'Sozial'. So wissen andere sofort, ob ein Treffen passt.",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: PawPrint,
    title: "Paw-System",
    description: "Schicke ein 'Paw' — wie ein freundliches Winken. Erst wenn beide Seiten bestätigen, wird der Chat freigeschaltet. Kein Spam, keine ungewollten Nachrichten.",
    color: "bg-brand/10 text-brand",
  },
  {
    icon: MessageCircle,
    title: "Echtzeit-Chat",
    description: "Nach gegenseitigem Paw könnt ihr direkt chatten, euren Standort teilen und euch zum Spaziergang verabreden. Alles innerhalb der App.",
    color: "bg-green-500/10 text-green-500",
  },
  {
    icon: Route,
    title: "Laufrouten & Treffpunkte",
    description: "Berechne direkt auf der Karte eine Laufroute zum anderen Buddy. BuddySpot schlägt sogar einen Treffpunkt in der Mitte vor — fair für beide.",
    color: "bg-indigo-500/10 text-indigo-500",
  },
  {
    icon: MapPinned,
    title: "Dog Hotspots",
    description: "Entdecke und bewerte die besten Hundeorte in deiner Stadt: Hundewiesen, Badestellen, Spazierwege und hundefreundliche Cafés. Mit Bewertungen, Fotos und Tags der Community.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Plane Social Walks, Welpenrunden oder Agility-Training. Andere können teilnehmen, Interesse markieren und kommentieren. Community-Aufbau leicht gemacht.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: ShieldCheck,
    title: "Datenschutz & Sicherheit",
    description: "Dein genauer Standort wird nie angezeigt — nur eine ungefähre Position. Erst nach gegenseitigem Match kannst du deinen echten Standort teilen. Der 'Bitte Abstand'-Modus schützt reaktive oder unsichere Hunde.",
    color: "bg-red-500/10 text-red-500",
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Features</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Alles in einer App
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
              BuddySpot vereint Live-Karte, Messaging, Hotspots und Community — speziell für Hundemenschen.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <div className="group p-7 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-brand/30 hover:shadow-lg transition-all duration-300 h-full">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
