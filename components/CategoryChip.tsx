// Utils
import { capitalizeFirstLetter } from "@/utils/string";

const CategoryChip = ({ category }: { category: string }) => {
  return (
    <div
      className="px-2.4 py-1.2 bg-[#fce6e6] rounded-full"
      style={{
        width: "fit-content",
      }}
    >
      <p className="text-xs text-red-500 font-bold">
        {capitalizeFirstLetter(category)}
      </p>
    </div>
  );
};

export default CategoryChip;