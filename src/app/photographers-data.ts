export interface PhotographersData {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };

  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}
export interface Category {
  name: string;
  count: number;
  color: string;
  icon: string;
}

export interface Social {
  twitter: string;
  github: string;
  linkedin: string;
  youtube: string;
}

export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  email: string;
  social: Social;
}
