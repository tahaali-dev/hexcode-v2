"use client"
import { useState } from "react";
import styled from "@emotion/styled";
import { DashedContainer, StyledImage } from '../Containers';
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

// Image list with width, height, and category for each logo
const imageList = [
 { src: one, width: 112, height: 36, category: "fin" },
 { src: two, width: 68, height: 36, category: "gaming" },
 { src: three, width: 108, height: 36, category: "ed-tech" },
 { src: four, width: 108, height: 36, category: "fin" },
 { src: nine, width: 68, height: 36, category: "fin" },
 { src: five, width: 108, height: 36, category: "information and tech" },
 { src: eleven, width: 152, height: 40, category: "saas" },
 { src: seven, width: 156, height: 24, category: "iot" },
 { src: eight, width: 108, height: 36, category: "information and tech" },
 { src: ten, width: 108, height: 36, category: "saas" },
 { src: twelve, width: 108, height: 36, category: "sust" },
 { src: thirteen, width: 112, height: 36, category: "ed-tech" },
 { src: fourteen, width: 42, height: 48, category: "enter" },
 { src: fifteen, width: 86, height: 36, category: "health" },
 { src: sixteen, width: 108, height: 36, category: "ai" },
 { src: seventeen, width: 108, height: 36, category: "ai" },
 { src: eighteen, width: 108, height: 36, category: "saas" },
 { src: nineteen, width: 76, height: 42, category: "iot, saas" },
];

function getCategorySet(category: any) {
 // Split by comma, trim, and lowercase for comparison
 return new Set(
  category
   .split(",")
   .map((c: any) => c.trim().toLowerCase())
   .filter(Boolean)
 );
}

const CompaniesWeWork = () => {
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

 // Get the set of categories for the hovered logo
 const hoveredCategories =
  hoveredIndex !== null
   ? getCategorySet(imageList[hoveredIndex].category)
   : null;

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
     Trusted by 80+ customers, from startup to enterprise
    </Dpara>

    <LogoHolder>
     {imageList.map((image, index) => {
      const thisCategories = getCategorySet(image.category);
      // If hovered, check if this logo shares any category with hovered
      let isBlurred = false;
      if (hoveredCategories) {
       // If intersection is empty, blur
       const hasCommon = [...thisCategories].some((cat) =>
        hoveredCategories.has(cat)
       );
       isBlurred = !hasCommon;
      }
      return (
       <StyledImage
        key={index}
        src={image.src}
        alt={`icon-${index + 1}`}
        className={`company-logo${isBlurred ? " blurred" : ""}${hoveredIndex === index ? " active" : ""}`}
        width={image.width}
        height={image.height}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        style={{
         transition: "filter 0.2s",
         cursor: "pointer",
         filter:
          hoveredIndex !== null && !isBlurred
           ? "grayscale(0%)"
           : isBlurred
            ? "grayscale(100%) opacity(0.2)"
            : "grayscale(100%)",
        }}
       />
      );
     })}
    </LogoHolder>
   </Wrapper>
  </DashedContainer>
 );
};

export default CompaniesWeWork;

const Wrapper = styled.div`
  padding: 48px 0px;

  @media (max-width: 768px) {
    display: none;
    padding: 24px 0px;
  }
`;

const LogoHolder = styled.div`
  margin-top: 42px;
  display: flex;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
  padding: 0px 64px;



`;