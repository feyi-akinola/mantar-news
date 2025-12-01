"use client";

// Libraries
import axios, { AxiosResponse } from "axios";

// Components
import MainArticle from "@/components/MainArticle";
import Trending from "@/components/Trending";

// Hooks
import { useEffect, useState } from "react";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Constants
import { TOP_NEWS_URL } from "@/constants";

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasFetchedTopNews, setHasFetchedTopNews] = useState(false);
  const [topNews, setTopNews] = useState<NewsArticle[]>([]);
  const [mainStory, setMainStory] = useState<NewsArticle | null>(null);

  useEffect(() => {
    if (topNews.length > 0) {
      setMainStory(topNews[0]);
    }
  }, [topNews]);

  const fetchTopNews = async () => {
    const response: AxiosResponse = await axios.get(TOP_NEWS_URL);
    const data = await response.data.data ?? [];
    const status = response.status;

    if (status === 200) {
      setTopNews(data);
      setHasFetchedTopNews(true);

      return data;
    } else {
      throw new Error("Failed to fetch top news");
    }
  };

  useEffect(() => {
    const loadTopNews = async () => {
      if (!hasFetchedTopNews) {
        try {
          await fetchTopNews();
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
    };
    
      loadTopNews();
  }, [hasFetchedTopNews]);
  return (
    <div className="m-4 flex flex-col-start_ gap-16 overflow-y-auto">
      <MainArticle item={mainStory} isLoading={isLoading} />

      <Trending
        items={topNews}
        isLoading={isLoading} 
        onItemChange={(item) => setMainStory(item)}
      />
    </div>
  );
}
