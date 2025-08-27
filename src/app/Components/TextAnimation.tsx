"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import { DyTitleH1 } from "./TypSetting";

type Props = {
 items?: string[];
 stepMs?: number;
 slideDur?: number;
 ease?: string;
 gapPx?: number;
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
 const trulyActiveRef = useRef<number>(base);        // the one that's actually centered/white

 // sync refs
 itemRefs.current = useMemo(
  () => Array.from({ length: extendedItems.length }, (_, i) => itemRefs.current[i] || document.createElement("div")),
  [extendedItems.length]
 );

 // util: find inner <h1>
 const labelEl = (idx: number) => itemRefs.current[idx]?.querySelector<HTMLElement>("h1") || null;

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

 // opacity falloff: dist 0/1 -> 1.0, dist 2 -> 0.9, dist 3 -> 0.8, floor 0.5
 const opacityForDistance = (dist: number) => {
  if (dist <= 1) return 1;                 // center three stay fully opaque
  return Math.max(0, 1 - 0.3 * (dist - 1));
 };

 // Paint EVERY item relative to the centered index.
 // Only the center is pure white; neighbors are light-white but with full opacity at dist<=1.
 const applyOpacityGradient = (centerIdx: number, instant = false) => {
  itemRefs.current.forEach((wrap, i) => {
   const h1 = labelEl(i);


   if (!h1) return;

   const dist = Math.abs(i - centerIdx);
   const isCenter = dist === 0;

   const vars = {
    color: isCenter ? "#fff" : "rgba(255,255,255,0.55)", // center white, others light-white
    opacity: opacityForDistance(dist),                   // 1.0, 1.0, 0.9, 0.8, ...
    scale: isCenter ? 1.03 : 1,
    ease: "power2.out",
    duration: 0.3,
   };

   instant ? gsap.set(h1, vars) : gsap.to(h1, vars);
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
   trulyActiveRef.current -= baseItems.length;
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
  // default dim on all headings
  itemRefs.current.forEach((_, i) => {
   const h1 = labelEl(i);
   if (h1) gsap.set(h1, { color: "rgba(255,255,255,0.55)", opacity: 0.85, scale: 1, transformOrigin: "center", willChange: "transform,color,opacity" });
  });

  requestAnimationFrame(() => {
   measureOneCopyWidth();
   // center without animation, then apply initial gradient (instant)
   centerOn(active, false, () => {
    applyOpacityGradient(active, true);
    trulyActiveRef.current = active;
   });
  });

  const onResize = () => {
   measureOneCopyWidth();
   centerOn(trulyActiveRef.current, false);
   applyOpacityGradient(trulyActiveRef.current, true);
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

 // when target active changes: slide; paint ONLY when centered
 useEffect(() => {
  if (normalizeIfNeeded()) return;
  const nextTarget = active;

  centerOn(nextTarget, true, () => {
   applyOpacityGradient(nextTarget); // center white + neighbors falloff
   trulyActiveRef.current = nextTarget;
  });
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
       color="rgba(255,255,255,0.55)" // initial; GSAP owns it after mount
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
