// Utils
import { capitalizeFirstLetter } from "@/utils/string";

const CategoryChip = ({ category }: { category: string }) => {
  return (
    <div
      className="px-2.4 py-1.2 bg-[#e6f0fc] rounded-full"
      style={{
        width: "fit-content",
      }}
    >
      <p className="text-xs text-blue-500 font-bold">
        {capitalizeFirstLetter(category)}
      </p>
    </div>
  );
};

export default CategoryChip;