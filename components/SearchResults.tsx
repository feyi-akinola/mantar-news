"use client";

import { NewsArticle } from '@/types/newsArticle';
import RecommendedArticle from '@/components/RecommendedArticle';

interface Props {
  query: string;
  results: NewsArticle[];
}

export default function SearchResultsClient({ query, results }: Props) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 md:gap-14 p-12">
      <h2 className="text-2xl md:text-4xl font-bold">
        Search Results for "{query}".
      </h2>
      {results.length > 0
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
          <p className="text-xl text-black/40 dark:text-white-30">
            Sorry, there are no results matching that search term.
          </p>
        )
      }
    </div>
  );
}