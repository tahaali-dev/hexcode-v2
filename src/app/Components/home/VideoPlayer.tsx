"use client";

import styled from "@emotion/styled";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoPlayer: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const shellRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const shell = shellRef.current!;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",          // when section hits top of viewport
          end: "+=120%",             // scroll range for full morph
          scrub: true,               // tie to scroll
          pin: true,                 // keep section in place while animating
          anticipatePin: 1,
        },
        defaults: { ease: "none" },
      });

      // We animate the shell (container) dimensions + border styling
      // from a “card” to a full-bleed viewport box.
      tl.fromTo(
        shell,
        {
          // initial (match CSS)
          "--w": "1240px",
          "--h": "calc(1240px * 9 / 16)",
          "--r": "22px",
          "--pad": "8px",
          "--border": "rgba(255,255,255,0.2)",
          "--bg": "color-mix(in oklab, #fff 20%, transparent)",
          filter: "none",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        } as any,
        {
          // target: true fullscreen container
          "--w": "100vw",
          "--h": "100vh",
          "--r": "0px",
          "--pad": "0px",
          "--border": "rgba(255,255,255,0)",
          "--bg": "transparent",
          // optional: subtle emphasis during expand
          filter: "saturate(105%)",
          boxShadow: "0 0 0 rgba(0,0,0,0)",
        } as any
      );

      // Nudge ScrollTrigger once styles settle
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Section ref={sectionRef}>
      <Shell ref={shellRef}>
        <video
          src="https://screenrepo-production-bucket.s3.ap-south-1.amazonaws.com/videos/Volt+Money+Music+V2+(1)_1.mp4"
          autoPlay
          loop
          muted
          playsInline
          // helps GPU raster + smoother resizes
          style={{ willChange: "width, height, border-radius, transform" }}
        />
      </Shell>
    </Section>
  );
};

export default VideoPlayer;

/* ---------- styles ---------- */

const Section = styled.section`
  /* Provides scroll space for the pinned animation */
  /* The pin will expand/shrink over ~120% viewport, set in ScrollTrigger.end */
  position: relative;
  width: 100%;
  /* nothing else needed; pinning is handled by ScrollTrigger */
`;

const Shell = styled.div`
  /* Animate via CSS custom props to avoid layout thrash */
  --w: 1240px;
  --h: calc(1240px * 9 / 16);
  --r: 22px;
  --pad: 8px;
  --border: rgba(255, 255, 255, 0.2);
  --bg: color-mix(in oklab, #fff 20%, transparent);

  /* Center the “card” initially */
  margin: 64px auto 0;
  width: var(--w);
  height: var(--h);

  /* When animating to fullscreen, these props are transitioned by GSAP */
  background: var(--bg);
  // border: 1px solid var(--border);
  border-radius: var(--r);
  // padding: var(--pad);

  display: grid;
  place-items: center;

  /* Keep transforms/gpu smooth */
  will-change: width, height, border-radius, padding, background, border;
  transform: translateZ(0);

  @media (max-width: 768px) {
    margin-top: 32px;
    /* Start a bit rounder on mobile; GSAP will drive to 0 */
    --r: 8px;
    --w: 90vw;
    --h: calc(90vw * 9 / 16);
    --pad: 4px;
  }

  video {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;  /* ensures true fill at 100vw x 100vh */
    border-radius: calc(var(--r) - var(--pad));
    /* Match your previous vibe */
    outline: none;
  }
`;
