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
          <NavBar />
          
          {children}
        </Providers>
      </body>
    </html>
  );
}
