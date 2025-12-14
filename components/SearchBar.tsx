import { SearchIcon } from "lucide-react";

const SearchBar = ({ inMenu }: { inMenu: boolean}) => {
  return (
    <div
      className={`bg-gray-200 dark:bg-gray-700 flex-center_ gap-2
        px-6 py-3 text-black/30 dark:text-white/30 rounded-2xl
        ${inMenu ? 'w-full' : 'w-65 xl:w-80'} hover:bg-gray-300
        dark:hover:bg-gray-600 transition-all duration-300`}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full outline-none text-black text-sm
        placeholder:text-black/50 dark:placeholder:text-white/30
        placeholder:text-sm dark:text-white"
      />
      <SearchIcon className="w-5 h-5" />
    </div>
  );
};

export default SearchBar;