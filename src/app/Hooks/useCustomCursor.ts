// hooks/useCustomCursor.ts
import { useEffect } from "react";
import { gsap } from "gsap";

/**
 * Attaches a GSAP-powered custom cursor to follow the mouse smoothly.
 * @param selector CSS selector of the cursor element (e.g., "#custom-cursor")
 */
export const useCustomCursor = (selector: string = "#custom-cursor") => {
 useEffect(() => {
  let posX = 0, posY = 0, mouseX = 0, mouseY = 0;

  const tween = gsap.to(selector, {
   duration: 0.01,
   repeat: -1,
   onRepeat: () => {
    posX += (mouseX - posX) / 10;
    posY += (mouseY - posY) / 10;
    gsap.set(selector, { css: { left: posX, top: posY } });
   },
  });

  const handleMouseMove = (e: MouseEvent) => {
   mouseX = e.clientX;
   mouseY = e.clientY;
  };

  document.addEventListener("mousemove", handleMouseMove);
  return () => {
   document.removeEventListener("mousemove", handleMouseMove);
   tween.kill();
  };
 }, [selector]);
};
