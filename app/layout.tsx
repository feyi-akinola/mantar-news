import type { Metadata } from "next";
import "./globals.css";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

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
    <html lang="en">
      <body
        className="antialiased flex bg-gray-200 text-black/90 min-h-screen h-full tracking-wide"
      >

        <div className="flex-7 flex flex-col h-full w-full">
          <NavBar />
          {children}
        </div>
        <SideBar />
      </body>
    </html>
  );
}
