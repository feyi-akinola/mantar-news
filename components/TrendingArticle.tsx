// Libraries
import Image from "next/image";

// Hooks
import { useState, useEffect, useRef } from "react";

// Components
import CategoryChip from "@/components/CategoryChip";
import { PulseFiller, PulseFillerText } from "@/components/PulseFiller";
import ImagePlaceholder from "./ImagePlaceholderIcon";

// Types
import { NewsArticle } from "@/types/newsArticle";

// Utils
import { formatTime } from "@/utils/time";
import Link from "next/link";

interface TrendingArticleProps {
  item?: NewsArticle;
  isLast?: boolean;
  isActive?: boolean;
  isLoading: boolean;
  hasError: boolean;
  onProgressComplete?: () => void;
}

export default function TrendingArticle({ item, isLast, isActive, onProgressComplete, isLoading, hasError }: TrendingArticleProps) {
  const [progress, setProgress] = useState<number>(0);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [paused, setPaused] = useState<boolean>(false);
  const [remainingMs, setRemainingMs] = useState<number | null>(null);

  const DURATION_MS = 6000;
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startRef = useRef<number | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    // Reset progress while loading or on error
    if (isLoading || hasError) {
      clearTimer();
      setPaused(false);
      setRemainingMs(null);
      setProgress(0);
      return;
    }

    if (!isActive) {
      clearTimer();
      setPaused(false);
      setRemainingMs(null);
      setProgress(0);
      return;
    }

    // animate progress for 10s
    setProgress(100);
    startRef.current = performance.now();
    clearTimer();
    const timer = setTimeout(() => {
      onProgressComplete && onProgressComplete();
    }, DURATION_MS);
    timerRef.current = timer;

    return () => clearTimeout(timer);
  }, [isActive, isLoading, hasError]);

  useEffect(() => {
    // reset when the article image changes
    setImageLoaded(false);
  }, [item?.image_url]);

  const handleMouseEnter = () => {
    if (!isActive || isLoading || hasError || paused) return;

    // Freeze current progress by measuring current width
    const trackWidth = trackRef.current?.offsetWidth ?? 0;
    const barWidth = barRef.current?.offsetWidth ?? 0;

    if (trackWidth > 0) {
      const pct = Math.min(100, Math.max(0, (barWidth / trackWidth) * 100));
      setProgress(pct);
      const remaining = Math.max(0, DURATION_MS * (100 - pct) / 100);
      setRemainingMs(remaining);
      setPaused(true);
      clearTimer();
    }
  };

  const handleMouseLeave = () => {
    if (!isActive || isLoading || hasError || !paused) return;

    const remaining = remainingMs ?? DURATION_MS;
    setPaused(false);
    startRef.current = performance.now();
    // Resume transition to 100 with remaining time
    setProgress(100);
    clearTimer();
    timerRef.current = setTimeout(() => {
      onProgressComplete && onProgressComplete();
    }, remaining);
  };

  return (
    <Link href={item?.url ?? "#"} target={item?.url ?? "_blank"}>
      <article
        className="flex-center_ flex-col gap-2 group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex-between_ gap-4 w-full">
          <div className="relative w-40 h-35 lg:w-55 shrink-0 rounded-xl overflow-hidden">
            {
              (!imageLoaded || !(item && item.image_url)) && (
                <div className={`absolute inset-0 rounded-xl flex-center_
                  ${isLoading ? 'loading-bg_' : hasError ? 'error-bg_' : 'bg-gray_'} `}>
                  <ImagePlaceholder
                    isLoading={isLoading}
                    hasError={hasError}
                    width={10}
                    height={10}
                  />
                </div>
              )
            }
            {
              (item && item.image_url) && (
                <Image
                  src={item.image_url}
                  alt={item.title.slice(0, 10) + "..."}
                  width={120}
                  height={120}
                  className="w-full h-full object-cover rounded-xl bg-gray-100"
                  onLoadingComplete={() => setImageLoaded(true)}
                />
              )
            }
          </div>

          <div className="flex flex-col w-full gap-2">
            {
              item
                ? <CategoryChip category={item.categories[0]} />
                : <PulseFiller isLoading={isLoading} hasError={hasError} />
            }

            {/* Progress Bar */}
            <div
              ref={trackRef}
              className={`w-full h-1 rounded-full overflow-hidden ${isActive && !isLoading && !hasError ? 'bg-gray_' : 'bg-transparent'}`}
            >
              <div
                ref={barRef}
                className="h-full bg-red-500"
                style={{
                  width: isActive && !isLoading && !hasError ? `${progress}%` : '0%',
                  transition:
                    isActive && !isLoading && !hasError && !paused
                      ? `width ${remainingMs ?? DURATION_MS}ms linear`
                      : 'none',
                }}
              />
            </div>

            {
              item ? (
                <h3 className="font-bold line-clamp-3 leading-tight">{item.title}</h3>
              ) : (
                <PulseFillerText
                  lines={3}
                  height={3.5}
                  gap={2}
                  isLoading={isLoading}
                  hasError={hasError} />
              )
            }

            {
              item ? (
                <p className="mt-2 text-xs font-regular text-gray-400">
                  {formatTime(item.published_at)}
                </p>
              ) : (
                <PulseFiller isLoading={isLoading} hasError={hasError} />
              )
            }
          </div>
        </div>
      </article>
    </Link>
  );
};