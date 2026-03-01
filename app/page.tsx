// Components
import Categories from "@/components/Categories";
import MainSection from "@/components/MainSection";

// Constants
import { NewsArticle } from "@/types/newsArticle";
import { routes } from "./api/routes";
import { transformNewsDataIOArticles } from "@/utils/data";

export default async function Home() {
  let latestNews: NewsArticle[] = [];
  let mainStory: NewsArticle | null = null;
  let hasError = false;

  try {
    latestNews = await fetchLatestNews();
  } catch {
    hasError = true;
  }

  async function fetchLatestNews(): Promise<NewsArticle[]> {
    try {
      const res = await fetch(`${routes.latest}`, {
        next: { revalidate: 60 },
      });
      if (!res.ok) return [];
      const data = await res.json();

      const results: NewsArticle[] = transformNewsDataIOArticles(data);
      if (results.length > 0) mainStory = results[0];
      
      return results;
    } catch {
      return [];
    }
  }

  return (
    <div className="tracking-wide min-h-screen pt-20">
      <div className="max-w-[1600px] mx-auto flex flex-col gap-32 w-full xl:gap-24">
        <MainSection
          initialNews={latestNews}
          initialError={hasError}
          initialMainStory={mainStory}
        />

        <Categories />
      </div>
    </div>
  );
}
