"use client";

// Libraries
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import ThemeButton from "./ThemeButton";
import HamburgerMenu from "./HamburgerMenu";
import CountryPicker from "./CountryPicker";
import { categories } from "@/app/constants";
import Link from "next/link";

const NavBar = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

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
              <Link key={category.name} href={`/category/${category.name.toLowerCase()}`}>
                <p
                  className="flex-center_ gap-2 button-text_ text-xs font-bold text-black/70
                    dark:text-white/70"
                >
                  <span>{category.name}</span>
                </p>
              </Link>
            ))
          }
        </div>

        <div className="flex-gap_ items-center">
          <div className="hidden lg:block">
            <SearchBar inMenu={false}/>
          </div>

          <CountryPicker />

          {
            mounted && <ThemeButton setTheme={setTheme} resolvedTheme={resolvedTheme} />
          }

          <HamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default NavBar;