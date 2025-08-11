"use client"
import { useState } from "react";
import styled from "@emotion/styled";
import Marquee from "react-fast-marquee";
import { DashedContainer, StyledImage } from "../Containers";
import { Dpara } from "../TypSetting";

// Images ----
const one = "/companies/UAE.svg";
const two = "/companies/MPL.svg";
const three = "/companies/cuemath.svg";
const four = "/companies/Rupeek.svg";
const five = "/companies/Micromax.svg";
const seven = "/companies/ayla.svg";
const eight = "/companies/affinity.svg";
const nine = "/companies/Volt.svg";
const ten = "/companies/squadcast.svg";
const eleven = "/companies/userexperior.svg";
const twelve = "/companies/Cyanergy.svg";
const thirteen = "/companies/tinker.svg";
const fourteen = "/companies/abc.svg";
const fifteen = "/companies/starbrite.svg";
const sixteen = "/companies/delve.svg";
const seventeen = "/companies/biotale.svg";
const eighteen = "/companies/logo.svg";
const nineteen = "/companies/sensyrtech.svg";

// Image list
const imageList = [
  one, two, three, four, nine, five, eleven,
  seven, eight, ten, twelve, thirteen, fourteen,
  fifteen, sixteen, seventeen, eighteen, nineteen
];

const CompanyMarq = () => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <DashedContainer leftBottom rightBottom>
      <Wrapper>
        <Dpara
          fontSize="18px"
          lineHeight="24px"
          fontWeight="400"
          color="#a38f8f"
          mdFontSize="16px"
          mdLineHeight="24px"
          smFontSize="16px"
          smLineHeight="24px"
          textAlign="center"
          className="text-Uppercase"
        >
          {/* our partners */}
          Trusted by 80+ customers, from startup to enterprise
        </Dpara>

        <div className="marquee-holder mt-xl">
          <div className="gradient-left" />

          <Marquee
            gradient={false}
            speed={50}
            pauseOnHover={false}
            pauseOnClick={false}
            play={hoveredIndex === null}
          >
            {imageList.map((imageSrc, index) => (
              <div
                className="logo-holder"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <StyledImage
                  src={imageSrc}
                  alt={`icon-${index + 1}`}
                  className={`company-logo ${hoveredIndex === index ? "active" : ""}`}
                  width={107}
                  height={48}
                />
              </div>
            ))}
          </Marquee>

          <div className="gradient-right" />
        </div>
      </Wrapper>
    </DashedContainer>
  );
};

export default CompanyMarq;


// styles ----
const Wrapper = styled.div`
  padding: 48px 0px;

  .marquee-holder{
    position: relative;
  }

  .logo-holder {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .gradient-left {
    position: absolute;
    min-width: 83px;
    height: 100%;
    left: 0px;
    z-index: 2;
    background: linear-gradient(90deg, #FBF9F9 8.47%, rgba(251, 249, 249, 0.00) 100%);
  }

  .gradient-right {
    position: absolute;
    min-width: 83px;
    height: 100%;
    top: 0px;
    right: 0px;
    z-index: 1;
    background: linear-gradient(
      270deg,
      #fbf9f9 8.47%,
      rgba(251, 249, 249, 0) 100%
    );
  }

  .company-logo {
    filter: grayscale(100%);
    transition: 0.3s ease;
    margin: 0px 24px;
  }

  .company-logo.active {
    filter: none;
    cursor:pointer;
  }

  @media (max-width: 768px) {
  display:none;
  padding: 24px 0px;
  }
`;
