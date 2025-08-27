"use client";

import styled from "@emotion/styled";
import { DashedContainer } from "../Containers";
import { PrimaryBtn } from "../Buttons";
import { Dpara, DyTitleH1 } from "../TypSetting";
import { useTextReveal } from "@/app/Hooks/useTextReveal";
import { useButtonReveal } from "@/app/Hooks/useButtonReveal";
import CompaniesWeWork from "./CompaniesWeWork";
import VideoPlayer from "./VideoPlayer";
const bgImg = "/img1.png"
// const bgImg2 = "/img2.png"
// const bgImg3 = "/img3.png"

const PrimeFold = () => {

  useTextReveal(".prime-animated");
  useButtonReveal(".prime-btn", 1.1);

  return (
    // <DashedContainer rightBottom leftBottom>
    <Wrapper>
      <DyTitleH1
        fontSize={{ base: '56px', md: '38px', sm: '34px' }}
        lineHeight={{ base: '62px', md: '44px', sm: '42px' }}
        fontWeight={300}
        fontStyle="normal"
        textTransform="uppercase"
        // color="#181010"
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
        // color="#181010"
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
        // color="#a38f8f"
        color="#fff"
        className="mt-sm prime-animated"
      >
        Quick. Smart. Affordable.
      </DyTitleH1>

      <Dpara
        fontSize="18px"
        lineHeight="24px"
        fontWeight="300"
        // color="#352727"
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

      <VideoPlayer />


      <div className="mt-xl">
        <CompaniesWeWork />
      </div>

    </Wrapper>
    // </DashedContainer >
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
    z-index: 0;
    /* Blur effect */
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(0px);
    pointer-events: none;
    /* Noise texture overlay using SVG data URI */
    background:
      /* noise layer */
      url("data:image/svg+xml;utf8,<svg width='200' height='200' xmlns='http://www.w3.org/2000/svg'><filter id='n' x='0' y='0'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.18'/></svg>") repeat,
      /* optional semi-transparent overlay for more effect */
      rgba(0,0,0,0.08);
    /* The noise is subtle, adjust opacity in SVG as needed */
  }

  > * {
    position: relative;
    z-index: 1;
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
