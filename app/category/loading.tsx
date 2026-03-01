import RecommendedArticle from "@/components/RecommendedArticle";
import TitleBanner from "@/components/TitleBanner";

export default function Loading() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-10 md:gap-14 p-12">
      <TitleBanner title={"Loading..."} />

      <div className="w-full grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <RecommendedArticle
            key={i}
            isLoading={true}
            hasError={false}
          />
        ))}
      </div>
    </div>
  );
}