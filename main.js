
// Language dictionary
const T = {
  en: {
    brand: "ABC Chemical",
    corp: "ABC Chemical Co., Ltd.",
    nav: { 
      home: "Home", 
      "home.about": "About Us",
      "home.overview": "Company Overview",
      "home.news": "News & Updates",
      products: "Products",
      "products.calcium": "Calcium Carbide",
      "products.cyanamide": "Cyanamide Derivatives",
      "products.performance": "Performance Products",
      "products.intermediates": "Industrial Intermediates",
      applications: "Applications",
      "applications.agriculture": "Agriculture & Fertilizers",
      "applications.pharma": "Pharmaceuticals & Nutrition",
      "applications.metallurgy": "Metallurgy & Industry",
      sustainability: "Sustainability",
      "sustainability.policy": "Environmental Policy",
      "sustainability.certificates": "ISO Certificates",
      "sustainability.ehs": "EHS Practices",
      resources: "Resources",
      "resources.sds": "SDS Documents",
      "resources.datasheets": "Datasheets",
      "resources.news": "All News",
      contact: "Contact",
      "contact.general": "General Inquiries",
      "contact.sales": "Sales",
      "contact.technical": "Technical Support"
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
      p4: { title: "Industrial Intermediates", desc: "Thiourea & Guanidine Nitrate as dependable intermediates for advanced syntheses." }
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
      home: "首页",
      "home.about": "关于我们",
      "home.overview": "公司概况",
      "home.news": "新闻与更新",
      products: "产品",
      "products.calcium": "电石",
      "products.cyanamide": "氰胺衍生物",
      "products.performance": "性能产品",
      "products.intermediates": "工业中间体",
      applications: "应用",
      "applications.agriculture": "农业与肥料",
      "applications.pharma": "医药与营养",
      "applications.metallurgy": "冶金与工业",
      sustainability: "可持续发展",
      "sustainability.policy": "环境政策",
      "sustainability.certificates": "ISO证书",
      "sustainability.ehs": "EHS实践",
      resources: "资源",
      "resources.sds": "SDS文件",
      "resources.datasheets": "数据表",
      "resources.news": "所有新闻",
      contact: "联系",
      "contact.general": "一般咨询",
      "contact.sales": "销售",
      "contact.technical": "技术支持"
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
      p4: { title: "工业中间体", desc: "硫脲与硝酸胍，可靠的高级合成中间体。" }
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
  const dict = T[lang];
  document.documentElement.lang = (lang === 'zh') ? 'zh-Hans' : 'en';
  const b = document.getElementById('brand'); if (b) b.textContent = dict.brand;
  const corp = document.getElementById('corpName'); if (corp) corp.textContent = dict.corp;
  const fb = document.getElementById('footerBrand'); if (fb) fb.textContent = dict.corp;
  const rights = document.getElementById('rights'); if (rights) rights.textContent = dict.corp + ' ' + T[lang].footer.rights;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const path = el.getAttribute('data-i18n').split('.');
    let cur = dict;
    for (const k of path) cur = cur?.[k];
    if (typeof cur === 'string') el.textContent = cur;
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
      applyLang(btn.getAttribute('data-setlang'));
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
