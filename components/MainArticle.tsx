
// Types
import { NewsArticle } from "@/types/newsArticle";

// Components
import CategoryChip from "@/components/CategoryChip";
import { PulseFiller, PulseFillerText } from "./PulseFiller";
import ImagePlaceholder from "./ImagePlaceholder";

interface MainArticleProps {
  item: NewsArticle | null;
  isLoading: boolean;
  hasError: boolean;
}

export default function MainArticle({ item, isLoading, hasError }: MainArticleProps) {
  const bgImgStyle = isLoading
    ? undefined
    : `linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6) 20%, rgba(0,0,0,0) 60%), url(${item?.image_url})`;
  const bgColorStyle = isLoading ? "loading-bg_" : hasError ? "error-bg_" : "bg-gray_";

  return (
    <article className="flex-5">
      <div
        style={{ backgroundImage: isLoading || hasError ? undefined : bgImgStyle }}
        className={`relative ${bgColorStyle} gap-4 w-full h-90
          p-8 bg-center bg-cover shrink-0 flex flex-col justify-end
          text-white sm:h-120 lg:h-full rounded-4xl`}
      >
        {
          isLoading
            ? <PulseFiller color="white"/>
            : <CategoryChip category={item?.categories[0] ?? ""} />
        }

        {
          isLoading
            ? <PulseFillerText color="white" lines={2} height={8} gap={4}/>
            : <h1 className="text-xl sm:text-3xl font-semibold">
                {item?.title}
              </h1>
        }

        <ImagePlaceholder
          isLoading={isLoading}
          hasError={hasError}
          width={14}
          height={14}
        />
      </div>
    </article>
  );
};