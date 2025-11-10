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
const banner0D = "/casestudy/InstallIOT/1.webp";
const banner0M = "/casestudy/InstallIOT/1.webp";

const banner1D = "/casestudy/InstallIOT/2.webp";
const banner1M = "/casestudy/InstallIOT/2-mob.webp";

const banner2D = "/casestudy/InstallIOT/3.webp";
const banner2M = "/casestudy/InstallIOT/3-mob.webp";

const banner3D = "/casestudy/InstallIOT/4.webp";
const banner3M = "/casestudy/InstallIOT/4-mob.webp";

const banner4D = "/casestudy/InstallIOT/5.webp";
const banner4M = "/casestudy/InstallIOT/5.webp";

const banner5D = "/casestudy/InstallIOT/6.webp";
const banner5M = "/casestudy/InstallIOT/6.webp";


const InstallIOTCs = () => {
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
                Install IoT — Bridging Businesses and IoT Experts for Seamless Growth
              </DyTitleH1>

              <BtnHolder className='d-flex g-md mt-xl'>
                <BtnVar2 onClick={() => window.open("https://www.install-iot.com/", "_blank")}>Visit Site</BtnVar2>
                <PrimaryBtn
                  padding="16px"
                  fontSize="18px"
                  margin="0"
                  borderRadius="8px"
                  btnContent="Book a call"
                  onClick={() => window.open("https://calendly.com/shabbir-hexcode/30min", "_blank")}
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
            Install IoT is a specialized IoT installation and maintenance service founded by former IoT entrepreneurs Mohammed Khambaty and Taher Lokhandwala in early 2024. Based in Houston, Texas, Install IoT connects businesses with expert technicians nationwide to handle sales demos, device installations, maintenance, and IoT architecture across industries including healthcare, retail, and manufacturing.
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
              Installing IoT devices isn't simple. Finding reliable technicians for one-off deployments is nearly impossible. As former IoT entrepreneurs themselves, the Install IoT founders knew this pain intimately.
            </Dpara>
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
              They built Install IoT to solve it—connecting businesses with vetted technicians nationwide for sales demos, installations, and full-scale deployments. But as a startup, they faced a critical problem: how do you establish credibility in a $56B market dominated by enterprise players?
            </Dpara>
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
              They needed a brand identity that communicated expertise and trust instantly. A website that made their service offering crystal clear. And marketing collateral that helped their founders close deals.
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

      {/* section 3*/}
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
              Brand Identity
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
              We created a clean, modern visual system that balances technical sophistication with approachability. The identity works across digital and print, making Install IoT feel established and trustworthy from day one.
            </Dpara>

            {/* Key elements */}
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
                Key Elements:
              </DyH3>

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
                  Modern logomark that subtly references connectivity
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
                  Bold color palette for energy, grounded with professional neutrals
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
                  Custom iconography for each service type and IoT technology
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
                  Comprehensive brand guidelines for consistency at scale
                </DyLi>

              </ul>
            </div>

          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={banner2D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={banner2M} alt="" />
            </BannerWap>
          </div>
        </SectionCont>
      </DashedContainer>

      <EmptyContainer height="76px" />

      {/* section 4 */}
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
              With 80% mobile traffic, we prioritized a mobile-first design approach while ensuring the desktop experience remained powerful and comprehensive.
            </Dpara>

            {/* Homepage & Navigation */}
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
                Homepage & Navigation
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
                className='mt-lg'
              >
                The homepage immediately addresses the core problem: "We know how difficult it is to send technicians for sales demos, pilot installations, and full-scale deployments." This empathetic opening, followed by clear service breakdown, quickly communicates Install IoT's value proposition.
              </Dpara>

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
                  Modern logomark that subtly references connectivity
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
                  Bold color palette for energy, grounded with professional neutrals
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
                  Custom iconography for each service type and IoT technology
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
                  Comprehensive brand guidelines for consistency at scale
                </DyLi>

              </ul> */}
            </div>

            {/* Service Sections */}
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
                Service Sections
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
                className='mt-lg'
              >
                We organized services into four clear categories:
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
                  Sales Call — On-site demos to convert leads
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
                  Project Architecture — Expert IoT solutions design
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
                  Installation — Professional deployment nationwide
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
                  Maintenance — Ongoing device support
                </DyLi>
              </ul>
            </div>


            <div>
              <BannerWap className='m-none mt-lg'>
                <img src={banner3D} alt="" />
              </BannerWap>
              <BannerWap className='p-sm d-none'>
                <img src={banner3M} alt="" />
              </BannerWap>
            </div>
          </div>

        </SectionCont>
      </DashedContainer>

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
              className='text-left'
            >
              Technology Showcase
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
              A visual grid displays all supported technologies (LoRaWAN, Zigbee, Bluetooth, Cellular, GPS, etc.) with icons, making technical capabilities immediately scannable.
            </Dpara>
          </div>

          <div>
            <BannerWap className='m-none mt-lg'>
              <img src={banner4D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={banner4M} alt="" />
            </BannerWap>
          </div>
        </SectionCont>
      </DashedContainer>



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
              Results
            </DyH2>

            {/* Service Sections */}
            <div>
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
                Since launching with the new brand and website, Install IoT has:
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
                  Established immediate credibility with IoT companies, appearing as a mature, trustworthy partner rather than a startup.
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
                  The transparent pricing and clear service communication have lowered barriers to inquiry, generating consistent inbound leads.
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
                  The sales deck and collateral have streamlined the sales process, allowing founders to focus on client relationships rather than creating materials from scratch.
                </DyLi>
              </ul>
            </div>
          </div>
        </SectionCont>
      </DashedContainer>

      <BottomDashCont>
        <BannerWap className='m-none'>
          <img src={banner5D} alt="" />
        </BannerWap>
        <BannerWap className='d-none'>
          <img src={banner5M} alt="" />
        </BannerWap>
      </BottomDashCont>

      {/* testimonial */}
      <DashedContainer leftBottom rightBottom>
        <SectionCont className='d-flex flex-column g-start'>
          <div className='px-40 py-40 d-flex flex-column g-start'>

            {/* Testimonial */}
            <div>
              {testimonials
                .filter((testimonial) => testimonial.name === "Mohammed Khambaty")
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
                        <StyledImage src={t.logo} width={80} height={42} alt={t.company} priority />
                      </div>
                    </div>
                  </TestimonialCard>
                ))}
            </div>
          </div>


        </SectionCont>
      </DashedContainer>



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

export default InstallIOTCs;


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