"use client";
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";


interface Props {
 children: ReactNode;
}


const SmoothScrollProvider: React.FC<Props> = ({ children }) => {
 const pathname = usePathname();

 // Route condition check (e.g., /work/projectX)
 const isModal = pathname.startsWith("/work/") && pathname !== "/work";

 useEffect(() => {
  // if (isModal) return; // Don’t init Lenis if in modal

  const lenis = new Lenis();

  function raf(time: number) {
   lenis.raf(time);
   requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => lenis.destroy();
 }, [isModal]);

 return <>{children}</>;
};


export default SmoothScrollProvider;
