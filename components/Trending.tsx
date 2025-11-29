"use client";

import NewsMediumVert from "./NewsMediumVert";
import ViewAll from "@/components/ViewAll";

const Trending = () => {
  const trending = [
    {
      title: "Trending 1",
      description: "Description 1",
      category: "Technology",
      time: "10 minutes ago",
    },
    {
      title: "Trending 2",
      description: "Description 2",
      category: "Technology",
      time: "10 minutes ago",
    },
    {
      title: "Trending 3",
      description: "Description 3",
      category: "Technology",
      time: "10 minutes ago",
    },
  ];

  return (
    <div className="flex-col-start_ gap-4 w-full">
      <div className="flex-between_ w-full">
        <h1 className="text-2xl font-bold">Trending</h1>
        <ViewAll />
      </div>

      <div className="flex-between_ w-full gap-4">
        {
          trending.map((item, index) => (
            <NewsMediumVert key={item.title} item={item} isLast={index === trending.length - 1} />
          ))
        }
      </div>

    </div>
  );
};

export default Trending;