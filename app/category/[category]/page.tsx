import { routes } from '../../api/routes';
import { transformNewsDataIOArticles } from '@/utils/data';
import { NewsArticle } from '@/types/newsArticle';
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