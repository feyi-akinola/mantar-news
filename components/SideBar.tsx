"use client";

import { Squircle } from "corner-smoothing";
import SearchBar from "@/components/SearchBar";
import NewsSmall from "@/components/NewsSmall";
import NewsMedium from "@/components/NewsMedium";
import ViewAll from "@/components/ViewAll";

const SideBar = () => {
  const recommended = [
    {
      title: "The best way to learn React",
      description: "Learn React in 30 days. React is a JavaScript library for building user interfaces.",
      category: "React",
      time: "10 minutes ago",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Learning Next.js in 2025",
      description: "The best way to learn Next.js in 2025. Next.js is a React framework for building server-side applications.",
      category: "Next.js",
      time: "30 minutes ago",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "The best way to learn React",
      description: "Learn React in 30 days. React is a JavaScript library for building user interfaces.",
      category: "React",
      time: "1 hour ago",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <Squircle
      cornerRadius={25}
      style={{
        padding: "1rem",
        margin: "1rem",
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        flex: 3,
        gap: "1rem",
      }}
    >
      <SearchBar />

      {/* Recommended */}
      <div className="flex-between_ mt-4">
        <h2 className="text-xl font-bold">Recommended</h2>
        <ViewAll />
      </div>

      <NewsMedium />

      <div className="p-2 overflow-y-auto">
        {
          recommended.map((item, index) => (
            <NewsSmall key={index} item={item} isLast={index === recommended.length - 1} />
          ))
        }
      </div>

    </Squircle>
  );
};

export default SideBar;