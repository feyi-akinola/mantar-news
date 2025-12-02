"use client";

// Libraries
import axios, { AxiosResponse } from "axios";

// Components
import TrendingArticle from "./TrendingArticle";
import ViewAll from "@/components/ViewAll";

// Hooks
import { useEffect, useState } from "react";

// Types
import { NewsArticle } from "@/types/newsArticle";

interface TrendingProps {
  items: NewsArticle[];
  isLoading: boolean;
  onItemChange: (item: NewsArticle) => void;
}

const Trending = ({ items, isLoading, onItemChange  }: TrendingProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // When progress completes for one item:
  const handleProgressComplete = () => {
    const next = (activeIndex + 1) % items.length;
    setActiveIndex(next);
    onItemChange && onItemChange(items[next]);
  };


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
                  <TrendingArticle key={index} />
                ))
              )
            : (
                items.map((item, index) => (
                  <TrendingArticle
                    key={item.uuid}
                    item={item}
                    isLast={index === items.length - 1}
                    isActive={activeIndex === index}
                    onProgressComplete={handleProgressComplete}
                  />
                ))
              )
        }
      </div>
    </div>
  );
};

export default Trending;