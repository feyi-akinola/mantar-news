import { routes } from '../api/routes';
import { transformArticles } from '@/utils/data';
import { NewsArticle } from '@/types/newsArticle';
import SearchResultsClient from '@/components/SearchResults';

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