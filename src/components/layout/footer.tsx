import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  {
    title: "Produkt",
    links: [
      { href: "/features", label: "Features" },
      { href: "/faq", label: "FAQ" },
      { href: "https://buddyspot.app", label: "App öffnen", external: true },
    ],
  },
  {
    title: "Unternehmen",
    links: [
      { href: "/about", label: "Über uns" },
      { href: "/contact", label: "Kontakt" },
    ],
  },
  {
    title: "Rechtliches",
    links: [
      { href: "/impressum", label: "Impressum" },
      { href: "/datenschutz", label: "Datenschutz" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-5 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <Image src="/logo.png" alt="BuddySpot" width={32} height={32} className="w-8 h-8" />
              <span className="font-extrabold text-base">
                Buddy<span className="text-brand">Spot</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Light Up Your Walk.<br />
              Die Community für Hundemenschen.
            </p>
          </div>

          {FOOTER_LINKS.map((group) => (
            <div key={group.title}>
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-3">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      {...("external" in link ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand transition"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            &copy; {new Date().getFullYear()} BuddySpot. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
