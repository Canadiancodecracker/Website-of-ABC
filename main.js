
// ============================================
// VERSION CHECK - This file should be v9
// If you see warnings from line 268, you're using a CACHED version!
// ============================================
if (typeof window !== 'undefined') {
  window._mainJsVersion = 'v9';
  window._mainJsLineCount = 756; // Current line count
  window._mainJsLoadedAt = Date.now();
  
  console.log('%c🔍🔍🔍 main.js v9 DIAGNOSTIC CHECK 🔍🔍🔍', 'color: blue; font-weight: bold; font-size: 16px; background: #e3f2fd; padding: 8px; border: 2px solid blue;');
  console.log('✅ Expected version: v9');
  console.log('✅ Expected line count: 756');
  console.log('✅ Loaded at:', new Date(window._mainJsLoadedAt).toLocaleTimeString());
  console.log('%c⚠️ If you see warnings from line 268, you are using a CACHED version!', 'color: red; font-weight: bold;');
  
  // Immediate check for old code patterns
  if (typeof applyLang === 'function') {
    const funcStr = applyLang.toString();
    if (funcStr.includes('applyLang called with language')) {
      console.error('%c❌❌❌ OLD CODE DETECTED IN applyLang FUNCTION! ❌❌❌', 'color: red; font-weight: bold; font-size: 20px; background: yellow; padding: 10px;');
      console.error('The applyLang function contains old logging code that was removed!');
      console.error('%cDO A HARD REFRESH IMMEDIATELY: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)', 'color: red; font-weight: bold; font-size: 16px;');
    }
  }
  
  // Suppress common browser console noise
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    console.log('%cDevelopment mode: Some warnings may be suppressed', 'color: gray; font-style: italic;');
  }
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
      p1: { title: "Calcium Carbide", desc: "High‑purity feedstock supporting acetylene generation and downstream specialty syntheses." },
      p2: { title: "Cyanamide Derivatives", desc: "Cyanamide & Dicyandiamide for controlled reactivity and high‑performance curing systems." },
      p3: { title: "Performance Products", desc: "Creatine Monohydrate & Guanidinoacetic Acid for nutrition and functional performance." },
      p4: { title: "Industrial Intermediates", desc: "Thiourea & Guanidine Nitrate as dependable intermediates for advanced syntheses." },
      p5: { title: "Calcium Cyanamide", desc: "A multifunctional agrochemical and chemical intermediate, enabling soil improvement, nitrogen fertilization, and specialty NCN syntheses." }
    },
    apps: {
      title: "Applications",
      desc: "Proven performance across vital sectors — from crop productivity to human nutrition and heavy industry.",
      a1: { title: "Agriculture & Fertilizers", desc: "Cyanamide‑based solutions supporting nitrogen efficiency and soil health." },
      a2: { title: "Pharmaceuticals & Nutrition", desc: "Creatine & GAA produced with strict quality practices for reliable performance." },
      a3: { title: "Metallurgy & Industry", desc: "Calcium carbide solutions enabling acetylene workflows and metal processing." }
    },
    sus: {
      title: "Sustainability & Responsibility",
      desc: "We invest in cleaner production technologies, closed‑loop utilities, and rigorous EHS practices to minimize environmental impact while maximizing product value.",
      l1: "Energy‑efficient utilities and heat recovery across key units",
      l2: "Responsible sourcing and transparent quality systems",
      l3: "Compliance aligned with global standards and customer audits",
      m1: "Water Recycled", m2: "EHS Monitoring", m3: "Driven Systems"
    },
    res: {
      title: "Resources",
      desc: "Download product datasheets and compliance statements. (Placeholders)",
      r1: "Calcium Carbide - SDS",
      r2: "Dicyandiamide - SDS",
      r3: "Creatine Monohydrate - SDS",
      r4: "Guanidine Nitrate - SDS",
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
        booth: "[Insert Booth/Hall Number]",
        link: "[Link to official CPHI China website or ABC Chemical event page]"
      },
      event2: {
        name: "CPHI North America 2026",
        dates: "June 2 – 4, 2026",
        location: "Pennsylvania Convention Center, Philadelphia, PA, USA",
        focus: "The largest dedicated North American pharma trade show. We will be connecting with partners for regional supply chain expansion and discussing R&D advancements, specifically our reliable supply of high-specification intermediates."
      },
      event3: {
        name: "Chemspec Europe 2026",
        dates: "May 6 – 7, 2026",
        location: "Koelnmesse, Cologne, Germany",
        focus: "The premier exhibition for the fine and specialty chemicals industry. We will connect with specialty formulators and materials developers to discuss our high-purity calcium and cyanamide intermediates used in advanced manufacturing."
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
      subhead: "From North America to Asia, ABC Chemical supplies high-purity materials to customers in more than 50 countries, supporting agriculture, nutrition, and advanced industries.",
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
      p1: { title: "电石（碳化钙）", desc: "高纯度原料，支持乙炔制备与下游特种合成。" },
      p2: { title: "氰胺衍生物", desc: "氰胺与双氰胺，具备可控反应性与高性能固化方案。" },
      p3: { title: "性能产品", desc: "肌酸一水合物与胍基乙酸，服务于营养与功能性应用。" },
      p4: { title: "工业中间体", desc: "硫脲与硝酸胍，可靠的高级合成中间体。" },
      p5: { title: "氰氨化钙", desc: "多功能农用化学品和化学中间体，可用于土壤改良、氮肥施用和特种NCN合成。" }
    },
    apps: {
      title: "应用",
      desc: "覆盖关键领域，从作物增产到人体营养及重工业。",
      a1: { title: "农业与肥料", desc: "基于氰胺的方案，提高氮素利用率并改善土壤健康。" },
      a2: { title: "医药与营养", desc: "肌酸与GAA在严格质量体系下生产，稳定可靠。" },
      a3: { title: "冶金与工业", desc: "电石方案支撑乙炔流程与金属加工。" }
    },
    sus: {
      title: "可持续发展与责任",
      desc: "我们投资清洁生产、闭路公用工程与严格的EHS管理，在降低环境影响的同时提升产品价值。",
      l1: "关键装置的高效能公用系统与余热回收",
      l2: "负责任的采购与透明的质量体系",
      l3: "对标国际标准并通过客户审核的合规体系",
      m1: "水资源回收率", m2: "环保安全监测", m3: "以ISO为驱动"
    },
    res: {
      title: "资料中心",
      desc: "下载产品数据表与合规文件（占位）。",
      r1: "电石 - SDS",
      r2: "双氰胺 - SDS",
      r3: "一水肌酸 - SDS",
      r4: "硝酸胍 - SDS",
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
        booth: "[插入展位/展厅号]",
        link: "[链接至 CPHI 中国官网或 ABC 化工活动页面]"
      },
      event2: {
        name: "CPHI 北美 2026",
        dates: "2026年6月2日—4日",
        location: "美国宾夕法尼亚州，费城会议中心",
        focus: "北美最大的专业制药贸易展览会。我们将与合作伙伴建立联系，探讨区域供应链的扩展，并讨论API的研发进展，特别是我们可靠的高规格中间体供应。"
      },
      event3: {
        name: "欧洲精细化工展 (Chemspec Europe 2026)",
        dates: "2026年5月6日—7日",
        location: "德国科隆展览中心",
        focus: "欧洲首要的精细和特种化学品展览会。我们将与精细化学品配方设计师和材料开发商联系，讨论用于先进制造中的高纯度钙和氰胺中间体。"
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
      subhead: "从北美到亚洲，ABC化工向50多个国家的客户供应高纯度材料，支持农业、营养和先进工业。",
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
      window._translationVersion = 'v9';
      console.log('%c✅✅✅ Translation system v9 loaded - ALL warnings suppressed ✅✅✅', 'color: green; font-weight: bold; font-size: 18px; background: #e8f5e9; padding: 8px; border: 3px solid green;');
      console.log('%cIf you see translation warnings below, your browser is using a CACHED version!', 'color: red; font-weight: bold; font-size: 14px;');
      console.log('%cDO A HARD REFRESH: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)', 'color: orange; font-weight: bold; font-size: 14px;');
    } else if (window._translationVersion !== 'v9') {
      console.error('%c❌ WRONG VERSION DETECTED!', 'color: red; font-weight: bold; font-size: 20px;');
      console.error('Expected: v9, Got:', window._translationVersion);
    }
  }
  
  const dict = T[lang];
  if (!dict) {
    console.error(`Dictionary not found for language: ${lang}`);
    return;
  }
  if (!dict.nav) {
    console.error(`nav object not found in dictionary for language: ${lang}`);
    return;
  }
  
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
  ['name','company','email','phone','message'].forEach(id => {
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

  // Update Calcium Carbide SDS link based on language
  const calciumCarbideSdsLink = document.getElementById('calcium-carbide-sds-link');
  if (calciumCarbideSdsLink) {
    if (lang === 'zh') {
      calciumCarbideSdsLink.href = 'assets/sds/SDS_Calcium_Carbide_Chinese.pdf';
      calciumCarbideSdsLink.download = 'SDS_Calcium_Carbide_Chinese.pdf';
    } else {
      calciumCarbideSdsLink.href = 'assets/sds/SDS_Calcium_Carbide_English.pdf';
      calciumCarbideSdsLink.download = 'SDS_Calcium_Carbide_English.pdf';
    }
  }

  // Update Dicyandiamide SDS link based on language
  const dicyandiamideSdsLink = document.getElementById('dicyandiamide-sds-link');
  if (dicyandiamideSdsLink) {
    if (lang === 'zh') {
      dicyandiamideSdsLink.href = 'assets/sds/SDS_Dicyandiamide_Chinese.html';
      dicyandiamideSdsLink.download = 'SDS_Dicyandiamide_Chinese.html';
    } else {
      dicyandiamideSdsLink.href = 'assets/sds/SDS_Dicyandiamide_English.html';
      dicyandiamideSdsLink.download = 'SDS_Dicyandiamide_English.html';
    }
  }

  // Update Creatine Monohydrate SDS link based on language
  const creatineMonohydrateSdsLink = document.getElementById('creatine-monohydrate-sds-link');
  if (creatineMonohydrateSdsLink) {
    if (lang === 'zh') {
      creatineMonohydrateSdsLink.href = 'assets/sds/SDS_Creatine_Monohydrate_Chinese.html';
      creatineMonohydrateSdsLink.download = 'SDS_Creatine_Monohydrate_Chinese.html';
    } else {
      creatineMonohydrateSdsLink.href = 'assets/sds/SDS_Creatine_Monohydrate_English.html';
      creatineMonohydrateSdsLink.download = 'SDS_Creatine_Monohydrate_English.html';
    }
  }

  // Update Guanidine Nitrate SDS link based on language
  const guanidineNitrateSdsLink = document.getElementById('guanidine-nitrate-sds-link');
  if (guanidineNitrateSdsLink) {
    if (lang === 'zh') {
      guanidineNitrateSdsLink.href = 'assets/sds/SDS_Guanidine_Nitrate_Chinese.html';
      guanidineNitrateSdsLink.download = 'SDS_Guanidine_Nitrate_Chinese.html';
    } else {
      guanidineNitrateSdsLink.href = 'assets/sds/SDS_Guanidine_Nitrate_English.html';
      guanidineNitrateSdsLink.download = 'SDS_Guanidine_Nitrate_English.html';
    }
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
    console.log('Loading news from news_data.json...');
    // Add cache-busting parameter to ensure fresh data
    const response = await fetch('news_data.json?v=' + new Date().getTime());
    if (!response.ok) {
      throw new Error(`Failed to fetch news: ${response.status} ${response.statusText}`);
    }
    const data = await response.json();
    console.log('News data loaded:', data);
    console.log('Number of news items:', data.news ? data.news.length : 0);
    if (data.news && data.news.length > 0) {
      renderNews(data.news);
    } else {
      console.error('No news items found in data');
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
  console.log('renderNews called with', newsItems.length, 'items');
  console.log('News container found:', container);

  const lang = getCurrentLanguage();
  console.log('Current language:', lang);
  
  // Sort news by date (newest first) and take only the top 3 most recent
  const sortedItems = [...newsItems].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB - dateA; // Descending order (newest first)
  });
  
  // Only show the 3 most recent news items in the floating news section
  const topThreeItems = sortedItems.slice(0, 3);
  console.log('Displaying top 3 news items:', topThreeItems.map(item => ({ date: item.date, title: item.title_en })));
  
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
  console.log('News rendered successfully: Top 3 most recent articles displayed (', topThreeItems.length, 'unique items,', allItems.length, 'total for animation)');
}

// Initialize everything
function init() {
  console.log('Initializing...');
  setupLangToggle();
  setupMobileDropdowns();
  
  // Wait a bit to ensure DOM is fully ready
  setTimeout(() => {
    const container = document.getElementById('news-scroll-container');
    if (container) {
      console.log('Container found, loading news...');
      loadNews();
    }
    // Don't log error if container doesn't exist - it might be a different page (e.g., all-news.html)
  }, 200);
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');
    init();
  });
} else {
  // DOM already loaded, but wait a bit to ensure all elements are ready
  console.log('DOM already loaded, initializing...');
  setTimeout(init, 100);
}

// Also try loading news after a short delay as a fallback (only on pages with the container)
setTimeout(() => {
  const container = document.getElementById('news-scroll-container');
  if (container) {
    if (container.innerHTML.trim() === '') {
      console.log('News container is empty after 1 second, retrying loadNews...');
      loadNews();
    } else {
      console.log('News container has content:', container.innerHTML.length, 'chars');
    }
  }
  // Silently skip if container doesn't exist (e.g., on all-news.html)
}, 1000);
