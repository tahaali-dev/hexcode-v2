import { useEffect } from "react";

type UseActiveSectionObserverProps = {
 setActiveSection: (id: string) => void;
 offset?: number; // the offset from top (e.g. 100px)
 throttleMs?: number;
};

export const useActiveSectionObserver = ({
 setActiveSection,
 offset = 100,
 throttleMs = 100,
}: UseActiveSectionObserverProps) => {
 useEffect(() => {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-section]"));

  if (sections.length === 0) return;

  let timeoutId: number | null = null;

  const onScroll = () => {
   if (timeoutId) return;

   timeoutId = window.setTimeout(() => {
    timeoutId = null;

    let closestSectionId: string | null = null;
    let minDistance = Infinity;

    sections.forEach((section) => {
     const rect = section.getBoundingClientRect();
     // Calculate distance from section top to the offset line (offset px from top)
     const distance = Math.abs(rect.top - offset);

     // We want the closest section to offset but also the one that is not below it (you can customize)
     if (distance < minDistance && rect.top <= offset + 100) {
      minDistance = distance;
      closestSectionId = section.id;
     }
    });

    if (closestSectionId) {
     setActiveSection(closestSectionId);
    }
   }, throttleMs);
  };

  window.addEventListener("scroll", onScroll, { passive: true });

  // Trigger on mount as well
  onScroll();

  return () => {
   if (timeoutId) window.clearTimeout(timeoutId);
   window.removeEventListener("scroll", onScroll);
  };
 }, [setActiveSection, offset, throttleMs]);
};
