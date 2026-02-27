
// Libraries
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollSmoother } from "gsap/ScrollSmoother";

// Components
import Categories from "@/components/Categories";
import MainSection from "@/components/MainSection";

// Constants
import { NewsArticle } from "@/types/newsArticle";
import { routes } from "./api/routes";
import { transformNewsDataIOArticles } from "@/utils/data";

export default async function Home() {
  let latestNews: NewsArticle[] = [];
  let mainStory: NewsArticle | null = null;
  let hasError = false;

  try {
    latestNews = await fetchLatestNews();
  } catch {
    hasError = true;
  }

  async function fetchLatestNews(): Promise<NewsArticle[]> {
    try {
      const res = await fetch(`${routes.latest}`, {
        next: { revalidate: 60 },
      });
      if (!res.ok) return [];
      const data = await res.json();

      const results: NewsArticle[] = transformNewsDataIOArticles(data);
      if (results.length > 0) mainStory = results[0];
      
      return results;
    } catch {
      return [];
    }
  }
  
  // // GSAP
  // gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     wrapper: "#scroll-wrapper",
  //     content: "#scroll-content",
  //     smooth: 0.75,
  //     smoothTouch: 0.1,
  //   });
  // }, []);

  return (
    <div
      id="scroll-wrapper"
      className="antialiased bg-white text-black/90 dark:bg-black/95
      dark:text-white/90 tracking-wide min-h-screen pt-20"
    >
      <div
        id="scroll-content"
        className="max-w-[1600px] mx-auto flex flex-col gap-32 w-full p-6
          xl:gap-24"
      >
        <MainSection
          initialNews={latestNews}
          initialError={hasError}
          initialMainStory={mainStory}
        />

        <Categories />
      </div>
    </div>
  );
}
