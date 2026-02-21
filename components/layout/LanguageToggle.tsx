"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale } from "@/lib/i18n/config";
import { trackEvent } from "@/lib/analytics/events";

function swapLocale(pathname: string, target: Locale) {
  const segments = pathname.split("/");
  if (segments.length > 1 && (segments[1] === "en" || segments[1] === "zh")) {
    segments[1] = target;
    return segments.join("/");
  }
  return `/${target}${pathname}`;
}

export function LanguageToggle({ currentLocale, label }: { currentLocale: Locale; label: string }) {
  const pathname = usePathname();
  const otherLocale: Locale = currentLocale === "en" ? "zh" : "en";

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-2 py-1 text-sm">
      <span className="sr-only">{label}</span>
      <Link
        href={swapLocale(pathname, "en")}
        className={`rounded-full px-3 py-1 transition ${currentLocale === "en" ? "bg-white text-brand-ink" : "text-white hover:bg-white/20"}`}
        onClick={() => trackEvent("language_switch", { from: currentLocale, to: "en" })}
      >
        EN
      </Link>
      <Link
        href={swapLocale(pathname, "zh")}
        className={`rounded-full px-3 py-1 transition ${currentLocale === "zh" ? "bg-white text-brand-ink" : "text-white hover:bg-white/20"}`}
        onClick={() => trackEvent("language_switch", { from: currentLocale, to: "zh" })}
      >
        中文
      </Link>
    </div>
  );
}
