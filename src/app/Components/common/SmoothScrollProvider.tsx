"use client";
import { useEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

interface Props {
 children: ReactNode;
}

const SmoothScrollProvider: React.FC<Props> = ({ children }) => {
 const pathname = usePathname();
 const lenisRef = useRef<Lenis | null>(null);

 // Route condition check (e.g., /work/projectX)
 const isModal = pathname.startsWith("/work/") && pathname !== "/work";

 useEffect(() => {
  // if (isModal) return; // Don’t init Lenis if in modal

  const lenis = new Lenis();
  lenisRef.current = lenis;

  function raf(time: number) {
   lenis.raf(time);
   requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return () => {
   lenis.destroy();
   lenisRef.current = null;
  };
 }, [isModal]);

 // Reset scroll position on route change
 useEffect(() => {
  // Wait for next tick to ensure DOM is ready
  setTimeout(() => {
   if (lenisRef.current) {
    lenisRef.current.scrollTo(0, { immediate: true });
   } else {
    window.scrollTo(0, 0);
   }
  }, 0);
 }, [pathname]);

 return <>{children}</>;
};

export default SmoothScrollProvider;
