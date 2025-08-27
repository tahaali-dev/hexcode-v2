"use client"
import styled from "@emotion/styled";
import { DashedContainer, StyledImage } from "../Containers";
import { Dpara } from "../TypSetting";

// Images ----
const two = "/companies/MPL.svg";
const three = "/companies/cuemath.svg";
const four = "/companies/Rupeek.svg";
const five = "/companies/Micromax.svg";
const seven = "/companies/ayla.svg";
const nine = "/companies/Volt.svg";
const eleven = "/companies/userexperior.svg";
const sixteen = "/companies/delve.svg";

// Image list with dimensions
const imageList = [
  { src: five, width: 108, height: 37 },
  { src: two, width: 68, height: 42 },
  { src: eleven, width: 108, height: 26 },
  { src: three, width: 108, height: 26 },
  { src: four, width: 108, height: 26 },
  { src: nine, width: 68, height: 42 },
  { src: sixteen, width: 108, height: 42 },
  { src: seven, width: 112, height: 18 }
];

const MobileComp = () => {

  return (
    <DashedContainer leftBottom rightBottom>
      <Wrapper>
        <div className="px-sm">
          <Dpara
            fontSize="18px"
            lineHeight="24px"
            fontWeight="400"
            color="#D6D6D6"
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
        </div>

        <LogoWrap>
          {imageList.map((image, index) => (
            <LogoBox key={index}>
              <StyledImage
                src={image.src}
                alt={`icon-${index + 1}`}
                width={image.width}
                height={image.height}
              />
            </LogoBox>
          ))}
        </LogoWrap>

      </Wrapper>
    </DashedContainer>
  )
}

export default MobileComp


// styles ----
const Wrapper = styled.div`
    padding: 48px 0px;
     display:none;

    @media (max-width: 768px) {
     display: flex;
     justify-content:center;
     flex-direction:column;
     gap:24px;
    padding: 24px 0px 0px 0px;
  }
    `;


const LogoWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);  /* 2 items per row */
  border : 1px dashed #8F8F8F33;      
  border-radius:8px;
`;

const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border-bottom: 1px dashed #8F8F8F33;
  border-right: 1px dashed #8F8F8F33;
  
  img{
  filter:brightness(0) invert(1);
  }

  /* Remove right border for last column items */
  &:nth-of-type(2n) {
    border-right: none;
  }

  /* Remove bottom border for last row items */
  &:nth-last-of-type(-n+2) {
    border-bottom: none;
  }

`;
