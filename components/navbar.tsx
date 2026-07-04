"use client";

import type {MouseEvent} from "react";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {useLenis} from "lenis/react";
import {Menu, X} from "lucide-react";
import type {Locale} from "@/lib/locales";

type NavItem = {
  href: string;
  label: string;
};

type NavbarProps = {
  brand: string;
  isArabic: boolean;
  language: string;
  locale: Locale;
  nav: NavItem[];
  otherLocale: Locale;
};

export function Navbar({brand, isArabic, language, locale, nav, otherLocale}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const lenis = useLenis();

  const handleSectionClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setOpen(false);

    const target = document.querySelector(href);

    if (!(target instanceof HTMLElement)) {
      return;
    }

    window.history.pushState(null, "", href);

    if (lenis) {
      lenis.scrollTo(target, {offset: -64, duration: 0.9});
      return;
    }

    target.scrollIntoView({behavior: "smooth", block: "start"});
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)]"
      style={{backgroundColor: "rgba(250,247,242,0.75)", backdropFilter: "blur(12px)"}}
    >
      <div className="mx-auto flex h-[52px] max-w-[1800px] items-center justify-between px-5 md:px-8">
        <Link
          href={`/${locale}`}
          className="flex items-center gap-3 text-[26px] leading-none text-[var(--ink)] md:text-[32px]"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/logo-1-mark.png"
            alt=""
            width={355}
            height={305}
            aria-hidden="true"
            className="h-9 w-auto shrink-0 object-contain md:h-10"
            priority
          />
          <span className={isArabic ? "font-medium" : "display-serif tracking-[-0.05em]"}>{brand}</span>
        </Link>

        <nav className="hidden items-center gap-8 text-[20px] font-medium text-[var(--ink)] md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={(event) => handleSectionClick(event, item.href)}>
              {item.label}
            </Link>
          ))}
          <Link href={`/${otherLocale}`}>{language}</Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-[var(--ink)] md:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={22} strokeWidth={1.8} /> : <Menu aria-hidden="true" size={22} strokeWidth={1.8} />}
        </button>
      </div>

      {open ? (
        <div
          className="border-t border-[var(--line)] px-5 py-4 md:hidden"
          style={{backgroundColor: "rgba(250,247,242,0.82)", backdropFilter: "blur(12px)"}}
        >
          <nav className="mx-auto grid max-w-[1800px] gap-4 text-[14px] font-medium text-[var(--ink)]">
            {nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={(event) => handleSectionClick(event, item.href)}>
                {item.label}
              </Link>
            ))}
            <Link href={`/${otherLocale}`} onClick={() => setOpen(false)}>
              {language}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
