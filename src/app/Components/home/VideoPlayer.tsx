"use client";
import React, { useLayoutEffect, useRef } from "react";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const VideoPlayer: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useLayoutEffect(() => {
    if (!wrapperRef.current || !videoRef.current) return;

    // GSAP context for cleanup
    const ctx = gsap.context(() => {
      // Animate width to 100vw as the wrapper approaches the top
      gsap.to(videoRef.current, {
        width: "100vw",
        borderRadius: "0px",
        ease: "none",
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top bottom",   // when wrapper hits bottom of viewport
          end: "top top",        // until wrapper reaches top of viewport
          scrub: true,           // smooth scrubbing
          // markers: true,      // uncomment for debugging
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper ref={wrapperRef}>
      <video
        ref={videoRef}
        src="https://screenrepo-production-bucket.s3.ap-south-1.amazonaws.com/videos/Volt+Money+Music+V2+(1)_1.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </Wrapper>
  );
};

export default VideoPlayer;

const Wrapper = styled.div`
  margin-top: 64px;
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: visible;

  video {
    border-radius: 22px;
    width: 1240px;                /* starting width */
    max-width: 100vw;             /* never exceed viewport before GSAP kicks in */
    display: block;
    background-color: color-mix(in oklab, #fff 20%, transparent);
    // border: 1px solid #fff3;
    // padding: 8px;
    will-change: width;           /* smoother width animation */
  }

  @media (max-width: 1240px) {
    video {
      width: 92vw;                /* sensible start on smaller screens */
    }
  }

  @media (max-width: 768px) {
    margin-top: 32px;
    padding: 4px;

    video {
      border-radius: 8px;
      width: 94vw;                /* mobile start, still scrubs to 100vw */
    }
  }
`;
