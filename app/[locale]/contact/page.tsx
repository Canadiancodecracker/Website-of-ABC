import { Metadata } from "next";
import { siteDefaults } from "@/lib/cms/data";
import { pageMetadata } from "@/lib/seo/pageMetadata";
import { Locale } from "@/lib/i18n/config";

export function generateMetadata({ params }: { params: { locale: Locale } }): Metadata {
  return pageMetadata({
    locale: params.locale,
    title: { en: "Contact", zh: "联系我们" },
    description: { en: "Get in touch with sales and technical teams.", zh: "联系销售与技术团队。" },
    path: "/contact"
  });
}

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const l = params.locale;

  return (
    <div className="mx-auto max-w-7xl px-4 py-14 md:px-6">
      <h1 className="text-4xl font-semibold text-brand-ink">{l === "en" ? "Contact" : "联系我们"}</h1>
      <p className="mt-3 max-w-3xl text-sm text-brand-ink/80">
        {l === "en"
          ? "Use the inquiry form to route requests to APIs, food additives, feed additives, or partnership teams."
          : "通过咨询表单将需求分发至原料药、食品添加剂、饲料添加剂或合作团队。"}
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <form action="/api/inquiry" method="post" className="rounded-2xl border border-brand-ink/10 bg-white p-6 shadow-soft">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm">
              <span>{l === "en" ? "Name" : "姓名"}</span>
              <input name="name" required className="mt-1 w-full rounded-lg border border-brand-ink/20 px-3 py-2" />
            </label>
            <label className="text-sm">
              <span>{l === "en" ? "Email" : "邮箱"}</span>
              <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-brand-ink/20 px-3 py-2" />
            </label>
            <label className="text-sm md:col-span-2">
              <span>{l === "en" ? "Inquiry Type" : "咨询类型"}</span>
              <select name="type" className="mt-1 w-full rounded-lg border border-brand-ink/20 px-3 py-2">
                <option>API</option>
                <option>Food Additives</option>
                <option>Feed Additives</option>
                <option>Partnership</option>
              </select>
            </label>
            <label className="hidden">
              <span>Website</span>
              <input name="website" tabIndex={-1} autoComplete="off" />
            </label>
            <label className="text-sm md:col-span-2">
              <span>{l === "en" ? "Message" : "留言"}</span>
              <textarea
                name="message"
                required
                rows={5}
                className="mt-1 w-full rounded-lg border border-brand-ink/20 px-3 py-2"
              />
            </label>
          </div>
          <button className="mt-5 rounded-full bg-brand-ink px-5 py-2 text-sm font-medium text-white hover:bg-brand-emerald">
            {l === "en" ? "Send inquiry" : "提交咨询"}
          </button>
        </form>

        <aside className="rounded-2xl bg-brand-ink p-6 text-white">
          <h2 className="text-xl font-semibold">{siteDefaults.brandName[l]}</h2>
          <p className="mt-3 text-sm text-white/80">{siteDefaults.corporateAddress[l]}</p>
          <p className="mt-1 text-sm text-white/80">{siteDefaults.phone}</p>
          <p className="text-sm text-white/80">{siteDefaults.email}</p>
          <div className="mt-5 h-48 rounded-xl bg-white/20 p-3 text-xs text-white/70">
            {l === "en" ? "Map placeholder (embed map provider here)." : "地图占位（可接入地图服务）。"}
          </div>
        </aside>
      </div>
    </div>
  );
}
