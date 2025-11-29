import { ArrowRightIcon } from "lucide-react"

const ViewAll = () => {
  return (
    <button className="button-text_ flex-center_ gap-2 text-sm px-2 text-gray-400">
      <p>View All</p>
      <ArrowRightIcon className="w-3 h-3" />
    </button>
  );
};

export default ViewAll;