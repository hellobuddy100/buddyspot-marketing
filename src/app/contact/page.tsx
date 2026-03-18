"use client";

import { useState } from "react";
import { Send, Mail, Handshake, Newspaper, Bug } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const CATEGORIES = [
  { value: "general", label: "Allgemein", icon: Mail },
  { value: "cooperation", label: "Kooperationen", icon: Handshake },
  { value: "press", label: "Presse / Messe", icon: Newspaper },
  { value: "bug", label: "Bug-Report", icon: Bug },
];

export default function ContactPage() {
  const [category, setCategory] = useState("general");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">Kontakt</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Schreib uns
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
              Fragen, Ideen, Kooperationen oder Presseanfragen — wir freuen uns auf deine Nachricht.
            </p>
          </div>
        </Reveal>

        {submitted ? (
          <Reveal>
            <div className="text-center py-16 px-8 rounded-2xl bg-brand/5 dark:bg-brand/10 border border-brand/20">
              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-4">
                <Send className="h-7 w-7 text-brand" />
              </div>
              <h2 className="text-xl font-bold mb-2">Nachricht gesendet!</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Danke für deine Nachricht. Wir melden uns so schnell wie möglich bei dir.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">Kategorie</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.value}
                      type="button"
                      onClick={() => setCategory(cat.value)}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-xl text-xs font-medium transition border ${
                        category === cat.value
                          ? "border-brand bg-brand/5 text-brand"
                          : "border-gray-100 dark:border-gray-800 text-gray-500 dark:text-gray-400 hover:border-gray-200 dark:hover:border-gray-700"
                      }`}
                    >
                      <cat.icon className="h-4 w-4" />
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Dein Name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">E-Mail</label>
                  <input
                    type="email"
                    required
                    placeholder="deine@email.de"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-600"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Betreff</label>
                <input
                  type="text"
                  required
                  placeholder="Worum geht es?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-600"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5 block">Nachricht</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Deine Nachricht..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-brand text-white font-bold hover:bg-brand-dark active:scale-[0.98] transition-all"
              >
                <Send className="h-4 w-4" />
                Nachricht senden
              </button>
            </form>
          </Reveal>
        )}

        <Reveal delay={0.2}>
          <div className="mt-12 text-center text-sm text-gray-400 dark:text-gray-500">
            <p>Oder direkt per E-Mail: <a href="mailto:hello@buddyspot.app" className="text-brand hover:underline font-medium">hello@buddyspot.app</a></p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
