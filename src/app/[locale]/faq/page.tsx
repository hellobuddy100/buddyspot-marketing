"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal delay={index * 0.05}>
      <div className="border-b border-gray-100 dark:border-gray-800">
        <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left group">
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
  const t = useTranslations("faq");

  const faqs = Array.from({ length: 10 }, (_, i) => ({
    q: t(`q${i + 1}`),
    a: t(`a${i + 1}`),
  }));

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-5">
        <Reveal>
          <div className="text-center mb-12">
            <p className="text-sm font-bold uppercase tracking-widest text-brand mb-3">{t("label")}</p>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">{t("title")}</h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">{t("subtitle")}</p>
          </div>
        </Reveal>
        <div>
          {faqs.map((faq, i) => (
            <FaqItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
