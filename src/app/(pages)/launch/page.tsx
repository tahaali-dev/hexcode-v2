"use client";

import React, { useState, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { DashedContainer } from "@/app/Components/Containers";
import { DyTitleH1, Dpara } from "@/app/Components/TypSetting";
import gsap from "gsap";

const Page = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const timerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Target date: May 26, 2026 (or next upcoming May 26)
    const currentYear = new Date().getFullYear();
    let targetDate = new Date(`May 26, ${currentYear} 00:00:00`).getTime();

    // If May 26 has passed this year, set for next year (optional logic, but keeping simple)
    if (new Date().getTime() > targetDate) {
      targetDate = new Date(`May 26, ${currentYear + 1} 00:00:00`).getTime();
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animations using GSAP
    if (textRef.current && timerRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        textRef.current.children,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      )
        .fromTo(
          timerRef.current.children,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.7)" },
          "-=0.5"
        );
    }
  }, []);

  return (
    <DashedContainer showLines={true} leftBottom rightBottom>
      <LaunchWrapper>
        <div className="content" ref={textRef}>
          <div className="badge">Coming Soon</div>
          <DyTitleH1
            fontSize={{ base: "64px", md: "56px", sm: "40px" }}
            lineHeight={{ base: "72px", md: "64px", sm: "48px" }}
            fontWeight={700}
            textTransform="uppercase"
            color="#000"
            className="title"
          >
            We're Launching On <span className="highlight">May 26</span>
          </DyTitleH1>

          <Dpara
            fontSize="20px"
            lineHeight="28px"
            fontWeight="300"
            color="#4A4A4A"
            textAlign="center"
            className="subtitle"
          >
            Get ready for a completely reimagined digital experience.
            We are working hard behind the scenes to bring you our new website.
          </Dpara>
        </div>

        <TimerContainer ref={timerRef}>
          <TimeUnit>
            <div className="value-box">
              <span className="value">{String(timeLeft.days).padStart(2, "0")}</span>
            </div>
            <span className="label">Days</span>
          </TimeUnit>
          <Separator>:</Separator>
          <TimeUnit>
            <div className="value-box">
              <span className="value">{String(timeLeft.hours).padStart(2, "0")}</span>
            </div>
            <span className="label">Hours</span>
          </TimeUnit>
          <Separator className="hide-mobile">:</Separator>
          <TimeUnit>
            <div className="value-box">
              <span className="value">{String(timeLeft.minutes).padStart(2, "0")}</span>
            </div>
            <span className="label">Minutes</span>
          </TimeUnit>
          <Separator>:</Separator>
          <TimeUnit>
            <div className="value-box">
              <span className="value">{String(timeLeft.seconds).padStart(2, "0")}</span>
            </div>
            <span className="label">Seconds</span>
          </TimeUnit>
        </TimerContainer>

        <Decorations>
          <div className="circle circle-1" />
          <div className="circle circle-2" />
        </Decorations>
      </LaunchWrapper>
    </DashedContainer>
  );
};

export default Page;

/* -----------------------------------------------------------
   STYLES
----------------------------------------------------------- */

const LaunchWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px 24px;
  position: relative;
  overflow: hidden;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    max-width: 800px;
    z-index: 2;
    margin-bottom: 60px;
  }

  .badge {
    background: rgba(238, 35, 42, 0.1);
    color: #EE232A;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 24px;
    border: 1px solid rgba(238, 35, 42, 0.2);
  }

  .title {
    margin-bottom: 24px;
    .highlight {
      color: #EE232A;
      position: relative;
      display: inline-block;
      
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 4px;
        width: 100%;
        height: 8px;
        background: rgba(238, 35, 42, 0.2);
        z-index: -1;
      }
    }
  }

  .subtitle {
    max-width: 600px;
  }
`;

const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  z-index: 2;

  @media (max-width: 768px) {
    gap: 10px;
    flex-wrap: nowrap;
    width: 100%;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
  }
`;

const TimeUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  .value-box {
    width: 120px;
    height: 120px;
    background: #ffffff;
    border: 1px dashed #d3d3d3;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50%;
      background: rgba(0, 0, 0, 0.02);
      border-bottom: 1px solid rgba(0,0,0,0.05);
    }
  }

  .value {
    font-size: 56px;
    font-weight: 700;
    color: #000;
    font-variant-numeric: tabular-nums;
    z-index: 1;
  }

  .label {
    font-size: 16px;
    font-weight: 500;
    color: #666;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  @media (max-width: 768px) {
    .value-box {
      width: 70px;
      height: 70px;
      border-radius: 12px;
    }
    .value {
      font-size: 28px;
    }
    .label {
      font-size: 10px;
      letter-spacing: 1px;
    }
  }

  @media (max-width: 480px) {
    gap: 8px;
    
    .value-box {
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }
    .value {
      font-size: 24px;
    }
    .label {
      font-size: 9px;
      letter-spacing: 0.5px;
    }
  }
`;

const Separator = styled.div`
  font-size: 56px;
  font-weight: 300;
  color: #d3d3d3;
  margin-top: -30px;

  @media (max-width: 768px) {
    font-size: 28px;
    margin-top: -20px;
    
    &.hide-mobile {
      display: block; /* Make sure it shows so we have 4 units in a row */
    }
  }
  
  @media (max-width: 480px) {
    font-size: 24px;
    margin-top: -16px;
  }
`;

const Decorations = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;

  .circle {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    opacity: 0.4;
  }

  .circle-1 {
    width: 400px;
    height: 400px;
    background: rgba(238, 35, 42, 0.15);
    top: -100px;
    left: -100px;
    animation: float 10s ease-in-out infinite;
  }

  .circle-2 {
    width: 300px;
    height: 300px;
    background: rgba(0, 0, 0, 0.05);
    bottom: -50px;
    right: -50px;
    animation: float 8s ease-in-out infinite reverse;
  }

  @keyframes float {
    0% { transform: translate(0, 0); }
    50% { transform: translate(30px, 30px); }
    100% { transform: translate(0, 0); }
  }
`;
