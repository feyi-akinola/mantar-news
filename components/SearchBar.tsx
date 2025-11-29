import { Squircle } from "corner-smoothing";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <Squircle
      cornerRadius={15}
      style={{
        padding: "0.75rem 1.5rem",
        backgroundColor: "#e5e7eb",
        color: "darkgray",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
        flexShrink: 0,
      }}
    >
      <input
        type="text"
        placeholder="Search"
        className="w-full h-full outline-none text-black placeholder:text-[darkgray]"
      />
      <SearchIcon className="w-6 h-6 shrink-0" />
    </Squircle>
  );
};

export default SearchBar;