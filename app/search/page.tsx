// Libraries
import type { Metadata } from "next";

// Utils
import { routes } from '../api/routes';
import { transformArticles } from '@/utils/data';
import { NewsArticle } from '@/types/newsArticle';

// Components
import SearchResultsClient from '@/components/SearchResults';
import { capitalizeFirstLetter } from "@/utils/string";

async function getSearchResults(query: string): Promise<NewsArticle[]> {
  try {
    const res = await fetch(`${routes.search}?query=${query}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const data = await res.json();
    return transformArticles(data);
  } catch {
    return [];
  }
}

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
  const { query = "" } = await searchParams;
  const results = await getSearchResults(query);

  return <SearchResultsClient query={query} results={results} />;
}

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ query?: string}> }): Promise<Metadata> {
  const { query = "" } = await searchParams;
  const title = `"${capitalizeFirstLetter(query)}" search results | Mantar News`;
  const desc = `Search results for "${query}" on Mantar News Network.`;

  return {
    title: title,
    description: desc,
    openGraph: {
      title: title,
      description: desc,
      url: `https://mantar-news.vercel.app/search?query=${query}`,
      images: [{ url: "/images/mantar-banner.png", width: 1200, height: 630 }],
    },
  };
}