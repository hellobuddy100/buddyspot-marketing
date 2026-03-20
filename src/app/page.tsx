import { redirect } from "next/navigation";
import { routing } from "@/i18n/routing";

/** Fallback, falls Middleware / Hosting / kein Prefix: immer auf Default-Sprache */
export default function RootRedirectPage() {
  redirect(`/${routing.defaultLocale}`);
}
