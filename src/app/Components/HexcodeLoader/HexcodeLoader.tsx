"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styled from "@emotion/styled";

const shades = [
 "#4A0507",
 "#881418",
 "#A50F14",
 "#C80D13",
];

interface HexcodeLoaderProps {
 onFinish?: () => void;
}

const LoaderWrapper = styled.div`
  position: fixed;
  inset: 0;
  overflow: hidden;
  background: #C80D13;
  z-index: 9999;
  pointer-events: all;
`;

interface ShadeBarProps {
 $bg: string;
 $z: number;
}

const ShadeBar = styled.div<ShadeBarProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${({ $bg }) => $bg};
  z-index: ${({ $z }) => $z};
  will-change: transform;
`;

const makeBarRef =
 (idx: number, bars: React.MutableRefObject<HTMLDivElement[]>) =>
  (el: HTMLDivElement | null): void => {
   if (el) bars.current[idx] = el;
  };

const HexcodeLoader = ({ onFinish }: HexcodeLoaderProps) => {
 const wrapper = useRef<HTMLDivElement>(null);
 const bars = useRef<HTMLDivElement[]>([]);
 const [shouldRender, setShouldRender] = useState(false);

 useEffect(() => {
  // Only run on client
  if (typeof window === "undefined") return;

  // Check if loader has already been shown
  const shown = localStorage.getItem("hexcodeLoaderShown");
  if (shown) {
   // Don't render loader if already shown
   setShouldRender(false);
   onFinish?.();
   return;
  }

  setShouldRender(true);

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
   localStorage.setItem("hexcodeLoaderShown", "true");
   setShouldRender(false);
   onFinish?.();
   return;
  }

  const tl = gsap.timeline({
   onComplete: () => {
    localStorage.setItem("hexcodeLoaderShown", "true");
    setShouldRender(false);
    onFinish?.();
   },
  });

  bars.current.forEach((bar, i) => {
   if (bar) {
    tl.to(
     bar,
     {
      yPercent: -100,
      duration: 0.4,
      ease: "power2.inOut",
     },
     i * 0.3
    );
   }
  });

  tl.to(wrapper.current, {
   yPercent: -100,
   duration: 0.3,
   ease: "power2.inOut",
  });

  return () => {
   tl.kill();
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [onFinish]);

 if (!shouldRender) return null;

 return (
  <LoaderWrapper ref={wrapper} aria-label="Loading" role="status">
   {shades.map((color, idx) => (
    <ShadeBar
     key={idx}
     ref={makeBarRef(idx, bars)}
     $bg={color}
     $z={shades.length - idx}
     data-testid={`shade-bar-${idx}`}
    />
   ))}
  </LoaderWrapper>
 );
};

export default HexcodeLoader;
