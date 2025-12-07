"use client";

// Libraries
import axios, { AxiosResponse } from "axios";

// Components
import MainArticle from "@/components/MainArticle";
import Trending from "@/components/Trending";
import Categories from "@/components/Categories";

// Hooks
import { useEffect, useState } from "react";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Constants
import { routes } from "@/app/api/routes";
import { transformNewsDataIOArticles } from "@/utils/data";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasFetchedTopNews, setHasFetchedTopNews] = useState(false);
  const [hasFetchedLatestNews, setHasFetchedLatestNews] = useState(false);
  const [topNews, setTopNews] = useState<NewsArticle[]>([]);
  const [latestNews, setLatestNews] = useState<NewsArticle[]>([]);
  const [mainStory, setMainStory] = useState<NewsArticle | null>(null);

  useEffect(() => {
    if (latestNews.length > 0) {
      setMainStory(latestNews[0]);
    }
  }, [latestNews]);

  useEffect(() => {
    const loadLatestNews = async () => {
      if (!hasFetchedLatestNews) {
        try {
          await fetchLatestNews();
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    
    loadLatestNews();
  }, [hasFetchedLatestNews]);

  const fetchLatestNews = async () => {
    const response: AxiosResponse = await axios.get(routes.latest);
    const data = await response.data ?? [];
    const status = response.status;

    console.log(response);
    console.log(data);

    if (status === 200) {
      setLatestNews(transformNewsDataIOArticles(data));
      setHasFetchedLatestNews(true);
    } else {
      throw new Error("Failed to fetch latest news");
    }
  };

  return (
    <div className="flex flex-col gap-32">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-12">
        <MainArticle item={mainStory} isLoading={isLoading} />

        <Trending
          items={latestNews}
          isLoading={isLoading} 
          onItemChange={(item) => setMainStory(item)}
        />
      </div>

      <Categories />
    </div>
  );
}
