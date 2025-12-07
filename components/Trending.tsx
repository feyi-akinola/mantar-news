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
    <div className="flex flex-col flex-3 gap-4 w-full">
      <h1 className="text-xl font-bold">Trending</h1>

      <div className="flex flex-col w-full
         gap-8 text-black/90 dark:text-white/90">
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