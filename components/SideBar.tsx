"use client";

// Libraries
import { Squircle } from "corner-smoothing";
import axios, { AxiosResponse } from "axios";

// Components
import SearchBar from "@/components/SearchBar";
import NewsSmall from "@/components/NewsSmall";
import NewsMedium from "@/components/NewsMedium";
import ViewAll from "@/components/ViewAll";

// Hooks
import { useEffect, useState } from "react";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Constants
import { RECOMMENDED_NEWS_URL } from "@/constants";

const SideBar = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasFetchedRecommended, setHasFetchedRecommended] = useState(false);
  const [recommended, setRecommended] = useState<NewsArticle[]>([]);

  const fetchRecommended = async () => {
    const response: AxiosResponse = await axios.get(RECOMMENDED_NEWS_URL);
    const data = await response.data.data ?? [];
    const status = response.status;

    if (status === 200) {
      setRecommended(data);
      setHasFetchedRecommended(true);

      return data;
    } else {
      throw new Error("Failed to fetch recommended");
    }
  };

  useEffect(() => {
    const loadRecommended = async () => {
      if (!hasFetchedRecommended) {
        try {
          await fetchRecommended();
        } catch (error) {
          console.error(error);
        } finally {
          setIsLoading(false);
        }
      }
      };
    
      loadRecommended();
  }, [hasFetchedRecommended]);

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
                  <NewsSmall key={index} />
                ))
              )
            : (
                recommended.map((item, index) => (
                  <NewsSmall key={index} item={item} isLast={index === recommended.length - 1} />
                ))
              )
        }
      </div>

    </Squircle>
  );
};

export default SideBar;