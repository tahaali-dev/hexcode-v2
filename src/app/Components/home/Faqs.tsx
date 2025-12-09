"use client"
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";
import { DashedContainer } from "../Containers";
import { DyH2, HexSectionName } from "../TypSetting";
import { AccordionCard } from "../common/Cards";
import { faqData } from "@/app/Static/FaqData";

const breakpointColumnsObj: { [key: string]: number } = {
  default: 2,
  900: 2,
  750: 2,
  430: 1,
};

const Faqs: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <DashedContainer leftBottom rightBottom>
      <Wrapper>
        <HexSectionName title="FAQ" className="d-flex align-center justify-start g-sm w-100" />

        <DyH2
          fontSize={{ base: '40px', md: '32px', sm: '32px' }}
          lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#181010"
          className="text-left mt-md w-100"
        >
          Frequently <br />
          asked questions
        </DyH2>

        <AccordionsWrapper>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-column"
          >
            {faqData.map((faq, idx) => (
              <AccordionCard key={idx} title={faq.title}>
                {faq.content}
              </AccordionCard>
            ))}
          </Masonry>
        </AccordionsWrapper>


      </Wrapper>


    </DashedContainer>
  );
};

export default Faqs;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding:  80px 80px 16px 80px;

  @media (max-width: 768px) {
    padding: 32px 16px 16px 16px;
    align-items: center;
  }
`;

const AccordionsWrapper = styled.div`
margin-top:48px;


  .masonry-grid {
    display: flex;
    margin-left: -24px; 
    width: auto;
  }
  .masonry-column {
    padding-left: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .color-02 {
    color: var(--clr-dark2);
  }

  @media (max-width: 768px) {
   margin-top:24px;

    .masonry-grid {
      margin-left: -8px;
    }
    .masonry-column {
      padding-left: 8px;
    }
  }
`;
