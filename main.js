
// ============================================
// VERSION CHECK - This file should be v11 (Production Clean)
// ============================================
if (typeof window !== 'undefined') {
  window._mainJsVersion = 'v11';
  window._mainJsLineCount = 700; // Approximate new line count
  window._mainJsLoadedAt = Date.now();

  console.log('%c✅ ABC Chemical main.js v11 loaded', 'color: green; font-weight: bold;');
}

// Language dictionary
const T = {
  en: {
    brand: "ABC Chemical",
    corp: "ABC Chemical Co., Ltd.",
    nav: {
      home: {
        _: "Home",
        about: "About Us",
        overview: "Company Overview",
        news: "News & Updates"
      },
      about: {
        _: "About Us",
        events: "Events",
        media: "Media",
        gallery: "Factory Gallery",
        careers: "Careers / Hiring"
      },
      products: {
        _: "Products",
        calcium: "Calcium Carbide",
        cyanamide: "Cyanamide Derivatives",
        performance: "Performance Products",
        intermediates: "Industrial Intermediates"
      },
      applications: {
        _: "Applications",
        agriculture: "Agriculture & Fertilizers",
        pharma: "Pharmaceuticals & Nutrition",
        metallurgy: "Metallurgy & Industry"
      },
      sustainability: {
        _: "Sustainability",
        policy: "Environmental Policy",
        certificates: "ISO Certificates",
        ehs: "EHS Practices"
      },
      resources: {
        _: "Resources",
        sds: "SDS Documents",
        datasheets: "Datasheets",
        news: "All News"
      },
      contact: {
        _: "Contact",
        general: "General Inquiries",
        sales: "Sales",
        technical: "Technical Support"
      }
    },
    hero: {
      kicker: "Reliable • Scientific • Global",
      headline: "Advanced Calcium & Cyanamide Solutions.",
      tagline: "ABC Chemical Co., Ltd. — Chemistry You Can Rely On. High‑purity materials engineered for reliability, safety, and performance across agriculture, nutrition, and heavy industry.",
      ctaPrimary: "Explore Our Products",
      ctaSecondary: "Contact Sales",
      badge: "Calcium & Cyanamide Specialists"
    },
    products: {
      title: "Product Lines",
      desc: "Quality‑driven products engineered for performance, consistency, and safety across critical industries.",
      p1: {
        title: "Calcium Carbide",
        desc: "High‑purity feedstock supporting acetylene generation and downstream specialty syntheses.",
        formula: "CaC₂",
        cas: "75-20-7",
        mw: "64.10",
        productNum: "21039",
        brand: "GLOBUS",
        fullName: "Calcium carbide granulated, technical, ≥75% (gas-volumetric)",
        synonyms: "Calcium acetylide, Calcium dicarbide",
        specs: {
          colorLabel: "Appearance (Color)",
          colorValue: "Light Gray to Gray",
          formLabel: "Appearance (Form)",
          formValue: "Granules",
          assayLabel: "Assay (Gasvolumetric)",
          assayValue: "P15, S2.5%",
          sizeLabel: "Particle Size",
          sizeValue: "COAR/SWG"
        }
      },
      p2: {
        title: "Cyanamide Derivatives",
        desc: "Cyanamide & Dicyandiamide for controlled reactivity and high‑performance curing systems.",
        fullName: "Cyanamide (Aqueous Solution)",
        synonyms: "Hydrogen cyanamide, Carbamonitrile",
        cas: "420-04-2",
        mw: "42.02"
      },
      p3: { title: "Performance Products", desc: "Creatine Monohydrate & Guanidinoacetic Acid for nutrition and functional performance." },
      p4: { title: "Industrial Intermediates", desc: "Thiourea & Guanidine Nitrate as dependable intermediates for advanced syntheses." },
      p5: {
        title: "Calcium Cyanamide",
        desc: "A multifunctional agrochemical and chemical intermediate, enabling soil improvement, nitrogen fertilization, and specialty NCN syntheses.",
        formula: "CaNCN",
        linearFormula: "CaNCN",
        cas: "156-62-7",
        mw: "80.10",
        ecNumber: "205-861-8",
        fullName: "Granular Lime Nitrogen / Calcium Cyanamide (CaCN₂)",
        synonyms: "Calcium carbimide, Cyanamide calcium derivative, Cyanamide calcium salt",
        appearance: "Gray-black granule",
        fullDesc: "Calcium cyanamide is a slow-release nitrogen fertilizer. It is used to increase crop yield and effectively kill harmful bacteria and insects, optimize soil structure, eliminate soil hardening, alleviate soil acidification, and supplement soil with calcium and nitrogen.",
        appearanceLabel: "Appearance"
      }
    },
    apps: {
      title: "Applications",
      desc: "Proven performance across vital sectors — from crop productivity to human nutrition and heavy industry.",
      a1: { title: "Agriculture & Fertilizers", desc: "Cyanamide‑based solutions supporting nitrogen efficiency and soil health." },
      a2: { title: "Pharmaceuticals & Nutrition", desc: "Creatine & GAA produced with strict quality practices for reliable performance." },
      a3: { title: "Metallurgy & Industry", desc: "Calcium carbide solutions enabling acetylene workflows and metal processing." }
    },
    agri: {
      intro: "ABC Chemical Co., Ltd. supplies high-purity calcium cyanamide and specialty nitrogen-carbon materials designed to improve crop nutrition, soil quality, and long-term agricultural sustainability. Our technology is engineered to maximize nitrogen use efficiency (NUE), enhance soil structure, and support balanced fertilization programs across diverse climates and crop systems.",
      benefits: {
        title: "Key Benefits",
        b1: { title: "Slow-release nitrogen for higher efficiency", desc: "Calcium cyanamide provides a gradual conversion to plant-available nitrogen, reducing volatilization losses and improving nitrogen uptake." },
        b2: { title: "Improves soil health & pH balance", desc: "By neutralizing soil acidity and enriching calcium levels, our products promote better root development and microbial activity." },
        b3: { title: "Naturally suppresses soil-borne diseases", desc: "Helps reduce harmful pathogens and weed seeds, supporting healthier crop establishment without harmful residues." },
        b4: { title: "Enhances yield & crop quality", desc: "Field trials show significant improvements in crop biomass, uniformity, and final yield performance." }
      },
      applications: {
        title: "Main Agricultural Applications",
        a1: "Fertilizer base dressing and top dressing for grains, oilseeds, and vegetables",
        a2: "Soil conditioning for acidic and nutrient-depleted soils",
        a3: "Organic and regenerative agriculture programs",
        a4: "Controlled-release nitrogen formulations",
        a5: "High-value crops including orchards, vineyards, tea plantations, and greenhouse systems"
      },
      products: {
        title: "Products for Agriculture",
        p1: "Calcium Cyanamide",
        p2: "Calcium Cyanamide-based Soil Amendment Blends",
        p3: "Specialty Nitrogen-Carbon Fertilizer Intermediates"
      },
      closing: "We work closely with global distributors, agronomists, and fertilizer formulators to develop customized solutions for improved soil vitality and nutrient efficiency.",
      cta: {
        title: "Request More Information",
        desc: "Contact our agricultural solutions team for technical support and product recommendations.",
        btn1: "Contact Sales",
        btn2: "View Calcium Cyanamide"
      }
    },
    pharma: {
      intro: "ABC Chemical Co., Ltd. is a leading manufacturer of high-purity creatine monohydrate and guanidinoacetic acid (GAA) for pharmaceutical, nutraceutical, and animal nutrition applications. Our production follows stringent GMP standards and undergoes rigorous QC/QA testing to ensure consistent quality, purity, and bioavailability for human and animal health products.",
      benefits: {
        title: "Key Benefits",
        b1: { title: "Pharmaceutical-grade purity", desc: "Our creatine and GAA meet or exceed USP, EP, and customer specifications for purity, heavy metals, and microbial limits." },
        b2: { title: "GMP-certified manufacturing", desc: "Produced in GMP-compliant facilities with full traceability, batch documentation, and regulatory support for global markets." },
        b3: { title: "Proven performance & bioavailability", desc: "Extensively tested for solubility, stability, and efficacy in dietary supplements and animal feed formulations." },
        b4: { title: "Regulatory compliance & documentation", desc: "Complete COA, stability data, allergen statements, and regulatory support for FDA, EFSA, and other authorities." }
      },
      applications: {
        title: "Main Applications",
        a1: "Sports nutrition and dietary supplements (creatine monohydrate)",
        a2: "Pharmaceutical intermediates and active ingredients",
        a3: "Animal nutrition (GAA for poultry, swine, and aquaculture)",
        a4: "Clinical nutrition and medical foods",
        a5: "Functional foods and beverages"
      },
      products: {
        title: "Products for Pharmaceuticals & Nutrition",
        p1: "Creatine Monohydrate (Pharmaceutical Grade)",
        p2: "Guanidinoacetic Acid (GAA)"
      },
      closing: "We partner with global pharmaceutical companies, supplement brands, and animal nutrition formulators to deliver reliable, high-quality ingredients backed by comprehensive technical and regulatory support.",
      cta: {
        title: "Request Product Information",
        desc: "Contact our pharmaceutical sales team for specifications, samples, and regulatory documentation.",
        btn1: "Contact Sales",
        btn2: "View All Products"
      }
    },
    metal: {
      intro: "ABC Chemical Co., Ltd. supplies high-purity calcium carbide engineered for reliable acetylene generation and precision support across industrial and metallurgical processes. Our material performance ensures consistent reactivity, efficient gas release, and stable operation in demanding production environments.",
      advantages: {
        title: "Key Advantages",
        a1: { title: "Stable acetylene yield", desc: "Optimized grain size and controlled CaC₂ purity deliver predictable gas output for cutting, welding, heating, and synthesis applications." },
        a2: { title: "Engineered for industrial durability", desc: "Designed to withstand varying humidity and transportation conditions with reduced powdering and minimized degradation." },
        a3: { title: "Low impurity profile", desc: "Strict QC minimizes phosphorus, sulfur, and metallic residues to protect downstream equipment and improve combustion behavior." },
        a4: { title: "Efficient material handling", desc: "Granule uniformity improves feed efficiency in automated acetylene generators and reduces equipment wear." }
      },
      applications: {
        title: "Primary Industrial Applications",
        a1: { title: "Oxy-acetylene metal cutting & welding", desc: "High-temperature flames for precision metal fabrication, repair, and industrial maintenance." },
        a2: { title: "Metallurgical heating & carburization", desc: "Used in controlled atmospheres for heat treatment, carbon enhancement, and specialty alloy processing." },
        a3: { title: "Chemical synthesis", desc: "Raw material for acetylene-based chemical production including PVC intermediates, solvents, and specialty organic compounds." },
        a4: { title: "Foundry and steel mill operations", desc: "Supports slag adjustment, cleaning, and metal refining workflows requiring reactive calcium-based materials." }
      },
      features: {
        title: "Product Features",
        f1: "High CaC₂ content for improved acetylene efficiency",
        f2: "Controlled granule sizes (0–25 mm options available)",
        f3: "Moisture-resistant packaging to maintain stability",
        f4: "Custom specifications available for OEM applications"
      },
      closing: "We provide dependable carbide solutions trusted by metal processors, fabrication shops, industrial manufacturers, and chemical producers worldwide.",
      cta: {
        title: "Request Technical Information",
        desc: "Contact our industrial sales team for calcium carbide specifications, safety data, and application support.",
        btn1: "Contact Sales",
        btn2: "View Calcium Carbide Specs"
      }
    },
    sus: {
      title: "Sustainability & Responsibility",
      desc: "We invest in cleaner production technologies, closed‑loop utilities, and rigorous EHS practices to minimize environmental impact while maximizing product value.",
      l1: "Energy‑efficient utilities and heat recovery across key units",
      l2: "Responsible sourcing and transparent quality systems",
      l3: "Compliance aligned with global standards and customer audits",
      m1: "Water Recycled", m2: "EHS Monitoring", m3: "Driven Systems",
      certNote: "Click on certificates to view full document.",
      certChinese: "Chinese version:"
    },
    res: {
      title: "Resources",
      desc: "Download product datasheets and compliance statements. (Placeholders)",
      r1: "Calcium Carbide - SDS",
      r2: "Dicyandiamide - SDS",
      r3: "Creatine Monohydrate - SDS",
      r4: "Guanidine Nitrate - SDS",
      r5: "Calcium Cyanamide - SDS",
      r6: "Cyanamide - SDS",
      r7: "Guanidinoacetic Acid (GAA) - SDS",
      r8: "Thiourea - SDS",
      soon: "Coming soon"
    },
    contact: { title: "Request Information", desc: "Tell us about your application, required specs, and target volumes. Our team will respond promptly." },
    techSupport: {
      title: "Technical Support",
      phoneTitle: "Technical Support Hotline",
      phone: "Phone:",
      international: "International:",
      availability: "Availability:",
      availabilityValue: "24 hours / 7 days a week",
      languages: "Languages:",
      languagesValue: "English / Chinese",
      emailTitle: "Email Support",
      emailLabel: "Technical Support Email:",
      emailNote: "(Guaranteed response within 24 hours)"
    },
    gallery: {
      title: "Factory Gallery",
      subtitle: "Visual Proof · Crafted with Heart",
      description: "In this curated series of images and exhibits, we invite you to peer through the lens and step into our modern production workshops. Experience the clean working environment firsthand and witness the efficient operation of our automated production lines. Every photograph is a reflection of our commitment to quality, technology, and safety.",
      backHome: "← Back to Home",
      theme1: { title: "Raw Material Area", desc: "Large raw material silos, underground unloading points" },
      theme2: { title: "Reaction Section", desc: "Reaction tanks, operator platforms, temperature control systems" },
      theme3: { title: "Drying & Packaging System", desc: "Fluidized bed dryers, fully automated packaging lines" },
      theme4: { title: "QC & QA Lab", desc: "Testing equipment, spectrometers, lab technicians at work" },
      theme5: { title: "Warehouse & Logistics", desc: "Finished goods pallet zones, forklift operations, truck loading and dispatch" },
      theme6: { title: "EHS Safety Facilities", desc: "Sprinkler stations, exhaust gas treatment systems, staff safety training scenes" },
      footer: "All photos are taken on-site from Ningxia Hengkang & Sunnyfield facilities."
    },
    events: {
      title: "Upcoming Events",
      subtitle: "Join us at leading trade shows and exhibitions worldwide. Connect with our team to discuss your needs and explore our high-purity chemical solutions.",
      backHome: "← Back to Home",
      location: "Location",
      focus: "Focus",
      booth: "Booth/Hall",
      link: "Link",
      cta: "Interested in meeting us at these events?",
      contactBtn: "Contact Us",
      event1: {
        name: "CPHI China 2026",
        dates: "June 16 – 18, 2026",
        location: "Shanghai New International Expo Center (SNIEC), China",
        focus: "Asia's premier pharma event, covering APIs, excipients, and finished dosage solutions. We will highlight our high-purity APIs, including the newly launched Dimethylamine Hydrochloride (DMH), and our new pharmaceutical solutions.",
        booth: "TBD — Contact us for details",
        link: "Visit cphi.com/china or contact our team"
      },
      event2: {
        name: "CPHI North America 2026",
        dates: "June 2 – 4, 2026",
        location: "Pennsylvania Convention Center, Philadelphia, PA, USA",
        focus: "The largest dedicated North American pharma trade show. We will be connecting with partners for regional supply chain expansion and discussing R&D advancements, specifically our reliable supply of high-specification intermediates.",
        booth: "TBD — Contact us for details",
        link: "Visit cphi.com/north-america or contact our team"
      },
      event3: {
        name: "Chemspec Europe 2026",
        dates: "May 6 – 7, 2026",
        location: "Koelnmesse, Cologne, Germany",
        focus: "The premier exhibition for the fine and specialty chemicals industry. We will connect with specialty formulators and materials developers to discuss our high-purity calcium and cyanamide intermediates used in advanced manufacturing.",
        booth: "TBD — Contact us for details",
        link: "Visit chemspeceurope.com or contact our team"
      }
    },
    form: {
      name: "Full Name", company: "Company", email: "Email", phone: "Phone (optional)", message: "Message",
      submit: "Send Request", privacy: "By submitting this form, you agree to our Privacy Policy."
    },
    aside: { title: "Corporate Headquarters", subtitle: "Global Sales & Technical Service", general: "General Inquiries", sales: "Sales", technical: "Technical Support", technicalLink: "View details →", note: "* Addresses and phone numbers are placeholders." },
    footer: { privacy: "Privacy", terms: "Terms", compliance: "Compliance", c: "©", rights: "All rights reserved." },
    news: { viewAll: "View all News", allNews: "All News", title: "NEWS & UPDATES", badge: "Calcium & Cyanamide Specialists" },
    video: { title: "Discover ABC Chemical", subtitle: "Learn more about our advanced calcium and cyanamide solutions" },
    globalSales: {
      eyebrow: "Global Sales Network",
      headline1: "Our global reach",
      headline2: "across 50+ countries",
      title: "Global Reach — Supplying 50+ Countries Worldwide",
      subhead: "From North America to Asia, ABC Chemical's high-purity materials power innovation across industries.",
      subheadOld: "From North America to Asia, ABC Chemical supplies high-purity materials to customers in more than 50 countries, supporting agriculture, nutrition, and advanced industries.",
      kpi1: "countries served worldwide",
      kpi2: "distribution & logistics partners",
      kpi3: "years of manufacturing experience",
      kpi4: "on-spec batch reliability"
    }
  },

  zh: {
    brand: "ABC化工",
    corp: "ABC化工有限公司",
    nav: {
      home: {
        _: "首页",
        about: "关于我们",
        overview: "公司概况",
        news: "新闻与更新"
      },
      about: {
        _: "关于我们",
        events: "公司活动",
        media: "媒体中心",
        gallery: "工厂画廊",
        careers: "招聘信息"
      },
      products: {
        _: "产品",
        calcium: "电石",
        cyanamide: "氰胺衍生物",
        performance: "性能产品",
        intermediates: "工业中间体"
      },
      applications: {
        _: "应用",
        agriculture: "农业与肥料",
        pharma: "医药与营养",
        metallurgy: "冶金与工业"
      },
      sustainability: {
        _: "可持续发展",
        policy: "环境政策",
        certificates: "ISO证书",
        ehs: "EHS实践"
      },
      resources: {
        _: "资源",
        sds: "SDS文件",
        datasheets: "数据表",
        news: "所有新闻"
      },
      contact: {
        _: "联系",
        general: "一般咨询",
        sales: "销售",
        technical: "技术支持"
      }
    },
    hero: {
      kicker: "可靠 • 科学 • 全球",
      headline: "先进的钙与氰胺解决方案。",
      tagline: "ABC化工有限公司——值得信赖的化学力量。高纯度材料服务于农业、营养与工业领域，兼顾可靠性、安全性与性能。",
      ctaPrimary: "浏览产品",
      ctaSecondary: "联系销售",
      badge: "钙与氰胺专家"
    },
    products: {
      title: "产品系列",
      desc: "面向关键行业的高品质产品，强调性能、一致性与安全。",
      p1: {
        title: "电石（碳化钙）",
        desc: "高纯度原料，支持乙炔制备与下游特种合成。",
        formula: "CaC₂",
        cas: "75-20-7",
        mw: "64.10",
        productNum: "21039",
        brand: "GLOBUS",
        fullName: "电石颗粒，工业级，≥75%（气体体积法）",
        synonyms: "乙炔钙，二碳化钙",
        specs: {
          colorLabel: "外观（颜色）",
          colorValue: "浅灰色至灰色",
          formLabel: "外观（形态）",
          formValue: "颗粒",
          assayLabel: "含量（气体体积法）",
          assayValue: "P15, S2.5%",
          sizeLabel: "粒度",
          sizeValue: "COAR/SWG"
        }
      },
      p2: {
        title: "氰胺衍生物",
        desc: "氰胺与双氰胺，具备可控反应性与高性能固化方案。",
        fullName: "单氰胺（水溶液）",
        synonyms: "氨基氰, 氰胺",
        cas: "420-04-2",
        mw: "42.02"
      },
      p3: { title: "性能产品", desc: "肌酸一水合物与胍基乙酸，服务于营养与功能性应用。" },
      p4: { title: "工业中间体", desc: "硫脲与硝酸胍，可靠的高级合成中间体。" },
      p5: {
        title: "氰氨化钙",
        desc: "多功能农用化学品和化学中间体，可用于土壤改良、氮肥施用和特种NCN合成。",
        formula: "CaNCN",
        linearFormula: "CaNCN",
        cas: "156-62-7",
        mw: "80.10",
        ecNumber: "205-861-8",
        fullName: "颗粒石灰氮 / 氰氨化钙 (CaCN₂)",
        synonyms: "氰胺钙，氰酰胺钙衍生物，氰酰胺钙盐",
        appearance: "灰黑色颗粒",
        fullDesc: "氰氨化钙是一种缓释氮肥。用于提高作物产量，有效杀灭有害细菌和害虫，优化土壤结构，消除土壤板结，缓解土壤酸化，补充土壤钙和氮。",
        appearanceLabel: "外观"
      }
    },
    apps: {
      title: "应用",
      desc: "覆盖关键领域，从作物增产到人体营养及重工业。",
      a1: { title: "农业与肥料", desc: "基于氰胺的方案，提高氮素利用率并改善土壤健康。" },
      a2: { title: "医药与营养", desc: "肌酸与GAA在严格质量体系下生产，稳定可靠。" },
      a3: { title: "冶金与工业", desc: "电石方案支撑乙炔流程与金属加工。" }
    },
    agri: {
      intro: "ABC化工有限公司提供高纯度石灰氮及特种氮碳材料，用于改善作物营养、提升土壤质量，并满足现代农业对可持续性的需求。我们的产品旨在提高氮肥利用率（NUE）、改善土壤结构，并支持不同地区与作物体系的科学施肥方案。",
      benefits: {
        title: "核心优势",
        b1: { title: "缓释氮，提高利用率", desc: "石灰氮可逐步释放植物可吸收的氮素，减少挥发损失，提高氮吸收效率。" },
        b2: { title: "改善土壤健康与酸碱平衡", desc: "有助于中和酸性土壤，补充钙质，促进根系发育与微生物活性。" },
        b3: { title: "天然抑制土传病害", desc: "能减少土壤中部分有害病菌和杂草种子的活性，促进作物健康生长。" },
        b4: { title: "提升产量与品质", desc: "多项田间试验表明，可显著改善作物长势、均匀度及最终产量表现。" }
      },
      applications: {
        title: "主要农业应用",
        a1: "粮食、油料、蔬菜等作物的基施与追施",
        a2: "酸性或贫瘠土壤的改良与调理",
        a3: "有机农业与再生农业应用",
        a4: "控释氮肥配方开发",
        a5: "果树、茶园、葡萄园、设施农业等高价值作物体系"
      },
      products: {
        title: "农业相关产品",
        p1: "石灰氮",
        p2: "石灰氮土壤改良剂配方产品",
        p3: "特种氮碳肥料中间体"
      },
      closing: "我们与全球的经销商、农艺师及肥料生产企业紧密合作，共同开发适用于不同农业生态区的氮肥解决方案。",
      cta: {
        title: "了解更多信息",
        desc: "联系我们的农业解决方案团队，获取技术支持与产品推荐。",
        btn1: "联系销售",
        btn2: "查看石灰氮"
      }
    },
    pharma: {
      intro: "ABC化工有限公司是肌酸一水合物与胍基乙酸（GAA）的领先制造商，产品广泛应用于医药、营养保健品及动物营养领域。我们的生产遵循严格的GMP标准，并经过全面的QC/QA检测，确保人类与动物健康产品的质量、纯度与生物利用度始终如一。",
      benefits: {
        title: "核心优势",
        b1: { title: "药用级纯度", desc: "我们的肌酸与GAA符合或超越USP、EP及客户对纯度、重金属与微生物限度的规格要求。" },
        b2: { title: "GMP认证生产", desc: "在符合GMP标准的设施中生产，具备完整的可追溯性、批次文档与全球市场的法规支持。" },
        b3: { title: "经过验证的性能与生物利用度", desc: "在膳食补充剂与动物饲料配方中经过广泛的溶解度、稳定性与功效测试。" },
        b4: { title: "法规合规与文档支持", desc: "提供完整的COA、稳定性数据、过敏原声明，并为FDA、EFSA等机构提供法规支持。" }
      },
      applications: {
        title: "主要应用",
        a1: "运动营养与膳食补充剂（肌酸一水合物）",
        a2: "药物中间体与活性成分",
        a3: "动物营养（用于家禽、猪与水产养殖的GAA）",
        a4: "临床营养与医疗食品",
        a5: "功能性食品与饮料"
      },
      products: {
        title: "医药与营养相关产品",
        p1: "肌酸一水合物（药用级）",
        p2: "胍基乙酸（GAA）"
      },
      closing: "我们与全球制药企业、补充剂品牌及动物营养配方商合作，提供可靠的高品质成分，并提供全面的技术与法规支持。",
      cta: {
        title: "索取产品信息",
        desc: "联系我们的医药销售团队，获取规格、样品及法规文件。",
        btn1: "联系销售",
        btn2: "查看所有产品"
      }
    },
    metal: {
      intro: "ABC化工有限公司供应高纯度电石（CaC₂），专为稳定的乙炔产生与高要求的工业及冶金工艺而设计。我们的产品在反应性能、气体释放效率和操作稳定性方面表现优异，适用于多种关键工艺场景。",
      advantages: {
        title: "核心优势",
        a1: { title: "乙炔产量稳定可控", desc: "经过优化的粒度与CaC₂纯度，确保切割、焊接、加热及化工合成过程中乙炔气体输出稳定。" },
        a2: { title: "面向工业环境的耐久设计", desc: "在运输与储存过程中不易粉化、吸湿性低，确保长期稳定性。" },
        a3: { title: "低杂质含量", desc: "严格控制磷、硫和金属杂质，保护下游设备并改善燃烧特性。" },
        a4: { title: "高效物料处理性能", desc: "粒度均匀，适配自动化乙炔发生器，降低机械磨损，提高生产效率。" }
      },
      applications: {
        title: "主要应用领域",
        a1: { title: "氧乙炔金属切割与焊接", desc: "提供高温火焰，适用于金属制造、维修及工业维护。" },
        a2: { title: "冶金加热与渗碳处理", desc: "用于热处理、碳势控制与特种合金加工。" },
        a3: { title: "化工合成", desc: "作为乙炔基路线的重要原料，用于PVC中间体、溶剂及有机精细化学品生产。" },
        a4: { title: "铸造与钢厂工艺", desc: "在炼钢、除渣、金属精炼等流程中作为活性钙基材料发挥作用。" }
      },
      features: {
        title: "产品特点",
        f1: "高CaC₂含量，乙炔转化率高",
        f2: "多种粒度规格（0–25 mm）可选",
        f3: "防潮包装确保长期稳定性",
        f4: "可按客户需求定制规格"
      },
      closing: "我们的电石产品被全球众多金属加工企业、工业制造商及化工厂广泛采用。",
      cta: {
        title: "索取技术信息",
        desc: "联系我们的工业销售团队，获取电石规格、安全数据及应用支持。",
        btn1: "联系销售",
        btn2: "查看电石规格"
      }
    },
    sus: {
      title: "可持续发展与责任",
      desc: "我们投资清洁生产、闭路公用工程与严格的EHS管理，在降低环境影响的同时提升产品价值。",
      l1: "关键装置的高效能公用系统与余热回收",
      l2: "负责任的采购与透明的质量体系",
      l3: "对标国际标准并通过客户审核的合规体系",
      m1: "水资源回收率", m2: "环保安全监测", m3: "以ISO为驱动",
      certNote: "点击证书查看完整文档。",
      certChinese: "中文版本:"
    },
    res: {
      title: "资料中心",
      desc: "下载产品数据表与合规文件（占位）。",
      r1: "电石 - SDS",
      r2: "双氰胺 - SDS",
      r3: "一水肌酸 - SDS",
      r4: "硝酸胍 - SDS",
      r5: "石灰氮 - SDS",
      r6: "氰胺 - SDS",
      r7: "胍基乙酸 (GAA) - SDS",
      r8: "硫脲 - SDS",
      soon: "即将上线"
    },
    contact: { title: "信息咨询", desc: "请告知您的应用、关键指标与目标量，我们将尽快回复。" },
    techSupport: {
      title: "技术支持",
      phoneTitle: "技术支持热线",
      phone: "电话（中国）：",
      international: "国际电话：",
      availability: "服务时间：",
      availabilityValue: "7天24小时全天候",
      languages: "支持语言：",
      languagesValue: "英语 / 中文",
      emailTitle: "邮件支持",
      emailLabel: "技术支持邮箱：",
      emailNote: "（24小时内保证回复）"
    },
    gallery: {
      title: "工厂画廊",
      subtitle: "视觉见证 · 用心打造",
      description: "在这组精心策划的图片和展品中，我们邀请您透过镜头，走进我们的现代化生产车间。亲身体验洁净的工作环境，见证自动化生产线的高效运行。每一张照片都体现了我们对质量、技术和安全的承诺。",
      backHome: "← 返回首页",
      theme1: { title: "原料区", desc: "大型原料储罐、地下卸料点" },
      theme2: { title: "反应工段", desc: "反应釜、操作平台、温度控制系统" },
      theme3: { title: "干燥与包装系统", desc: "流化床干燥器、全自动包装线" },
      theme4: { title: "质检实验室", desc: "检测设备、光谱仪、实验室技术人员工作场景" },
      theme5: { title: "仓储与物流", desc: "成品托盘区、叉车作业、卡车装货与发运" },
      theme6: { title: "EHS安全设施", desc: "喷淋站、废气处理系统、员工安全培训场景" },
      footer: "所有照片均拍摄自宁夏恒康和阳光田宇工厂现场。"
    },
    events: {
      title: "即将举办的活动",
      subtitle: "欢迎在全球领先的贸易展览会和展会上与我们见面。联系我们的团队，讨论您的需求，探索我们的高纯度化学品解决方案。",
      backHome: "← 返回首页",
      location: "地点",
      focus: "重点",
      booth: "展位/展厅",
      link: "链接",
      cta: "有兴趣在这些活动中与我们见面吗？",
      contactBtn: "联系我们",
      event1: {
        name: "CPHI 中国 2026 / CPHI 上海 2026",
        dates: "2026年6月16日—18日",
        location: "上海新国际博览中心 (SNIEC)",
        focus: "亚洲首要的制药行业盛会，涵盖API（活性药物成分）、辅料和成品制剂解决方案。ABC化工将重点展示高纯度API，包括新推出的盐酸二甲胺（DMH），以及最新的制药解决方案。",
        booth: "待定 — 请联系我们了解详情",
        link: "访问 cphi.com/china 或联系我们的团队"
      },
      event2: {
        name: "CPHI 北美 2026",
        dates: "2026年6月2日—4日",
        location: "美国宾夕法尼亚州，费城会议中心",
        focus: "北美最大的专业制药贸易展览会。我们将与合作伙伴建立联系，探讨区域供应链的扩展，并讨论API的研发进展，特别是我们可靠的高规格中间体供应。",
        booth: "待定 — 请联系我们了解详情",
        link: "访问 cphi.com/north-america 或联系我们的团队"
      },
      event3: {
        name: "欧洲精细化工展 (Chemspec Europe 2026)",
        dates: "2026年5月6日—7日",
        location: "德国科隆展览中心",
        focus: "欧洲首要的精细和特种化学品展览会。我们将与精细化学品配方设计师和材料开发商联系，讨论用于先进制造中的高纯度钙和氰胺中间体。",
        booth: "待定 — 请联系我们了解详情",
        link: "访问 chemspeceurope.com 或联系我们的团队"
      }
    },
    form: {
      name: "姓名", company: "公司", email: "邮箱", phone: "电话（可选）", message: "留言",
      submit: "发送需求", privacy: "提交即表示您同意我们的隐私政策。"
    },
    aside: { title: "公司总部", subtitle: "全球销售与技术服务", general: "综合咨询", sales: "销售", technical: "技术支持", technicalLink: "查看详情 →", note: "＊ 地址与电话为示例信息。" },
    footer: { privacy: "隐私", terms: "条款", compliance: "合规", c: "©", rights: "保留所有权利。" },
    news: { viewAll: "查看所有新闻", allNews: "所有新闻", title: "新闻与更新", badge: "钙与氰胺专家" },
    video: { title: "探索ABC化工", subtitle: "了解更多关于我们先进的钙与氰胺解决方案" },
    globalSales: {
      eyebrow: "全球销售网络",
      headline1: "我们的全球覆盖",
      headline2: "遍及50多个国家",
      title: "全球覆盖 — 服务全球50多个国家",
      subhead: "从北美到亚洲，ABC化工的高纯度材料为各行业的创新提供动力。",
      subheadOld: "从北美到亚洲，ABC化工向50多个国家的客户供应高纯度材料，支持农业、营养和先进工业。",
      kpi1: "服务国家/地区",
      kpi2: "分销与物流合作伙伴",
      kpi3: "年制造经验",
      kpi4: "批次合格率"
    }
  }
};

function applyLang(lang) {
  // Version check - CRITICAL: This must run to verify new code is loaded
  if (typeof window !== 'undefined') {
    if (!window._translationVersion) {
      window._translationVersion = 'v10';
      // Translation system initialized
    } else if (window._translationVersion !== 'v10') {
      console.error('%c❌ WRONG VERSION DETECTED!', 'color: red; font-weight: bold; font-size: 20px;');
      console.error('Expected: v10, Got:', window._translationVersion);
    }
  }

  const dict = T[lang];
  if (!dict || !dict.nav) return;

  document.documentElement.lang = (lang === 'zh') ? 'zh-Hans' : 'en';
  const b = document.getElementById('brand'); if (b) b.textContent = dict.brand;
  const corp = document.getElementById('corpName'); if (corp) corp.textContent = dict.corp;
  const fb = document.getElementById('footerBrand'); if (fb) fb.textContent = dict.corp;
  const rights = document.getElementById('rights'); if (rights) rights.textContent = dict.corp + ' ' + T[lang].footer.rights;

  const i18nElements = document.querySelectorAll('[data-i18n]');

  i18nElements.forEach(el => {
    const i18nPath = el.getAttribute('data-i18n');
    if (!i18nPath) return;

    const path = i18nPath.split('.');
    let cur = dict;
    let found = true;

    for (let i = 0; i < path.length; i++) {
      const k = path[i];

      if (cur == null || typeof cur !== 'object') {
        found = false;
        break;
      }

      if (cur[k] === undefined) {
        found = false;
        break;
      }

      cur = cur[k];
    }

    if (found && typeof cur === 'string') {
      el.textContent = cur;
    } else if (!found) {
      // Translation not found - silently skip (warnings suppressed)
      // Only log if explicitly debugging
      if (typeof window !== 'undefined' && window.DEBUG_TRANSLATIONS) {
        console.warn(`[DEBUG] Translation not found: "${i18nPath}" in language "${lang}"`);
      }
    } else {
      // Found but not a string - silently skip
      if (typeof window !== 'undefined' && window.DEBUG_TRANSLATIONS) {
        console.warn(`[DEBUG] Translation invalid type: "${i18nPath}" (got: ${typeof cur})`);
      }
    }
  });

  const PH = {
    name: { en: 'Jane Doe', zh: '张三' },
    company: { en: 'ABC Trading Inc.', zh: '某某公司' },
    email: { en: 'jane@company.com', zh: 'name@example.com' },
    phone: { en: '+1 555 123 4567', zh: '+86 010 8888 8888' },
    message: { en: 'Products, specs, annual volume, delivery terms...', zh: '意向产品、规格、年需求量、交付条款…' }
  };
  ['name', 'company', 'email', 'phone', 'message'].forEach(id => {
    const el = document.getElementById(id);
    if (el && PH[id]) el.placeholder = PH[id][lang];
  });

  document.querySelectorAll('[data-setlang]').forEach(btn => {
    const isActive = btn.getAttribute('data-setlang') === lang;
    btn.classList.toggle('lang-active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Update ISO certificate links based on language
  // Chinese version links to Chinese certificates, English version links to English certificates
  const iso9001Link = document.getElementById('iso-9001-link');
  const iso14001Link = document.getElementById('iso-14001-link');
  const iso45001Link = document.getElementById('iso-45001-link');

  if (lang === 'zh') {
    // Chinese version: use Chinese certificates
    if (iso9001Link) iso9001Link.href = 'assets/iso/iso-9001-certificate-zh.png';
    if (iso14001Link) iso14001Link.href = 'assets/iso/iso-14001-certificate-zh.png';
    if (iso45001Link) iso45001Link.href = 'assets/iso/iso-45001-certificate-zh.png';
  } else {
    // English version: use English certificates
    if (iso9001Link) iso9001Link.href = 'assets/iso/iso-9001-certificate.png';
    if (iso14001Link) iso14001Link.href = 'assets/iso/iso-14001-certificate.png';
    if (iso45001Link) iso45001Link.href = 'assets/iso/iso-45001-certificate.png';
  }

  localStorage.setItem('lang', lang);
}

function setupLangToggle() {
  document.querySelectorAll('[data-setlang]').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-setlang');
      applyLang(lang);
      loadNews(); // Reload news when language changes
    });
  });
  const saved = localStorage.getItem('lang') || 'en';
  applyLang(saved);
}

// Setup mobile dropdown menus (click-to-expand)
function setupMobileDropdowns() {
  const mobileToggles = document.querySelectorAll('.mega-mobile-toggle');

  mobileToggles.forEach(toggle => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const dropdownId = toggle.getAttribute('data-mobile-dropdown');
      const mobileItem = toggle.closest('.mega-mobile-item');
      const isActive = mobileItem.classList.contains('active');

      // Close all other mobile dropdowns
      document.querySelectorAll('.mega-mobile-item').forEach(item => {
        if (item !== mobileItem) {
          item.classList.remove('active');
        }
      });

      // Toggle the clicked dropdown
      if (isActive) {
        mobileItem.classList.remove('active');
      } else {
        mobileItem.classList.add('active');
      }
    });
  });
}

const btn = document.getElementById('menuBtn');
const panel = document.getElementById('mobileNav');
btn?.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
  btn.setAttribute('aria-expanded', String(!expanded));
  panel.classList.toggle('hidden');
});

const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');
const submitButton = form?.querySelector('button[type="submit"]');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const lang = localStorage.getItem('lang') || 'en';

  // Disable submit button and show loading state
  if (submitButton) {
    submitButton.disabled = true;
    const originalText = submitButton.textContent;
    submitButton.textContent = lang === 'zh' ? '发送中...' : 'Sending...';

    try {
      // Get form data
      const formData = new FormData(form);

      // Set reply-to email from the email field
      const emailField = form.querySelector('#email');
      if (emailField && emailField.value) {
        formData.set('_replyto', emailField.value);
      }

      // Send to Formspree
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success
        note.textContent = lang === 'zh'
          ? '✓ 感谢您的提交，我们将尽快联系您。'
          : '✓ Thanks — your request has been sent. Our team will get back to you shortly.';
        note.className = 'text-sm text-green-600 font-medium';
        form.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
          note.textContent = '';
          note.className = 'text-sm text-gray-600';
        }, 5000);
      } else {
        // Error from Formspree
        const data = await response.json();
        throw new Error(data.error || 'Form submission failed');
      }
    } catch (error) {
      // Network or other error
      console.error('Form submission error:', error);
      note.textContent = lang === 'zh'
        ? '✗ 发送失败，请稍后重试或直接发送邮件联系我们。'
        : '✗ Failed to send. Please try again later or contact us directly via email.';
      note.className = 'text-sm text-red-600 font-medium';

      // Reset button
      submitButton.disabled = false;
      submitButton.textContent = originalText;
    }
  }
});

const yearElement = document.getElementById('y');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// News & Updates Dynamic Loader
function getCurrentLanguage() {
  return localStorage.getItem('lang') || 'en';
}

async function loadNews() {
  try {
    // Add cache-busting parameter to ensure fresh data
    const response = await fetch('news_data.json?v=' + new Date().getTime());
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    if (data.news && data.news.length > 0) {
      renderNews(data.news);
    }
  } catch (error) {
    console.error('Error loading news:', error);
  }
}

function renderNews(newsItems) {
  const container = document.getElementById('news-scroll-container');
  if (!container) {
    // Silently return if container doesn't exist (e.g., on all-news.html page)
    return;
  }

  const lang = getCurrentLanguage();

  // Sort news by date (newest first) and take only the top 3 most recent
  const sortedItems = [...newsItems].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Descending order (newest first)
  });

  // Only show the 3 most recent news items in the floating news section
  const topThreeItems = sortedItems.slice(0, 3);

  // Duplicate for infinite scroll animation
  const allItems = [...topThreeItems, ...topThreeItems];

  const html = allItems.map(item => {
    const date = lang === 'zh' ? item.date_zh : item.date;
    const title = lang === 'zh' ? item.title_zh : item.title_en;
    const summary = lang === 'zh' ? item.summary_zh : item.summary_en;
    const readMore = lang === 'zh' ? '阅读更多 →' : 'Read More →';
    const link = lang === 'zh' ? (item.link_zh || item.link) : item.link;

    return `
      <div class="news-item">
        <div class="news-date">${date}</div>
        <h3 class="news-title">${title}</h3>
        <p class="news-summary">${summary}</p>
        <a href="${link}" class="news-read-more">${readMore}</a>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

// Initialize everything
function init() {
  setupLangToggle();
  setupMobileDropdowns();

  // Wait a bit to ensure DOM is fully ready
  setTimeout(() => {
    const container = document.getElementById('news-scroll-container');
    if (container) {
      loadNews();
    }
    // Don't log error if container doesn't exist - it might be a different page (e.g., all-news.html)
  }, 200);
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // DOM already loaded, but wait a bit to ensure all elements are ready
  setTimeout(init, 100);
}

// Also try loading news after a short delay as a fallback (only on pages with the container)
setTimeout(() => {
  const container = document.getElementById('news-scroll-container');
  if (container && container.innerHTML.trim() === '') {
    loadNews();
  }
  // Silently skip if container doesn't exist (e.g., on all-news.html)
}, 1000);
