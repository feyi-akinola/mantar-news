import NewsMain from "@/components/NewsMain";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <div className="m-4 flex flex-col-start_ gap-16">
      <NewsMain />

      <Trending />
    </div>
  );
}
