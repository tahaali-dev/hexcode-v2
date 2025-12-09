"use client";
import EmptyContainer, { DashedContainer, StyledImage } from '../Containers'
import { Dpara, DyH2, DyH3, DyLi, DyTitleH1, HexSectionName } from '../TypSetting'
import styled from '@emotion/styled'
import { PrimaryBtn } from '../Buttons'
import { ProjectsGrid } from '../home/Projects'
import ProjectCard from '../common/Cards'
import { projectList } from '@/app/Static/projects'
import { ProjectTypeTag2 } from '../common/Tags'
import { testimonials } from '@/app/Static/testimonials'


// banners
const banner0D = "/casestudy/sensytech/sen-b1-d.webp";
const banner0M = "/casestudy/sensytech/sen-b1-d.webp";

const banner1D = "/casestudy/sensytech/sen-b2-d.webp";
const banner1M = "/casestudy/sensytech/sen-b2-m.webp";

const banner2D = "/casestudy/sensytech/sen-b3-d.webp";
const banner2M = "/casestudy/sensytech/sen-b3-d.webp";

const banner3D = "/casestudy/sensytech/sen-b4-d.webp";
const banner3M = "/casestudy/sensytech/sen-b4-d.webp";

const banner4D = "/casestudy/sensytech/sen-b5-d.webp";
const banner4M = "/casestudy/sensytech/sen-b5-m.webp";

const banner5D = "/casestudy/sensytech/sen-b6-d.webp";
const banner5M = "/casestudy/sensytech/sen-b6-d.webp";

const banner6D = "/casestudy/sensytech/sen-b7-d.webp";
const banner6M = "/casestudy/sensytech/sen-b7-d.webp";

const banner7D = "/casestudy/sensytech/sen-b8-d.webp";
const banner7M = "/casestudy/sensytech/sen-b8-d.webp";

const banner8D = "/casestudy/sensytech/sen-b9-d.webp";
const banner8M = "/casestudy/sensytech/sen-b9-d.webp";

const banner9D = "/casestudy/sensytech/sen-b10-d.webp";
const banner9M = "/casestudy/sensytech/sen-b10-d.webp";

const banner10D = "/casestudy/sensytech/sen-b11-d.webp";
const banner10M = "/casestudy/sensytech/sen-b11-d.webp";


const SensytechCs = () => {
 const projects = ["Install IoT", "ABC Studios"];

 return (
  <div>
   {/* section 1 */}
   <DashedContainer  >
    <SectionCont className='px-40 py-40'>
     <div className='d-flex align-center justify-between align-start-mob g-md m-col'>
      <div className='d-flex flex-column g-start'>
       <HexSectionName title="Sensyrtech" />

       <DyTitleH1
        fontSize={{ base: '48px', md: '38px', sm: '38px' }}
        lineHeight={{ base: '56px', md: '44px', sm: '44px' }}
        fontWeight={300}
        fontStyle="normal"
        textTransform="uppercase"
        color="#181010"
        className='text-left mt-md'
       >
        Designing enterprise tool for Asset Tracking
       </DyTitleH1>

       <BtnHolder className='d-flex g-md mt-xl'>
        <BtnVar2 onClick={() => window.open("https://www.sensyrtech.com/", "_blank")}>Visit Site</BtnVar2>
        <PrimaryBtn
         padding="16px"
         fontSize="18px"
         margin="0"
         borderRadius="8px"
         btnContent="Book a call"
         onClick={() => window.location.href = "/book-a-call"}
        />
       </BtnHolder>
      </div>


     </div>

     <Dpara
      fontSize="20px"
      lineHeight="28px"
      fontWeight="300"
      color="#352727"
      mdFontSize="18px"
      mdLineHeight="24px"
      smFontSize="18px"
      smLineHeight="24px"
      textAlign="left"
      className='mt-lg'
     >
      Asset Tracking is a part of the Sensyrtech cloud suite. They provide a unified platform for Industrial IoT. Building customisable solutions for managing industrial operations to prevent costly downtime, equipment damage, and streamline staff collaboration.
     </Dpara>

     <div className='mt-xl d-flex g-md flex-wrap'>
      <ProjectTypeTag2
       title="IoT"
       backgroundColor="#FBC1D4"
       color="#181010"
       isHover={false}
      />
      <ProjectTypeTag2
       title="Visual Identity"
       backgroundColor="#C3ABFF"
       color="#181010"
       isHover={false}
      />
      <ProjectTypeTag2
       title="Website & Product"
       backgroundColor="#81D0FF"
       color="#181010"
       isHover={false}
      />
      <ProjectTypeTag2
       title="Creative Dev"
       backgroundColor="#AFF9D1"
       color="#181010"
       isHover={false}
      />
     </div>
    </SectionCont>
   </DashedContainer>

   <BottomDashCont>
    <BannerWap className='m-none'>
     <img src={banner0D} alt="" />
    </BannerWap>
    <BannerWap className='d-none'>
     <img src={banner0M} alt="" />
    </BannerWap>
   </BottomDashCont>


   {/* section 2 */}
   <DashedContainer leftBottom rightBottom>
    <SectionCont className='d-flex flex-column g-start'>
     <div className='px-40 py-40 d-flex flex-column g-start'>
      <DyH2
       fontSize={{ base: '40px', md: '32px', sm: '32px' }}
       lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
       fontWeight={300}
       fontStyle="normal"
       textTransform="capitalize"
       color="#181010"
      >
       Design Process
      </DyH2>

      <Dpara
       fontSize="20px"
       lineHeight="28px"
       fontWeight="300"
       color="#352727"
       mdFontSize="18px"
       mdLineHeight="24px"
       smFontSize="18px"
       smLineHeight="24px"
       textAlign="left"
       className='mt-lg'
      >
       We have used double diamond process. This helped us in building solution that will help business and customer goals.
      </Dpara>
     </div>

     <div>
      <BannerWap className='p-sm m-none'>
       <img src={banner1D} alt="" />
      </BannerWap>
      <BannerWap className='p-sm d-none'>
       <img src={banner1M} alt="" />
      </BannerWap>
     </div>
    </SectionCont>
   </DashedContainer>

   <EmptyContainer height="76px" />

   {/* section 2 */}
   <DashedContainer leftBottom rightBottom>
    <SectionCont className='d-flex flex-column g-start'>
     <div className='px-40 py-40 d-flex flex-column g-start'>
      <DyH2
       fontSize={{ base: '40px', md: '32px', sm: '32px' }}
       lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
       fontWeight={300}
       fontStyle="normal"
       textTransform="capitalize"
       color="#181010"
      >
       Understand
      </DyH2>

      {/* Goals */}
      <div>
       <DyH3
        fontSize={{ base: '28px', md: '24px', sm: '24px' }}
        lineHeight={{ base: '38px', md: '32px', sm: '32px' }}
        fontWeight={500}
        fontStyle="normal"
        textTransform="capitalize"
        color="#181010"
        className='mt-xxl text-left'
       >
        Goals and Objectives
       </DyH3>


       <Dpara
        fontSize="20px"
        lineHeight="28px"
        fontWeight="300"
        color="#352727"
        mdFontSize="18px"
        mdLineHeight="24px"
        smFontSize="18px"
        smLineHeight="24px"
        textAlign="left"
        className='mt-md'
       >
        We started with getting better understanding of the problem we are working on. Below is some goals and objectives:
       </Dpara>

       <ul className='mt-xl'>
        <DyLi
         fontSize={{ base: '20px', md: '20px', sm: '20px' }}
         lineHeight={{ base: '28px', md: '28cpx', sm: '28px' }}
         fontWeight={300}
         fontStyle="normal"
         textTransform="capitalize"
         color="#181010"
         className='mt-md ml-md text-left'
        >
         Building a tool that will allow customers to see where their assets are throughout their facility.
        </DyLi>
        <DyLi
         fontSize={{ base: '20px', md: '20px', sm: '20px' }}
         lineHeight={{ base: '28px', md: '28cpx', sm: '28px' }}
         fontWeight={300}
         fontStyle="normal"
         textTransform="capitalize"
         color="#181010"
         className='mt-md ml-md text-left'
        >
         To monitor the trail and history of an asset.
        </DyLi>
        <DyLi
         fontSize={{ base: '20px', md: '20px', sm: '20px' }}
         lineHeight={{ base: '28px', md: '28cpx', sm: '28px' }}
         fontWeight={300}
         fontStyle="normal"
         textTransform="capitalize"
         color="#181010"
         className='mt-md ml-md text-left'
        >
         Building different locations.
        </DyLi>
        <DyLi
         fontSize={{ base: '20px', md: '20px', sm: '20px' }}
         lineHeight={{ base: '28px', md: '28cpx', sm: '28px' }}
         fontWeight={300}
         fontStyle="normal"
         textTransform="capitalize"
         color="#181010"
         className='mt-md ml-md text-left'
        >
         Keep an eye on the overall health of the assets.
        </DyLi>

       </ul>
      </div>

      {/* Interviews */}
      <div>
       <DyH3
        fontSize={{ base: '28px', md: '24px', sm: '24px' }}
        lineHeight={{ base: '38px', md: '32px', sm: '32px' }}
        fontWeight={500}
        fontStyle="normal"
        textTransform="capitalize"
        color="#181010"
        className='mt-xxl text-left'
       >
        Customer Interviews
       </DyH3>


       <Dpara
        fontSize="20px"
        lineHeight="28px"
        fontWeight="300"
        color="#352727"
        mdFontSize="18px"
        mdLineHeight="24px"
        smFontSize="18px"
        smLineHeight="24px"
        textAlign="left"
        className='mt-md'
       >
        We interviewed the customers to understand the current scenario and got the following insights:
       </Dpara>

       <ul className='mt-xl'>
        <DyLi
         fontSize={{ base: '20px', md: '20px', sm: '20px' }}
         lineHeight={{ base: '28px', md: '28cpx', sm: '28px' }}
         fontWeight={300}
         fontStyle="normal"
         textTransform="capitalize"
         color="#181010"
         className='mt-md ml-md text-left'
        >
         No visibility of assets and there movement
        </DyLi>
        <DyLi
         fontSize={{ base: '20px', md: '20px', sm: '20px' }}
         lineHeight={{ base: '28px', md: '28cpx', sm: '28px' }}
         fontWeight={300}
         fontStyle="normal"
         textTransform="capitalize"
         color="#181010"
         className='mt-md ml-md text-left'
        >
         No historical data
        </DyLi>
        <DyLi
         fontSize={{ base: '20px', md: '20px', sm: '20px' }}
         lineHeight={{ base: '28px', md: '28cpx', sm: '28px' }}
         fontWeight={300}
         fontStyle="normal"
         textTransform="capitalize"
         color="#181010"
         className='mt-md ml-md text-left'
        >
         No visibility around downtime
        </DyLi>
        <DyLi
         fontSize={{ base: '20px', md: '20px', sm: '20px' }}
         lineHeight={{ base: '28px', md: '28cpx', sm: '28px' }}
         fontWeight={300}
         fontStyle="normal"
         textTransform="capitalize"
         color="#181010"
         className='mt-md ml-md text-left'
        >
         Everything is scattered everywhere (drivers, vehicles, and equipment)
        </DyLi>

       </ul>
      </div>

      {/* Product */}
      <div>
       <DyH3
        fontSize={{ base: '28px', md: '24px', sm: '24px' }}
        lineHeight={{ base: '38px', md: '32px', sm: '32px' }}
        fontWeight={500}
        fontStyle="normal"
        textTransform="capitalize"
        color="#181010"
        className='mt-xxl text-left'
       >
        Product Stakeholders
       </DyH3>


       <Dpara
        fontSize="20px"
        lineHeight="28px"
        fontWeight="300"
        color="#352727"
        mdFontSize="18px"
        mdLineHeight="24px"
        smFontSize="18px"
        smLineHeight="24px"
        textAlign="left"
        className='mt-md'
       >
        This tool will be majorly used by these people for their day to day operation in the facility.
       </Dpara>

       <div className='mt-xxl'>
        <BannerWap className='m-none'>
         <img src={banner2D} alt="" />
        </BannerWap>
        <BannerWap className='p-sm d-none'>
         <img src={banner2M} alt="" />
        </BannerWap>
       </div>

       <div>
        <DyH3
         fontSize={{ base: '28px', md: '24px', sm: '24px' }}
         lineHeight={{ base: '38px', md: '32px', sm: '32px' }}
         fontWeight={500}
         fontStyle="normal"
         textTransform="capitalize"
         color="#181010"
         className='mt-xxl text-left'
        >
         Competitors
        </DyH3>


        <Dpara
         fontSize="20px"
         lineHeight="28px"
         fontWeight="300"
         color="#352727"
         mdFontSize="18px"
         mdLineHeight="24px"
         smFontSize="18px"
         smLineHeight="24px"
         textAlign="left"
         className='mt-md'
        >
         We explore products of our competitors and figure out how they are approaching the problem space.
        </Dpara>
       </div>

       <div className='mt-xxl'>
        <BannerWap className='m-none'>
         <img src={banner3D} alt="" />
        </BannerWap>
        <BannerWap className='p-sm d-none'>
         <img src={banner3M} alt="" />
        </BannerWap>
       </div>

      </div>

     </div>
    </SectionCont>
   </DashedContainer>

   <EmptyContainer height="76px" />

   {/* section 3 */}
   <DashedContainer leftBottom rightBottom>
    <SectionCont className='d-flex flex-column g-start'>
     <div className='px-40 py-40 d-flex flex-column g-start'>

      <DyH2
       fontSize={{ base: '40px', md: '32px', sm: '32px' }}
       lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
       fontWeight={300}
       fontStyle="normal"
       textTransform="capitalize"
       color="#181010"
      >
       Define
      </DyH2>

      <Dpara
       fontSize="20px"
       lineHeight="28px"
       fontWeight="300"
       color="#352727"
       mdFontSize="18px"
       mdLineHeight="24px"
       smFontSize="18px"
       smLineHeight="24px"
       textAlign="left"
       className='mt-lg'
      >
       We brainstorm on different ideas with the stakeholders. The goal is to look at other possibilities and find better solution and not commit to the initial ideas comes to mind. We eliminate the ones which is not viable or important and deprecate them for v2.
      </Dpara>

      <div>
       <BannerWap className='m-none mt-lg'>
        <img src={banner9D} alt="" />
       </BannerWap>
       <BannerWap className='p-sm d-none'>
        <img src={banner9M} alt="" />
       </BannerWap>
      </div>
     </div>



    </SectionCont>
   </DashedContainer>


   <EmptyContainer height="76px" />

   {/* section 5 */}
   <DashedContainer leftBottom rightBottom>
    <SectionCont className='d-flex flex-column g-start'>
     <div className='px-40 py-40 d-flex flex-column g-start'>
      <DyH2
       fontSize={{ base: '40px', md: '32px', sm: '32px' }}
       lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
       fontWeight={300}
       fontStyle="normal"
       textTransform="capitalize"
       color="#181010"
      >
       Develop
      </DyH2>

      <div>
       <DyH3
        fontSize={{ base: '28px', md: '24px', sm: '24px' }}
        lineHeight={{ base: '38px', md: '32px', sm: '32px' }}
        fontWeight={500}
        fontStyle="normal"
        textTransform="capitalize"
        color="#181010"
        className='mt-xxl text-left'
       >
        Low Fidelity Wireframes
       </DyH3>


       <Dpara
        fontSize="20px"
        lineHeight="28px"
        fontWeight="300"
        color="#352727"
        mdFontSize="18px"
        mdLineHeight="24px"
        smFontSize="18px"
        smLineHeight="24px"
        textAlign="left"
        className='mt-md'
       >
        We sketched out the solutions and discussed it with the PMs and engineers. This helps us in getting alignment and resolve blockers at this stage before diving into the visual design.
       </Dpara>

       <div className='mt-xxl'>
        <BannerWap className='m-none'>
         <img src={banner4D} alt="" />
        </BannerWap>
        <BannerWap className='p-sm d-none'>
         <img src={banner4M} alt="" />
        </BannerWap>
       </div>
      </div>
     </div>
    </SectionCont>
   </DashedContainer>

   <EmptyContainer height="76px" />

   {/* section 6 */}
   <DashedContainer leftBottom rightBottom>
    <SectionCont className='d-flex flex-column g-start'>
     <div className='px-40 py-40 d-flex flex-column g-start'>
      <DyH2
       fontSize={{ base: '40px', md: '32px', sm: '32px' }}
       lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
       fontWeight={300}
       fontStyle="normal"
       textTransform="capitalize"
       color="#181010"
      >
       Deliver
      </DyH2>

      <div>
       <DyH3
        fontSize={{ base: '28px', md: '24px', sm: '24px' }}
        lineHeight={{ base: '38px', md: '32px', sm: '32px' }}
        fontWeight={500}
        fontStyle="normal"
        textTransform="capitalize"
        color="#181010"
        className='mt-xxl text-left'
       >
        Style Guide
       </DyH3>


       <Dpara
        fontSize="20px"
        lineHeight="28px"
        fontWeight="300"
        color="#352727"
        mdFontSize="18px"
        mdLineHeight="24px"
        smFontSize="18px"
        smLineHeight="24px"
        textAlign="left"
        className='mt-md'
       >
        Colour palette includes primary, accent and system colours with shades of grey and we for the typography, we wanted to use something which is simple and have good readability across size and weights.
       </Dpara>


      </div>
     </div>

     <div className='p-sm'>
      <BannerWap className='m-none'>
       <img src={banner5D} alt="" />
      </BannerWap>
      <BannerWap className='p-sm d-none'>
       <img src={banner5M} alt="" />
      </BannerWap>
     </div>
    </SectionCont>
   </DashedContainer>

   {/* section 7 */}
   <DashedContainer leftBottom rightBottom>
    <SectionCont className='d-flex flex-column g-start'>
     <div className='px-40 py-40 d-flex flex-column g-start'>
      <DyH2
       fontSize={{ base: '40px', md: '32px', sm: '32px' }}
       lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
       fontWeight={300}
       fontStyle="normal"
       textTransform="capitalize"
       color="#181010"
      >
       UI Design
      </DyH2>

      <Dpara
       fontSize="20px"
       lineHeight="28px"
       fontWeight="300"
       color="#352727"
       mdFontSize="18px"
       mdLineHeight="24px"
       smFontSize="18px"
       smLineHeight="24px"
       textAlign="left"
       className='mt-md'
      >
       We freeze the solution and move on to the visual designs. The challenge was to create usable interfaces for these complex problems. Defining the guides early helped us in creating the mocks and prototype of the solution and get approval from the customers and stakeholders.
      </Dpara>


     </div>

     <div className='p-sm'>
      <BannerWap className='m-none'>
       <img src={banner6D} alt="" />
      </BannerWap>
      <BannerWap className='p-sm d-none'>
       <img src={banner6M} alt="" />
      </BannerWap>
     </div>

     <div className='p-sm'>
      <BannerWap className='m-none'>
       <img src={banner7D} alt="" />
      </BannerWap>
      <BannerWap className='p-sm d-none'>
       <img src={banner7M} alt="" />
      </BannerWap>
     </div>

     <div className='p-sm'>
      <BannerWap className='m-none'>
       <img src={banner8D} alt="" />
      </BannerWap>
      <BannerWap className='p-sm d-none'>
       <img src={banner8M} alt="" />
      </BannerWap>
     </div>
    </SectionCont>
   </DashedContainer>

   {/* testimonial */}
   <DashedContainer leftBottom rightBottom>
    <SectionCont className='d-flex flex-column g-start'>
     <div className='px-40 py-40 d-flex flex-column g-start'>

      {/* Testimonial */}
      <div>
       {testimonials
        .filter((testimonial) => testimonial.name === "Taher Lokhandwala")
        .map((t, index) => (
         <TestimonialCard key={index} className=''>
          <HexSectionName title="Testimonial" className="d-flex align-center justify-start g-sm about-img" />
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
           {t.text}
          </Dpara>
          <div className="d-flex justify-between mt-lg align-center ">
           {/* Left side: Person image and info */}
           <div className="d-flex align-center g-md">
            <StyledImage src={t.image} width={64} height={64} className="client-image" alt={t.name} priority />
            <div className="d-flex flex-column">
             <Author>{t.name}</Author>
             <SubText>{t.title}</SubText>
            </div>
           </div>

           {/* Right side: Company logo */}
           <div className="m-none">
            <StyledImage src={t.logo} width={68} height={42} alt={t.company} priority />
           </div>
          </div>
         </TestimonialCard>
        ))}
      </div>
     </div>


    </SectionCont>
   </DashedContainer>

   <BottomDashCont>
    <BannerWap className='m-none'>
     <img src={banner10D} alt="" />
    </BannerWap>
    <BannerWap className='d-none'>
     <img src={banner10M} alt="" />
    </BannerWap>
   </BottomDashCont>

   <EmptyContainer height="76px" />


   <DashedContainer leftBottom rightBottom>
    <div className='px-40 py-40 d-flex flex-column g-start'>
     <DyH2
      fontSize={{ base: '40px', md: '32px', sm: '32px' }}
      lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
      fontWeight={300}
      fontStyle="normal"
      textTransform="capitalize"
      color="#181010"
      className=''
     >
      More Projects
     </DyH2>

     <ProjectsGrid columnGap="32px" marginTop="48px">
      {projectList
       .filter((project) => projects.includes(project.projectName))
       .map((project, idx) => (
        <ProjectCard
         key={idx}
         banner={project.banner}
         projectName={project.projectName}
         projectDetails={project.projectDetails}
         tags={project.tags}
         url={project.url}
         marginTag="16px 0px 32px 0px"
         mode={1}
        />
       ))}
     </ProjectsGrid>
    </div>

   </ DashedContainer>



  </div>
 )
}

export default SensytechCs;


//  inner page Styles
const BtnVar2 = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 8px;
  border: 1px solid #EE232A;
  background: #fff;
  padding: 0px 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: var(--clr-light);
  text-transform: uppercase;

  // text
  color: #EE232A; 
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;

  &:hover {
   background-color: var(--clr-light);
    transform: translateY(-2px);
    border-color: #881418;
    color:#881418;
  }

  &:active {
    transform: translateY(0px);
    box-shadow: none;
  }
`;

const SectionCont = styled.div``;

const BannerWap = styled.div`
img{
width:100%;
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

const BtnHolder = styled.div`
  @media (max-width: 768px) {
  width:100%;

  button{
    width:50%;
  }
`

const BottomDashCont = styled.div`
  border-bottom: 1px dashed #d3d3d3;
`