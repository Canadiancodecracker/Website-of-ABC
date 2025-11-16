import { NewsData } from '@/lib/types/news';
import { ProductDefinition } from '@/lib/types/products';
import fs from 'fs/promises';
import path from 'path';

export async function getNewsData(): Promise<NewsData> {
  try {
    const filePath = path.join(process.cwd(), 'news_data.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents) as NewsData;
  } catch (error) {
    console.error('Error loading news data:', error);
    return { news: [] };
  }
}

export async function getProductsData(): Promise<ProductDefinition[]> {
  try {
    const filePath = path.join(process.cwd(), 'data', 'products.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents) as ProductDefinition[];
  } catch (error) {
    console.error('Error loading products data:', error);
    return [];
  }
}

export async function getSalesData() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'sales-data.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading sales data:', error);
    return null;
  }
}

