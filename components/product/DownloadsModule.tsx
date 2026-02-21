"use client";

import { DownloadItem } from "@/lib/cms/types";
import { Locale } from "@/lib/i18n/config";
import { trackEvent } from "@/lib/analytics/events";

export function DownloadsModule({ locale, files }: { locale: Locale; files: DownloadItem[] }) {
  return (
    <section className="rounded-2xl border border-brand-ink/10 bg-brand-cloud p-5">
      <h3 className="text-xl font-semibold text-brand-ink">{locale === "en" ? "Downloads" : "资料下载"}</h3>
      <ul className="mt-4 space-y-3">
        {files.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-3 rounded-xl bg-white p-3">
            <div>
              <p className="text-sm font-medium text-brand-ink">{item.label[locale]}</p>
              <p className="text-xs text-brand-ink/65">
                {item.docType} · {item.version} {item.gated ? `· ${locale === "en" ? "Gated" : "需授权"}` : ""}
              </p>
            </div>
            <a
              href={item.href}
              className="rounded-full bg-brand-ink px-4 py-2 text-xs font-medium text-white hover:bg-brand-emerald"
              onClick={() => trackEvent("download_click", { id: item.id, type: item.docType })}
            >
              {locale === "en" ? "Download" : "下载"}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
