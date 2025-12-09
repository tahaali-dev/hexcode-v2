"use client"
import styled from "@emotion/styled";
import { DashedContainer } from "../Containers";
import { Dpara, DyH2 } from "../TypSetting";
import React from "react";
import { PrimaryBtn } from "../Buttons";
import ProjectCard from "../common/Cards";
import { projectList } from "@/app/Static/projects";

const Projects: React.FC = () => {
  return (
    <DashedContainer leftBottom rightBottom >
      <Wrapper>
        <DyH2
          fontSize={{ base: '40px', md: '32px', sm: '32px' }}
          lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#181010"
          className="text-center"
        >
          Featured Projects
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
          textAlign="center"
          className="mt-sm"
        >
          Work we're proud to showcase
        </Dpara>

        <ProjectsGrid marginTop="48px">
          {projectList.map((project, idx) => (
            <ProjectCard
              key={idx}
              banner={project.banner}
              projectName={project.projectName}
              projectDetails={project.projectDetails}
              url={project.url}
              tags={project.tags}
            />
          ))}
        </ProjectsGrid>


        <div className="btn-div">
          <PrimaryBtn
            padding="12px 16px"
            fontSize="16px"
            margin="0"
            borderRadius="8px"
            btnContent="See more projects"
            onClick={() => window.location.href = "/work"}
          />

        </div>
      </Wrapper>
    </DashedContainer>
  );
};

export default Projects;

const Wrapper = styled.div`
  padding: 80px 64px;
  border-radius: 16px;
  text-align: center;

    @media (max-width: 768px) {
      padding: 24px 16px;
    }
`;

interface ProjectsGridProps {
  columnGap?: string;
  marginTop?: string;
  marginTopMob?: string;
}

export const ProjectsGrid = styled.div<ProjectsGridProps>`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: ${({ columnGap }) => columnGap || '64px'};
  margin-top: ${({ marginTop }) => marginTop || '48px'};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0px;
    margin-top: ${({ marginTopMob }) => marginTopMob || '24px'};
  }
`;


