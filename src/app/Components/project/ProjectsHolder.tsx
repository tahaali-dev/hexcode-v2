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

  const isAll = selectedTag === null || selectedTag === "All";
  const filteredProjects = isAll
    ? projectList
    : projectList.filter((project) =>
      project.tags.includes(selectedTag)
    );

  // If "All", map in reverse order
  const projectsToMap = isAll
    ? [...filteredProjects].reverse()
    : filteredProjects;

  return (
    <DashedContainer leftBottom rightBottom>
      <ProjectsWrapper>
        <ProjectsGrid marginTop="0px" marginTopMob="0px">
          {projectsToMap.map((project, idx) => (
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
