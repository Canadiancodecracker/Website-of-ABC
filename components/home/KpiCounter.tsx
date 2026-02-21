"use client";

import { useEffect, useState } from "react";
import { KPI } from "@/lib/cms/types";
import { Locale } from "@/lib/i18n/config";
import { formatNumber } from "@/lib/utils/format";

function AnimatedValue({ value, locale }: { value: number; locale: Locale }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const totalFrames = 45;

    const interval = setInterval(() => {
      frame += 1;
      const next = Math.round((value * frame) / totalFrames);
      setCount(next);
      if (frame >= totalFrames) {
        clearInterval(interval);
      }
    }, 18);

    return () => clearInterval(interval);
  }, [value]);

  return <>{formatNumber(count, locale)}</>;
}

export function KpiCounter({ locale, items }: { locale: Locale; items: KPI[] }) {
  return (
    <section className="mx-auto mt-14 max-w-7xl px-4 md:px-6">
      <div className="grid gap-4 rounded-2xl bg-brand-ink p-6 text-white md:grid-cols-4">
        {items.map((kpi) => (
          <div key={kpi.label.en} className="rounded-xl border border-white/20 bg-white/5 p-4">
            <div className="text-3xl font-semibold">
              <AnimatedValue value={kpi.value} locale={locale} />
              {kpi.suffix ? <span className="ml-1 text-lg">{kpi.suffix}</span> : null}
            </div>
            <div className="mt-1 text-sm text-white/80">{kpi.label[locale]}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
