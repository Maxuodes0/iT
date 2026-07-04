import {
  AppWindow,
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Mail,
  Send,
  ServerCog,
  Smartphone,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {AnimatedWave} from "@/components/animated-wave";
import {DockNav} from "@/components/dock-nav";
import {Reveal} from "@/components/reveal";
import {BlurFade} from "@/components/ui/blur-fade";
import type {Locale} from "@/lib/locales";

const content = {
  en: {
    brand: "Idaah Hulul",
    nav: [
      {href: "#about", label: "About"},
      {href: "#services", label: "Services"},
      {href: "#portfolio", label: "Work"},
      {href: "#contact", label: "Contact"}
    ],
    hero: {
      title: "I build complete software solutions, from idea to launch",
      titleLines: ["I build complete software solutions,", "from idea to launch"],
      subtitle: "Helping startups and entrepreneurs turn their ideas into market-ready digital products",
      cta: "Book a free consultation"
    },
    intro:
      "A full software team working with businesses and entrepreneurs to turn their ideas into complete digital products — from strategy and design to development, launch, and ongoing support.",
    about: {
      eyebrow: "About",
      title: "From real problems to useful software.",
      paragraphs: [
        "My journey into software started with a passion for solving real problems using simple, effective technology. With every project, I focus on three things: clean code, clear communication, and reliable delivery.",
        "I work across the full product lifecycle — from idea, to design, to development, to launch and ongoing support. My goal isn't just to ship working code — it's to build something that serves your business long-term."
      ]
    },
    services: {
      eyebrow: "Services",
      title: "What I can build for you",
      items: [
        {
          title: "Web development",
          description: "Fast, responsive websites designed to convert visitors into customers",
          includes: [
            "Modern UI design",
            "SEO optimization",
            "High performance and fast load times",
            "Post-launch support"
          ]
        },
        {
          title: "Mobile apps",
          description: "iOS and Android apps with a smooth user experience and reliable performance",
          includes: [
            "Custom UX/UI design",
            "Cross-platform development",
            "Testing and QA",
            "App store deployment"
          ]
        },
        {
          title: "Backend systems",
          description: "Solid, secure infrastructure that scales with your business",
          includes: [
            "Database design",
            "API development",
            "Third-party integrations",
            "Data security"
          ]
        }
      ]
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Project case study format",
      items: [
        ["Problem", "[Client was struggling with ...]"],
        ["Solution", "[I built ...]"],
        ["Result", "[e.g. increased conversion rate by 30% / cut load time in half]"],
        ["Tech used", "[React, Node.js, ...]"]
      ]
    },
    contact: {
      eyebrow: "Contact",
      title: "Ready to start your project?",
      description: "Tell me about your idea and I'll get back to you within 24 hours",
      fields: ["Name", "Email", "Service type", "Project details"],
      services: ["Web development", "Mobile apps", "Backend systems"],
      button: "Send request"
    },
    footer: {
      line: "Idaah Hulul — Complete software solutions",
      copyright: "© 2026 All rights reserved"
    },
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Vercel"],
    language: "AR"
  },
  ar: {
    brand: "إضاءة حلول",
    nav: [
      {href: "#about", label: "من أنا"},
      {href: "#services", label: "الخدمات"},
      {href: "#portfolio", label: "أعمالي"},
      {href: "#contact", label: "تواصل"}
    ],
    hero: {
      title: "أبني حلول برمجية متكاملة من الفكرة للتنفيذ",
      titleLines: ["أبني حلول برمجية متكاملة من", "الفكرة للتنفيذ"],
      subtitle: "أساعد الشركات الناشئة ورواد الأعمال يحوّلون أفكارهم لمنتجات رقمية جاهزة للسوق",
      cta: "احجز استشارة مجانية"
    },
    intro:
      "فريق برمجي متكامل نشتغل مع الشركات ورواد الأعمال على تحويل أفكارهم لمنتجات رقمية كاملة — من التخطيط والتصميم إلى التطوير والإطلاق والدعم بعده.",
    about: {
      eyebrow: "من أنا",
      title: "من مشكلة حقيقية إلى منتج يخدم عملك.",
      paragraphs: [
        "بدأت رحلتي في البرمجة من شغفي بحل المشاكل الحقيقية بأدوات تقنية بسيطة وفعّالة. مع كل مشروع، أركّز على ثلاث أشياء: جودة الكود، وضوح التواصل مع العميل، والالتزام بالمواعيد.",
        "أشتغل على كامل دورة المنتج — من الفكرة، للتصميم، للتطوير، للإطلاق والدعم بعده. هدفي مو بس تسليم كود شغّال، هدفي أبني شي يخدم عملك على المدى الطويل."
      ]
    },
    services: {
      eyebrow: "الخدمات",
      title: "ما الذي أقدر أبنيه لك",
      items: [
        {
          title: "تطوير مواقع",
          description: "مواقع سريعة، متجاوبة، ومصممة لتحويل الزوار لعملاء",
          includes: [
            "تصميم واجهة مستخدم حديثة",
            "تحسين محركات البحث (SEO)",
            "أداء عالي وسرعة تحميل",
            "دعم فني بعد التسليم"
          ]
        },
        {
          title: "تطبيقات جوال",
          description: "تطبيقات iOS وAndroid بتجربة استخدام سلسة وأداء موثوق",
          includes: [
            "تصميم UX/UI مخصص",
            "تطوير متعدد المنصات",
            "اختبار وضمان الجودة",
            "نشر على المتاجر"
          ]
        },
        {
          title: "أنظمة وباكند",
          description: "بنية تحتية قوية وآمنة تدعم نمو مشروعك",
          includes: [
            "تصميم قواعد بيانات",
            "بناء APIs",
            "ربط أنظمة خارجية",
            "أمان وحماية البيانات"
          ]
        }
      ]
    },
    portfolio: {
      eyebrow: "أعمالي",
      title: "نموذج عرض لكل مشروع",
      items: [
        ["المشكلة", "[العميل كان يعاني من ...]"],
        ["الحل", "[سويت له ...]"],
        ["النتيجة", "[مثال: زاد معدل التحويل ٣٠٪ / قلل وقت التحميل للنص]"],
        ["التقنيات", "[React, Node.js, ...]"]
      ]
    },
    contact: {
      eyebrow: "تواصل",
      title: "جاهز نبدأ مشروعك؟",
      description: "أخبرني عن فكرتك وراح أرد عليك خلال ٢٤ ساعة",
      fields: ["الاسم", "الإيميل", "نوع الخدمة", "تفاصيل المشروع"],
      services: ["تطوير مواقع", "تطبيقات جوال", "أنظمة وباكند"],
      button: "إرسال الطلب"
    },
    footer: {
      line: "إضاءة حلول — حلول برمجية متكاملة",
      copyright: "© 2026 جميع الحقوق محفوظة"
    },
    tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Vercel"],
    language: "EN"
  }
} satisfies Record<Locale, {
  brand: string;
  nav: Array<{href: string; label: string}>;
  hero: {title: string; titleLines: string[]; subtitle: string; cta: string};
  intro: string;
  about: {eyebrow: string; title: string; paragraphs: string[]};
  services: {
    eyebrow: string;
    title: string;
    items: Array<{title: string; description: string; includes: string[]}>;
  };
  portfolio: {eyebrow: string; title: string; items: Array<[string, string]>};
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    fields: string[];
    services: string[];
    button: string;
  };
  footer: {line: string; copyright: string};
  tech: string[];
  language: string;
}>;

const techIcons = [Layers3, Code2, ServerCog, Database, Sparkles];
const serviceIcons = [AppWindow, Smartphone, ServerCog];

type Props = {
  params: {locale: Locale};
};

export default function HomePage({params}: Props) {
  const copy = content[params.locale];
  const otherLocale = params.locale === "ar" ? "en" : "ar";
  const isArabic = params.locale === "ar";

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--surface)] text-[var(--ink)]">
      <section id="hero" className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[var(--surface)]">
        <AnimatedWave />
        <DockNav
          brand={copy.brand}
          language={copy.language}
          nav={copy.nav}
          otherLocale={otherLocale}
        />

        <div className="relative z-10 flex flex-1 flex-col">
          <section className="mx-auto w-full max-w-[min(75vw,2700px)] px-5 pb-2 pt-[calc(86px+6vh)] text-center md:pt-[calc(92px+5vh)]">
            <h1
              aria-label={copy.hero.title}
              className={`display-serif mx-auto max-w-[2400px] text-[clamp(52px,6.35vw,178px)] leading-[0.94] text-[var(--ink)] ${
                isArabic ? "space-y-[0.08em]" : ""
              }`}
            >
              {copy.hero.titleLines.map((line, index) => (
                <BlurFade
                  key={line}
                  as="span"
                  className="block"
                  delay={0.2 + index * 0.14}
                  duration={0.5}
                  inView
                >
                  <span aria-hidden="true">{line}</span>
                </BlurFade>
              ))}
            </h1>
            <p className="mx-auto mt-[clamp(24px,1.55vw,58px)] max-w-[1600px] text-[clamp(16px,0.95vw,34px)] font-semibold leading-[1.55] text-[var(--ink)]">
              {copy.hero.subtitle}
            </p>
            <Link
              href="#contact"
              className="mt-[clamp(24px,1.45vw,56px)] inline-flex items-center gap-[clamp(10px,0.7vw,26px)] rounded-full bg-black px-[clamp(20px,1.25vw,48px)] py-[clamp(12px,0.72vw,28px)] text-[clamp(14px,0.72vw,28px)] font-semibold text-white transition duration-200 hover:scale-[1.02]"
            >
              <Image
                src="/logo-1-mark.png"
                alt=""
                width={355}
                height={305}
                aria-hidden="true"
                className="h-[clamp(18px,0.95vw,36px)] w-auto shrink-0 object-contain invert"
              />
              {copy.hero.cta}
            </Link>
          </section>

          <section className="mx-auto mt-auto grid w-full max-w-[min(74vw,2550px)] grid-cols-2 gap-x-8 gap-y-5 px-7 pb-[clamp(32px,2vw,76px)] pt-[28vh] text-[var(--ink)] sm:grid-cols-3 md:grid-cols-5 md:px-5 md:pt-[25vh]">
            {copy.tech.map((item, index) => {
              const Icon = techIcons[index];
              return (
                <div
                  key={item}
                  className="flex items-center justify-center gap-[clamp(8px,0.58vw,22px)] text-[clamp(20px,1.08vw,42px)] font-bold tracking-[-0.04em]"
                >
                  <Icon aria-hidden="true" className="h-[1.15em] w-[1.15em]" strokeWidth={2.4} />
                  <span>{item}</span>
                </div>
              );
            })}
          </section>
        </div>
      </section>

      <Reveal className="mx-auto max-w-6xl px-5 py-20 text-center md:py-28">
        <p className="mx-auto max-w-4xl text-2xl leading-[1.55] tracking-[-0.03em] md:text-4xl">
          {copy.intro}
        </p>
      </Reveal>

      <Reveal id="about" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
        <div>
          <p className="text-sm font-semibold text-[var(--muted)]">{copy.about.eyebrow}</p>
          <h2 className="display-serif mt-4 text-5xl leading-none md:text-7xl">{copy.about.title}</h2>
        </div>
        <div className="space-y-6 text-lg leading-8 text-[var(--muted)] md:text-xl md:leading-9">
          {copy.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>

      <Reveal id="services" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-[var(--muted)]">{copy.services.eyebrow}</p>
          <h2 className="display-serif mt-4 text-5xl leading-none md:text-7xl">{copy.services.title}</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {copy.services.items.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article key={service.title} className="rounded-[24px] border border-[var(--line)] p-6 md:p-8">
                <Icon aria-hidden="true" className="h-8 w-8" strokeWidth={1.8} />
                <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">{service.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{service.description}</p>
                <ul className="mt-8 space-y-3 text-sm font-medium">
                  {service.includes.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--ink)]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Reveal>

      <Reveal id="portfolio" className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="rounded-[28px] border border-[var(--line)] bg-[#fafafa] p-6 md:p-10">
          <p className="text-sm font-semibold text-[var(--muted)]">{copy.portfolio.eyebrow}</p>
          <div className="mt-4 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="display-serif max-w-2xl text-5xl leading-none md:text-7xl">{copy.portfolio.title}</h2>
            <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold">
              {copy.hero.cta}
              <ArrowUpRight aria-hidden="true" className={isArabic ? "-scale-x-100" : ""} size={17} />
            </Link>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {copy.portfolio.items.map(([label, value]) => (
              <div key={label} className="rounded-[18px] border border-[var(--line)] bg-white p-5">
                <p className="text-sm font-semibold text-[var(--muted)]">{label}</p>
                <p className="mt-3 text-lg font-medium leading-7">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal id="contact" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <div>
          <p className="text-sm font-semibold text-[var(--muted)]">{copy.contact.eyebrow}</p>
          <h2 className="display-serif mt-4 text-5xl leading-none md:text-7xl">{copy.contact.title}</h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-[var(--muted)]">{copy.contact.description}</p>
          <a href="mailto:hello@example.com" className="mt-8 inline-flex items-center gap-3 text-sm font-semibold">
            <Mail aria-hidden="true" size={18} />
            hello@example.com
          </a>
        </div>

        <form className="rounded-[28px] border border-[var(--line)] p-5 md:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              {copy.contact.fields[0]}
              <input className="rounded-2xl border border-[var(--line)] px-4 py-3 font-normal outline-none" />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              {copy.contact.fields[1]}
              <input type="email" className="rounded-2xl border border-[var(--line)] px-4 py-3 font-normal outline-none" />
            </label>
          </div>
          <label className="mt-4 grid gap-2 text-sm font-semibold">
            {copy.contact.fields[2]}
            <select className="rounded-2xl border border-[var(--line)] px-4 py-3 font-normal outline-none">
              {copy.contact.services.map((service) => (
                <option key={service}>{service}</option>
              ))}
            </select>
          </label>
          <label className="mt-4 grid gap-2 text-sm font-semibold">
            {copy.contact.fields[3]}
            <textarea rows={6} className="resize-y rounded-2xl border border-[var(--line)] px-4 py-3 font-normal outline-none" />
          </label>
          <button
            type="button"
            className="mt-5 inline-flex items-center gap-3 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:scale-[1.02]"
          >
            <Send aria-hidden="true" size={17} />
            {copy.contact.button}
          </button>
        </form>
      </Reveal>

      <footer className="border-t border-[var(--line)] px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
          <p>{copy.footer.line}</p>
          <p>{copy.footer.copyright}</p>
        </div>
      </footer>
    </main>
  );
}
