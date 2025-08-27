"use client";

import styled from "@emotion/styled";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { DashedContainer } from "../Containers";
import { PrimaryBtn } from "../Buttons";
import { Dpara, DyTitleH1 } from "../TypSetting";
import { useTextReveal } from "@/app/Hooks/useTextReveal";
import { useButtonReveal } from "@/app/Hooks/useButtonReveal";
import CompaniesWeWork from "./CompaniesWeWork";
import VideoPlayer from "./VideoPlayer";
const bgImg = "/img1.png";

// Fast-motion background colors for animation
const FAST_COLORS = [
  "#ffb347", // orange
  "#ff7e5f", // orange-red
  "#ff5858", // red
  "#001A46", // orange (loop)
];

const PrimeFold = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bgAnimRef = useRef<HTMLDivElement>(null);
  const streaksRef = useRef<HTMLDivElement>(null);

  useTextReveal(".prime-animated");
  useButtonReveal(".prime-btn", 1.1);

  // Animate background color (fast, energetic, orange/red blur)
  useEffect(() => {
    if (bgAnimRef.current) {
      gsap.to(bgAnimRef.current, {
        background:
          `linear-gradient(120deg, ${FAST_COLORS.join(", ")})`,
        duration: 0, // set initial
      });
      // Animate gradient stops for a "fast" color shift
      let colorIdx = 0;
      const animateColors = () => {
        colorIdx = (colorIdx + 1) % FAST_COLORS.length;
        gsap.to(bgAnimRef.current, {
          background: `linear-gradient(120deg, ${FAST_COLORS
            .slice(colorIdx)
            .concat(FAST_COLORS.slice(0, colorIdx))
            .join(", ")})`,
          duration: 1.2,
          ease: "power1.inOut",
          onComplete: animateColors,
        });
      };
      animateColors();
    }
  }, []);

  // Animate "speed streaks" for fast effect
  useEffect(() => {
    if (!streaksRef.current) return;
    const streaks = streaksRef.current.querySelectorAll(".streak");
    streaks.forEach((el, i) => {
      gsap.fromTo(
        el,
        {
          x: -200,
          opacity: 0.18 + Math.random() * 0.12,
        },
        {
          x: "110vw",
          opacity: 0,
          duration: 0.7 + Math.random() * 0.7,
          delay: i * 0.18 + Math.random() * 0.5,
          repeat: -1,
          ease: "power1.in",
        }
      );
    });
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      {/* Fast animated background */}
      <FastBg ref={bgAnimRef} />
      {/* Speed streaks overlay */}
      <Streaks ref={streaksRef}>
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="streak"
            style={{
              top: `${10 + i * 5 + Math.random() * 10}%`,
              height: `${2 + Math.random() * 2}px`,
              width: `${120 + Math.random() * 120}px`,
              background:
                i % 2 === 0
                  ? "linear-gradient(90deg, #fff6 0%, #fff0 100%)"
                  : "linear-gradient(90deg, #ffb34799 0%, #ff7e5f00 100%)",
              filter: "blur(1.5px)",
              position: "absolute",
              left: 0,
              borderRadius: "2px",
              pointerEvents: "none",
              zIndex: 2,
            }}
          />
        ))}
      </Streaks>

      <DyTitleH1
        fontSize={{ base: '56px', md: '38px', sm: '34px' }}
        lineHeight={{ base: '62px', md: '44px', sm: '42px' }}
        fontWeight={300}
        fontStyle="normal"
        textTransform="uppercase"
        color="#fff"
        className="mt-md prime-animated"
      >
        UX/UI for fast
      </DyTitleH1>

      <DyTitleH1
        fontSize={{ base: '56px', md: '38px', sm: '34px' }}
        lineHeight={{ base: '62px', md: '44px', sm: '42px' }}
        fontWeight={300}
        fontStyle="normal"
        textTransform="uppercase"
        color="#fff"
        className="mt-sm prime-animated text-center"
      >
        growing companies
      </DyTitleH1>

      <DyTitleH1
        fontSize={{ base: '56px', md: '38px', sm: '34px' }}
        lineHeight={{ base: '62px', md: '44px', sm: '42px' }}
        fontWeight={300}
        fontStyle="normal"
        textTransform="uppercase"
        color="#fff"
        className="mt-sm prime-animated"
      >
        Quick. Smart. Affordable.
      </DyTitleH1>

      <Dpara
        fontSize="18px"
        lineHeight="24px"
        fontWeight="300"
        color="#E0E0E0"
        mdFontSize="16px"
        mdLineHeight="24px"
        smFontSize="16px"
        smLineHeight="24px"
        textAlign="center"
        className="mt-lg m-mt-lg prime-animated"
      >
        We strategize, executes, and help you ship faster in this fast-paced growing market.
      </Dpara>

      <div className="d-flex align-center justify-center mt-xxl m-mt-xxl">
        <PrimaryBtn
          className="prime-btn"
          padding="16px"
          fontSize="18px"
          margin="0"
          borderRadius="8px"
          btnContent="Book a call"
          onClick={() =>
            window.open("https://calendly.com/shabbir-hexcode/30min", "_blank")
          }
        />
      </div>

      <div className="mt-xl">
        <CompaniesWeWork />
      </div>

      <VideoPlayer />
    </Wrapper>
  );
};

export default PrimeFold;

// Styles
const Wrapper = styled.div`
  position: relative;
  padding: 180px 0px 64px 0px;  
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  margin-top:-76px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    /* Blur effect */
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(0px);
    pointer-events: none;
    /* Noise texture overlay using SVG data URI */
    background:
      url("data:image/svg+xml;utf8,<svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'><filter id='n' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.18'/></svg>") repeat,
      rgba(0,0,0,0.08);
  }

  > * {
    position: relative;
    z-index: 3;
  }

  @media (max-width: 768px) {
    padding: 32px 8px;
    background-size: 60px 180px;

    .m-mt-lg{
      margin-top:8px;
    }

    .m-mt-xxl{
      margin-top: 24px;
      button{
        width:50%;
      }
    }
  }
`;

// Fast animated background (fills container, under content)
const FastBg = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(120deg, #ffb347, #ff7e5f, #ff5858, #ffb347);
  filter: blur(16px) brightness(1.08) saturate(1.2);
  transition: background 0.8s cubic-bezier(0.7,0.2,0.2,1);
  will-change: background;
`;

// Speed streaks overlay
const Streaks = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
