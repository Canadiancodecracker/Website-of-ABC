import { siteDefaults } from "@/lib/cms/data";
import { Locale } from "@/lib/i18n/config";
import { Dictionary } from "@/lib/i18n/dictionary";
import { LocaleLink } from "@/components/shared/LocaleLink";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="mt-20 bg-brand-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div>
          <h2 className="text-lg font-semibold">{siteDefaults.brandName[locale]}</h2>
          <p className="mt-2 text-sm text-white/80">{siteDefaults.tagline[locale]}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide">Contact</h3>
          <p className="mt-2 text-sm text-white/80">{siteDefaults.corporateAddress[locale]}</p>
          <p className="text-sm text-white/80">{siteDefaults.phone}</p>
          <p className="text-sm text-white/80">{siteDefaults.email}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-white/80">
          <LocaleLink href="/sustainability" className="hover:text-white">
            {dict.nav.sustainability}
          </LocaleLink>
          <LocaleLink href="/careers" className="hover:text-white">
            {dict.nav.careers}
          </LocaleLink>
          <LocaleLink href="/downloads" className="hover:text-white">
            {dict.common.downloads}
          </LocaleLink>
        </div>
      </div>
      <div className="border-t border-white/15 px-4 py-4 text-center text-xs text-white/70">
        {new Date().getFullYear()} {siteDefaults.brandName[locale]} {dict.common.allRightsReserved}
      </div>
    </footer>
  );
}
