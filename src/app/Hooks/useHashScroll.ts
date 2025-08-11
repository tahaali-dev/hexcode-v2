import { useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

export const useHashScroll = (offset = 74, delay = 100) => {
  const pathname = usePathname();

  const scrollToHash = useCallback(() => {
    if (typeof window === "undefined") return;

    const hash = window.location.hash;
    if (pathname === "/" && hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          const y = element.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, delay);
      }
    }
  }, [pathname, offset, delay]);

  useEffect(() => {
    // Handle initial hash on mount
    scrollToHash();

    // Listen for hash changes
    const handleHashChange = () => {
      scrollToHash();
    };

    if (typeof window !== "undefined") {
      window.addEventListener('hashchange', handleHashChange);
      return () => window.removeEventListener('hashchange', handleHashChange);
    }
  }, [scrollToHash]);
};
