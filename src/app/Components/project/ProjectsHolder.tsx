"use client"
import styled from "@emotion/styled"
import { DashedContainer } from "../Containers"
import { projectList } from "@/app/Static/projects";
import { ProjectsGrid } from "../home/Projects";
import ProjectCard from "../common/Cards";

interface ProjectsHolderProps {
  selectedTag: string | null;
}

const ProjectsHolder = ({ selectedTag }: ProjectsHolderProps) => {

  const filteredProjects =
    selectedTag === null || selectedTag === "All"
      ? projectList
      : projectList.filter((project) =>
        project.tags.includes(selectedTag)
      );

  return (
    <DashedContainer leftBottom rightBottom>
      <ProjectsWrapper>
        <ProjectsGrid marginTop="0px" marginTopMob="0px">
          {filteredProjects.map((project, idx) => (
            <ProjectCard
              key={idx}
              banner={project.banner}
              projectName={project.projectName}
              projectDetails={project.projectDetails}
              tags={project.tags}
              url={project.url}
            />
          ))}
        </ProjectsGrid>
      </ProjectsWrapper>

    </DashedContainer>
  )
}

export default ProjectsHolder


const ProjectsWrapper = styled.div`
  padding: 64px 64px 0px  64px ;

    @media (max-width: 768px) {
        padding: 24px 24px 0px  24px ;
    }
`;
