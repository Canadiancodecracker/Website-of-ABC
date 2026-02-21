"use client";

import Link, { LinkProps } from "next/link";
import { useParams } from "next/navigation";
import { Locale } from "@/lib/i18n/config";

type Props = LinkProps & {
  children: React.ReactNode;
  className?: string;
  locale?: Locale;
};

export function LocaleLink({ href, children, className, locale, ...rest }: Props) {
  const params = useParams<{ locale: string }>();
  const currentLocale = (params?.locale as Locale) || "en";
  const targetLocale = locale ?? currentLocale;

  const normalizedHref = typeof href === "string" ? href : href.toString();
  const finalHref = normalizedHref.startsWith("/") ? `/${targetLocale}${normalizedHref}` : normalizedHref;

  return (
    <Link href={finalHref} className={className} {...rest}>
      {children}
    </Link>
  );
}
