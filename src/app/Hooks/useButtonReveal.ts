

import { useEffect } from "react";
import gsap from "gsap";

/**
 * Animates a button with fade-in + blur clear (disabled on mobile).
 * @param selector - CSS selector for button (e.g., ".prime-btn")
 * @param delay - animation delay in seconds
 */

export const useButtonReveal = (selector: string, delay: number = 0.8) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.innerWidth <= 768; // or adjust threshold as needed

    if (isMobile) return; // Skip animation on mobile

    gsap.set(selector, {
      opacity: 0,
      filter: "blur(8px)",
    });

    const tl = gsap.to(selector, {
      opacity: 1,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
      delay,
    });

    return () => {
      tl.kill();
    };
  }, [selector, delay]);
};
