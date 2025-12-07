import { ImageIcon } from "lucide-react";

const ArticlePage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;

  return (
    <article className="flex flex-col gap-8 p-4">
      <div
        className="flex-center_ w-full h-50 sm:h-70 md:h-100 bg-gray-300 rounded-3xl animate-pulse"
        >
        <ImageIcon className="z-50 w-10 h-10 text-gray-400 dark:text-gray-300" />
      </div>
          
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-center mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
      </h1>

      <div className="flex-between_">
        {/* <CategoryChip category="Technology" /> */}
        <p className="text-xs font-bold text-red-500">Technology</p>
        <p className="text-xs text-gray-500 text-right">
          12, November 2025
        </p>
      </div>

      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam tempora voluptates magnam modi vel exercitationem a ex deleniti reiciendis repellat quo, debitis placeat eveniet accusamus ipsam doloremque cum tempore ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi corporis doloribus dolorum numquam quae facere culpa nesciunt consequuntur veniam sit autem nemo at architecto asperiores, quisquam eum necessitatibus esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse odio aperiam, dolorem eius eaque pariatur quasi, doloribus repudiandae tempore facilis culpa illo? Voluptatem libero quam, accusantium ut architecto repudiandae. Tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore quae porro, commodi aliquid nesciunt consectetur qui quisquam doloremque itaque, culpa facere ab. Magnam reiciendis tempora nobis quibusdam ad voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit magni ad ratione assumenda cum iure, iusto laudantium adipisci aperiam consectetur ipsum explicabo eveniet nulla veritatis quibusdam aspernatur hic, nihil officiis.
      </p>
      <p className="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam tempora voluptates magnam modi vel exercitationem a ex deleniti reiciendis repellat quo, debitis placeat eveniet accusamus ipsam doloremque cum tempore ipsa? Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nisi corporis doloribus dolorum numquam quae facere culpa nesciunt consequuntur veniam sit autem nemo at architecto asperiores, quisquam eum necessitatibus esse! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse odio aperiam, dolorem eius eaque pariatur quasi, doloribus repudiandae tempore facilis culpa illo? Voluptatem libero quam, accusantium ut architecto repudiandae. Tempora! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam dolore quae porro, commodi aliquid nesciunt consectetur qui quisquam doloremque itaque, culpa facere ab. Magnam reiciendis tempora nobis quibusdam ad voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit magni ad ratione assumenda cum iure, iusto laudantium adipisci aperiam consectetur ipsum explicabo eveniet nulla veritatis quibusdam aspernatur hic, nihil officiis.
      </p>
    </article>
  );
};

export default ArticlePage;