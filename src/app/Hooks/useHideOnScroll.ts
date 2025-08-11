import { useEffect, useCallback, useRef } from "react";
import gsap from "gsap";

/**
 * Hook to hide/show an element on scroll direction.
 * @param ref - The ref of the element to animate (usually a header)
 */

export const useHideOnScroll = (ref: React.RefObject<HTMLElement | null>) => {
  const lastScrollRef = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    const element = ref.current;

    if (!element) return;

    if (currentScroll > lastScrollRef.current && currentScroll > 80) {
      // scrolling down – hide
      gsap.to(element, {
        y: "-100%",
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      // scrolling up – show
      gsap.to(element, {
        y: "0%",
        duration: 0.4,
        ease: "power2.out",
      });
    }

    lastScrollRef.current = currentScroll;
  }, [ref]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);
};
