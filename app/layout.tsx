// Libraries
import type { Metadata } from "next";

// Styles
import "@/app/globals.css";

// Components
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

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
            <div className="max-w-[1800px] mx-auto">
              <NavBar />

              <div className="flex flex-col gap-14 w-full p-6 overflow-hidden
                xl:gap-24">
                {children}
              </div>

              <Footer />
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
