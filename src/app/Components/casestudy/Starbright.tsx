"use client";
import EmptyContainer, { DashedContainer, StyledImage } from '../Containers'
import { Dpara, DyH2, DyLi, DyTitleH1, HexSectionName } from '../TypSetting'
import styled from '@emotion/styled'
import { PrimaryBtn } from '../Buttons'
import { ProjectTypeTag2 } from '../common/Tags'
import { ProjectsGrid } from '../home/Projects'
import ProjectCard from '../common/Cards'
import { projectList } from '@/app/Static/projects'
import { testimonials } from '@/app/Static/testimonials'

// banners
const banner0D = "/casestudy/starbright/star-b0-d.webp";
const banner0M = "/casestudy/starbright/star-b0-d.webp";

const banner1D = "/casestudy/starbright/star-b1-d.webp";
const banner1M = "/casestudy/starbright/star-b1-m.webp";

const banner2D = "/casestudy/starbright/star-b2-d.webp";
const banner2M = "/casestudy/starbright/star-b2-d.webp";

const banner3D = "/casestudy/starbright/star-b3-d.webp";
const banner3M = "/casestudy/starbright/star-b3-d.webp";

const banner4D = "/casestudy/starbright/star-b4-d.webp";
const banner4M = "/casestudy/starbright/star-b4-d.webp";

const banner5D = "/casestudy/starbright/star-b5-d.webp";
const banner5M = "/casestudy/starbright/star-b5-d.webp";

const banner6D = "/casestudy/starbright/star-b6-d.webp";
const banner6M = "/casestudy/starbright/star-b6-m.webp";

const banner7D = "/casestudy/starbright/star-b7-d.webp";
const banner7M = "/casestudy/starbright/star-b7-d.webp";

const banner8D = "/casestudy/starbright/star-b8-d.webp";
const banner8M = "/casestudy/starbright/star-b8-d.webp";

const banner9D = "/casestudy/starbright/star-b9-d.webp";
const banner9M = "/casestudy/starbright/star-b9-d.webp";

const banner10D = "/casestudy/starbright/star-b10-d.webp";
const banner10M = "/casestudy/starbright/star-b10-d.webp";


const StarbriteCs = () => {
  const projects = ["Volt", "Sensyrtech"];

  return (
    <div>

      {/* section 1 */}
      <DashedContainer  >
        <SectionCont className='px-40 py-40'>
          <div className='d-flex align-center justify-between align-start-mob g-md m-col'>
            <div className='d-flex flex-column g-start'>
              <HexSectionName title="StarBrite" />

              <DyTitleH1
                fontSize={{ base: '48px', md: '38px', sm: '38px' }}
                lineHeight={{ base: '56px', md: '44px', sm: '44px' }}
                fontWeight={300}
                fontStyle="normal"
                textTransform="uppercase"
                color="#181010"
                className='text-left mt-md'
              >
                Brand refresh for a leading dental clinic with trusted, high-quality care
              </DyTitleH1>

              <BtnHolder className='d-flex g-md mt-xl'>
                <BtnVar2 onClick={() => window.open("https://www.starbritedental.com/", "_blank")}>Visit Site</BtnVar2>
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
            StarBrite Dental is a trusted dental clinic based in Fremont, California, offering comprehensive dental care. From routine checkups to cosmetic and emergency procedures. With over two decades of service, their clinic is known for patient-first care and a state-of-the-art approach to dentistry.
          </Dpara>

          <div className='mt-xl d-flex g-md flex-wrap'>
            <ProjectTypeTag2
              title="Healthcare"
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
            {/* <ProjectTypeTag2
       title="Creative Dev"
       backgroundColor="#AFF9D1"
       color="#181010"
       isHover={false}
      /> */}
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
              The challenge
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
              Despite being a well-established clinic, StarBrite’s website hadn’t kept pace with their growing practice. The site lacked a modern interface, mobile responsiveness, and clear user pathways. It also failed to convey the clinic’s warm, welcoming ethos and diverse set of services.
            </Dpara>
          </div>
        </SectionCont>
      </DashedContainer>


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
              Our approach
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
              We worked closely with the clinic’s leadership to reimagine the website experience from the ground up. One that reflected their clinical expertise, approachability, and commitment to patient comfort.
            </Dpara>
          </div>
        </SectionCont>
      </DashedContainer>

      <EmptyContainer height="76px" />

      {/* section 4 */}
      <DashedContainer leftBottom rightBottom>
        <SectionCont className='d-flex flex-column g-start'>
          <div className='px-40 py-40 d-flex flex-column g-start'>
            <HexSectionName title="How we helped" />
            <DyH2
              fontSize={{ base: '40px', md: '32px', sm: '32px' }}
              lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
              fontWeight={300}
              fontStyle="normal"
              textTransform="capitalize"
              color="#181010"
              className='mt-md'
            >
              Visual & brand refresh
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
              Created a calm, modern visual identity with a palette that felt both professional and reassuring. Used real imagery to highlight the human side of their care. Happy patients, expert dentists, and the clinic environment.
            </Dpara>

          </div>


          <div className='p-sm'>
            <BannerWap className='m-none'>
              <img src={banner2D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={banner2M} alt="" />
            </BannerWap>
          </div>
          <div className='p-sm'>
            <BannerWap className='m-none'>
              <img src={banner1D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={banner1M} alt="" />
            </BannerWap>
          </div>
          <div className='p-sm'>
            <BannerWap className='m-none'>
              <img src={banner3D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={banner3M} alt="" />
            </BannerWap>
          </div>
          <div className='p-sm'>
            <BannerWap className='m-none'>
              <img src={banner4D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={banner4M} alt="" />
            </BannerWap>
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
              Website redesign
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
              Built a fully responsive, visually clean website tailored for patients of all ages. Simplified navigation to make it easier to explore services, meet the team, and book appointments. Introduced clear call-to-actions for both new and returning patients.
            </Dpara>


          </div>

          <div className='p-sm'>
            <BannerWap className='m-none mt-lg'>
              <img src={banner6D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={banner6M} alt="" />
            </BannerWap>
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
              Optimized patient conversion
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
              Integrated online appointment booking. Added trust-building content like testimonials, certifications, and emergency care information.
            </Dpara>

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

      <EmptyContainer height="76px" />

      <BottomDashCont>
        <BannerWap className='m-none'>
          <img src={banner9D} alt="" />
        </BannerWap>
        <BannerWap className='p-sm d-none'>
          <img src={banner9M} alt="" />
        </BannerWap>
      </BottomDashCont>



      {/* section 7 */}
      <DashedContainer leftBottom rightBottom>
        <SectionCont className='d-flex flex-column g-start'>
          <div className='px-40 py-40 d-flex flex-column g-start'>
            {/* <DyH2
       fontSize={{ base: '40px', md: '32px', sm: '32px' }}
       lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
       fontWeight={300}
       fontStyle="normal"
       textTransform="capitalize"
       color="#181010"
      >
       Results
      </DyH2> */}

            {/* <ul className='mt-xl'>
              <DyLi
                fontSize={{ base: '20px', md: '20px', sm: '20px' }}
                lineHeight={{ base: '28px', md: '28cpx', sm: '28px' }}
                fontWeight={300}
                fontStyle="normal"
                textTransform="capitalize"
                color="#181010"
                className='mt-md ml-md text-left'
              >
                30% increase in online appointment requests within the first 60 days.
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
                Significant improvement in mobile engagement and time spent on site.
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
                A polished and trustworthy online presence that matches the clinic’s real-world reputation.
              </DyLi>

            </ul> */}

            {/* Testimonial */}
            <div className=''>
              {testimonials
                .filter((testimonial) => testimonial.name === "Dr. Munira Lokhandwala")
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
                        <StyledImage src={t.logo} width={78} height={42} alt={t.company} priority />
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

export default StarbriteCs;


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