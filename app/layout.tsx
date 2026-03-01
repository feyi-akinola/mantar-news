// Libraries
import type { Metadata } from "next";

// Styles
import "@/app/globals.tailwind.css";

// Components
import NavBar from "@/components/NavBar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

// Providers
import Providers from "@/providers/theme-provider";
import SmoothScroll from "@/components/SmoothScroll";

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
    <html lang="en" className="w-screen overflow-x-hidden antialiased" suppressHydrationWarning>
      <body>
        <Providers>
          <NavBar />

          <SmoothScroll>
            {children}

            <Newsletter />

            <Footer />
          </SmoothScroll>          
        </Providers>
      </body>
    </html>
  );
}
