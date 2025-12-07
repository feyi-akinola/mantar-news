import { NewsDataIOAPIItem } from "@/types/APIItem";
import { NewsArticle } from "@/types/newsArticle";


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