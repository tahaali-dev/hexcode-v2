"use client";
import styled from "@emotion/styled";
import { useRef } from "react";
import { PrimaryBtn } from "../Buttons";
import { Dpara, DyTitleH1 } from "../TypSetting";
import { useTextReveal } from "@/app/Hooks/useTextReveal";
import { useButtonReveal } from "@/app/Hooks/useButtonReveal";
import CompaniesWeWork from "./CompaniesWeWork";
import VideoPlayer from "./VideoPlayer";
// import TextAnimation from "../TextAnimation";
import MobileComp from "./MobileComp";
import { DashedContainer } from "../Containers";

// const bgImgMob = "/bg-new-mob-21.webp";
// const bgImg = "/bg-new-21.webp";

const PrimeFold = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useTextReveal(".prime-animated");
  useButtonReveal(".prime-btn", 1.1);
  useButtonReveal(".com-wrap", 1.1);

  return (
    <DashedContainer showLines>
      <Wrapper ref={wrapperRef}>
        <DyTitleH1
          fontSize={{ base: "56px", md: "38px", sm: "34px" }}
          lineHeight={{ base: "62px", md: "44px", sm: "42px" }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#000"
          className="mt-md prime-animated"
        >
          UX/UI for fast
        </DyTitleH1>

        <DyTitleH1
          fontSize={{ base: "56px", md: "38px", sm: "34px" }}
          lineHeight={{ base: "62px", md: "44px", sm: "42px" }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#000"
          className="prime-animated text-center"
        >
          growing companies
        </DyTitleH1>

        <DyTitleH1
          fontSize={{ base: "56px", md: "38px", sm: "34px" }}
          lineHeight={{ base: "62px", md: "44px", sm: "42px" }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="rgba(0,0,0,0.55)"
          className="mt-sm prime-animated text-center"
        >
          Quick. Smart. Reliable.
        </DyTitleH1>
        {/* <TextAnimation /> */}

        <Dpara
          fontSize="18px"
          lineHeight="24px"
          fontWeight="300"
          color="#000"
          mdFontSize="16px"
          mdLineHeight="24px"
          smFontSize="16px"
          smLineHeight="24px"
          textAlign="center"
          className="mt-lg m-mt-lg prime-animated"
        >
          We strategize, execute, and help you ship faster in this fast-paced
          growing market.
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
              // window.open(
              //   "https://calendly.com/shabbir-hexcode/30min",
              //   "_blank",
              // )
              (window.location.href = "/book-a-call")
            }
          />
        </div>

        <div className="mt-xl com-wrap">
          <CompaniesWeWork />
          <MobileComp />
        </div>

        <VideoPlayer />
      </Wrapper>
    </DashedContainer>
  );
};

export default PrimeFold;

// Styles unchanged…
const Wrapper = styled.div`
  position: relative;
  padding: 180px 0px 0px 0px;
  padding-top: 76px;
`;
