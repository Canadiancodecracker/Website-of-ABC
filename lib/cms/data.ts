import { JobPosting, KPI, Pillar, Product, ProductCategory, SiteSettings, Story } from "@/lib/cms/types";

export const siteDefaults: SiteSettings = {
  brandName: {
    en: "Ningxia Hengkang Technology Co., Ltd.",
    zh: "宁夏恒康科技有限公司"
  },
  tagline: {
    en: "Global partner for APIs, food and feed ingredients with innovation-driven green manufacturing.",
    zh: "以创新驱动绿色制造，面向全球的原料药、食品添加剂和饲料添加剂合作伙伴。"
  },
  siteUrl: "https://www.hengkangchina.com",
  socialLinks: [
    { label: "LinkedIn", href: "https://www.linkedin.com" },
    { label: "YouTube", href: "https://www.youtube.com" }
  ],
  corporateAddress: {
    en: "Yinchuan Biotech Park, Ningxia, China",
    zh: "中国宁夏银川生物科技园"
  },
  phone: "+86-951-000-0000",
  email: "sales@hengkangchina.com"
};

export const companyFacts = {
  founded: 2013,
  location: {
    en: "Yinchuan Biotech Park",
    zh: "银川生物科技园"
  },
  siteArea: {
    en: "Approx. 100,000 m² manufacturing site",
    zh: "约100,000平方米生产基地"
  },
  registeredCapital: {
    en: "Registered capital: RMB 80 million",
    zh: "注册资本：人民币8000万元"
  },
  credentials: {
    en: "Export-oriented quality and compliance credentials covering regulated markets.",
    zh: "具备覆盖规范市场的出口导向质量与合规资质。"
  }
};

export const kpis: KPI[] = [
  {
    value: 2013,
    label: { en: "Founded", zh: "成立年份" }
  },
  {
    value: 100000,
    suffix: "m²",
    label: { en: "Production Site", zh: "生产基地" }
  },
  {
    value: 80,
    suffix: "M RMB",
    label: { en: "Registered Capital", zh: "注册资本" }
  },
  {
    value: 40,
    suffix: "+",
    label: { en: "Export Countries", zh: "出口国家" }
  }
];

export const pillars: Pillar[] = [
  {
    id: "quality",
    title: { en: "Quality", zh: "质量" },
    body: {
      en: "Integrated QA/QC, transparent documentation, and robust traceability from raw materials to shipment.",
      zh: "从原料到交付建立一体化质量体系，确保可追溯与文件透明。"
    }
  },
  {
    id: "innovation",
    title: { en: "Innovation", zh: "创新" },
    body: {
      en: "Process intensification and R&D collaboration deliver stable quality and faster product scale-up.",
      zh: "通过工艺强化与研发协同，实现稳定品质与高效放大。"
    }
  },
  {
    id: "sustainability",
    title: { en: "Sustainability", zh: "可持续" },
    body: {
      en: "Cleaner production lines, EHS controls, and resource efficiency support long-term responsible growth.",
      zh: "以清洁生产、EHS管控与资源效率推动长期负责任增长。"
    }
  }
];

export const productCategories: ProductCategory[] = [
  {
    slug: "apis",
    title: { en: "Pharmaceutical APIs", zh: "原料药" },
    description: {
      en: "High-purity active pharmaceutical ingredients for global supply chains.",
      zh: "面向全球供应链的高纯度原料药产品。"
    }
  },
  {
    slug: "food-additives",
    title: { en: "Food Additives", zh: "食品添加剂" },
    description: {
      en: "Reliable food-grade ingredients with complete documentation packages.",
      zh: "具备完整资料体系的可靠食品级原料。"
    }
  },
  {
    slug: "feed-additives",
    title: { en: "Feed Additives", zh: "饲料添加剂" },
    description: {
      en: "Performance ingredients designed for nutrition, growth, and animal health outcomes.",
      zh: "面向营养、增长与健康表现的功能性饲料原料。"
    }
  }
];

export const products: Product[] = [
  {
    slug: "metformin-hcl",
    categorySlug: "apis",
    name: { en: "Metformin HCl", zh: "盐酸二甲双胍" },
    summary: {
      en: "API grade Metformin Hydrochloride with robust analytical support.",
      zh: "药用级盐酸二甲双胍，具备完善分析支持。"
    },
    applications: [
      { en: "Oral antidiabetic formulations", zh: "口服降糖制剂" },
      { en: "Global generic supply", zh: "国际仿制药供应" }
    ],
    specs: [
      {
        key: { en: "Appearance", zh: "性状" },
        value: { en: "White crystalline powder", zh: "白色结晶性粉末" }
      },
      {
        key: { en: "Assay", zh: "含量" },
        value: { en: "98.5% - 101.0%", zh: "98.5% - 101.0%" }
      }
    ],
    packaging: {
      en: "25kg fiber drum with dual PE liners",
      zh: "25kg纸板桶，双层PE内袋"
    },
    downloads: [
      {
        id: "met-tds",
        label: { en: "Technical Data Sheet", zh: "技术数据表" },
        docType: "TDS",
        version: "v3.2",
        href: "/docs/metformin-hcl-tds.pdf"
      },
      {
        id: "met-sds",
        label: { en: "Safety Data Sheet", zh: "安全数据表" },
        docType: "SDS",
        version: "v2.9",
        href: "/docs/metformin-hcl-sds.pdf"
      }
    ]
  },
  {
    slug: "creatine-monohydrate",
    categorySlug: "food-additives",
    name: { en: "Creatine Monohydrate", zh: "肌酸一水物" },
    summary: {
      en: "Food and nutrition grade creatine monohydrate for sports and wellness formulations.",
      zh: "用于运动与营养配方的食品级肌酸一水物。"
    },
    applications: [
      { en: "Sports nutrition products", zh: "运动营养产品" },
      { en: "Functional food blends", zh: "功能食品配方" }
    ],
    specs: [
      {
        key: { en: "Purity", zh: "纯度" },
        value: { en: ">99.9%", zh: ">99.9%" }
      },
      {
        key: { en: "Mesh", zh: "粒度" },
        value: { en: "80-200 mesh", zh: "80-200目" }
      }
    ],
    packaging: {
      en: "25kg composite bag / custom palletized packaging",
      zh: "25kg复合袋 / 可定制托盘包装"
    },
    downloads: [
      {
        id: "cre-tds",
        label: { en: "Technical Data Sheet", zh: "技术数据表" },
        docType: "TDS",
        version: "v4.1",
        href: "/docs/creatine-tds.pdf"
      },
      {
        id: "cre-coa",
        label: { en: "Certificate of Analysis", zh: "分析证书" },
        docType: "COA",
        version: "v1.8",
        href: "/docs/creatine-coa.pdf",
        gated: true
      }
    ]
  },
  {
    slug: "gaa",
    categorySlug: "feed-additives",
    name: { en: "Guanidinoacetic Acid (GAA)", zh: "胍基乙酸（GAA）" },
    summary: {
      en: "Feed additive supporting efficient energy metabolism and growth performance.",
      zh: "支持能量代谢与生长表现的饲料添加剂。"
    },
    applications: [
      { en: "Poultry and swine nutrition", zh: "家禽与生猪营养" },
      { en: "Performance premixes", zh: "功能预混料" }
    ],
    specs: [
      {
        key: { en: "Assay", zh: "含量" },
        value: { en: ">98%", zh: ">98%" }
      },
      {
        key: { en: "Moisture", zh: "水分" },
        value: { en: "≤1.0%", zh: "≤1.0%" }
      }
    ],
    packaging: {
      en: "25kg bag with anti-moisture lining",
      zh: "25kg防潮内衬包装"
    },
    downloads: [
      {
        id: "gaa-tds",
        label: { en: "Technical Data Sheet", zh: "技术数据表" },
        docType: "TDS",
        version: "v2.5",
        href: "/docs/gaa-tds.pdf"
      },
      {
        id: "gaa-cert",
        label: { en: "Quality Certificate", zh: "质量证书" },
        docType: "Certificate",
        version: "v2.1",
        href: "/docs/gaa-certificate.pdf"
      }
    ]
  }
];

export const stories: Story[] = [
  {
    slug: "pilot-line-carbon-cut",
    title: {
      en: "Pilot line upgrade cuts steam usage by 18%",
      zh: "中试线升级实现蒸汽能耗降低18%"
    },
    excerpt: {
      en: "A cross-functional process redesign improved cycle stability while reducing utility demand.",
      zh: "跨团队工艺优化在提升稳定性的同时显著降低公用工程消耗。"
    },
    category: "Sustainability",
    publishedAt: "2025-11-03",
    heroImage: "https://images.unsplash.com/photo-1581094794329-c8112a89af12"
  },
  {
    slug: "r-and-d-partnership",
    title: {
      en: "R&D partnership accelerates new API route scouting",
      zh: "研发合作加速新API工艺路线筛选"
    },
    excerpt: {
      en: "Joint work with academic labs shortened early-stage process validation timelines.",
      zh: "与高校实验室协同，缩短了早期工艺验证周期。"
    },
    category: "Innovation",
    publishedAt: "2025-09-14",
    heroImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"
  },
  {
    slug: "vitafoods-asia-2025",
    title: {
      en: "Meet Hengkang at Vitafoods Asia 2025",
      zh: "恒康亮相Vitafoods Asia 2025"
    },
    excerpt: {
      en: "Our team will present new nutrition ingredient solutions and compliance updates.",
      zh: "团队将展示新的营养原料方案与合规进展。"
    },
    category: "Event",
    publishedAt: "2025-08-01",
    heroImage: "https://images.unsplash.com/photo-1558403194-611308249627"
  }
];

export const jobs: JobPosting[] = [
  {
    id: "r-and-d-engineer",
    title: { en: "R&D Engineer (API Process)", zh: "研发工程师（API工艺）" },
    location: { en: "Yinchuan, Ningxia", zh: "宁夏银川" },
    team: { en: "Innovation Center", zh: "创新中心" },
    summary: {
      en: "Drive process optimization, pilot verification, and cross-functional technology transfer.",
      zh: "负责工艺优化、中试验证与跨部门技术转移。"
    },
    postedAt: "2026-01-15"
  },
  {
    id: "global-sales-manager",
    title: { en: "Global Sales Manager", zh: "国际销售经理" },
    location: { en: "Yinchuan / Remote", zh: "银川 / 远程" },
    team: { en: "Global Markets", zh: "国际市场" },
    summary: {
      en: "Own customer development in regulated and growth markets for APIs and nutrition ingredients.",
      zh: "负责原料药及营养原料在规范与成长市场的客户拓展。"
    },
    postedAt: "2025-12-20"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getStoriesByCategory(category?: Story["category"]) {
  if (!category) return stories;
  return stories.filter((story) => story.category === category);
}
