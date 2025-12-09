
/**
 * Hook to hide/show an element on scroll direction.
 * @param ref - The ref of the element to animate (usually a header)
 */

import { useEffect, useCallback, useRef, useState } from "react";
import gsap from "gsap";

export const useHideOnScroll = (ref: React.RefObject<HTMLElement | null>) => {
  const lastScrollRef = useRef(0);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    const element = ref.current;

    if (!element) return;

    // hide/show on scroll
    if (currentScroll > lastScrollRef.current && currentScroll > 80) {
      gsap.to(element, {
        y: "-100%",
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      gsap.to(element, {
        y: "0%",
        duration: 0.4,
        ease: "power2.out",
      });
    }

    // check if past 100vh
    setScrolledPastHero(currentScroll > window.innerHeight);

    lastScrollRef.current = currentScroll;
  }, [ref]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  return { scrolledPastHero };
};
