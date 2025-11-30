"use client";

// Components
import NewsSmall from "./NewsSmall";
import NewsMediumVert from "./NewsMediumVert";
import ViewAll from "@/components/ViewAll";

// Hooks
import { useEffect, useState } from "react";

// Types
import { NewsArticle } from "@/types/newsArticle";

const Trending = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [trending, setTrending] = useState<NewsArticle[]>([]);

  const fetchTrending = async () => {
    //
  };

  useEffect(() => {
    const loadTrending = async () => {
      try {
        fetchTrending();
      } catch (error) {
        console.error(error);
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

      <div className="grid grid-cols-3 w-full gap-4 bg-white card_">
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