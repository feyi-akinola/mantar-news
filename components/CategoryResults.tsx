"use client";

import { NewsArticle } from '@/types/newsArticle';
import RecommendedArticle from '@/components/RecommendedArticle';
import TitleBanner from './TitleBanner';

interface Props {
  category: string;
  results: NewsArticle[];
}

export default function CategoryResultsClient({ category, results }: Props) {
  return (
    <div className="flex flex-col justify-center items-center gap-10 md:gap-14 p-12
       bg-white dark:bg-black/95 text-black/90 dark:text-white/90 ">
      <TitleBanner title={category.substring(0, 1).toUpperCase() + category.substring(1)} />

      {
        results.length > 0
          ? (
            <div className="w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((item, index) => (
                <RecommendedArticle
                  key={index}
                  hasError={false}
                  isLoading={false}
                  item={item}
                  isLast={false}
                />
              ))}
            </div>
          )
          : (
            <p className="mb-[70vh] pt-18 text-xl text-black/60 dark:text-white-30">
              Sorry, there are no results for this category.
            </p>
          )
      }
    </div>
  );
}