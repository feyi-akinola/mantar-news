// Libraries
import Image from "next/image";

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
  isInSideBar?: boolean;
}

export default function RecommendedArticle({ item, isLast, isInSideBar=false }: RecommendedArticleProps) {
  return (
    <div className="flex-center_flex-col">
      <div className="flex-center_ flex-col md:flex-row gap-4 mb-4 w-full">
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
              <h3 className="font-bold line-clamp-3 leading-tight">{item.title}</h3>
            ) : (
              <PulseFillerText lines={3} height={3.5} gap={2} />
            )
          }
        </div>

        {
          item && item.image_url ? (
            <div className="h-60 w-full md:h-30 md:w-30 shrink-0 rounded-xl bg-gray-200">
              <Image
                src={item.image_url}
                alt={item.title.slice(0, 10) + "..."}
                width={100}
                height={100}
                className="w-full h-full object-cover rounded-xl bg-gray-100"
              />
            </div>
          ) : (
            <div className="w-30 h-30 shrink-0 rounded-xl bg-gray-200 animate-pulse" />
          )
        }
      </div>

      {
        !isLast && isInSideBar && (
          <div className="w-[80%] h-1 my-2 rounded-full bg-gray-100" />
        )
      }
    </div>
  );
};