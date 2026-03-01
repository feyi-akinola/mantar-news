"use client";

// Utils
import { capitalizeFirstLetter } from "@/utils/string";

const CategoryChip = ({ category }: { category: string }) => {
  const url = `/category/${category.toLowerCase()}`;

  return (
    <div onClick={() => url && window.open(url, "_blank")}>
      <div
        className="px-2.5 py-1.25 bg-red-100 dark:bg-red-900 rounded-full"
        style={{
          width: "fit-content",
        }}
      >
        <p className="text-xs text-red-600 dark:text-red-300 font-bold">
          {capitalizeFirstLetter(category)}
        </p>
      </div>
    </div>
  );
};

export default CategoryChip;