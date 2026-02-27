// Libraries
import Image from "next/image";

// Components
import CategoryChip from "@/components/CategoryChip";
import { PulseFiller, PulseFillerText } from "@/components/PulseFiller";
import ImagePlaceholder from "./ImagePlaceholder";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Utils
import { formatTime } from "@/utils/time";

interface RecommendedArticleProps {
  item?: NewsArticle;
  isLast?: boolean;
  hasTag?: boolean;
  isLoading: boolean;
  hasError: boolean;
}

export default function RecommendedArticle({ item, isLast, hasTag, isLoading, hasError }: RecommendedArticleProps) {
  return (
    <article>
      <a href="#" className="flex-center_ flex-col gap-2 group button-text_">
        { /* Category and Time */}
        {
          hasTag && (
            <div className="flex-between_ w-full gap-12">
              {
                item
                ? <CategoryChip category={item.categories[0]} />
                : <PulseFiller isLoading={isLoading} hasError={hasError} />
              }

              {
                item ? (
                  <div className="flex-center_ gap-1">
                    <p className="text-xs font-regular text-gray-400">
                      {formatTime(item.published_at)}
                    </p>
                  </div>
                ) : (
                  <PulseFiller isLoading={isLoading} hasError={hasError} />
                )
              }
            </div>
          )
        }

        { /* Image */}
        <div className="relative h-70 lg:h-60 w-full shrink-0 rounded-3xl overflow-hidden">
          {
            !(item && item.image_url) && (
              <div
                className={`absolute inset-0 rounded-3xl flex-center_
                ${isLoading ? 'loading-bg_ animate-pulse' : hasError ? 'error-bg_' : ''} `}>
                <ImagePlaceholder
                  isLoading={isLoading}
                  hasError={hasError}
                  width={10}
                  height={10}
                />
              </div>
            )
          }
          {
            item && item.image_url && (
              <Image
                src={item.image_url}
                alt={item.title.slice(0, 10) + "..."}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px)"
                className="w-full h-full object-cover rounded-3xl bg-gray-100
                  group-hover:scale-105 transition-all duration-300 ease-out"
                // onLoadingComplete={() => setImageLoaded(true)}
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
              <PulseFillerText 
                lines={3} 
                height={3.5} 
                gap={2} 
                isLoading={isLoading} 
                hasError={hasError} />
            )
          }
        </div>
      </a>
    </article>
  );
};