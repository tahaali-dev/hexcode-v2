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

// Use local audio file from public folder
const TRAIN_SOUND_URL = "/audio/high.mp3"; // Place your train.mp3 in public/audio/

const STREAK_COLORS = [
  "linear-gradient(90deg, #fff 0%, #fff0 100%)",
  "linear-gradient(90deg, #ffb347 0%, #ff7e5f00 100%)",
  "linear-gradient(90deg, #fffbe6 0%, #fff0 100%)",
  "linear-gradient(90deg, #ff7e5f 0%, #ffb34700 100%)",
];

const STREAK_COUNT = 10; // Only animate 10 lines

const PrimeFold = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const streaksRef = useRef<HTMLDivElement>(null);
  const trainAudioRef = useRef<HTMLAudioElement | null>(null);

  useTextReveal(".prime-animated");
  useButtonReveal(".prime-btn", 1.1);
  useButtonReveal(".com-wrap", 1.1);

  // Animate "speed streaks" for fast effect - only 10 lines, one-time, synced with sound
  useEffect(() => {
    if (!streaksRef.current) return;

    // Play train sound
    let audio: HTMLAudioElement | null = null;
    if (typeof window !== "undefined") {
      audio = new Audio(TRAIN_SOUND_URL);
      audio.volume = 0.5;
      trainAudioRef.current = audio;
      // Play sound, catch autoplay errors silently
      audio.play().catch(() => { });
    }

    const streaks = streaksRef.current.querySelectorAll<HTMLDivElement>(".streak");
    const durations: number[] = [];
    const delays: number[] = [];

    streaks.forEach((el, i) => {
      // Each streak gets a random duration and delay, but all finish within ~1.5s
      const duration = 0.7 + Math.random() * 0.5; // 0.7s to 1.2s
      const delay = i * 0.08 + Math.random() * 0.18; // staggered
      durations.push(duration);
      delays.push(delay);

      gsap.fromTo(
        el,
        {
          x: -320,
          opacity: 0.45 + Math.random() * 0.25,
        },
        {
          x: "120vw",
          opacity: 0,
          duration,
          delay,
          repeat: 0,
          ease: "power1.in",
        }
      );
    });

    // Fade out sound after streaks finish
    const maxAnimTime = Math.max(...durations.map((d, i) => d + delays[i]), 1.5);
    let fadeTimeout: NodeJS.Timeout | null = null;
    if (audio) {
      fadeTimeout = setTimeout(() => {
        // Fade out audio quickly
        const fade = setInterval(() => {
          if (audio && audio.volume > 0.05) {
            audio.volume = Math.max(0, audio.volume - 0.08);
          } else if (audio) {
            audio.pause();
            clearInterval(fade);
          }
        }, 50);
      }, maxAnimTime * 1000 - 200); // start fade out just before animation ends
    }

    // Cleanup
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
      if (fadeTimeout) clearTimeout(fadeTimeout);
    };
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      {/* Speed streaks overlay */}
      <Streaks ref={streaksRef}>
        {Array.from({ length: STREAK_COUNT }).map((_, i) => {
          // All lines are very thin, no thick or medium
          const colorIdx = i % STREAK_COLORS.length;
          return (
            <div
              key={i}
              className="streak"
              style={{
                top: `${6 + i * 6 + Math.random() * 10}%`,
                height: `${1.2 + Math.random() * 0.6}px`, // very thin: 1.2px to 1.8px
                width: `${220 + Math.random() * 180}px`,
                background: STREAK_COLORS[colorIdx],
                filter: "blur(1.2px) brightness(1.05)",
                position: "absolute",
                left: 0,
                borderRadius: "1px",
                pointerEvents: "none",
                zIndex: 2,
                boxShadow: "none",
                opacity: 0.45,
                mixBlendMode: "screen",
              }}
            />
          );
        })}
      </Streaks>

      {/* Hidden audio element for accessibility (not required, but for completeness) */}
      <audio ref={trainAudioRef} src={TRAIN_SOUND_URL} style={{ display: "none" }} preload="auto" />

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

      <div className="mt-xl com-wrap">
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
