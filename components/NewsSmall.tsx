// Libraries
import { ClockIcon } from "lucide-react";
import Image from "next/image";

// Components
import CategoryChip from "@/components/CategoryChip";
import { PulseFiller, PulseFillerText } from "@/components/PulseFiller";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Utils
import { formatTime } from "@/utils/time";

interface NewsSmallProps {
  item?: NewsArticle;
  isLast?: boolean;
}

export default function NewsSmall({ item, isLast }: NewsSmallProps) {
  return (
    <div className="flex-col-center_">
      <div className="flex-between_ gap-4 mb-4 w-full">
        <div className="flex-col-start_ w-full gap-4">
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
                  <ClockIcon className="w-4 h-4 stroke-gray-400" />
                </div>
              ) : (
                <PulseFiller />
              )
            }
          </div>

          {
            item ? (
              <h3 className="font-bold">{item.title}</h3>
            ) : (
              <PulseFillerText lines={3} height={3.5} gap={2} />
            )
          }
          {/* <p className="text-sm text-gray-500">{item.description}</p> */}
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

    {
      !isLast && (
        <div className="w-[80%] h-1 my-2 rounded-full bg-gray-100" />
      )
    }
    </div>
  );
};