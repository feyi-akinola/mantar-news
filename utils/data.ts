import { GNewsAPIItem, NewsDataIOAPIItem } from "@/types/APIItem";
import { NewsArticle } from "@/types/newsArticle";

type Article = NewsDataIOAPIItem | GNewsAPIItem;

export const transformNewsDataIOArticles = (data: NewsDataIOAPIItem[]): NewsArticle[] => {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  return data.map((item: NewsDataIOAPIItem): NewsArticle => ({
    uuid: item.article_id,
    title: item.title,
    description: item.description,
    image_url: item.image_url || "",
    url: item.link,
    published_at: item.pub_date,
    categories: item.category,
    language: item.language,
  }));
};

function transformGNewsArticles(data: GNewsAPIItem[]): NewsArticle[] {
  if (!data || !Array.isArray(data) || data.length === 0) {
    return [];
  }

  return data.map((item: GNewsAPIItem): NewsArticle => ({
    uuid: item.id,
    title: item.title,
    description: item.description,
    image_url: item.image ?? "",
    url: item.url,
    published_at: item.publishedAt,
    categories: [],  // GNews doesn't provide categories
    language: item.lang,
  }));
}

export function transformArticles(data: Article[]): NewsArticle[] {
  if (!data || !Array.isArray(data) || data.length === 0) return [];

  const newsDataIOItems = data.filter((item): item is NewsDataIOAPIItem => item.apiSource === "NewsDataIO");
  const gNewsItems = data.filter((item): item is GNewsAPIItem => item.apiSource === "GNews");

  return [
    ...transformNewsDataIOArticles(newsDataIOItems),
    ...transformGNewsArticles(gNewsItems),
  ];
}