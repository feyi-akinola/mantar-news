"use client";

// Libraries
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

// GSAP initializer
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) { 
  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#scroll-wrapper",
      content: "#scroll-content",
      smooth: 0.75,
      smoothTouch: 0.1,
    });

    return () => smoother.kill(); // cleanup
  }, []);

  return (
    <div id="scroll-wrapper" className="bg-white! dark:bg-black/95! text-black/90
      dark:text-white/90 pt-14">
      <div id="scroll-content">{children}</div>
    </div>
  );
}