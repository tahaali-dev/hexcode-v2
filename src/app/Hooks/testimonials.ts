import { useEffect, useRef, useState } from "react";
// import Lenis from "lenis";
import { gsap } from "gsap";

interface TestimonialOptions<T> {
  clientData: T[];
}

/**
 * Custom hook to cycle through testimonials with smooth scrolling and animations.
 */
export function useTestimonials<T>({ clientData }: TestimonialOptions<T>) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // const [scrollOffset, setScrollOffset] = useState<number>(0);
  const intervalRef = useRef<number | null>(null);
  // const lenisRef = useRef<Lenis | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const bubblesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Visibility detection
  const isVisible = useIntersectionObserver(testimonialsRef);

  // Initialize Lenis for smooth scrolling
  // useEffect(() => {
  //   if (!scrollRef.current) return;
  //   const lenis = new Lenis({ wrapper: scrollRef.current });
  //   lenisRef.current = lenis;

  //   function frame(time: number) {
  //     lenis.raf(time);
  //     requestAnimationFrame(frame);
  //   }
  //   requestAnimationFrame(frame);

  //   return () => {
  //     lenis.destroy();
  //     lenisRef.current = null;
  //   };
  // }, []);

  // Auto-advance logic when visible
  useEffect(() => {
    if (!isVisible) return;
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = window.setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % clientData.length;

        // Mobile: horizontal scroll
        if (scrollRef.current && window.innerWidth <= 768) {
          const width = scrollRef.current.clientWidth;
          scrollRef.current.scrollTo({
            left: next === 0 ? 0 : scrollRef.current.scrollLeft + width,
            behavior: "smooth",
          });
        }

        // Desktop: vertical scroll with Lenis
        // if (lenisRef.current && scrollRef.current && window.innerWidth > 768) {
        //   const height = scrollRef.current.clientHeight;
        //   const newOffset = scrollOffset + height;
        //   setScrollOffset(newOffset);
        //   const maxOffset = scrollRef.current.scrollHeight - height;
        //   const target = next === 0 ? 0 : Math.min(newOffset, maxOffset);
        //   lenisRef.current.scrollTo(target);
        // }

        return next;
      });
    }, 10000);

    return () => {
      if (intervalRef.current !== null) clearInterval(intervalRef.current);
    };
  }, [isVisible, clientData.length]);

  // Bubble animation on index change
  useEffect(() => {
    if (!isVisible) return;
    const elems = bubblesRef.current.filter((el): el is HTMLDivElement => el !== null);
    gsap.killTweensOf(elems);
    gsap.fromTo(
      elems,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", stagger: 0.2 }
    );
  }, [clientData, activeIndex, isVisible]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return {
    activeIndex,
    handleCardClick,
    scrollRef,
    testimonialsRef,
    bubblesRef,
  };
}

/**
 * Hook to detect element visibility via IntersectionObserver.
 * Accepts any ref with a current property pointing to an Element or null.
 */
export function useIntersectionObserver<T extends Element>(
  ref: { current: T | null },
  threshold: number = 0.5
): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, threshold]);

  return isVisible;
}
