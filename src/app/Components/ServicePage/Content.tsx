"use client"
import styled from "@emotion/styled"
import { DashedContainer, StyledImage } from "../Containers"
import { Dpara, DyH2 } from "../TypSetting"
import { useState } from "react";
import { useActiveSectionObserver } from "../../Hooks/useActiveSectionObserver";
import { TagsWrapper } from "../ServiceCard";
import { PrimaryBtn } from "../Buttons";
import { cardsData } from "@/app/Static/OurCaps";
import { ProjectTypeTag } from "../common/Tags";
import { ProjectsGrid } from "../home/Projects";
import ProjectCard from "../common/Cards";
import { projectList } from "@/app/Static/projects";
import { testimonials } from "@/app/Static/testimonials";

const Content = () => {

  const [activeSection, setActiveSection] = useState("visual-identity");
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
            Services
          </Dpara>

          <div className="d-flex flex-column mt-md">
            <Item
              active={activeSection === "visual-identity"}
              onClick={() => handleScroll("visual-identity")}
            >
              <span></span>
              <p>Visual Identity</p>
            </Item>

            <Item
              active={activeSection === "website-product"}
              onClick={() => handleScroll("website-product")}
            >
              <span></span>
              <p>Website & Product</p>
            </Item>

            <Item
              active={activeSection === "creative-dev"}
              onClick={() => handleScroll("creative-dev")}
            >
              <span></span>
              <p>Creative Dev</p>
            </Item>
          </div>

        </NavMenuDesktop>

        <TextWrap>
          {cardsData
            .filter((card: any) => card.title !== "Consulting")
            .map((card: any, index) => (
              <div
                className={card.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}
                id={card.title.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}
                data-section
                key={index}
              >
                <DyH2
                  fontSize={{ base: '40px', md: '32px', sm: '32px' }}
                  lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
                  fontWeight={300}
                  fontStyle="normal"
                  textTransform="uppercase"
                  color="#181010"
                  className={`text-left ${index !== 0 ? "top-border" : ""}`}
                >
                  {card.title}
                </DyH2>

                <Dpara
                  fontSize="18px"
                  lineHeight="24px"
                  fontWeight="300"
                  color="#352727"
                  mdFontSize="16px"
                  mdLineHeight="24px"
                  smFontSize="16px"
                  smLineHeight="24px"
                  textAlign="left"
                  className="mt-sm"
                >
                  {card.para1}
                </Dpara>

                <TagsWrapper className="flex-wrap">
                  {card.tags.map((tag: string) => (
                    <ProjectTypeTag key={tag} title={tag} isHover={false} />
                  ))}
                </TagsWrapper>

                <ProjectsGrid columnGap="32px" marginTop="32px">
                  {projectList
                    .filter((project) => card.projects.includes(project.projectName))
                    .map((project, idx) => (
                      <ProjectCard
                        key={idx}
                        banner={project.banner}
                        projectName={project.projectName}
                        projectDetails={project.projectDetails}
                        tags={project.tags}
                        url={project.url}
                        marginTag="16px 0px 32px 0px"
                      />
                    ))}
                </ProjectsGrid>

                {/* Testimonial */}
                {testimonials
                  .filter((testimonial) => testimonial.name === card.testimonial)
                  .map((t, index) => (
                    <TestimonialCard key={index}>
                      <Dpara
                        fontSize="28px"
                        lineHeight="40px"
                        fontWeight="300"
                        color="#181010"
                        mdFontSize="32px"
                        mdLineHeight="46px"
                        smFontSize="18px"
                        smLineHeight="24px"
                        textAlign="left"
                        className="mt-lg testimonial-text"
                      >
                        {t.shortText}
                      </Dpara>
                      <div className="d-flex justify-between mt-lg align-center ">
                        {/* Left side: Person image and info */}
                        <div className="d-flex align-center g-md">
                          <StyledImage src={t.image} width={64} height={64} className="client-image" alt={t.name} />
                          <div className="d-flex flex-column">
                            <Author>{t.name}</Author>
                            <SubText>{t.title}</SubText>
                          </div>
                        </div>

                        {/* Right side: Company logo */}
                        <div className="m-none">
                          <StyledImage src={t.logo} height={28} alt={t.company} />
                        </div>
                      </div>
                    </TestimonialCard>
                  ))}

                {/*  */}
                <div className="mt-xl">
                  <PrimaryBtn
                    className="prime-btn"
                    padding="16px"
                    fontSize="18px"
                    margin="0"
                    borderRadius="8px"
                    btnContent="Let’s talk"
                    onClick={() =>
                      window.open("https://calendly.com/shabbir-hexcode/30min", "_blank")
                    }
                  />
                </div>
              </div>
            ))}

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


const TextWrap = styled.div`
padding: 60px  40px 60px 40px;

.top-border{
  border-top: 1px dashed #d3d3d3;
  margin-top:64px;
  padding-top:64px;
}



  @media (max-width: 768px) {
padding: 32px   16px 32px 16px;
  
  }
`

const TestimonialCard = styled.div`

.testimonial-text{
padding-left:16px;
border-left: 2px solid #352727;
}

.client-image{
border-radius: 8px;
object-fit:cover;
}
`

const Author = styled.div`
color: #181010;
font-size: 20px;
font-weight: 400;

  @media (max-width: 768px) {
font-size: 16px;
font-weight: 400;
  }
`;

const SubText = styled.div`
color:  #A38F8F;
font-size: 18px;
font-weight: 300;
margin-top:4px;

  @media (max-width: 768px) {
font-size: 14px;
  }
`;