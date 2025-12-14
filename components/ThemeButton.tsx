import { SunIcon, MoonIcon } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface ThemeButtonProps {
  setTheme: Dispatch<SetStateAction<string>>;
  resolvedTheme: string | undefined;
}

const ThemeButton = ({ setTheme, resolvedTheme }: ThemeButtonProps) => {
  return (
    <button 
      className="group p-1 cursor-pointer z-200"
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
  );
}

export default ThemeButton;