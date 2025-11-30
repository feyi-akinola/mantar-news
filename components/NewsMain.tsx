"use client";

// Libraries
import { Squircle } from "corner-smoothing";
import axios, { AxiosResponse } from "axios";

// Hooks
import { useEffect, useState } from "react";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Constants
import { TOP_NEWS_URL } from "@/constants";

// Components
import CategoryChip from "@/components/CategoryChip";
import { PulseFiller, PulseFillerText } from "./PulseFiller";

export default function NewsMain() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasFetchedTopNews, setHasFetchedTopNews] = useState(false);
  const [topNews, setTopNews] = useState<NewsArticle | null>(null);

  const fetchTopNews = async () => {
    const response: AxiosResponse = await axios.get(TOP_NEWS_URL);
    const data = await response.data.data ?? [];
    const status = response.status;

    if (status === 200) {
      setTopNews(data[0]);
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

  const bgImgStyle = isLoading
    ? undefined
    : `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 60%), url(${topNews?.image_url})`;
  const bgColorStyle = isLoading
    ? "bg-black/10 animate-pulse"
    : undefined;

  return (
    <Squircle
      cornerRadius={30}
      style={{
        backgroundImage: bgImgStyle,
      }}
      className={`${bgColorStyle} ${bgImgStyle} gap-4 flex-col-end_ w-full h-150 p-8 bg-center bg-cover`}
    >
      <div className="flex-col-start_ gap-4 text-white">
        {
          isLoading
            ? <PulseFiller />
            : <CategoryChip category={topNews?.categories[0] ?? ""} />
        }

        {
          isLoading
            ? <PulseFillerText lines={2} height={8} gap={4}/>
            : <h1 className="text-3xl font-semibold tracking-wide">
                {topNews?.title}
              </h1>
        }
      </div>
    </Squircle>
  );
};