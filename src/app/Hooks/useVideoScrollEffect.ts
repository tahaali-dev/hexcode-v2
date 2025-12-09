// hooks/useVideoScrollEffect.ts
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface UseVideoScrollEffectProps {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  wrapperRef: React.RefObject<HTMLDivElement | null>;
}

export const useVideoScrollEffect = ({ videoRef, wrapperRef }: UseVideoScrollEffectProps) => {
  useEffect(() => {
    const video = videoRef?.current;
    const scalable = wrapperRef?.current;

    if (!video || !scalable || window.innerWidth < 768) return;

    const { offsetWidth: w0, offsetHeight: h0 } = scalable;
    const scale = Math.min((window.innerWidth - 20) / w0, window.innerHeight / h0);

    // Pin & scale container
    ScrollTrigger.create({
      trigger: scalable,
      start: "top center",
      end: "bottom bottom",
      scrub: true,
      pin: true,
      pinSpacing: false,
    });

    gsap.to(scalable, {
      scale,
      borderRadius: 0,
      ease: "none",
      transformOrigin: "center center",
      scrollTrigger: {
        trigger: scalable,
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Animate video borderRadius (optional if using container's)
    gsap.to(video, {
      borderRadius: 0,
      ease: "none",
      scrollTrigger: {
        trigger: scalable,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Auto mute if out of view
    // const observer = new IntersectionObserver(
    //   ([entry]) => {
    //     video.muted = !entry.isIntersecting;
    //   },
    //   { threshold: 1.0 }
    // );

    // observer.observe(video);

    return () => {
      // observer.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [videoRef, wrapperRef]);
};
