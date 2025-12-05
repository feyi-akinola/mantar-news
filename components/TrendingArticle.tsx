// Libraries
import Image from "next/image";
import { ImageIcon } from "lucide-react";

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
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

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

  useEffect(() => {
    // reset when the article image changes
    setImageLoaded(false);
  }, [item?.image_url]);

  return (
    <div className="flex-center_ flex-col">
      <div className="flex-between_ gap-4 mb-4 w-full">
        <div className="relative w-40 h-35 lg:w-55 shrink-0 rounded-xl overflow-hidden">
          {
            (!imageLoaded || !(item && item.image_url)) && (
              <div className="absolute inset-0 rounded-xl bg-gray-200 dark:bg-gray-600 animate-pulse flex-center_">
                <ImageIcon className="w-10 h-10 text-gray-300 dark:text-gray-500" />
              </div>
            )
          }
          {
            (item && item.image_url) && (
              <Image
                src={item.image_url}
                alt={item.title.slice(0, 10) + "..."}
                width={120}
                height={120}
                className="w-full h-full object-cover rounded-xl bg-gray-100"
                onLoadingComplete={() => setImageLoaded(true)}
              />
            )
          }
        </div>

        <div className="flex flex-col w-full gap-4">
          {
            item
              ? <CategoryChip category={item.categories[0]} />
              : <PulseFiller />
          }

          {
            item ? (
              <h3 className="font-bold line-clamp-3 leading-tight">{item.title}</h3>
            ) : (
              <PulseFillerText lines={3} height={3.5} gap={2} />
            )
          }

          {
            item ? (
              <p className="text-xs font-regular text-gray-400">
                {formatTime(item.published_at)}
              </p>
            ) : (
              <PulseFiller />
            )
          }
        </div>
      </div>

      {/* Divider */}
      {/* {
        !isLast && isInSideBar && (
          <div className="w-[80%] h-1 my-2 rounded-full bg-gray-100" />
        )
      } */}

      {/* Progress Bar */}
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden mt-2">
        <div
          className="h-full bg-blue-500 transition-all duration-10000 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};