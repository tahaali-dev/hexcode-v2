"use client";
import styled from "@emotion/styled";
import { useRef } from "react";
import { PrimaryBtn } from "../Buttons";
import { Dpara, DyTitleH1 } from "../TypSetting";
import { useTextReveal } from "@/app/Hooks/useTextReveal";
import { useButtonReveal } from "@/app/Hooks/useButtonReveal";
import CompaniesWeWork from "./CompaniesWeWork";
import VideoPlayer from "./VideoPlayer";
import TextAnimation from "../TextAnimation";
import MobileComp from "./MobileComp";

const bgImg = "/img2.png";

const PrimeFold = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useTextReveal(".prime-animated");
  useButtonReveal(".prime-btn", 1.1);
  useButtonReveal(".com-wrap", 1.1);

  return (
    <Wrapper ref={wrapperRef}>
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

      <div className="prime-btn">
        <TextAnimation />
      </div>

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
          onClick={() => window.open("https://calendly.com/shabbir-hexcode/30min", "_blank")}
        />
      </div>

      <div className="mt-xl com-wrap">
        <CompaniesWeWork />
        <MobileComp />
      </div>

      <VideoPlayer />
    </Wrapper>
  );
};

export default PrimeFold;

// Styles unchanged…
const Wrapper = styled.div`
  position: relative;
  padding: 180px 0px 64px 0px;
  background-image: url(${bgImg});
  background-repeat: repeat;
  background-position: top;
  // background-size: cover;
  overflow: hidden;
  margin-top:-76px;
  /* Flip only the background image horizontally */
  & {
    /* This creates a pseudo-element to flip the background image */
    --bg-flip: scaleX(-1);
    background-image: none;
    position: relative;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 1;
    background-image: url(${bgImg});
    background-repeat: no-repeat;
    background-position: top;
    background-size: cover;
    transform: scaleX(-1);
    pointer-events: none;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 2;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(0px);
    pointer-events: none;
    background:
      url("data:image/svg+xml;utf8,<svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'><filter id='n' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.18'/></svg>") repeat,
      rgba(0,0,0,0.08);
  }

  > * { position: relative; z-index: 3; }

  @media (max-width: 768px) {
    margin-top:-58px;
    padding: 120px 0px 48px 0px;
    background-size: 60px 180px;
    .m-mt-lg{ margin-top:8px; }
    .m-mt-xxl{ margin-top: 24px; button{ width:50%; } }
  }
`;
