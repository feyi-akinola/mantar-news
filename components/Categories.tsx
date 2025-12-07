import Category from "./Category";
import SideBar from "./SideBar";

const Categories = () => {
  const categories = [
    {
      title: "Politics",
      slug: "politics",
    },
    {
      title: "Technology",
      slug: "technology",
    },
    {
      title: "Business",
      slug: "business",
    },
  ];

  return (
    <div className="relative w-full flex flex-col lg:flex-row gap-16 lg:gap-12">
      <div className="flex flex-col flex-7 gap-14">
        {
          categories.map((category) => (
            <Category key={category.slug} title={category.title} />
          ))
        }
      </div>


      <div className="flex-3">
        <SideBar />
      </div>
    </div>
  );
};

export default Categories;