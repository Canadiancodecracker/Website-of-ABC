export interface ProductDefinition {
  slug: string;
  name: string;
  chineseName: string;
  cas: string;
  formula: string;
  summary: string;
  specs: { key: string; value: string }[];
  grades: {
    gradeName: string;
    purity: string;
    specs: { key: string; value: string }[];
  }[];
  applications: string[];
  packaging: string[];
  downloads: { label: string; file: string }[];
}

