"use client";

// Components
import TrendingArticle from "./TrendingArticle";

// Hooks
import { useState } from "react";

// Types
import { NewsArticle } from "@/types/newsArticle";

interface TrendingProps {
  items: NewsArticle[];
  isLoading: boolean;
  hasError: boolean;
  onItemChange: (item: NewsArticle) => void;
}

const Trending = ({ items, isLoading, hasError, onItemChange  }: TrendingProps) => {
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
          Array.from({ length: 3 }).map((_, index) => (
            <TrendingArticle
              key={index}
              item={items.length > 0 ? items[index] : undefined}
              isLast={index === items.length - 1}
              isActive={activeIndex === index}
              onProgressComplete={handleProgressComplete}
              isLoading={isLoading}
              hasError={hasError}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Trending;