import {
  ArrowUpRight,
  ChartNoAxesCombined,
  Clock3,
  Cloud,
  Code2,
  Database,
  Layers3,
  Mail,
  Palette,
  Rocket,
  Send,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound
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
      eyebrow: "What we offer",
      kicker: "Our Services",
      title: "End-to-end digital solutions tailored to your business needs.",
      hero: {
        eyebrow: "Our Services",
        title: "Digital Solutions That Drive",
        highlight: "Real Impact",
        description:
          "We design and build innovative digital experiences that help businesses scale, automate, and succeed.",
        primary: "Start a Project",
        secondary: "See Our Work"
      },
      items: [
        {
          title: "Web Development",
          description: "Fast, secure, and scalable websites built with modern technologies.",
          includes: [
            "Modern UI design",
            "SEO optimization",
            "High performance and fast load times",
            "Post-launch support"
          ]
        },
        {
          title: "Mobile App Development",
          description: "Native and cross-platform apps that deliver seamless experiences.",
          includes: [
            "Custom UX/UI design",
            "Cross-platform development",
            "Testing and QA",
            "App store deployment"
          ]
        },
        {
          title: "Cloud & DevOps",
          description: "Scalable cloud infrastructure and DevOps automation.",
          includes: [
            "Database design",
            "API development",
            "Third-party integrations",
            "Data security"
          ]
        },
        {
          title: "UI/UX Design",
          description: "User-centered designs that are beautiful, intuitive, and effective.",
          includes: [
            "Product flows",
            "Design systems",
            "Interactive prototypes",
            "Usability refinement"
          ]
        },
        {
          title: "Business Solutions",
          description: "Custom systems that streamline operations and boost productivity.",
          includes: [
            "Internal dashboards",
            "Workflow automation",
            "CRM and ERP tools",
            "Reporting systems"
          ]
        },
        {
          title: "IT Support & Maintenance",
          description: "Reliable support and maintenance to keep your systems running.",
          includes: [
            "Monitoring",
            "Bug fixes",
            "Security updates",
            "Performance care"
          ]
        }
      ],
      why: {
        title: "Why Businesses Choose Us",
        description: "We combine creativity, technology, and strategy to deliver real results.",
        stats: [
          {value: "50+", label: "Projects Delivered"},
          {value: "30+", label: "Happy Clients"},
          {value: "99.9%", label: "Uptime & Reliability"},
          {value: "24/7", label: "Support Available"}
        ]
      }
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
      eyebrow: "ما نقدمه",
      kicker: "خدماتنا",
      title: "حلول رقمية متكاملة ومصممة حسب احتياج مشروعك.",
      hero: {
        eyebrow: "خدماتنا",
        title: "حلول رقمية تصنع",
        highlight: "أثر حقيقي",
        description: "نصمم ونبني تجارب رقمية مبتكرة تساعد الشركات على النمو والأتمتة والنجاح.",
        primary: "ابدأ مشروعك",
        secondary: "شاهد أعمالنا"
      },
      items: [
        {
          title: "تطوير مواقع",
          description: "مواقع سريعة وآمنة وقابلة للتوسع مبنية بأحدث التقنيات.",
          includes: [
            "تصميم واجهة مستخدم حديثة",
            "تحسين محركات البحث (SEO)",
            "أداء عالي وسرعة تحميل",
            "دعم فني بعد التسليم"
          ]
        },
        {
          title: "تطبيقات جوال",
          description: "تطبيقات أصلية ومتعددة المنصات بتجربة استخدام سلسة.",
          includes: [
            "تصميم UX/UI مخصص",
            "تطوير متعدد المنصات",
            "اختبار وضمان الجودة",
            "نشر على المتاجر"
          ]
        },
        {
          title: "السحابة و DevOps",
          description: "بنية سحابية قابلة للتوسع وأتمتة للنشر والتشغيل.",
          includes: [
            "تصميم قواعد بيانات",
            "بناء APIs",
            "ربط أنظمة خارجية",
            "أمان وحماية البيانات"
          ]
        },
        {
          title: "تصميم UI/UX",
          description: "تصاميم تتمحور حول المستخدم وتجمع بين الجمال والوضوح والفعالية.",
          includes: [
            "خرائط تجربة المستخدم",
            "أنظمة تصميم",
            "نماذج تفاعلية",
            "تحسين قابلية الاستخدام"
          ]
        },
        {
          title: "حلول الأعمال",
          description: "أنظمة مخصصة تبسط العمليات وترفع إنتاجية فريقك.",
          includes: [
            "لوحات تحكم داخلية",
            "أتمتة الإجراءات",
            "أنظمة CRM و ERP",
            "تقارير تشغيلية"
          ]
        },
        {
          title: "الدعم والصيانة",
          description: "دعم موثوق وصيانة مستمرة للحفاظ على استقرار أنظمتك.",
          includes: [
            "مراقبة الأنظمة",
            "إصلاح الأعطال",
            "تحديثات الأمان",
            "تحسين الأداء"
          ]
        }
      ],
      why: {
        title: "لماذا تختارنا الشركات",
        description: "نجمع بين الإبداع والتقنية والاستراتيجية لتقديم نتائج حقيقية.",
        stats: [
          {value: "+50", label: "مشروع تم تسليمه"},
          {value: "+30", label: "عميل سعيد"},
          {value: "99.9%", label: "جاهزية واعتمادية"},
          {value: "24/7", label: "دعم متاح"}
        ]
      }
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
    kicker: string;
    title: string;
    hero: {
      eyebrow: string;
      title: string;
      highlight: string;
      description: string;
      primary: string;
      secondary: string;
    };
    items: Array<{title: string; description: string; includes: string[]}>;
    why: {
      title: string;
      description: string;
      stats: Array<{value: string; label: string}>;
    };
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
const serviceIcons = [Code2, Smartphone, Cloud, Palette, ChartNoAxesCombined, ShieldCheck];
const serviceStatIcons = [Rocket, UsersRound, ShieldCheck, Clock3];

type Props = {
  params: {locale: Locale};
};

function ServicesHeroVisual() {
  return (
    <div className="relative min-h-[330px] lg:min-h-[500px]" aria-hidden="true">
      <Image
        src="/services-hero-visual.png"
        alt=""
        width={1255}
        height={705}
        priority
        className="absolute left-1/2 top-1/2 w-[min(112%,900px)] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
      />
    </div>
  );
}

export default function HomePage({params}: Props) {
  const copy = content[params.locale];
  const otherLocale = params.locale === "ar" ? "en" : "ar";
  const isArabic = params.locale === "ar";

  return (
    <main className="min-h-screen overflow-hidden bg-[var(--surface)] text-[var(--ink)]">
      <DockNav
        brand={copy.brand}
        language={copy.language}
        nav={copy.nav}
        otherLocale={otherLocale}
      />

      <section id="hero" className="relative isolate flex min-h-screen flex-col overflow-hidden bg-[var(--surface)]">
        <AnimatedWave />

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

      <section id="services" className="relative isolate overflow-hidden bg-white px-5 pb-16 pt-8 md:pb-24 md:pt-12">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_12%,rgba(67,119,255,0.10),transparent_28%),radial-gradient(circle_at_34%_48%,rgba(15,23,42,0.045),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fbfcff_100%)]" />
        <div className="mx-auto max-w-[1540px]">
          <div className="grid min-h-[500px] items-center gap-10 lg:grid-cols-[0.98fr_1.02fr]">
            <div className={isArabic ? "text-right" : "text-left"}>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#e7ecf5] bg-white px-5 py-2 text-sm font-bold uppercase text-[#3f76ff] shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3f76ff]" />
                {copy.services.hero.eyebrow}
              </div>
              <h2 className="mt-9 max-w-[860px] text-[clamp(42px,4.15vw,68px)] font-semibold leading-[1.12] text-[#10131a]">
                {copy.services.hero.title}{" "}
                <span className="text-[#3f76ff]">{copy.services.hero.highlight}</span>
              </h2>
              <p className="mt-8 max-w-[610px] text-[clamp(18px,1.35vw,24px)] font-medium leading-[1.55] text-[#858b99]">
                {copy.services.hero.description}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-7">
                <Link
                  href="#contact"
                  className="inline-flex h-16 items-center gap-5 rounded-full bg-[#111721] px-8 text-lg font-semibold text-white shadow-[0_16px_36px_rgba(15,23,42,0.18)] transition duration-200 hover:scale-[1.02]"
                >
                  {copy.services.hero.primary}
                  <ArrowUpRight aria-hidden="true" className={isArabic ? "-scale-x-100" : ""} size={22} />
                </Link>
                <Link href="#portfolio" className="inline-flex h-16 items-center gap-5 text-lg font-semibold text-[#222936]">
                  {copy.services.hero.secondary}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e1e6ef] text-[#222936]">
                    <ArrowUpRight aria-hidden="true" className={isArabic ? "-scale-x-100" : ""} size={20} />
                  </span>
                </Link>
              </div>
            </div>

            <ServicesHeroVisual />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copy.services.items.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article
                  key={service.title}
                  className="group grid min-h-[152px] grid-cols-[76px_1fr_24px] items-center gap-5 rounded-lg border border-[#ebedf3] bg-white p-5 shadow-[0_18px_45px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:border-[#cad8ff] hover:shadow-[0_22px_60px_rgba(66,111,255,0.10)] sm:p-6"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-[#e6eaf2] bg-white text-[#3f76ff] shadow-[0_10px_28px_rgba(15,23,42,0.04)]">
                    <Icon aria-hidden="true" className="h-8 w-8" strokeWidth={2} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold leading-snug text-[#151922]">{service.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#747b8b]">{service.description}</p>
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    className={`text-[#9aa2b1] transition duration-200 group-hover:text-[#3f76ff] ${
                      isArabic ? "-scale-x-100" : ""
                    }`}
                    size={24}
                    strokeWidth={1.8}
                  />
                </article>
              );
            })}
          </div>

          <div className="mt-10 grid gap-8 rounded-lg border border-[#dbe5ff] bg-white p-7 shadow-[0_20px_70px_rgba(15,23,42,0.05)] md:grid-cols-[1fr_2fr] md:p-10">
            <div className="md:border-e md:border-[#e7eaf2] md:pe-10">
              <h3 className="max-w-xs text-3xl font-semibold leading-tight text-[#121722]">
                {copy.services.why.title}
              </h3>
              <p className="mt-5 max-w-sm text-base leading-7 text-[#626978]">{copy.services.why.description}</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {copy.services.why.stats.map((stat, index) => {
                const Icon = serviceStatIcons[index];
                return (
                  <div key={stat.label} className="text-center md:text-start">
                    <Icon aria-hidden="true" className="mx-auto h-9 w-9 text-[#3f76ff] md:mx-0" strokeWidth={1.9} />
                    <p className="mt-5 text-4xl font-semibold leading-none text-[#11151d]">{stat.value}</p>
                    <p className="mt-4 text-base font-medium leading-6 text-[#858b99]">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

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
