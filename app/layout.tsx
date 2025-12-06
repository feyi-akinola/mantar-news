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
          <div className="antialiased bg-white text-black/90 dark:bg-black/95
            dark:text-white/90 tracking-wide min-h-screen
            ">
            <div className="max-w-[2000px] mx-auto">
              <NavBar />
              <div className="flex flex-col gap-14 xl:flex-row w-full text-black/90
                dark:text-white/90 p-6 overflow-hidden xl:gap-6">
                <div className=" flex flex-7 flex-col overflow-y-auto">
                  {children}
                </div>

                <SideBar />
              </div>
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
