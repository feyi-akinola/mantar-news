// Libraries
import Image from "next/image";

// Hooks
import { useState, useEffect } from "react";

// Components
import CategoryChip from "@/components/CategoryChip";
import { PulseFiller, PulseFillerText } from "@/components/PulseFiller";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Utils
import { formatTime } from "@/utils/time";

interface TrendingArticleProps {
  item?: NewsArticle;
  isLast?: boolean;
  isActive?: boolean;
  onProgressComplete?: () => void;
}

export default function TrendingArticle({ item, isLast, isActive, onProgressComplete }: TrendingArticleProps) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    if (!isActive) {
      setProgress(0);
      return;
    }

    // animate progress for 5s
    setProgress(100);
    const timer = setTimeout(() => {
      onProgressComplete && onProgressComplete();
    }, 10000);

    return () => clearTimeout(timer);
  }, [isActive]);

  return (
    <div className="flex-center_ flex-col">
      <div className="flex-between_ gap-4 mb-4 w-full">
        <div className="flex flex-col w-full gap-4">
          <div className="flex-between_ w-full gap-12">
            {
              item
                ? <CategoryChip category={item.categories[0]} />
                : <PulseFiller />
            }

            {
              item ? (
                <div className="flex-center_ gap-1">
                  <p className="text-xs font-regular text-gray-400">
                    {formatTime(item.published_at)}
                  </p>
                </div>
              ) : (
                <PulseFiller />
              )
            }
          </div>

          {
            item ? (
              <h3 className="font-bold line-clamp-3">{item.title}</h3>
            ) : (
              <PulseFillerText lines={3} height={3.5} gap={2} />
            )
          }
        </div>

        {
          item && item.image_url ? (
            <div className="w-30 h-30 shrink-0 rounded-xl bg-gray-200">
              <Image
                src={item.image_url}
                alt={item.title.slice(0, 10) + "..."}
                width={120}
                height={120}
                className="w-full h-full object-cover rounded-xl bg-gray-100"
              />
            </div>
          ) : (
            <div className="w-30 h-30 shrink-0 rounded-xl bg-gray-200 animate-pulse" />
          )
        }
      </div>

      {/* Divider */}
      {/* {
        !isLast && isInSideBar && (
          <div className="w-[80%] h-1 my-2 rounded-full bg-gray-100" />
        )
      } */}

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden mt-2">
        <div
          className="h-full bg-blue-500 transition-all duration-10000 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};