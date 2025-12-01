"use client";

// Libraries
import { Squircle } from "corner-smoothing";
import axios, { AxiosResponse } from "axios";

// Hooks
import { useEffect, useState } from "react";

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
    <Squircle
      cornerRadius={30}
      style={{
        backgroundImage: bgImgStyle,
      }}
      className={`${bgColorStyle} ${bgImgStyle} gap-4 flex-col-end_ w-full h-150 p-8 bg-center bg-cover`}
    >
      <div className="flex-col-start_ gap-4 text-white">
        {
          isLoading
            ? <PulseFiller />
            : <CategoryChip category={item?.categories[0] ?? ""} />
        }

        {
          isLoading
            ? <PulseFillerText lines={2} height={8} gap={4}/>
            : <h1 className="text-3xl font-semibold">
                {item?.title}
              </h1>
        }
      </div>
    </Squircle>
  );
};