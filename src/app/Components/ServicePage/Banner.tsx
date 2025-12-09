"use client"
import styled from "@emotion/styled"
import { DashedContainer } from "../Containers";
import { DyTitleH1, HexSectionName } from "../TypSetting";
import { useTextReveal } from "@/app/Hooks/useTextReveal";
import { useButtonReveal } from "@/app/Hooks/useButtonReveal";

const Banner = () => {

  useTextReveal(".service-text-animated");
  useButtonReveal(".hex-title-animated", 1);

  return (
    <DashedContainer leftBottom rightBottom>
      <Wrapper>

        <HexSectionName title="Services" className="d-flex align-center justify-start g-sm d-none hex-title-animated" />
        <HexSectionName title="Services" className="d-flex align-center justify-center g-sm m-none hex-title-animated" />

        <DyTitleH1
          fontSize={{ base: '64px', md: '38px', sm: '38px' }}
          lineHeight={{ base: '74px', md: '44px', sm: '44px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#181010"
          className="mt-md service-text-animated"
        >
          End-to-End Design <br />
          Services for Modern Brands
        </DyTitleH1>

      </Wrapper>

    </DashedContainer>
  )
}

export default Banner


const Wrapper = styled.section`
padding: 80px 16px;

  @media (max-width: 768px) {
    padding: 32px 16px;

    h1,p{
    text-align:left;
    }
  }
`