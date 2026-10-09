export interface CaseStudy {
  id: string;
  categoryNumber: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  location: string;
  year: string;
  scale: string;
  materials: string[];
  imageUrl: string;
  photographer: string;
  fullNarrative: string[];
  specifications: {
    stone: string;
    timber: string;
    finish: string;
    lighting: string;
  };
}

export interface JournalArticle {
  id: string;
  number: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  lead: string;
  content: string[];
  imageUrl?: string;
  quote?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  project: string;
  location: string;
  area: string;
  type: string;
}

export interface MaterialSpec {
  name: string;
  koreanName: string;
  origin: string;
  tactility: string;
  acousticProperty: string;
  patinaBehavior: string;
  recommendedUse: string;
}
