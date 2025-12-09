"use client";
import { useEffect, useRef, useLayoutEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { usePathname } from "next/navigation";

interface Props {
 children: ReactNode;
}

const scrollPositions: Record<string, number> = {};

const SmoothScrollProvider: React.FC<Props> = ({ children }) => {

 const pathname = usePathname();
 const lenisRef = useRef<Lenis | null>(null);
 const prevPathRef = useRef<string | null>(null);

 const isModal = pathname.startsWith("/work/") && pathname !== "/work";

 // Initialize Lenis
 useEffect(() => {
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
 }, []);

 // Save scroll position before route change 
 useEffect(() => {
  if (prevPathRef.current && lenisRef.current) {
   scrollPositions[prevPathRef.current] = lenisRef.current.scroll;
  } else if (prevPathRef.current) {
   scrollPositions[prevPathRef.current] = window.scrollY;
  }
  prevPathRef.current = pathname;
 }, [pathname]);

 useLayoutEffect(() => {
  if (isModal) return;

  const prevPath = prevPathRef.current;
  if (
   prevPath &&
   prevPath.startsWith("/work/") &&
   prevPath !== "/work" &&
   scrollPositions[pathname] !== undefined
  ) {
   setTimeout(() => {
    if (lenisRef.current) {
     lenisRef.current.scrollTo(scrollPositions[pathname], { immediate: true });
    } else {
     window.scrollTo(0, scrollPositions[pathname]);
    }
   }, 0);
   return;
  }

  // Default: reset scroll to top
  setTimeout(() => {
   if (lenisRef.current) {
    lenisRef.current.scrollTo(0, { immediate: true });
   } else {
    window.scrollTo(0, 0);
   }
  }, 0);
 }, [pathname, isModal]);

 return <>{children}</>;
};

export default SmoothScrollProvider;
