"use client";

import { Locale } from "@/lib/i18n/config";
import { Dictionary } from "@/lib/i18n/dictionary";
import { trackEvent } from "@/lib/analytics/events";
import { LocaleLink } from "@/components/shared/LocaleLink";

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section className="relative isolate overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero-poster.jpg"
        aria-hidden
      >
        <source src="/videos/hero-loop.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-4 pb-16 pt-24 text-white md:px-6">
        <div className="max-w-3xl">
          <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.18em]">
            {locale === "en" ? "Innovation-led Green Manufacturing" : "创新驱动 绿色制造"}
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            {locale === "en"
              ? "Global Partner for APIs, Food & Feed Ingredients"
              : "面向全球的原料药、食品与饲料添加剂合作伙伴"}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/85 md:text-lg">
            {locale === "en"
              ? "Founded in 2013 in Yinchuan Biotech Park, Hengkang combines quality systems, process innovation, and sustainability to serve regulated and growth markets."
              : "公司成立于2013年，位于银川生物科技园，以质量体系、工艺创新和可持续发展服务规范及成长型市场。"}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <LocaleLink
              href="/products"
              onClick={() => trackEvent("cta_click", { cta: "explore_products" })}
              className="rounded-full bg-white px-6 py-3 font-medium text-brand-ink transition hover:bg-brand-cloud"
            >
              {dict.common.exploreProducts}
            </LocaleLink>
            <LocaleLink
              href="/sustainability"
              onClick={() => trackEvent("cta_click", { cta: "hero_sustainability" })}
              className="rounded-full border border-white/40 px-6 py-3 font-medium text-white transition hover:bg-white/10"
            >
              {dict.common.sustainability}
            </LocaleLink>
          </div>
        </div>
      </div>
    </section>
  );
}
