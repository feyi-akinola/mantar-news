// Libraries
import { ClockIcon } from "lucide-react";
import Image from "next/image";

// Components
import CategoryChip from "@/components/CategoryChip";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Utils
import { formatTime } from "@/utils/time";

export default function NewsSmall({ item, isLast }: { item: NewsArticle, isLast: boolean }) {
  return (
    <div className="flex-col-center_">
      <div className="flex-between_ gap-4 mb-4 w-full">
        <div className="flex-col-start_ gap-1">
          <div className="flex-between_ w-full gap-12">
            <CategoryChip category={item.categories[0]} />

            <div className="flex-center_ gap-1">
              <p className="text-xs font-regular text-gray-400">
                {formatTime(item.published_at)}
              </p>
              <ClockIcon className="w-4 h-4 stroke-gray-400" />
            </div>
          </div>

          <h3 className="text-lg font-bold">{item.title}</h3>
          {/* <p className="text-sm text-gray-500">{item.description}</p> */}
        </div>

        <div className="w-30 h-30 shrink-0 rounded-xl bg-gray-200">
          <Image
            src={item.image_url}
            alt={item.title}
            width={112}
            height={112}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

    {
      !isLast && (
        <div className="w-[80%] h-1 my-2 rounded-full bg-gray-100" />
      )
    }
    </div>
  );
};