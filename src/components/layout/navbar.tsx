"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Über uns" },
  { href: "/features", label: "Features" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Kontakt" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function toggleTheme() {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-100 dark:border-gray-800">
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="BuddySpot" width={36} height={36} className="w-9 h-9" />
          <span className="font-extrabold text-lg tracking-tight">
            Buddy<span className="text-brand">Spot</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors hover:text-brand ${
                pathname === href ? "text-brand" : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} className="p-2 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition">
            <Sun className="h-4 w-4 hidden dark:block" />
            <Moon className="h-4 w-4 block dark:hidden" />
          </button>
          <Link
            href="https://buddyspot.app"
            target="_blank"
            className="hidden md:block px-5 py-2 rounded-lg bg-brand text-white text-sm font-bold hover:bg-brand-dark transition"
          >
            App öffnen
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-gray-600 dark:text-gray-400">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-5 pb-5">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-gray-50 dark:border-gray-800 ${
                pathname === href ? "text-brand" : "text-gray-600 dark:text-gray-400"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="https://buddyspot.app"
            target="_blank"
            className="mt-4 block w-full text-center px-5 py-3 rounded-lg bg-brand text-white text-sm font-bold"
          >
            App öffnen
          </Link>
        </div>
      )}
    </header>
  );
}
