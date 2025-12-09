"use client"
import styled from "@emotion/styled";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { DashedContainer, StyledImage } from "../Containers";
import { Dpara, DyH2, HexSectionName } from "../TypSetting";
import Lottie from "lottie-react";
import { cardsData } from "@/app/Static/OurCaps";
import { ServiceCard } from "../ServiceCard";
const ArrowIcon = "/icons/curlyline.svg";
gsap.registerPlugin(ScrollTrigger);

const OurCapabilities = () => {
  return (
    <DashedContainer rightBottom leftBottom>
      <Wrapper>
        <HexSectionName title="Our Capabilities" />

        <DyH2
          fontSize={{ base: '40px', md: '32px', sm: '32px' }}
          lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#181010"
          className="text-center mt-md"
        >
          Overview of <br /> our services
        </DyH2>

        <Dpara
          fontSize="18px"
          lineHeight="24px"
          fontWeight="300"
          color="#352727"
          mdFontSize="16px"
          mdLineHeight="24px"
          smFontSize="16px"
          smLineHeight="24px"
          textAlign="center"
          className="mt-sm"
        >
          Your all-in-one partner for digital excellence
        </Dpara>

        <LottieBox className="lottie-box">
          <div className="lot-holder">
            <StyledImage
              src={ArrowIcon}
              alt="arrow"
              width={168}
              height={204}
            />
          </div>
        </LottieBox>

        <div>
          {cardsData.map((card, index) => (
            <Card
              key={index}
            >
              <ServiceCard
                title={card.title}
                bgcolor={card.bgcolor}
                para1={card.para1}
                tags={card.tags}
                image={card.image}
                icon={card.icon}
                mobileImage={card.mobileImage}
                type={card.title === "Consulting" ? "consulting" : "default"}
                tagBg={card.tagBg}
                tagBorder="transparent"
              />
            </Card>
          ))}
        </div>
      </Wrapper>
    </DashedContainer>
  );
};

export default OurCapabilities;


const Wrapper = styled.div`
  padding: 80px 16px 16px 16px;

    @media (max-width: 768px) {
       padding: 24px 16px 16px 16px;
    }
`;

const LottieBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0px;

      @media (max-width: 768px) {
        margin: 24px 0px 0px 0px;
    img{
    width: 122px;
    height: 148px;
    }
    }
`;

const Card = styled.li`
  list-style: none;
  padding-top: 32px;

  @media (min-width: 768px) {
    position: sticky;
    top: 0;
  }
`;
