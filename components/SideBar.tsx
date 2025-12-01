"use client";

// Libraries
import { Squircle } from "corner-smoothing";
import axios, { AxiosResponse } from "axios";

// Components
import SearchBar from "@/components/SearchBar";
import RecommendedArticle from "@/components/RecommendedArticle";
import NewsMedium from "@/components/NewsMedium";
import ViewAll from "@/components/ViewAll";

// Hooks
import { useEffect, useState } from "react";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Constants
import { TRENDING_NEWS_URL } from "@/constants";

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
    <Squircle
      cornerRadius={25}
      style={{
        padding: "1rem",
        margin: "1rem",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        flex: 3,
        gap: "1rem",
      }}
    >
      <SearchBar />

      {/* Recommended */}
      <div className="flex-between_ mt-4">
        <h2 className="text-xl font-bold">Recommended</h2>
        <ViewAll />
      </div>

      <NewsMedium />

      <div className="p-2 overflow-y-auto">
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

    </Squircle>
  );
};

export default SideBar;