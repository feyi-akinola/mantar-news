
export type TheNewsAPIItem = {
  uuid: string;   
  title: string;
  description: string;
  keywords: string;
  snippet: string;
  url: string;
  image_url: string;
  language: string;
  published_at: string;
  source: string;
  categories: string[];
  relevance_score?: any;
  locale: string;
}

export type GNewsAPIItem = {
  id: string;
  title: string;
  description: string;
  content: string;
  url: string;
  image: string;
  publishedAt: string;
  lang: string;
  source: {
    id: string;
    name: string;
    url: string;
  };
}

export type NewsDataIOAPIItem = {
  article_id: string;
  title: string;
  description: string;
  content: string;
  image: string;
  link: string;
  category: string[];
  language: string;
  country: string;
  pub_date: string;
  source_name: string;
  source_icon: string;
  source_url: string;
  image_url: string;
}