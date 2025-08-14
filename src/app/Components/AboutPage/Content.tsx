import styled from "@emotion/styled"
import { DashedContainer } from "../Containers"
import { Dpara, DyH2, DyH3 } from "../TypSetting"
import { useState } from "react";
import { useActiveSectionObserver } from "../../Hooks/useActiveSectionObserver";

const Content = () => {

  const [activeSection, setActiveSection] = useState("");
  useActiveSectionObserver({ setActiveSection, offset: 300 });

  const handleScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const topOffset = 92;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - topOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(sectionId);
    }
  };


  return (
    <DashedContainer leftBottom rightBottom>
      <Wrapper>
        {/* <NavMenuMobile>
          <ItemMob
            active={activeSection === "our-story"}
            onClick={() => handleScroll("our-story")}
          >
            <p>Our story</p>
          </ItemMob>
          <ItemMob
            active={activeSection === "values"}
            onClick={() => handleScroll("values")}
          >
            <p>Values</p>
          </ItemMob>
          <ItemMob
            active={activeSection === "philosophy"}
            onClick={() => handleScroll("philosophy")}
          >
            <p>Philosophy</p>
          </ItemMob>
        </NavMenuMobile> */}


        <NavMenuDesktop>
          <Dpara
            fontSize="20px"
            lineHeight="24px"
            fontWeight="700"
            color="#352727"
            mdFontSize="20px"
            mdLineHeight="24px"
            smFontSize="29px"
            smLineHeight="24px"
            textAlign="left"
            className="ml-lg"
          >
            About
          </Dpara>

          <div className="d-flex flex-column mt-md">
            <Item
              active={activeSection === "our-story"}
              onClick={() => handleScroll("our-story")}
            >
              <span></span>
              <p>Our story</p>
            </Item>
            <Item
              active={activeSection === "values"}
              onClick={() => handleScroll("values")}
            >
              <span></span>
              <p>Values</p>
            </Item>
            <Item
              active={activeSection === "philosophy"}
              onClick={() => handleScroll("philosophy")}
            >
              <span></span>
              <p>Philosophy</p>
            </Item>
          </div>
        </NavMenuDesktop>

        <TextWrap>
          <div className="our-story" id="our-story" data-section>
            <DyH2
              fontSize={{ base: '40px', md: '32px', sm: '32px' }}
              lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
              fontWeight={300}
              fontStyle="normal"
              textTransform="capitalize"
              color="#181010"
              className="text-left"
            >
              From two friends with a shared vision to a studio trusted by 200+ teams.
            </DyH2>

            <Dpara
              fontSize="20px"
              lineHeight="28px"
              fontWeight="400"
              color="#181010 "
              mdFontSize="18px"
              mdLineHeight="24px"
              smFontSize="18px"
              smLineHeight="24px"
              textAlign="left"
              className="mt-lg"
            >
              In 2012, Shabbir and Ali, two childhood friends, set out to explore the unfamiliar world of design. At the time, “design” was mostly associated with interiors but tech was on the rise, and in our conversations with people who had more experience and established careers, we noticed a shift: digital design was going to be the next big thing.
            </Dpara>

            <Dpara
              fontSize="20px"
              lineHeight="28px"
              fontWeight="400"
              color="#181010 "
              mdFontSize="18px"
              mdLineHeight="24px"
              smFontSize="18px"
              smLineHeight="24px"
              textAlign="left"
              className="mt-lg"
            >
              Driven by curiosity and conviction, we pursued a diploma in design and began our careers at different companies. A few years in Bangalore introduced us to a thriving community of creators, founders, and technologists and we saw a growing opportunity to support them with thoughtful, impactful design.
            </Dpara>

            <Dpara
              fontSize="20px"
              lineHeight="28px"
              fontWeight="400"
              color="#181010 "
              mdFontSize="18px"
              mdLineHeight="24px"
              smFontSize="18px"
              smLineHeight="24px"
              textAlign="left"
              className="mt-lg"
            >
              In 2020, just after the first wave of the pandemic, we founded our design studio built on trust, empathy, and craft.
            </Dpara>

            <Dpara
              fontSize="20px"
              lineHeight="28px"
              fontWeight="400"
              color="#181010 "
              mdFontSize="18px"
              mdLineHeight="24px"
              smFontSize="18px"
              smLineHeight="24px"
              textAlign="left"
              className="mt-lg"
            >
              Since then, we've partnered with over 200+ early-stage startups, unicorns, industry leaders, and non-profits.
            </Dpara>

            <Dpara
              fontSize="20px"
              lineHeight="28px"
              fontWeight="400"
              color="#181010 "
              mdFontSize="18px"
              mdLineHeight="24px"
              smFontSize="18px"
              smLineHeight="24px"
              textAlign="left"
              className="mt-lg"
            >
              We don’t advertise. Every project we’ve worked on has come through referrals  and that’s our proudest achievement.
            </Dpara>

            <Dpara
              fontSize="20px"
              lineHeight="28px"
              fontWeight="400"
              color="#181010 "
              mdFontSize="18px"
              mdLineHeight="24px"
              smFontSize="18px"
              smLineHeight="24px"
              textAlign="left"
              className="mt-lg"
            >
              At Hexcode, we care deeply about delivering quality work that speaks for itself. The journey so far has been incredible, and we’re excited about what lies ahead.
            </Dpara>
          </div>

          <div className="values mt-xxl" id="values" data-section>

            <DyH2
              fontSize={{ base: '40px', md: '32px', sm: '32px' }}
              lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
              fontWeight={300}
              fontStyle="normal"
              textTransform="capitalize"
              color="#181010"
              className="text-left"
            >
              What We Stand For at Hexcode Design
            </DyH2>


            <div className="mt-lg">
              <DyH3
                fontSize={{ base: '28px', md: '24px', sm: '24px' }}
                lineHeight={{ base: '40px', md: '32px', sm: '32px' }}
                fontWeight={300}
                fontStyle="normal"
                textTransform="capitalize"
                color="#181010"
                className="text-left"
              >
                1. We build, not just design
              </DyH3>


              <Dpara
                fontSize="20px"
                lineHeight="28px"
                fontWeight="400"
                color="#181010 "
                mdFontSize="18px"
                mdLineHeight="24px"
                smFontSize="18px"
                smLineHeight="24px"
                textAlign="left"
                className="mt-sm"
              >
                We go beyond pixels. We immerse ourselves in our clients’ worlds, treating their problems like our own, and designing with purpose.
              </Dpara>
            </div>

            <div className="mt-lg">
              <DyH3
                fontSize={{ base: '28px', md: '24px', sm: '24px' }}
                lineHeight={{ base: '40px', md: '32px', sm: '32px' }}
                fontWeight={300}
                fontStyle="normal"
                textTransform="capitalize"
                color="#181010"
                className="text-left"
              >
                2. We grow together
              </DyH3>


              <Dpara
                fontSize="20px"
                lineHeight="28px"
                fontWeight="400"
                color="#181010 "
                mdFontSize="18px"
                mdLineHeight="24px"
                smFontSize="18px"
                smLineHeight="24px"
                textAlign="left"
                className="mt-sm"
              >
                Hexcode is a place for growth for our clients, our team, and our collaborators. We believe in mentoring, uplifting, and unlocking potential.
              </Dpara>
            </div>

            <div className="mt-lg">
              <DyH3
                fontSize={{ base: '28px', md: '24px', sm: '24px' }}
                lineHeight={{ base: '40px', md: '32px', sm: '32px' }}
                fontWeight={300}
                fontStyle="normal"
                textTransform="capitalize"
                color="#181010"
                className="text-left"
              >
                3. Ambition is welcome. Ego is not
              </DyH3>


              <Dpara
                fontSize="20px"
                lineHeight="28px"
                fontWeight="400"
                color="#181010 "
                mdFontSize="18px"
                mdLineHeight="24px"
                smFontSize="18px"
                smLineHeight="24px"
                textAlign="left"
                className="mt-sm"
              >
                We love big ideas and bold goals. But we stay grounded, collaborative, and human always.
              </Dpara>
            </div>

            <div className="mt-lg">
              <DyH3
                fontSize={{ base: '28px', md: '24px', sm: '24px' }}
                lineHeight={{ base: '40px', md: '32px', sm: '32px' }}
                fontWeight={300}
                fontStyle="normal"
                textTransform="capitalize"
                color="#181010"
                className="text-left"
              >
                4. Gratitude matters
              </DyH3>


              <Dpara
                fontSize="20px"
                lineHeight="28px"
                fontWeight="400"
                color="#181010 "
                mdFontSize="18px"
                mdLineHeight="24px"
                smFontSize="18px"
                smLineHeight="24px"
                textAlign="left"
                className="mt-sm"
              >
                We give people trust, ownership, and opportunity. In return, we value honesty, appreciation, and integrity. Mutual respect is non-negotiable.
              </Dpara>
            </div>

            <div className="mt-lg">
              <DyH3
                fontSize={{ base: '28px', md: '24px', sm: '24px' }}
                lineHeight={{ base: '40px', md: '32px', sm: '32px' }}
                fontWeight={300}
                fontStyle="normal"
                textTransform="capitalize"
                color="#181010"
                className="text-left"
              >
                5. People may move on our values stay
              </DyH3>


              <Dpara
                fontSize="20px"
                lineHeight="28px"
                fontWeight="400"
                color="#181010 "
                mdFontSize="18px"
                mdLineHeight="24px"
                smFontSize="18px"
                smLineHeight="24px"
                textAlign="left"
                className="mt-sm"
              >
                Not everyone’s meant to stay forever. But while you’re here, we’ll invest in you. And when you leave, we hope you carry a piece of Hexcode with you.
              </Dpara>
            </div>

            <div className="mt-lg">
              <DyH3
                fontSize={{ base: '28px', md: '24px', sm: '24px' }}
                lineHeight={{ base: '40px', md: '32px', sm: '32px' }}
                fontWeight={300}
                fontStyle="normal"
                textTransform="capitalize"
                color="#181010"
                className="text-left"
              >
                6. We’re a launchpad, not a cage
              </DyH3>


              <Dpara
                fontSize="20px"
                lineHeight="28px"
                fontWeight="400"
                color="#181010 "
                mdFontSize="18px"
                mdLineHeight="24px"
                smFontSize="18px"
                smLineHeight="24px"
                textAlign="left"
                className="mt-sm"
              >
                We don’t clip wings we help them grow. But we also protect our vision and our culture. Those who build with us are part of something bigger.
              </Dpara>
            </div>

          </div>

          <div className="philosophy  mb-xxl mt-xxl" id="philosophy" data-section>
            <DyH2
              fontSize={{ base: '40px', md: '32px', sm: '32px' }}
              lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
              fontWeight={300}
              fontStyle="normal"
              textTransform="capitalize"
              color="#181010"
              className="text-left"
            >
              Hexcode is a studio for bold builders and zero-to-one thinkers.
            </DyH2>

            <Dpara
              fontSize="20px"
              lineHeight="28px"
              fontWeight="400"
              color="#181010 "
              mdFontSize="18px"
              mdLineHeight="24px"
              smFontSize="18px"
              smLineHeight="24px"
              textAlign="left"
              className="mt-lg"
            >
              We don’t just work on projects we shape them. Our process is fast, sharp, and deeply collaborative. We love being early, scrappy, and essential.
            </Dpara>

            <Dpara
              fontSize="20px"
              lineHeight="28px"
              fontWeight="400"
              color="#181010 "
              mdFontSize="18px"
              mdLineHeight="24px"
              smFontSize="18px"
              smLineHeight="24px"
              textAlign="left"
              className="mt-lg"
            >
              But Hexcode isn’t just about client work. It’s a space where talented designers, thinkers, and creators can grow. We give people the trust and platform to lead, contribute, and evolve.
            </Dpara>

            <Dpara
              fontSize="20px"
              lineHeight="28px"
              fontWeight="400"
              color="#181010 "
              mdFontSize="18px"
              mdLineHeight="24px"
              smFontSize="18px"
              smLineHeight="24px"
              textAlign="left"
              className="mt-lg"
            >
              Some stay for the long haul. Others move on to build their own path. That’s okay. We celebrate both with open hands and open hearts.
            </Dpara>

            <Dpara
              fontSize="20px"
              lineHeight="28px"
              fontWeight="400"
              color="#181010 "
              mdFontSize="18px"
              mdLineHeight="24px"
              smFontSize="18px"
              smLineHeight="24px"
              textAlign="left"
              className="mt-lg"
            >
              We’re here to make meaningful work with good people. That’s our compass.
            </Dpara>
          </div>

        </TextWrap>
      </Wrapper>
    </DashedContainer>
  )
}

export default Content

const Wrapper = styled.section`
// padding :  60px 0px 0px 0px; 
display:flex;

  @media (max-width: 768px) {
  flex-direction:column;
    // padding: 32px 16px;
}
`

const NavMenuDesktop = styled.div`
  position: sticky;
  top: 92px;
  min-width: 20%;
  height: 100vh;
  border-right: 1px dashed #d3d3d3;
  margin-left: -1px ;
  box-sizing: border-box;
  flex-shrink: 0;
  padding-top:60px;

    @media (max-width: 768px) {
    display:none;
      padding-top:32px;
    }
`;

// const NavMenuMobile = styled.div`
// display:none;
// overflow-y:scroll;
//  background-color: var(--clr-light);
//  scrollbar-width: none;
//  margin-bottom:24px;

//  -ms-overflow-style: none;
//  &::-webkit-scrollbar {
//   display: none;
//  }

//    @media (max-width: 768px) {
//    display:flex;
//    padding:16px;
//    }


// `


interface ItemProps {
  active?: boolean;
}

const Item = styled.div<ItemProps>`
  height: 38px;
  display: flex;
  align-items: center;
  gap: 24px;

  span {
    width: 2px;
    height: 100%;
    background: ${({ active }) => (active ? '#EE232A' : '#A38F8F')};
    transition: background 0.3s ease;
  }

  p {
    color: ${({ active }) => (active ? '#EE232A' : '#352727')};
    font-size: 16px;
    line-height: 24px;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    font-weight: ${({ active }) => (active ? '600' : '400')};

    &:hover {
      font-weight: 600 ;
      transform: translateX(2px);
    }

    &:hover::after {
      width: 100%;
    }
  }
`;


// const ItemMob = styled.div<ItemProps>`
//   height: 38px;
//   display: flex;
//   align-items: center;
//   gap: 24px;
//   width: max-content;

//   p {
//     color: ${({ active }) => (active ? '#000' : '#352727')};
//     font-size: 16px;
//     font-weight: ${({ active }) => (active ? '700' : '400')};
//     line-height: 24px;
//     letter-spacing: ${({ active }) => (active ? '1px' : '0.64px')};
//     text-transform: uppercase;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     position: relative;
//     border-bottom: 2px solid ${({ active }) => (active ? '#EE232A' : '#A38F8F')};
//       width: max-content;
//     padding-right:18px;


//     &:hover {
//       color: #000;
//       letter-spacing: 1px;
//       transform: translateX(2px);
//     }

//     &:hover::after {
//       width: 100%;
//     }
//   }
// `;


const TextWrap = styled.div`
padding: 60px  40px 0px 40px;

  @media (max-width: 768px) {
padding: 32px   16px 0px 16px;
  
  }
`