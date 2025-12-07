// Libraries
import axios, { AxiosResponse } from "axios";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import RecommendedArticle from "@/components/RecommendedArticle";
import ViewAll from "@/components/ViewAll";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Constants
import { routes } from "@/app/api/routes";

const SideBar = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const pinRef = useRef<HTMLDivElement | null>(null);

  const transformArticles = (data: any): NewsArticle[] => {
    if (!data || !Array.isArray(data) || data.length === 0) {
      return [];
    }

    return data.map((item: any): NewsArticle => ({
      uuid: item.id,
      title: item.title,
      description: item.description,
      image_url: item.image || "",
      url: item.url,
      published_at: item.publishedAt,
      categories: ["general"],
      language: item.lang,
    }));
  };

  const fetchArticles = async () => {
    const response: AxiosResponse = await axios.get(routes.trending);
    const data = await response.data ?? [];
    const status = response.status;

    if (status === 200) {
      setArticles(transformArticles(data));
    } else {
      setHasError(true);
    }
  };

  useEffect(() => {
    const loadArticles = async () => {
      try {
        await fetchArticles();
      } catch (error) {
        console.error(error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadArticles();
  }, []);

  // GSAP pin only on xl+ screens
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const el = pinRef.current;
      if (!el) return () => {};

      const container = el.parentElement as HTMLElement | null;
      if (!container) return () => {};

      const NAVBAR_OFFSET_PX = 90; // adjust to match NavBar height

      const st = ScrollTrigger.create({
        trigger: container,
        start: `top top+=${NAVBAR_OFFSET_PX}`,
        end: () => `+=${container.scrollHeight - el.offsetHeight}`,
        pin: el,
        pinSpacing: true,
        pinReparent: true,
        invalidateOnRefresh: true,
      });

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener("load", onLoad);

      return () => {
        window.removeEventListener("load", onLoad);
        st.kill();
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <div ref={pinRef} className="w-full flex flex-col gap-4">

      {/* Recommended */}
      <div className="flex-between_">
        <h2 className="text-xl font-bold">Recommended</h2>
        <ViewAll />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-8
        gap-x-4 items-start">
        {
          Array.from({ length: 3 }).map((_, index) => (
            <RecommendedArticle
              key={index}
              item={articles.length > 0 ? articles[index] : undefined}
              isLast={false}
              hasTag={false}
              isLoading={isLoading}
              hasError={hasError}
            />
          ))
        }
      </div>
    </div>
  );
};

export default SideBar;