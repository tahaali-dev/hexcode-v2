"use client"
import { useState } from "react";
import styled from "@emotion/styled";
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
// const ten = "/companies/squadcast.svg"; //saas
const eleven = "/companies/userexperior.svg"; //saas
const twelve = "/companies/Cyanergy.svg"; //sust
// const thirteen = "/companies/tinker.svg"; // ed-tech
const fourteen = "/companies/abc.svg"; // enter
// const fifteen = "/companies/starbrite.svg"; // health
const sixteen = "/companies/delve.svg"; // AI
const seventeen = "/companies/biotale.svg"; // AI
// const eighteen = "/companies/logo.svg"; // saas
const nineteen = "/companies/sensyrtech.svg"; //Iot, saas

// Image list
const imageList = [
 { src: one, width: 112, height: 36, category: "Finance" },
 { src: two, width: 68, height: 36, category: "Gaming" },
 { src: three, width: 108, height: 36, category: "Edtech" },
 { src: four, width: 108, height: 36, category: "Finance" },
 { src: nine, width: 68, height: 36, category: "Finance" },
 { src: five, width: 108, height: 36, category: "Information technology" },
 { src: eleven, width: 138, height: 34, category: "Saas" },
 { src: seven, width: 156, height: 24, category: "Iot" },
 { src: eight, width: 108, height: 36, category: "Information technology" },
 { src: twelve, width: 108, height: 36, category: "Sustainability" },
 { src: fourteen, width: 42, height: 48, category: "Enterprise" },
 { src: sixteen, width: 108, height: 36, category: "Artificial intelligence" },
 { src: seventeen, width: 108, height: 36, category: "Artificial intelligence" },
 { src: nineteen, width: 76, height: 42, category: "Iot, saas" },
];

// Helpers
function getCategorySet(category: string) {
 return new Set(
  category
   .split(",")
   .map((c) => c.trim().toLowerCase())
   .filter(Boolean)
 );
}

const CompaniesWeWork = () => {
 const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
 const [cursor, setCursor] = useState({ x: 0, y: 0 });

 const hoveredCategories =
  hoveredIndex !== null ? getCategorySet(imageList[hoveredIndex].category) : null;

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
      let isBlurred = false;
      if (hoveredCategories) {
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
        className="company-logo"
        width={image.width}
        height={image.height}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onMouseMove={(e) =>
         setCursor({ x: e.clientX + 12, y: e.clientY + 12 })
        }
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

    {/* Tooltip Chip */}
    {hoveredIndex !== null && (
     <Tooltip style={{ top: cursor.y + 34, left: cursor.x }}>
      {imageList[hoveredIndex].category}
     </Tooltip>
    )}
   </Wrapper>
  </DashedContainer>
 );
};

export default CompaniesWeWork;

// Styles
const Wrapper = styled.div`
  padding: 48px 0px;
  position: relative;

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

const Tooltip = styled.div`
  position: fixed;
  background: rgba(255, 255, 255, 0.7); /* semi-transparent white */
  color: #111;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  pointer-events: none;
  white-space: nowrap;
  z-index: 1000;
  transform: translate(-50%, -100%);
  backdrop-filter: blur(8px);  /* glassy blur effect */
  -webkit-backdrop-filter: blur(8px); /* Safari support */
  border: 1px solid rgba(255, 255, 255, 0.5); /* subtle glass border */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* soft shadow for depth */
`;

