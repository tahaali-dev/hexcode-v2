"use client"
import styled from "@emotion/styled";
const aboutUsHexagons = "/aboutImgs/aboutushexagones.png";
import { DashedContainer, StyledImage } from "../Containers";
import { Dpara, DyH2, HexSectionName } from "../TypSetting";
import { PrimaryBtn } from "../Buttons";
import Image from "next/image";
// Imports ------------------------------------------------

const AboutUs = () => {
  return (
    <DashedContainer
      leftBottom={true}
      rightBottom={true}
    >
      <Wrapper>

        <HexSectionName title="About Hexcode" />

        <DyH2
          fontSize={{ base: '40px', md: '32px', sm: '32px' }}
          lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#FFF"
          className="text-center mt-md"
        >
          Building Experiences That Matter
        </DyH2>

        <Dpara
          fontSize="18px"
          lineHeight="24px"
          fontWeight="300"
          color="#d3c5c5"
          mdFontSize="16px"
          mdLineHeight="24px"
          smFontSize="16px"
          smLineHeight="24px"
          textAlign="center"
          className="mt-sm"
        >
          We are a product strategy and design agency dedicated to creating
          <br className="m-none" />
          digital experiences customers love.
        </Dpara>



        <div className="text-center mt-lg">
          <PrimaryBtn
            padding="12px 16px"
            fontSize="16px"
            margin="0"
            borderRadius="8px"
            btnContent="Meet the Team"
            onClick={() => window.location.href = "/about-us"}
          />
        </div>

        <img
          src={aboutUsHexagons}
          alt="about-us-image"
          className="hexagons-image"
        />
      </Wrapper>
    </DashedContainer>
  );
};

export default AboutUs;

const Wrapper = styled.div`
  border-radius: 16px;
  background: var(--clr-dark);
    padding: 80px 0px 0px 0px;

    .hexagons-image{
    margin-top:48px;
        width:100%;
    }

    @media (max-width: 768px) {
       padding: 24px 0px 0px 0px;
    }

  @media (max-width: 768px) {
  padding: 32px 16px 0px 16px;

      .hexagons-image{
    margin-top:24px;
    width:100%;
    }
  }
`;
