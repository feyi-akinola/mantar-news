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

const title = "Mantar News";
const desc = "Mantar News is a news website that provides the latest news and updates from all around the world.";

export const metadata: Metadata = {
  title: title,
  description: desc,
  openGraph: {
    title: title,
    description: desc,
    url: `https://mantar-news.vercel.app/`,
    images: [{ url: "/images/mantar-banner.png", width: 1200, height: 630 }],
  },
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