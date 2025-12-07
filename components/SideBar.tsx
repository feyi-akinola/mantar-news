"use client";

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
  const [trending, setTrending] = useState<NewsArticle[]>([]);
  const pinRef = useRef<HTMLDivElement | null>(null);

  const transformTrending = (data: any): NewsArticle[] => {
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

  const fetchTrending = async () => {
    const response: AxiosResponse = await axios.get(routes.trending);
    const data = await response.data ?? [];
    const status = response.status;

    if (status === 200) {
      setTrending(transformTrending(data));
    }
  };

  useEffect(() => {
    const loadTrending = async () => {
      try {
        await fetchTrending();
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTrending();
  }, []);

  // GSAP pin to emulate sticky within ScrollSmoother context
  useLayoutEffect(() => {
    const el = pinRef.current;
    if (!el) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = el.parentElement as HTMLElement | null;
    if (!container) return;

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
  }, []);

  return (
    <div ref={pinRef} className="self-start w-full lg:w-[360px] flex flex-col
      gap-4">

      {/* Recommended */}
      <div className="flex-between_">
        <h2 className="text-xl font-bold">Recommended</h2>
        <ViewAll />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-y-8
        gap-x-4 items-start">
        {
          isLoading
            ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <RecommendedArticle key={index} />
                ))
              )
            : (
                trending.map((item, index) => (
                  <RecommendedArticle key={index} item={item} isLast={index === trending.length - 1} />
                ))
              )
        }
      </div>
    </div>
  );
};

export default SideBar;