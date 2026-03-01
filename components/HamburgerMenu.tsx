import { MenuIcon } from "lucide-react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { categories } from "@/app/constants";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="flex lg:hidden">
      <button
        onClick={toggleMenu}
        className="flex-center_ w-8 h-8 rounded-full
          cursor-pointer group z-200">
          <MenuIcon
            className="w-5 h-5 scale-100 text-black/70 dark:text-white/70
              group-hover:scale-110 group-hover:text-black dark:group-hover:text-white
              transition-all duration-300 "/>
      </button>

      <div
        className={`absolute w-screen h-screen bg-white dark:bg-black flex-col 
          ${isOpen ? 'translate-x-0' : 'translate-x-340'} px-12 py-8 gap-24 left-0 
          flex top-0 z-100 pt-18 transition-all duration-450 ${isOpen ? 'ease-out' : 'ease-in'}
          items-start`}>
        <SearchBar inMenu/>

        <div className="flex flex-col gap-8 items-start text-2xl">
          {
            categories.map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.name.toLowerCase()}`} 
                onClick={() => setIsOpen(false)}
              >
                <p                  
                  className="flex-center_ gap-2 button-text_ font-bold text-black/80
                    dark:text-white/80"
                >
                  <span>{category.name}</span>
                </p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenu;