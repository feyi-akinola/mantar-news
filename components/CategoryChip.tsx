import { Squircle } from "corner-smoothing";

const CategoryChip = ({ category }: { category: string }) => {
  return (
    <Squircle
      cornerRadius={10}
      style={{
        padding: "0.3rem 0.6rem",
        backgroundColor: "#e6f0fc",
        width: "fit-content",
      }}
    >
      <p className="text-xs text-blue-500 font-bold">{category}</p>
    </Squircle>
  );
};

export default CategoryChip;