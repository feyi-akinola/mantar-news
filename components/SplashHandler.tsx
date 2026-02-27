"use client";

import { useState, useEffect } from "react";

import Splash from "@/components/Splash";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";


const SplashHandler = ({ children }: { children: React.ReactNode }) => {
  const [showSplash, setShowSplash] = useState(true);
  const pathname = usePathname();
  

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // Show splash for at least 2 seconds

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  
  return (
    showSplash && pathname === "/" ? (
      <Splash />
    ) : (
      <div className="flex flex-col min-h-screen">
        <NavBar />
        
        {children}
      </div>
    )
  );
};

export default SplashHandler;