
"use client"
import { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";

/**
 * Reveals text by animating words from below. Skips animation on mobile devices.
 * @param selector - CSS selector for the text element (e.g., ".headline")
 */
export const useTextReveal = (selector: string) => {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    if (isMobile) return; // Skip animation on mobile

    const split = new SplitType(selector, {
      types: "words",
      wordClass: "word",
    });

    gsap.set(`${selector} .word`, {
      yPercent: 100,
      opacity: 0,
    });

    const tl = gsap.to(`${selector} .word`, {
      yPercent: 0,
      opacity: 1,
      duration: 1,
      ease: "back.out(1.7)",
      stagger: 0.06,
    });

    return () => {
      split.revert();
      tl.kill();
    };
  }, [selector]);
};
