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
          <div className="antialiased flex flex-col gap-6 xl:flex-row min-h-screen min-w-screen
            w-full lg:h-screen overflow-hidden bg-white text-black/90 p-6
            dark:bg-black/0 dark:text-white/90 tracking-wide">
            <div className="flex flex-7 flex-col w-full text-black/90
              dark:text-white/90 gap-6">
              <NavBar />
              <div className="overflow-y-auto">
                {children}
              </div>
            </div>

            <SideBar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
