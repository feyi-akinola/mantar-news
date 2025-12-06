"use client";

// Libraries
import axios, { AxiosResponse } from "axios";

// Components
import RecommendedArticle from "@/components/RecommendedArticle";
import ViewAll from "@/components/ViewAll";

// Hooks
import { useEffect, useState } from "react";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Constants
import { CLIENT_TRENDING_NEWS_URL } from "@/app/api/constants";

const SideBar = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [trending, setTrending] = useState<NewsArticle[]>([]);

  const transformTrending = (data: any): NewsArticle[] => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      return [];
    }

    return data.map((item: any): NewsArticle => ({
      uuid: item.id,
      title: item.title,
      description: item.description,
      image_url: item.image || "",
      url: item.url,
      published_at: item.publishedAt,
      categories: ["general"],
      language: item.lang,
    }));
  };

  const fetchTrending = async () => {
    const response: AxiosResponse = await axios.get(CLIENT_TRENDING_NEWS_URL);
    const data = await response.data ?? [];
    const status = response.status;

    if (status === 200) {
      setTrending(transformTrending(data));
    }
  };

  useEffect(() => {
    const loadTrending = async () => {
      try {
        await fetchTrending();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTrending();
  }, []);

  return (
    <div
      className="w-full flex flex-3 flex-col lg:shrink-0 gap-4"
    >

      {/* Recommended */}
      <div className="flex-between_">
        <h2 className="text-xl font-bold">Recommended</h2>
        <ViewAll />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
        xl:grid-cols-1 gap-y-8 gap-x-4 items-start overflow-y-auto">
        {
          isLoading
            ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <RecommendedArticle key={index} />
                ))
              )
            : (
                trending.map((item, index) => (
                  <RecommendedArticle key={index} item={item} isLast={index === trending.length - 1} />
                ))
              )
        }
      </div>
    </div>
  );
};

export default SideBar;