import { Squircle } from "corner-smoothing";

const NewsMedium = () => {
  return (
    <Squircle
      cornerRadius={20}
      className="w-full h-[220px] flex-center_mb-8 animate-pulse bg-gray-200"
    >
      <div></div>
    </Squircle>
  );
};

export default NewsMedium;