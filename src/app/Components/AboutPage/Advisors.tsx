"use client"
import styled from "@emotion/styled"
import { DashedContainer } from "../Containers";
import { Dpara, DyH2 } from "../TypSetting";

//ast
const TaherBhai = "/team/taher-bhai.png"
const Labdhi = "/team/labdhi.png"
const MohammedBhai = "/team/moha-bhai.png"



const advisors = [
  {
    name: "Taher Lokhandwala",
    title: "Growth @ Delve",
    image: TaherBhai,
  },
  {
    name: "Labdhi Chopda",
    title: "Advisor ",
    image: Labdhi,

  },
  {
    name: "Mohammed Khambaty",
    title: "CTO of Install IoT",
    image: MohammedBhai,
  },
];



const Advisors = () => {
  return (
    <DashedContainer leftBottom rightBottom>

      <Wrapper>
        <DyH2
          fontSize={{ base: '40px', md: '32px', sm: '32px' }}
          lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#181010"
          className="text-center mt-md"
        >
          Our advisors
        </DyH2>

        <Grid>
          {advisors.map((member, index) => (
            <Card key={index}>
              <HexImage src={member.image} alt="Hexagon image" />
              <div>
                <Dpara
                  fontSize="20px"
                  lineHeight="24px"
                  fontWeight="600"
                  color="#181010"
                  mdFontSize="20px"
                  mdLineHeight="24px"
                  smFontSize="20px"
                  smLineHeight="24px"
                  textAlign="left"
                  className="w-max"
                >
                  {member.name}
                </Dpara>
                <Dpara
                  fontSize="20px"
                  lineHeight="24px"
                  fontWeight="200"
                  color="#181010"
                  mdFontSize="20px"
                  mdLineHeight="24px"
                  smFontSize="20px"
                  smLineHeight="24px"
                  textAlign="left"
                  className="mt-sm w-max"
                >
                  {member.title}
                </Dpara>
              </div>
            </Card>
          ))}
        </Grid>

      </Wrapper>
    </DashedContainer>
  )
}

export default Advisors

const Wrapper = styled.section`
  padding: 80px;

display:flex;
flex-direction:column;

  @media (max-width: 768px) {
  padding :  24px 12px; 
  }
`

const Grid = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
      margin-top: 24px;
      flex-direction: column;
      gap: 24px;
  }
`;


const Card = styled.div`
display:flex; 
align-items:center;
justify-content:center;
gap:16px;

  &:hover img {
    filter: grayscale(0%);
  }

    @media (max-width: 768px) {
justify-content:flex-start;

    &:not(:last-child) {
      padding-bottom: 24px;
      border-bottom: 1px dashed rgba(211, 197, 197, 0.3);
    }
  }
`


const HexImage = styled.img`
  width: 114px;
  height: 100px;
  display: block;

    @media (max-width: 768px) {
  width: 80px;
  height: 74px;
  }
`;
