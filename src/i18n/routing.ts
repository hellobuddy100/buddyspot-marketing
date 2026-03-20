import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["de", "en"],
  defaultLocale: "de",
  // Immer /de/... und /en/... — vermeidet leere Startseiten ohne Locale-Prefix
  localePrefix: "always",
});
