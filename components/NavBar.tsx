import Image from "next/image";
import { BrainIcon, ComputerIcon, DollarSignIcon, HeartIcon } from "lucide-react";

const NavBar = () => {
  const categories = [
    {
      name: "Technology",
      icon: <ComputerIcon className="w-3 h-3" />,
    },
    {
      name: "Science",
      icon: <BrainIcon className="w-3 h-3" />,
    },
    {
      name: "Health",
      icon: <HeartIcon className="w-3 h-3" />,
    },
    {
      name: "Business",
      icon: <DollarSignIcon className="w-3 h-3" />,
    },
  ];

  return (
    <div className="mx-4 mt-4 flex-between_ text-black">
      <a href="/" className="flex items-center" >
        <h1 className="text-2xl font-expanded">
          Mantar
        </h1>
        <Image
          src="/images/mantar.png"
          alt="Mantar Logo"
          width={32}
          height={32}
          className="ml-2"
          quality={100}
        />
      </a>

      <div className="flex gap-12">
        {
          categories.map((category) => (
            <p className="button-text_ text-xs text-black/55 font-bold">
              {category.name}
            </p>
          ))
        }
      </div>
    </div>
  );
};

export default NavBar;