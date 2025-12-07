"use client";

// Libraries
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { BrainIcon, ComputerIcon, DollarSignIcon, HeartIcon, SunIcon, MoonIcon } from "lucide-react";
import SearchBar from "./SearchBar";

const NavBar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const categories = [
    {
      name: "Technology",
      icon: <ComputerIcon className="w-3 h-3" />,
    },
    {
      name: "Science",
      icon: <BrainIcon className="w-3 h-3" />,
    },
    {
      name: "Health",
      icon: <HeartIcon className="w-3 h-3" />,
    },
    {
      name: "Business",
      icon: <DollarSignIcon className="w-3 h-3" />,
    },
  ];

  return (
    <div className="sticky top-0 left-0 right-0 z-50 bg-white/75 p-4 
      dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="flex-between_ max-w-[1600px] mx-auto">
        <a href="/" className="group flex items-center" >
          <h1 className="text-2xl font-expanded">
            Mantar
          </h1>
          <Image
            src={resolvedTheme === "dark" ? "/images/mantar-light.png" : "/images/mantar.png"}
            alt="Mantar Logo"
            width={32}
            height={32}
            className="ml-2 group-hover:scale-90 transition-all duration-300
            group-hover:animate-pulse loop-infinite"
            quality={100}
          />
        </a>

        <div className="items-center hidden lg:flex gap-14">
          {
            categories.map((category) => (
              <p
                key={category.name}
                className="flex-center_ gap-2 button-text_ text-xs font-bold text-black/70
                  dark:text-white/70"
              >
                <span>{category.name}</span>
              </p>
            ))
          }
        </div>

        <div className="flex-gap_">
          <div className="hidden lg:block">
            <SearchBar />
          </div>

          {
            mounted && (
              <button 
                className="group p-1 cursor-pointer"
                onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              >
                {
                  resolvedTheme === "dark" ? (
                    <SunIcon className="w-5 h-5 text-black/55 group-hover:text-black/85
                      scale-100 group-hover:scale-110 group-hover:rotate-135 transition-all
                      duration-200 ease-in-out dark:text-white/55 dark:group-hover:text-white/85"/>
                    ) : (
                      <MoonIcon className="w-5 h-5 text-black/55 group-hover:text-black/85
                        scale-100 group-hover:scale-110 group-hover:rotate-15 transition-all
                        duration-200 ease-in-out dark:text-white/55 dark:group-hover:text-white/85"/>
                    )
                }
              </button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default NavBar;