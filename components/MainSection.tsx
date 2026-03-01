"use client";

// Hooks
import { useState } from "react";

// Components
import MainArticle from "@/components/MainArticle";
import Trending from "@/components/Trending";

// Types
import { NewsArticle } from "@/types/newsArticle";


interface Props {
  initialNews: NewsArticle[];
  initialError: boolean;
  initialMainStory: NewsArticle | null;
}

export default function MainSection({ initialNews, initialError, initialMainStory }: Props) {
  const [mainStory, setMainStory] = useState<NewsArticle | null>(initialMainStory);

  return (
    <div className="flex flex-col lg:flex-row px-6 mb-6 gap-16 lg:gap-12">
      <MainArticle item={mainStory} isLoading={false} hasError={false} />

      <Trending
        items={initialNews}
        isLoading={false}
        hasError={false}
        onItemChange={(item) => setMainStory(item)}
      />
    </div>
  );
};