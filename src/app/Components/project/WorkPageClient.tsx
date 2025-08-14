"use client";

import TestimonialSlider from "@/app/Components/home/TestimonialSlider";
import Faqs from "@/app/Components/home/Faqs";
import EmptyContainer from "@/app/Components/Containers";
import HeaderP from "@/app/Components/project/HeaderP";
import ProjectsHolder from "@/app/Components/project/ProjectsHolder";
import { useSelectedTag } from "@/app/Hooks/useSelectedTag";

const WorkPageClient = () => {
 const { selectedTag, setSelectedTag } = useSelectedTag();

 return (
  <>
   <HeaderP selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
   <ProjectsHolder selectedTag={selectedTag} />
   <EmptyContainer height="76px" />
   <TestimonialSlider />
   <Faqs />
   <EmptyContainer height="76px" />
  </>
 );
};

export default WorkPageClient;
