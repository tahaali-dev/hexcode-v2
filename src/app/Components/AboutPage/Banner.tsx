"use client"
import styled from "@emotion/styled"
import Image from "next/image"
import { DashedContainer } from "../Containers"
import { DyTitleH1, HexSectionName } from "../TypSetting"

//assets
const MainImg = "/aboutus/Group 1000004507.webp"
import { useTextReveal } from "../../Hooks/useTextReveal"
import { useButtonReveal } from "../../Hooks/useButtonReveal"

const Banner = () => {

  useTextReveal(".about-text-animated");
  useButtonReveal(".about-img", 1);

  return (
    <DashedContainer leftBottom rightBottom>

      <Wrapper>

        <HexSectionName title="about us" className="d-flex align-center justify-start g-sm d-none about-img" />
        <HexSectionName title="about us" className="d-flex align-center justify-center g-sm m-none about-img" />

        <DyTitleH1
          fontSize={{ base: '64px', md: '38px', sm: '38px' }}
          lineHeight={{ base: '74px', md: '44px', sm: '44px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#181010"
          className="mt-md about-text-animated"
        >
          Built on relationships,<br /> not transactions
        </DyTitleH1>

        <Image
          src={MainImg}
          alt="About us banner image showing company values and relationships"
          width={1200}
          height={600}
          priority
          className="main-img about-img"
        />

      </Wrapper>

    </DashedContainer>
  )
}

export default Banner


const Wrapper = styled.section`
padding: 80px 16px 16px 16px;

.main-img{
width:100%;
margin-top:48px;
height: auto;
}

  @media (max-width: 768px) {
padding: 32px 16px 16px 16px;


.main-img{
width:100%;
margin-top:24px;
height: auto;
}

    h1{
    text-align:left;
    }
  }
`