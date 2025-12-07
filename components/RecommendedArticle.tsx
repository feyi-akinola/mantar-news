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

interface RecommendedArticleProps {
  item?: NewsArticle;
  isLast?: boolean;
  hasTag?: boolean;
}

export default function RecommendedArticle({ item, isLast, hasTag }: RecommendedArticleProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    // reset when the article image changes
    setImageLoaded(false);
  }, [item?.image_url]);

  return (
    <div className="flex-center_ flex-col gap-2">
      { /* Category and Time */}
      {
        hasTag && (
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
        )
      }

      { /* Image */}
      <div className="relative h-50 sm:h-40 lg:h-50 w-full shrink-0 rounded-xl overflow-hidden">
        {
          (!imageLoaded || !(item && item.image_url)) && (
            <div className="absolute inset-0 rounded-3xl bg-gray-200 dark:bg-gray-600 animate-pulse flex-center_">
              <ImageIcon className="w-14 h-14 text-gray-300 dark:text-gray-500" />
            </div>
          )
        }
        {
          item && item.image_url && (
            <Image
              src={item.image_url}
              alt={item.title.slice(0, 10) + "..."}
              width={100}
              height={100}
              className="w-full h-full object-cover rounded-2xl bg-gray-100"
              onLoadingComplete={() => setImageLoaded(true)}
            />
          )
        }
      </div>

      { /* Title */}
      <div className="flex flex-col w-full gap-4">
        {
          item ? (
            <h3 className="font-bold line-clamp-3 leading-tight">
              {item.title}
            </h3>
          ) : (
            <PulseFillerText lines={3} height={3.5} gap={2} />
          )
        }
      </div>

      { /* Divider */}
      {/* {
        !isLast && (
          <div className="block sm:hidden xl:block w-full h-1 my-2 rounded-full
            bg-gray-200" />
        )
      } */}
    </div>
  );
};