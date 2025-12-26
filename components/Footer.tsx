// Libraries
import Image from "next/image";

export default function Footer() {
  const links = [
    "About",
    "Contact",
    "Privacy",
    "Terms",
    "RSS",
  ];

  return (
    <footer className="w-full pb-20 border-t border-gray-300 dark:border-gray-800/40">
      <div className="max-w-6xl mx-auto px-6 py-10 flex-center_ flex-col gap-8">

        {/* Branding */}
        <div className="flex-center_  flex-col lg:flex-row gap-8">
          <div className="flex gap-2">
            <h2 className="text-2xl lg:text-4xl font-bold font-expanded">Mantar</h2>
            <Image
              src="/images/mantar.png"
              alt="Mantar Logo"
              width={40}
              height={40}
              className="hidden lg:block"
            />
          </div>
          <p className="max-w-120 text-xs lg:text-sm text-gray-500 dark:text-gray-400
            text-center lg:text-start">
            Mantar news is a news website that provides the latest news and updates from all around the world.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-6 text-xs lg:text-sm font-medium text-gray-600 dark:text-gray-300">
          {
            links.map((item, index) => (
              <a key={index} href="#" className="button-text_">
                {item}
              </a>
            ))
          }
        </div>

        {/* Bottom */}
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center lg:text-start">
          © {new Date().getFullYear()} Mantar News · Built by{" "}
          <a href="#" className="font-bold" > Feyi Akinola</a>
          {" "}using Next.js & NewsData.io
        </div>
      </div>
    </footer>
  );
}
