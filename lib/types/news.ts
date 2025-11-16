export interface NewsItem {
  id: number;
  date: string;
  date_zh: string;
  title_en: string;
  title_zh: string;
  summary_en: string;
  summary_zh: string;
  link: string;
  link_zh?: string;
  thumbnail?: string;
}

export interface NewsData {
  news: NewsItem[];
}

