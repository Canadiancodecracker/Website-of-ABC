import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isLocale, locales } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) {
    notFound();
  }

  const dict = getDictionary(params.locale);

  return (
    <>
      <Header locale={params.locale} dict={dict} />
      <main>{children}</main>
      <Footer locale={params.locale} dict={dict} />
    </>
  );
}
