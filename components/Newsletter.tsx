// Libraries
import { SendHorizontal } from "lucide-react";

const Newsletter = () => {
  return (
    <div className="px-4 lg:px-24 py-40 flex items-center justify-center text-white text-shadow-md">
      <div className="flex flex-col gap-4 md:gap-8 lg:gap-14 p-14 rounded-4xl text-center items-center
        bg-[url('/images/abstract-bg.jpg')] bg-cover bg-center">
        <h2 className="text-xl md:text-3xl lg:text-5xl font-semibold max-w-180 text-white
          font-expanded">
          Ready, Set, Informed.
        </h2>
        <p className="text-sm md:text-lg lg:text-2xl max-w-180">
          Stay ahead of the headlines and never miss a story. Get the latest updates from your favorite topics mailed to you{" "}
          <span className="underline_">every week.</span>
        </p>

        <form className="flex items-center justify-center gap-8 border-b-2 md:border-b-4 p-4
          border-white/60 focus:lg:border-red-500
          hover:md:border-red-500 transition-all duration-500 w-60 hover:md:w-100
          focus-within:md:w-100 ease-in-out group relative">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full max-w-100 outline-none bg-transparent text-xs md:text-base text-white"
          />
          <button type="submit" className="absolute right-0">
            <SendHorizontal className="cursor-pointer hover:md:text-red-500 transition-all
                duration-300 scale-75 group-hover:md:scale-100 group-focus-within:md:scale-100"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;