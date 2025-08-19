import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const ANIMATION_DURATION_0 = 0.2;
const ANIMATION_DURATION = 0.3;

interface UseBottomSheetAnimationProps {
 wrapperRef: React.RefObject<HTMLDivElement | null>;
 sheetRef: React.RefObject<HTMLDivElement | null>;
 scrollableRef: React.RefObject<HTMLDivElement | null>;
}

export const useBottomSheetAnimation = ({
 wrapperRef,
 sheetRef,
 scrollableRef,
}: UseBottomSheetAnimationProps) => {
 useEffect(() => {
  const wrapper = wrapperRef.current;
  const sheet = sheetRef.current;
  const scrollable = scrollableRef.current;

  if (!wrapper || !sheet || !scrollable) return;

  // Opening animation
  gsap.fromTo(
   wrapper,
   { opacity: 0, background: 'rgba(0,0,0,0)' },
   {
    opacity: 1,
    duration: ANIMATION_DURATION_0,
    ease: 'power1.inOut',
    onUpdate: function () {
     // Keep background transparent during opacity fade-in
     wrapper.style.background = 'rgba(0,0,0,0)';
    },
    onComplete: () => {
     // Now fade in the background color overlay
     gsap.to(wrapper, {
      background: 'hsla(0, 0%, 0%, 0.6)',
      duration: 0.3,
      ease: 'power1.inOut',
      onUpdate: function () {
      },
      onComplete: () => {
       gsap.fromTo(
        sheet,
        { y: '100%' },
        {
         y: '0%',
         duration: ANIMATION_DURATION,
         ease: 'power3.out',
        }
       );
      }
     });
    },
   }
  );

  // Smooth scrolling with Lenis
  const lenis = new Lenis({
   wrapper: scrollable,
   content: scrollable.firstElementChild as HTMLElement,
   duration: 1.2,
   easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
   smoothWheel: true,
   gestureOrientation: 'vertical',
  });

  function raf(time: number) {
   lenis.raf(time);
   ScrollTrigger.update();
   requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Hook Lenis into GSAP ScrollTrigger
  ScrollTrigger.scrollerProxy(scrollable, {
   scrollTop(value) {
    if (value !== undefined) lenis.scrollTo(value);
    return scrollable.scrollTop;
   },
   getBoundingClientRect() {
    return {
     top: 0,
     left: 0,
     width: window.innerWidth,
     height: window.innerHeight,
    };
   },
   pinType: scrollable.style.transform ? 'transform' : 'fixed',
  });

  // Resize sheet on scroll
  const marker = scrollable.querySelector('#scroll-marker');
  if (marker) {
   ScrollTrigger.create({
    trigger: scrollable,
    scroller: scrollable,
    // start: 'top 0',
    end: '+=20%',
    scrub: true,
    onUpdate: (self) => {
     const progress = self.progress;
     const newHeight = 95 + (100 - 95) * progress;
     const newWidth = 97 + (100 - 97) * progress;
     const newRadius = 16 - 16 * progress;

     gsap.set(sheet, {
      height: `${newHeight}vh`,
      width: `${newWidth}vw`,
      borderTopLeftRadius: `${newRadius}px`,
      borderTopRightRadius: `${newRadius}px`,
      duration: 0.1,
      overwrite: true,
      immediateRender: true,
     });
    },
   });
  }

  ScrollTrigger.refresh();

  return () => {
   ScrollTrigger.getAll().forEach(trigger => trigger.kill());
   lenis.destroy();
   document.body.style.overflow = 'auto';
  };
 }, [wrapperRef, sheetRef, scrollableRef]);
};
