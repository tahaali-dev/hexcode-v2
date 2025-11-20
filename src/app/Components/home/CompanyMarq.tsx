"use client"
import { useState } from "react";
import styled from "@emotion/styled";
import Marquee from "react-fast-marquee";
import { DashedContainer, StyledImage } from "../Containers";
import { Dpara } from "../TypSetting";

// Images ----
const one = "/companies/UAE.svg"; //fin
const two = "/companies/MPL.svg"; // gaming
const three = "/companies/cuemath.svg"; // ed-tech
const four = "/companies/Rupeek.svg"; // fin
const five = "/companies/Micromax.svg"; // information and  tech
const seven = "/companies/ayla.svg"; //IOT
const eight = "/companies/affinity.svg"; // information and  tech
const nine = "/companies/Volt.svg"; //fin
const ten = "/companies/squadcast.svg"; //saas
const eleven = "/companies/userexperior.svg"; //saas
const twelve = "/companies/Cyanergy.svg"; //sust
const thirteen = "/companies/tinker.svg"; // ed-tech
const fourteen = "/companies/abc.svg"; // enter
const fifteen = "/companies/starbrite.svg"; // health
const sixteen = "/companies/delve.svg"; // AI
const seventeen = "/companies/biotale.svg"; // AI
const eighteen = "/companies/logo.svg"; // saas
const nineteen = "/companies/sensyrtech.svg"; //Iot, saas
const twenty = "/companies/hexaclimate.svg"; //
const twentyone = "/companies/logo.svg"; //
const twentytwo = "/companies/fuel-cycle.svg"; //
const twentythree = "/companies/haven.svg"; //
const twentyfour = "/companies/30-sund.svg"; //
const twentyfive = "/companies/oasys.svg"; //
const twentysix = "/companies/brighterway.svg"; //
const twentyseven = "/companies/scalix.svg"; //

// Image list with width and height for each logo
const imageList = [
  { src: one, width: 112, height: 36 },
  { src: two, width: 68, height: 36 },
  { src: three, width: 108, height: 36 },
  { src: four, width: 108, height: 36 },
  { src: nine, width: 68, height: 36 },
  { src: five, width: 108, height: 36 },
  { src: eleven, width: 152, height: 40 },
  { src: seven, width: 156, height: 24 },
  { src: eight, width: 108, height: 36 },
  { src: ten, width: 108, height: 36 },
  { src: twelve, width: 108, height: 36 },
  { src: thirteen, width: 112, height: 36 },
  { src: fourteen, width: 42, height: 48 },
  { src: fifteen, width: 86, height: 36 },
  { src: sixteen, width: 108, height: 36 },
  { src: seventeen, width: 108, height: 36 },
  { src: eighteen, width: 108, height: 36 },
  { src: nineteen, width: 76, height: 42 },
  // New logos
  { src: twenty, width: 108, height: 36 },
  { src: twentyone, width: 108, height: 36 },
  { src: twentytwo, width: 108, height: 36 },
  { src: twentythree, width: 108, height: 36 },
  { src: twentyfour, width: 108, height: 36 },
  { src: twentyfive, width: 108, height: 36 },
  { src: twentysix, width: 108, height: 36 },
  { src: twentyseven, width: 108, height: 36 },
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
            {imageList.map((image, index) => (
              <div
                className="logo-holder"
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <StyledImage
                  src={image.src}
                  alt={`icon-${index + 1}`}
                  className={`company-logo ${hoveredIndex === index ? "active" : ""}`}
                  width={image.width}
                  height={image.height}
                />
              </div>
            ))}
          </Marquee>

          <div className="gradient-right" />
        </div>
      </Wrapper>
    </DashedContainer >
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
