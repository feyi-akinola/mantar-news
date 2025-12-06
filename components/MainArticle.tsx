"use client";

// Libraries
import { Squircle } from "corner-smoothing";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Components
import CategoryChip from "@/components/CategoryChip";
import { PulseFiller, PulseFillerText } from "./PulseFiller";

interface MainArticleProps {
  item: NewsArticle | null;
  isLoading: boolean;
}

export default function MainArticle({ item, isLoading }: MainArticleProps) {
  const bgImgStyle = isLoading
    ? undefined
    : `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 60%), url(${item?.image_url})`;
  const bgColorStyle = isLoading
    ? "bg-black/10 animate-pulse"
    : undefined;

  return (
    <div className="flex flex-col gap-4">
      <Squircle
        cornerRadius={30}
        style={{ backgroundImage: bgImgStyle }}
        className={`${bgColorStyle} ${bgImgStyle} gap-4 w-full h-80
          p-8 bg-center bg-cover shrink-0 flex flex-col justify-end
          text-white sm:h-110 xl:h-130`}
      >
        {
          isLoading
            ? <PulseFiller color="white"/>
            : <CategoryChip category={item?.categories[0] ?? ""} />
        }
      </Squircle>

      {
        isLoading
          ? <PulseFillerText color="white" lines={2} height={8} gap={4}/>
          : <h1 className="text-xl sm:text-3xl font-semibold">
              {item?.title}
            </h1>
      }
    </div>
  );
};