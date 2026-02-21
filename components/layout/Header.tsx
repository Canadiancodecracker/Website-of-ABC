import { Dictionary } from "@/lib/i18n/dictionary";
import { Locale } from "@/lib/i18n/config";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { LocaleLink } from "@/components/shared/LocaleLink";

const navMap = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "products", href: "/products" },
  { key: "innovation", href: "/innovation" },
  { key: "sustainability", href: "/sustainability" },
  { key: "news", href: "/news" },
  { key: "careers", href: "/careers" },
  { key: "contact", href: "/contact" }
] as const;

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-brand-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 text-white md:px-6">
        <LocaleLink href="/" className="text-sm font-semibold tracking-wide">
          NINGXIA HENGKANG
        </LocaleLink>
        <nav className="hidden gap-4 text-sm lg:flex">
          {navMap.map((item) => (
            <LocaleLink key={item.key} href={item.href} className="rounded px-2 py-1 hover:bg-white/15">
              {dict.nav[item.key]}
            </LocaleLink>
          ))}
        </nav>
        <LanguageToggle currentLocale={locale} label={dict.common.languageSwitchLabel} />
      </div>
    </header>
  );
}
