"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import { DyTitleH1 } from "./TypSetting";

type Props = {
 items?: string[];
 stepMs?: number;   // delay between moves
 slideDur?: number; // slide tween duration (sec)
 ease?: string;     // gsap ease
 gapPx?: number;    // visual gap between items
};

const TextAnimation: React.FC<Props> = ({
 items = Array(10).fill(["Quick.", "Smart.", "Affordable.", "Trusted.", "Bold.", "Impactful."]).flat(),
 stepMs = 1600,
 slideDur = 0.7,
 ease = "power2.inOut",
 gapPx = 32,
}) => {
 // --- setup + cloning for seamless track ---
 const baseItems = items.length > 0 ? items : [""];
 const extendedItems = useMemo(() => [...baseItems, ...baseItems, ...baseItems], [baseItems]);

 const wrapRef = useRef<HTMLDivElement | null>(null);
 const trackRef = useRef<HTMLDivElement | null>(null);
 const itemRefs = useRef<HTMLDivElement[]>([]);
 const oneCopyWidthRef = useRef<number>(0);

 // start in the middle copy
 const base = baseItems.length;
 const [active, setActive] = useState<number>(base); // physical index in extendedItems

 // keep current "truly-active" (centered/white) separate from "target"
 const trulyActiveRef = useRef<number>(base); // the one that's white right now

 // sync refs
 itemRefs.current = useMemo(
  () => Array.from({ length: extendedItems.length }, (_, i) => itemRefs.current[i] || document.createElement("div")),
  [extendedItems.length]
 );

 // measure width of one logical copy
 const measureOneCopyWidth = () => {
  if (!trackRef.current || baseItems.length === 0) return 0;
  const first = itemRefs.current[0];
  const last = itemRefs.current[baseItems.length - 1];
  if (!first || !last) return 0;
  const start = first.offsetLeft;
  const end = last.offsetLeft + last.offsetWidth;
  const width = end - start;
  oneCopyWidthRef.current = width;
  return width;
 };

 // dim or light helpers
 const lightItem = (idx: number, instant = false) => {
  const wrapper = itemRefs.current[idx];
  if (!wrapper) return;

  // target the <h1> inside
  const el = wrapper.querySelector("h1");
  if (!el) return;

  const tween = { color: "#fff", opacity: 1, scale: 1.03, ease: "power2.out" };
  instant ? gsap.set(el, tween) : gsap.to(el, { ...tween, duration: 0.35 });
 };

 const dimItem = (idx: number) => {
  const wrapper = itemRefs.current[idx];
  if (!wrapper) return;

  const el = wrapper.querySelector("h1");
  if (!el) return;

  gsap.to(el, {
   color: "rgba(255,255,255,0.55)",
   opacity: 0.85,
   scale: 1,
   duration: 0.3,
   ease: "power2.out",
  });
 };

 // center given physical index
 const centerOn = (physicalIndex: number, animate = true, onComplete?: () => void) => {
  const wrap = wrapRef.current;
  const track = trackRef.current;
  const el = itemRefs.current[physicalIndex];
  if (!wrap || !track || !el) return;

  const wrapRect = wrap.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  const wrapCenter = wrapRect.left + wrapRect.width / 2;
  const elCenter = elRect.left + elRect.width / 2;

  const currentX = Number(gsap.getProperty(track, "x")) || 0;
  const delta = wrapCenter - elCenter;
  const targetX = currentX + delta;

  if (animate) {
   gsap.to(track, { x: targetX, duration: slideDur, ease, onComplete });
  } else {
   gsap.set(track, { x: targetX });
   onComplete?.();
  }
 };

 // keep us in the middle copy (no visual jump)
 const normalizeIfNeeded = () => {
  const track = trackRef.current;
  if (!track) return false;

  const copyW = oneCopyWidthRef.current || measureOneCopyWidth();
  if (copyW === 0) return false;

  if (active >= base + baseItems.length * 2) {
   const currentX = Number(gsap.getProperty(track, "x")) || 0;
   gsap.set(track, { x: currentX + copyW });
   setActive((prev) => prev - baseItems.length);
   trulyActiveRef.current -= baseItems.length; // keep reference aligned
   return true;
  }
  if (active < base) {
   const currentX = Number(gsap.getProperty(track, "x")) || 0;
   gsap.set(track, { x: currentX - copyW });
   setActive((prev) => prev + baseItems.length);
   trulyActiveRef.current += baseItems.length;
   return true;
  }
  return false;
 };

 // initial layout
 useEffect(() => {
  gsap.set(itemRefs.current, {
   color: "rgba(255,255,255,0.55)",
   opacity: 0.85,
   scale: 1,
   transformOrigin: "center",
   willChange: "transform,color,opacity",
  });

  requestAnimationFrame(() => {
   measureOneCopyWidth();
   // center without animation, then mark initial active as white (instant)
   centerOn(active, false, () => lightItem(active, true));
   trulyActiveRef.current = active;
  });

  const onResize = () => {
   measureOneCopyWidth();
   centerOn(trulyActiveRef.current, false);
  };
  window.addEventListener("resize", onResize);
  return () => window.removeEventListener("resize", onResize);
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, []);

 // autoplay advance
 useEffect(() => {
  const id = setInterval(() => setActive((prev) => prev + 1), stepMs);
  return () => clearInterval(id);
 }, [stepMs]);

 // when target active changes: slide; color switch happens ONLY when centered
 useEffect(() => {
  // if we normalized, wait for next render
  if (normalizeIfNeeded()) return;

  const prevTrulyActive = trulyActiveRef.current;
  const nextTarget = active;

  // run the slide
  centerOn(nextTarget, true, () => {
   // arrived at center → now flip colors
   dimItem(prevTrulyActive);
   lightItem(nextTarget);
   trulyActiveRef.current = nextTarget;
  });
  // Do NOT pre-dim the previous; it stays white until onComplete fires.
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [active]);

 return (
  <Viewport ref={wrapRef}>
   <Track ref={trackRef} style={{ gap: `${gapPx}px` }}>
    {extendedItems.map((txt, i) => (
     <Item
      key={`${txt}-${i}`}
      ref={(el) => {
       if (el) itemRefs.current[i] = el;
      }}
     >
      <DyTitleH1
       fontSize={{ base: "56px", md: "38px", sm: "34px" }}
       lineHeight={{ base: "62px", md: "44px", sm: "42px" }}
       fontWeight={300}
       fontStyle="normal"
       textTransform="uppercase"
       className="mt-sm"
       // initial color is dim; GSAP takes over
       color="rgba(255,255,255,0.55)"
      >
       {txt}
      </DyTitleH1>
     </Item>
    ))}
   </Track>
  </Viewport>
 );
};

export default TextAnimation;

/* ---------- styles ---------- */

const Viewport = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const Track = styled.div`
  display: inline-flex;
  align-items: center;
  will-change: transform;
`;

const Item = styled.div`
  flex: 0 0 auto;
  transform-origin: center;
`;
