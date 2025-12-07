// Libraries
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-42 pb-20 border-t border-gray-300 dark:border-gray-800/40">
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
          <a href="/about" className="hover:text-black dark:hover:text-white">About</a>
          <a href="/contact" className="hover:text-black dark:hover:text-white">Contact</a>
          <a href="/privacy" className="hover:text-black dark:hover:text-white">Privacy</a>
          <a href="/terms" className="hover:text-black dark:hover:text-white">Terms</a>
          <a href="/rss" className="hover:text-black dark:hover:text-white">RSS</a>
        </div>

        {/* Bottom */}
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center lg:text-start">
          © {new Date().getFullYear()} Mantar News · Built by{" "}
          <a
            href="https://your-portfolio-link.com"
            target="_blank"
            className="hover:text-black dark:hover:text-white"
          >
            Feyi Akinola
          </a>
          {" "}using Next.js & NewsData.io
        </div>
      </div>
    </footer>
  );
}
