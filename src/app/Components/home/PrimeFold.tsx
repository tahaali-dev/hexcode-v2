"use client";

import styled from "@emotion/styled";
import { DashedContainer } from "../Containers";
import { PrimaryBtn } from "../Buttons";
import { Dpara, DyTitleH1 } from "../TypSetting";
import { useTextReveal } from "@/app/Hooks/useTextReveal";
import { useButtonReveal } from "@/app/Hooks/useButtonReveal";

const PrimeFold = () => {

  useTextReveal(".prime-animated");
  useButtonReveal(".prime-btn", 1.1);

  return (
    <DashedContainer rightBottom leftBottom>
      <Wrapper>

        <DyTitleH1
          fontSize={{ base: '56px', md: '38px', sm: '34px' }}
          lineHeight={{ base: '62px', md: '44px', sm: '42px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#181010"
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
          color="#181010"
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
          color="#a38f8f"
          className="mt-sm prime-animated"
        >
          Quick. Smart. Affordable.
        </DyTitleH1>

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

      </Wrapper>
    </DashedContainer >
  );
};

export default PrimeFold;

// Styles
const Wrapper = styled.div`
  padding: 80px;

  @media (max-width: 768px) {
    padding: 32px 8px;

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
