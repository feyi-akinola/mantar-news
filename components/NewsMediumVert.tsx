import { Squircle } from "corner-smoothing";
import CategoryChip from "./CategoryChip";

const NewsMediumVert = ({ item, isLast }: { item: any, isLast: boolean }) => {
  return (
    <div className="flex flex-col w-full gap-2">
      {/* <CategoryChip category={item.category} /> */}
      <p className="text-xs text-blue-500 font-bold">{item.category}</p>
      <p className="text-lg font-bold">
        {item.title}
      </p>
    </div>
  );
};

export default NewsMediumVert;