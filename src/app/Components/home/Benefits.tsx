"use client"
import styled from "@emotion/styled";
import { DashedContainer } from "../Containers";
import { Dpara, DyH2, HexSectionName } from "../TypSetting";
import { PrimaryBtn } from "../Buttons";
import { useState } from "react";
import ContactForm from "../ContactModal";
import { BenefitCard } from "../common/Cards";
import { benefitsData } from "@/app/Static/benefits";


const Benefits = () => {

  const [formVisible, setFormVisible] = useState(false);

  return (

    <DashedContainer
      leftBottom={true}
      rightBottom={true}
    >
      <Wrapper>
        <HexSectionName title="Subscription" />

        <DyH2
          fontSize={{ base: '40px', md: '32px', sm: '32px' }}
          lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#181010"
          className="text-center mt-md"
        >
          Great Designs <br /> Done Quickly
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
          Get all our design services for a fixed monthly fee. <br /> Enjoy all
          the benefits.
        </Dpara>


        <div className="text-center mt-lg">
          <PrimaryBtn
            padding="12px 16px"
            fontSize="16px"
            margin="0"
            borderRadius="8px"
            btnContent="Start today"
            onClick={() => setFormVisible(true)}
          />
        </div>

        <BenefitsCardHolder>
          {benefitsData.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              subtitle={benefit.subtitle}
            />
          ))}
        </BenefitsCardHolder>
      </Wrapper>


      <ContactForm show={formVisible} onClose={() => setFormVisible(false)} />

    </DashedContainer>
  );
};

export default Benefits;

const Wrapper = styled.div`
  padding: 80px 0px;

  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`;

const BenefitsCardHolder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 80px;
  margin-top: 80px;
  padding: 0px 80px;

  @media (max-width: 768px) {
    padding: 0px 0px;
    grid-template-columns: 1fr ;
    gap: 38px 16px;
    margin-top: 32px;
  }
`;
