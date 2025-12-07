// Libraries
import axios, { AxiosResponse } from "axios";

// Hooks
import { useEffect, useState } from "react";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Constants
import { routes } from "@/app/api/routes";

// Utils
import { transformNewsDataIOArticles } from "@/utils/data";

// Components
import RecommendedArticle from "./RecommendedArticle";
import TrendingArticle from "./TrendingArticle";
import ViewAll from "./ViewAll";

interface CategoryProps {
  title: string;
}

const Categories = ({ title }: CategoryProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [hasFetchedArticles, setHasFetchedArticles] = useState<boolean>(false);
  const [articles, setArticles] = useState<NewsArticle[]>([]);

  const fetchArticles = async () => {
    try {
      const response: AxiosResponse = await axios.get(routes.category, {
        params: {
          category: title,
        },
      });
      const data = await response.data ?? [];
      const status = response.status;

      if (status === 200) {
        setArticles(transformNewsDataIOArticles(data));
        setHasFetchedArticles(true);
      } else {
        setHasError(true);
      }
    } catch (error) {
      console.error(error);

      setHasError(true);
    } finally {
      setIsLoading(false);
      setHasFetchedArticles(true);
    }
  };

  useEffect(() => {
    if (!hasFetchedArticles) {
      fetchArticles();
    }
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex-between_">
        <div>
          <div className="mb-0.5 h-1.5 w-full bg-red-500"/>
          <h1 className="text-xl font-bold">{title}</h1>
        </div>
        <ViewAll />
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {
          Array.from({ length: 3 }).map((_, index: number) => (
            <div key={index} className={index === 2 ? "hidden xl:block" : ""}>
              <RecommendedArticle
                item={articles.length > 0 ? articles[index] : undefined}
                isLast={false}
                hasTag={false}
                isLoading={isLoading}
                hasError={hasError}
              />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Categories;