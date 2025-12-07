import Category from "./Category";
import SideBar from "./SideBar";
import ViewAll from "./ViewAll";

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
    <div className="relative flex flex-col lg:flex-row items-start gap-16 lg:gap-12">
      <div className="flex flex-col flex-1 min-w-0 gap-14">
        {
          categories.map((category) => (
            <Category key={category.slug} title={category.title} />
          ))
        }
      </div>

      <SideBar />
    </div>
  );
};

export default Categories;