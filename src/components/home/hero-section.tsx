"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-brand/5 via-transparent to-transparent dark:from-brand/10" />

      <div className="relative max-w-6xl mx-auto px-5 py-20 md:py-28 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image src="/logo.png" alt="BuddySpot" width={1024} height={1024} priority unoptimized className="w-44 h-44 md:w-56 md:h-56 object-contain" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]"
        >
          {t("title1")}{" "}
          <span className="text-brand">{t("title2")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-5 text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-9 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://buddyspot.app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-brand text-white font-bold text-base hover:bg-brand-dark active:scale-[0.97] transition-all"
          >
            {t("cta")}
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/features"
            className="px-8 py-4 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:border-brand hover:text-brand transition"
          >
            {t("secondary")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
