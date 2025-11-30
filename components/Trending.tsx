"use client";

// Libraries
import axios, { AxiosResponse } from "axios";

// Components
import NewsSmall from "./NewsSmall";
import NewsMediumVert from "./NewsMediumVert";
import ViewAll from "@/components/ViewAll";

// Hooks
import { useEffect, useState } from "react";

// Types
import { NewsArticle } from "@/types/newsArticle";
import { TRENDING_NEWS_URL } from "@/constants";

const Trending = () => {
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
    const response: AxiosResponse = await axios.get(TRENDING_NEWS_URL);
    const data = await response.data.articles ?? [];
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
    <div className="flex-col-start_ gap-4 w-full">
      <div className="flex-between_ w-full">
        <h1 className="text-xl font-bold">Trending</h1>
        <ViewAll />
      </div>

      <div className="grid grid-cols-3 w-full gap-8 bg-white card_">
        {
          isLoading
            ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <NewsSmall key={index} />
                ))
              )
            : (
                trending.map((item, index) => (
                  <NewsSmall
                    key={item.title}
                    item={item}
                    isLast={index === trending.length - 1}
                  />
                ))
              )
        }
      </div>

    </div>
  );
};

export default Trending;