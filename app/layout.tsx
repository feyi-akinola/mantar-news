// Libraries
import type { Metadata } from "next";

// Styles
import "@/app/globals.css";

// Components
import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";

// Providers
import Providers from "@/app/providers";

export const metadata: Metadata = {
  title: "Mantar News",
  description: "Mantar News is a news website that provides the latest news and updates from all around the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="antialiased flex min-h-screen min-w-screen h-full w-ful
            bg-gray-200 text-black/90 dark:bg-black/0 dark:text-white/90 tracking-wide">
            <div className="flex-7 flex flex-col h-full w-full text-black/90
              dark:text-white/90">
              <NavBar />
              {children}
            </div>
            <SideBar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
