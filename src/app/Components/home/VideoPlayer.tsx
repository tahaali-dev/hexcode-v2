"use client"
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DashedContainer } from "../Containers";
gsap.registerPlugin(ScrollTrigger);

const VideoPlayer: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      gsap.fromTo(
        wrapperRef.current,
        {
          y: 150,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
        }
      );
    }
  }, []);

  return (
    <DashedContainer leftBottom rightBottom>
      <Wrapper ref={wrapperRef}>
        <video
          src="https://screenrepo-production-bucket.s3.ap-south-1.amazonaws.com/videos/Volt+Money+Music+V2+(1)_1.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <BottomFade />
      </Wrapper>
    </DashedContainer >
  );
};

export default VideoPlayer;

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-top:64px;
  border:1px solid red;
  padding:8px;

  border-radius : 22px;
  overflow:hidden;
  background-color: 
    color-mix(in oklab, #fff 20%, transparent);
  border-color: #fff3;

  video{
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius : 22px;
    display: block;
  }

    @media (max-width: 768px) {
      margin-top:32px;
      border-radius : 8px;
        padding:4px;

        video{
    border-radius : 8px;
  }
    }
`;

// Gradient overlay for bottom fade
const BottomFade = styled.div`
  pointer-events: none;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 32%; /* adjust as needed */
  border-radius: 0 0 22px 22px;
  background: linear-gradient(
    to bottom,
    rgba(255,255,255,0) 0%,
    rgba(0,0,0,0.12) 60%,
    rgba(0,0,0,0.32) 100%
  );
  z-index: 2;
`;
