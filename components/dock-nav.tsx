"use client";

import type {MouseEvent} from "react";
import {useEffect, useRef, useState} from "react";
import Link from "next/link";
import {useLenis} from "lenis/react";
import {
  BriefcaseBusiness,
  Home,
  Languages,
  Mail,
  UserRound,
  Wrench,
  type LucideIcon
} from "lucide-react";
import {
  AnimatePresence,
  motion,
  type MotionValue,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform
} from "framer-motion";
import type {Locale} from "@/lib/locales";

type NavItem = {
  href: string;
  label: string;
};

type DockNavProps = {
  brand: string;
  language: string;
  nav: NavItem[];
  otherLocale: Locale;
};

type DockItem = NavItem & {
  icon: LucideIcon;
  route?: boolean;
};

const sectionIcons = [UserRound, Wrench, BriefcaseBusiness, Mail];

export function DockNav({brand, language, nav, otherLocale}: DockNavProps) {
  const lenis = useLenis();
  const mouseX = useMotionValue(Infinity);
  const [activeHref, setActiveHref] = useState("#hero");

  const items: DockItem[] = [
    {href: "#hero", icon: Home, label: brand},
    ...nav.map((item, index) => ({
      ...item,
      icon: sectionIcons[index] ?? Wrench
    })),
    {href: `/${otherLocale}`, icon: Languages, label: language, route: true}
  ];

  useEffect(() => {
    const sectionIds = ["hero", ...nav.map((item) => item.href.replace("#", ""))];

    const updateActiveSection = () => {
      const current = sectionIds
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section))
        .reduce(
          (closest, section) => {
            const distance = Math.abs(section.getBoundingClientRect().top - 120);
            return distance < closest.distance ? {distance, href: `#${section.id}`} : closest;
          },
          {distance: Number.POSITIVE_INFINITY, href: "#hero"}
        );

      setActiveHref(current.href);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, {passive: true});
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [nav]);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();

    const target = document.querySelector(href);

    if (!(target instanceof HTMLElement)) {
      return;
    }

    window.history.pushState(null, "", href);
    setActiveHref(href);

    if (lenis) {
      lenis.scrollTo(target, {offset: -16, duration: 0.85});
      return;
    }

    target.scrollIntoView({behavior: "smooth", block: "start"});
  };

  return (
    <motion.nav
      aria-label="Primary navigation"
      className="fixed left-1/2 top-5 z-50 flex -translate-x-1/2 items-start gap-2 rounded-full border border-white/15 bg-black/70 px-3 py-2 text-white shadow-none backdrop-blur-2xl md:top-7 md:gap-3 md:px-4 md:py-3"
      onMouseLeave={() => mouseX.set(Infinity)}
      onMouseMove={(event) => mouseX.set(event.clientX)}
    >
      {items.map((item) => (
        <DockIcon
          key={item.href}
          active={!item.route && activeHref === item.href}
          href={item.href}
          icon={item.icon}
          label={item.label}
          mouseX={mouseX}
          route={item.route}
          onSectionClick={scrollToSection}
        />
      ))}
    </motion.nav>
  );
}

type DockIconProps = {
  active: boolean;
  href: string;
  icon: LucideIcon;
  label: string;
  mouseX: MotionValue<number>;
  onSectionClick: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
  route?: boolean;
};

function DockIcon({active, href, icon: Icon, label, mouseX, onSectionClick, route = false}: DockIconProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [hovered, setHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const distance = useTransform(mouseX, (value) => {
    const bounds = ref.current?.getBoundingClientRect();
    return bounds ? value - bounds.x - bounds.width / 2 : Number.POSITIVE_INFINITY;
  });
  const sizeSync = useTransform(distance, [-160, -80, 0, 80, 160], [42, 48, 66, 48, 42]);
  const size = useSpring(sizeSync, {damping: 13, mass: 0.12, stiffness: 170});

  return (
    <motion.div
      className="relative flex h-11 w-11 items-center justify-center"
      style={shouldReduceMotion ? undefined : {height: size, width: size}}
    >
      <AnimatePresence>
        {hovered ? (
          <motion.span
            className="absolute -bottom-9 whitespace-nowrap rounded-full bg-black/85 px-3 py-1 text-xs font-medium text-white"
            exit={{opacity: 0, y: -5}}
            initial={{opacity: 0, y: -5}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.16}}
          >
            {label}
          </motion.span>
        ) : null}
      </AnimatePresence>
      <motion.div
        className={`flex h-full w-full items-center justify-center rounded-full border border-white/10 transition-colors duration-200 ${
          active ? "bg-white/25" : "bg-white/10 hover:bg-white/18"
        }`}
      >
        <Link
          ref={ref}
          aria-label={label}
          href={href}
          className="flex h-full w-full items-center justify-center rounded-full"
          onClick={route ? undefined : (event) => onSectionClick(event, href)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Icon aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.8} />
        </Link>
      </motion.div>
    </motion.div>
  );
}
