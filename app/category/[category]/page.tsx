// Libraries
import type { Metadata } from "next";

// Utils
import { routes } from '../../api/routes';
import { transformNewsDataIOArticles } from '@/utils/data';
import { NewsArticle } from '@/types/newsArticle';

// Components
import CategoryResultsClient from '@/components/CategoryResults';

async function getCategoryResults(category: string): Promise<NewsArticle[]> {
  try {
    const res = await fetch(`${routes.category}?category=${category.toLowerCase()}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return transformNewsDataIOArticles(data);
  } catch {
    return [];
  }
}

export default async function CategoryPage({ params } : { params: Promise<{ category: string}> }) {
  const { category } = await params;
  const results = await getCategoryResults(category);

  return <CategoryResultsClient category={category} results={results} />;
}

export async function generateMetadata({ params }: { params: Promise<{ category: string}> }): Promise<Metadata> {
  const { category } = await params;
  const categoryCaptial = category.substring(0, 1).toUpperCase() + category.substring(1);
  const title = `${categoryCaptial} | Mantar News`;
  const desc = `Find out the latest ${category} news on Mantar News Network.`;

  return {
    title: title,
    description: desc,
    openGraph: {
      title: title,
      description: desc,
      url: `https://mantar-news.vercel.app/category/${category}`,
      images: [{ url: "/images/mantar-banner.png", width: 1200, height: 630 }],
    },
  };
}
