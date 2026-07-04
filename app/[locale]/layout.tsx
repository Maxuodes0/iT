import type {Metadata} from "next";
import {notFound} from "next/navigation";
import "../globals.css";
import {SmoothScrollProvider} from "@/components/smooth-scroll-provider";
import {getDirection, isLocale, locales, type Locale} from "@/lib/locales";

type Props = {
  children: React.ReactNode;
  params: {locale: string};
};

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export const metadata: Metadata = {
  title: "Idaah Hulul | إضاءة حلول",
  description: "Complete software solutions from idea to launch.",
  icons: {
    icon: "/logo-1-mark.png",
    apple: "/logo-1-mark.png"
  }
};

export default function LocaleLayout({children, params}: Props) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const locale = params.locale as Locale;

  return (
    <html lang={locale} dir={getDirection(locale)}>
      <body>
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
