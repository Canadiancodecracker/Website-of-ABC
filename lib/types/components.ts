// Layout Components
export interface SiteHeaderProps {
  navItems: { label: string; href: string }[];
  locale: 'en' | 'zh';
  onLocaleChange?: (locale: 'en' | 'zh') => void;
}

export interface SiteFooterProps {
  companyName: string;
  address: string;
  email: string;
  phone?: string;
  quickLinks: { label: string; href: string }[];
  socials?: { icon: string; href: string }[];
}

export interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

// Home Page Components
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  backgroundImage?: string;
  backgroundVideo?: string;
}

export interface StatsGridProps {
  stats: { label: string; value: string | number; suffix?: string }[];
}

export interface ValueChainDiagramProps {
  steps: { title: string; description?: string; icon?: string }[];
}

export interface ProductHighlightItem {
  name: string;
  description: string;
  image: string;
  href: string;
}

export interface ProductHighlightsProps {
  products: ProductHighlightItem[];
}

export interface TechnologyQualityPreviewProps {
  title: string;
  description: string;
  features: { icon?: string; title: string; text: string }[];
  href: string;
}

export interface SustainabilityPreviewProps {
  title: string;
  description: string;
  highlights: { icon?: string; title: string; text: string }[];
  href: string;
}

export interface NewsCarouselProps {
  items: {
    title: string;
    date: string;
    excerpt: string;
    thumbnail?: string;
    href: string;
  }[];
}

export interface GlobalMapProps {
  regions: { name: string; highlight: boolean }[];
}

// About Page Components
export interface CompanyOverviewProps {
  title: string;
  description: string;
  images?: string[];
}

export interface TimelineProps {
  items: {
    year: string;
    title: string;
    description: string;
  }[];
}

export interface CertificatesGridProps {
  certificates: {
    name: string;
    thumbnail: string;
    file: string;
  }[];
}

export interface FactoryGalleryProps {
  images: string[];
  layout?: 'grid' | 'masonry';
}

// Products Components
export interface ProductListProps {
  products: {
    name: string;
    chineseName?: string;
    slug: string;
    image: string;
    shortDescription: string;
  }[];
}

export interface ProductDetailProps {
  name: string;
  chineseName?: string;
  cas: string;
  formula: string;
  heroImage?: string;
  applicationSummary: string;
  specs: { key: string; value: string }[];
  grades: {
    gradeName: string;
    purity: string;
    specs: { key: string; value: string }[];
  }[];
  packaging: string[];
  downloads?: { label: string; file: string }[];
}

export interface ApplicationsSectionProps {
  applications: {
    category: string;
    description: string;
    image?: string;
  }[];
}

// Technology & Quality Components
export interface ProcessFlowDiagramProps {
  steps: { title: string; description?: string; icon?: string }[];
}

export interface QualitySystemOverviewProps {
  title: string;
  description: string;
  items: { icon?: string; title: string; text: string }[];
}

export interface LabEquipmentGridProps {
  items: {
    name: string;
    image?: string;
    description?: string;
  }[];
}

// Sustainability Components
export interface SustainabilityPillarsProps {
  pillars: {
    icon?: string;
    title: string;
    description: string;
  }[];
}

export interface EHSCommitmentProps {
  title: string;
  paragraphs: string[];
  icons?: { icon: string; label: string }[];
}

// News Components
export interface NewsListProps {
  items: {
    title: string;
    date: string;
    excerpt: string;
    thumbnail?: string;
    href: string;
  }[];
}

export interface NewsArticleProps {
  title: string;
  date: string;
  body: string; // MDX rendered
  coverImage?: string;
}

// Careers Components
export interface CareerIntroProps {
  title: string;
  paragraphs: string[];
  images?: string[];
}

export interface JobListProps {
  jobs: {
    title: string;
    location: string;
    type: string;
    description: string;
    href: string;
  }[];
}

// Contact Components
export interface ContactInfoProps {
  companyName: string;
  address: string;
  email: string;
  phone: string;
  mapEmbedUrl?: string;
}

export interface ContactFormProps {
  onSubmit: (data: {
    name: string;
    company: string;
    email: string;
    product?: string;
    message: string;
  }) => void;
  productOptions?: string[];
}

// Shared UI Components
export interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export interface CardProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
}

