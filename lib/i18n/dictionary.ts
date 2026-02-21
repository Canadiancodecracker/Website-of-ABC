import { Locale } from "@/lib/i18n/config";

export type Dictionary = {
  nav: {
    home: string;
    about: string;
    products: string;
    innovation: string;
    sustainability: string;
    news: string;
    careers: string;
    contact: string;
  };
  common: {
    exploreProducts: string;
    sustainability: string;
    inquireNow: string;
    learnMore: string;
    downloads: string;
    contactSales: string;
    allRightsReserved: string;
    languageSwitchLabel: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      products: "Products",
      innovation: "Innovation & R&D",
      sustainability: "Sustainability",
      news: "News & Media",
      careers: "Careers",
      contact: "Contact"
    },
    common: {
      exploreProducts: "Explore Products",
      sustainability: "Sustainability",
      inquireNow: "Inquire Now",
      learnMore: "Learn More",
      downloads: "Downloads",
      contactSales: "Contact Sales",
      allRightsReserved: "All rights reserved.",
      languageSwitchLabel: "Switch language"
    }
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      products: "产品中心",
      innovation: "创新与研发",
      sustainability: "可持续发展",
      news: "新闻与媒体",
      careers: "加入我们",
      contact: "联系我们"
    },
    common: {
      exploreProducts: "探索产品",
      sustainability: "可持续发展",
      inquireNow: "立即咨询",
      learnMore: "了解更多",
      downloads: "资料下载",
      contactSales: "联系销售",
      allRightsReserved: "保留所有权利。",
      languageSwitchLabel: "切换语言"
    }
  }
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
