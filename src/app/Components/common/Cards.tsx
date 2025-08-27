"use client";
import styled from "@emotion/styled";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { StyledImage } from "../Containers";
import { ProjectTypeTag } from "./Tags";
import { PrimaryBtn } from "../Buttons";
const MinusIcon = "/icons/minusIcon.svg";

// Project card ----------------------------------------
const ProjectCard = ({
  projectName,
  projectDetails,
  banner,
  tags,
  url,
  marginTag,
  mode,
}: {
  projectName: string;
  projectDetails: string;
  banner: string;
  tags: string[];
  url: string
  marginTag?: string
  mode?: any
}) => {
  const router = useRouter();

  const handleClick = () => {
    const supportedProjects = ["Volt", "Sensyrtech", "Starbrite Dental"];
    const isInternalProject = supportedProjects.includes(projectName);

    if (isInternalProject) {
      const slug = encodeURIComponent(projectName.toLowerCase().replace(/\s+/g, "-"));
      router.push(`/work/${slug}`);
    } else if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div>
      <ProjectCardWrapper as="div" onClick={handleClick}>
        <StyledImage src={banner} alt="project-banner" className="project-banner" width={400} height={400} priority />
        <p className="project-details mt-md">
          <span className="project-name">{projectName}</span> - {projectDetails}
        </p>
      </ProjectCardWrapper>

      <TagsWrapper margin={marginTag}>
        {tags.map((tag, index) => (
          <ProjectTypeTag key={index} title={tag} />
        ))}
      </TagsWrapper>
    </div>
  );
};

export default ProjectCard;

// Styles ---
const ProjectCardWrapper = styled.a`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  border-radius: 16px;
  text-decoration: none;
  transition: box-shadow 0.3s ease;
  

  .project-banner {
    border-radius: 16px;
    overflow: hidden;
  }

  .project-banner{
    transition: transform 0.4s ease;
    display: block;
    width: 100%;
    height: auto;
    border-radius: 16px;
    overflow: hidden;
  }

  &:hover .project-banner{
    transform: scale(1.01);
  }

  .project-details {
    color: var(--clr-dark2);
    font-size: 18px;
    font-weight: 300;
    line-height: 26px;
    text-align: left;
  }

  .project-name {
    color: var(--clr-dark2);
    font-size: 18px;
    font-weight: 600;
    line-height: 24px;
  }

  @media (max-width: 768px) {

    .project-details {
      font-size: 18px;
      line-height: 28px;
    }

    .project-name {
      font-size: 18px;
      line-height: 28px;
    }
  }
`;


interface TagsWrapperProps {
  margin?: string;
}

export const TagsWrapper = styled.div<TagsWrapperProps>`
  display: flex;
  justify-content: start;
  gap: 8px;
  margin: ${({ margin }) => margin || '16px 0px 64px 0px'};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 8px;
    margin: ${({ margin }) => margin || '16px 0px 32px 0px'};
  }
`;


// Benefit card --------------------------------
export const BenefitCard = ({ icon, title, subtitle }: any) => {
  return (
    <BenefitCardWrapper>
      <StyledImage
        src={icon}
        width={64}
        height={64}
        alt={`card icon`}
        className="mb-md"
      />
      <h4>{title}</h4>
      <p>
        {subtitle.split("\n").map((line: any, index: number) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
    </BenefitCardWrapper>
  );
};

// styles  ---
const BenefitCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    color: var(--tertiary-color);
    text-align: center;
    font-size: 24px;
    font-weight: 400;
    line-height: 32px;
  }

  p {
    color: #343f46;
    text-align: center;
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    margin-top: 8px;
  }

  @media (max-width: 768px) {
    align-items: flex-start;

    h4 {
      font-size: 18px;
      line-height: 20px;
      text-align: left;
    }

    p {
      text-align: left;
    }

    img {
      width: 40px;
      height: 40px;
    }
  }
`;


// Accordion card ------------
export const AccordionCard = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <Header onClick={toggleAccordion}>
        <p>{title}</p>
        <StyledImage
          src={isOpen ? MinusIcon : "/icons/plusIcon.svg"}
          width={32}
          height={32}
          alt={`accordion icon`}
        />
      </Header>
      <Content isOpen={isOpen}>{children}</Content>
    </AccordionContainer>
  );
};

// Styled components
const AccordionContainer = styled.div`
  border-radius: 16px;
  overflow: hidden;
  background-color: var(--white-color);
  height: fit-content;
  border: 1px dashed #d3d3d3;
border-radius:16px;

  @media (max-width: 768px) {
    margin-bottom: 0px;
  }
`;

const Header = styled.div`
  background-color: var(--white-color);
  padding: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    color: var(--clr-dark);
    font-size: 18px;
    font-weight: 400;
    line-height: 28px;
  }
`;

const Content = styled.div<{
  isOpen: boolean;
}>`
  max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
  overflow: hidden;
  transition: max-height 0.3s ease;
`;

//  scroll card -----------------
export const ScrollCard = ({
  title,
  bgcolor,
  para1,
  para2,
  image,
  mobileImage,
  icon,
  type
}: {
  title: string;
  bgcolor: string;
  para1: string;
  para2: string;
  image: string;
  mobileImage: any;
  icon: string;
  type: string;
}) => {
  return (
    <ScrollCardWrapper className="scroll-card">
      <LeftBox bgcolor={bgcolor} type={type}>
        <div className="d-flex g-md ">
          <StyledImage
            src={icon}
            width={64}
            height={64}
            alt={`image`}
            className="m-none"
          />
          <h4 className="card-heading">{title}</h4>
        </div>

        {/* content box */}
        <div className="content-box">
          {/* text left */}


          <div>
            <p className="text-left">
              {para1.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            {/* Mobile image */}
            {
              type == "consulting" && <StyledImage
                src={mobileImage}
                alt={`image`}
                className="mobile-illustration d-none"
              />
            }

            {

              type == "consulting" &&
              <div className="mt-lg w-full">
                <PrimaryBtn
                  padding="16px"
                  fontSize="18px"
                  margin="0"
                  borderRadius="8px"
                  btnContent="Book a call"
                  onClick={() => window.open("https://calendly.com/shabbir-hexcode/30min", "_blank")}
                />
              </div>
            }
          </div>



          {/* text right */}
          {
            type == "default" && <p className="text-right">
              {para2.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          }

          {/* Mobile image */}
          {
            type == "default" && <StyledImage
              src={mobileImage}
              alt={`image`}
              className="mobile-illustration d-none"
            />
          }

        </div>
      </LeftBox>


      <RightBox bgcolor={bgcolor} className="m-none">
        <div className="half-color"></div>
        <StyledImage src={image} alt={`image`} className="illustration" />
      </RightBox>


    </ScrollCardWrapper>
  )
}


// styles
const ScrollCardWrapper = styled.div`
 // border: 1px solid #000;
 display: flex;
 
 
   @media (max-width: 768px) {
     flex-direction: column;
   }
 `

const LeftBox = styled.div<{
  bgcolor: string,
  type: string,
}>`
 width: 65%;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 padding: 32px 24px;
 background-color: ${({ bgcolor }) => bgcolor || "#fff"};
 border-radius: 16px 0 0 16px;
 
 .card-heading {
   color: ${({ type }) => type == "consulting" ? "#fff" : "var(--clr-dark)"};
   font-size: 54px;
   font-weight: 500;
   line-height: 64px;
   text-transform: uppercase;
 }
 
 
  .content-box {
   display: flex;
   justify-content: space-between;
 
     .text-left {
         // color: var(--clr-dark2);
         font-size: 18px;
         font-weight: 300;
         line-height: 24px;
         color: ${({ type }) => type == "consulting" ? "#fff" : "var(--clr-dark)"};
       }
 
         .text-right {
         color: var(--clr-dark);
         font-size: 18px;
         font-weight: 400;
         line-height: 24px;
         text-align: left;
       }
  }
 
 
    @media (max-width: 768px) {
      width: 100%;
       padding: 16px;
       gap: 16px;
       border-radius: 16px;
 
         .card-heading {
         font-size: 32px;
         line-height: 42px;
       }
 
       .content-box {
         flex-direction: column;
         gap: 24px;
 
         .text-left,
         .text-right {
           font-size: 16px;
           line-height: 24px;
         }
       }
 
 
         .w-full {
       width: 100%;
     }
    
    }
 
 `
const RightBox = styled.div<{ bgcolor: string }>`
 width: 35%;
 position: relative;
 
   .half-color {
   position: absolute;
       background-color: ${({ bgcolor }) => bgcolor || "#fff"};
       // background-color: red;
       width: 50%;
       height: 100%;
       left: 0px;
       top: 0px;
 z-index: 0;
     }
 
 
   .illustration {
       object-fit: contain;
       position :relative;
       z-index: 1;
     }
 

  
 `
