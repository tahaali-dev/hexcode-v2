"use client"
import styled from "@emotion/styled"
import Image from "next/image"
import { DashedContainer } from "../Containers"
import { Dpara } from "../TypSetting"

//Team
const AliBhai = "/team/ali-bhai.png"
const Burhan = "/team/burhan.png"
const Husain = "/team/husain.png"
const HusainSaifee = "/team/husain-sai.png"
const MuffuBhai = "/team/muffu-bhai.png"
const Qaid = "/team/qaid.png"
const ShabbirBhai = "/team/shabbir-bhai.png"
const Taha = "/team/taha.png"


const teamMembers = [
  {
    name: "Aliasgher Millwala",
    title: "Co-founder",
    image: AliBhai,
    bgColor: "#C3ABFF"
  },
  {
    name: "Burhanuddin",
    title: "Sr Product Designer",
    image: Burhan,
    bgColor: "#FBC1D4"
  },
  {
    name: "Husain Manpurwala",
    title: "Sr UI/UX Designer",
    image: Husain,
    bgColor: "#FED35B"
  },
  {
    name: "Husain Saifee",
    title: "CFO",
    image: HusainSaifee,
    bgColor: "#AFF9D1"
  },
  {
    name: "Mufaddal Ezzy",
    title: "Creative Head",
    image: MuffuBhai,
    bgColor: "#C3ABFF "
  },
  {
    name: "Qaidjoher",
    title: "UI/UX Designer",
    image: Qaid,
    bgColor: "#81D0FF"
  },
  {
    name: "Shabbir Manpurwala",
    title: "Co-founder",
    image: ShabbirBhai,
    bgColor: "#FED35B"
  },
  {
    name: "Taha Millwala",
    title: "Developer",
    image: Taha,
    bgColor: "#FBC1D4"
  }
];



const MeetTeam = () => {
  return (
    <DashedContainer leftBottom rightBottom>
      <Wrapper>

        <Grid>
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <Hexagon bgColor={member.bgColor}>
                <HexImageContainer className="hex-image-container">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    fill
                    sizes="100px"
                    style={{ objectFit: 'cover' }}
                  />
                </HexImageContainer>
              </Hexagon>
              <div>
                <Dpara
                  fontSize="20px"
                  lineHeight="24px"
                  fontWeight="600"
                  color="#FFF"
                  mdFontSize="20px"
                  mdLineHeight="24px"
                  smFontSize="20px"
                  smLineHeight="24px"
                  textAlign="left"
                >
                  {member.name}
                </Dpara>
                <Dpara
                  fontSize="20px"
                  lineHeight="24px"
                  fontWeight="200"
                  color="#FFF"
                  mdFontSize="20px"
                  mdLineHeight="24px"
                  smFontSize="20px"
                  smLineHeight="24px"
                  textAlign="left"
                  className="mt-sm"
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

export default MeetTeam

const Wrapper = styled.section`
  padding: 80px;
margin: 0px 8px
display:flex;
border-radius: 24px;
background: var(--Black-black-600, #181010);

  @media (max-width: 768px) {
  padding :  24px; 
  }
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;


const Card = styled.div`
display:flex; 
align-items:center;
gap:16px;

  &:hover .hex-image-container {
    filter: grayscale(0%);
  }

  @media (max-width: 768px) {
    &:not(:last-child) {
      padding-bottom: 24px;
      border-bottom: 1px dashed rgba(211, 197, 197, 0.3);
    }
  }
`

interface HexagonProps {
  bgColor?: string;
}

const Hexagon = styled.div<HexagonProps>`
  width: 100px;
  height: 100px;

  clip-path: polygon(
    25% 5%, 
    75% 5%, 
    100% 50%, 
    75% 95%, 
    25% 95%, 
    0% 50%
  );
  background-color: ${(props) => props.bgColor || '#ccc'};
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
  width: 80px;
  height: 80px;
  }
`;

const HexImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  filter: grayscale(100%);
  transition: filter 0.4s ease;

  &:hover {
    filter: grayscale(0%);
  }
`;


