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
      } else {
        throw new Error("Failed to fetch articles");
      }
    } catch (error) {
      console.error(error);

      throw new Error("Failed to fetch articles");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex-between_">
        <h1 className="text-xl font-bold">{title}</h1>
        <ViewAll />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {
          isLoading
            ? (
                Array.from({ length: 3 }).map((_, index: number) => (
                  <div key={index} className={index === 2 ? "hidden xl:block" : ""}>
                    <RecommendedArticle />
                  </div>
                ))
              )
            : (
              articles.map((article, index: number) => (
                <div
                  key={article.uuid}
                  className={index === 2 ? "hidden xl:block" : ""}
                >
                  <RecommendedArticle item={article} hasTag={false} />
                </div>
              ))
              )
        }
      </div>
    </div>
  );
};

export default Categories;