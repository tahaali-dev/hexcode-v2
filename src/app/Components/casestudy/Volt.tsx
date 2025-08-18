import EmptyContainer, { DashedContainer, StyledImage } from '../Containers'
import { Dpara, DyH2, DyTitleH1, HexSectionName } from '../TypSetting'
import styled from '@emotion/styled'
import { ProjectTypeTag2 } from '../common/Tags'
import { PrimaryBtn } from '../Buttons'
import { ProjectsGrid } from '../home/Projects'
import ProjectCard from '../common/Cards'
import { projectList } from '@/app/Static/projects'
import { testimonials } from '@/app/Static/testimonials'

// banners
const banner0D = "/casestudy/volt/volt-0-d.webp";
const banner0M = "/casestudy/volt/volt-0-d.webp";

const BrandingBanner1D = "/casestudy/volt/v-bb1-d.webp";
const BrandingBanner1M = "/casestudy/volt/v-bb1-d.webp";

const BrandingBanner2D = "/casestudy/volt/v-bb2-d.webp";
const BrandingBanner2M = "/casestudy/volt/v-bb2-d.webp";

const BrandingBanner3D = "/casestudy/volt/v-bb3-d.webp";
const BrandingBanner3M = "/casestudy/volt/v-bb3-m.webp";

const MobileApp2D = "/casestudy/volt/volt-2-d.webp";
const MobileApp2M = "/casestudy/volt/volt-2-m.webp";

const banner3D = "/casestudy/volt/volt-3-d.webp";
const banner3M = "/casestudy/volt/volt-3-m.webp";

const banner4D = "/casestudy/volt/volt-4-d.webp";
const banner4M = "/casestudy/volt/volt-4-d.webp";

const banner5D = "/casestudy/volt/volt-5-d.webp";
const banner5M = "/casestudy/volt/volt-5-d.webp";

const banner6D = "/casestudy/volt/volt-6-d.webp";
const banner6M = "/casestudy/volt/volt-6-d.webp";

const Marketing1D = "/casestudy/volt/v-wm1-d.webp";
const Marketing1M = "/casestudy/volt/v-wm1-m.webp";

const Marketing2D = "/casestudy/volt/v-wm2-d.webp";
const Marketing2M = "/casestudy/volt/v-wm2-m.webp";

const Challenge1D = "/casestudy/volt/volt-1-d.webp";
const Challenge1M = "/casestudy/volt/volt-1-m.webp";

const Process1D = "/casestudy/volt/v-op1-d.webp";
const Process1M = "/casestudy/volt/v-op1-m.webp";

const Result1D = "/casestudy/volt/v-r1-d.webp";
const Result1M = "/casestudy/volt/v-r1-d.webp";

const VoltCs = () => {
  const projects = ["Sensyrtech", "Tinker Village"];

  return (
    <div>
      {/* section 1 */}
      <DashedContainer>
        <SectionCont className='px-40 py-40'>
          <div className='d-flex align-center justify-between align-start-mob g-md m-col'>
            <div className='d-flex flex-column g-start'>
              <HexSectionName title="Volt Money" />

              <DyTitleH1
                fontSize={{ base: '48px', md: '38px', sm: '38px' }}
                lineHeight={{ base: '56px', md: '44px', sm: '44px' }}
                fontWeight={300}
                fontStyle="normal"
                textTransform="uppercase"
                color="#181010"
                className='text-left mt-md'
              >
                Building trust in a new category of credit
              </DyTitleH1>

              <BtnHolder className='d-flex g-md mt-xl'>
                <BtnVar2 onClick={() => window.open("https://voltmoney.in/", "_blank")}>Visit Site</BtnVar2>
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
            When the Volt Money team first reached out to us at Hexcode, they had a bold idea: what if people could get affordable loans simply by pledging their mutual funds, without ever having to sell them? The catch? Most people had never even heard of this kind of credit. That meant building not just a product but also trust, education, and a sense of security around an unfamiliar financial tool, all while making it really easy to use.
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
            Over almost two years, we became more than just a design agency for Volt. We were partners, working side by side with their team to shape everything from their brand identity and app experience to marketing and design systems. Our goal was simple: help Volt become a trusted, clear, and approachable option for anyone curious about borrowing against their investments.
          </Dpara>

          <div className='mt-xl d-flex g-md flex-wrap'>
            <ProjectTypeTag2
              title="Finance"
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
              The Challenge
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
              Borrowing against mutual funds isn’t something most people know about, so right from the start, we had to help users understand and feel good about what Volt offered. Trust was everything. That meant stripping out jargon, making every process feel seamless, and always putting the user’s concerns first. The Volt team was rapidly adding features, raising capital, and growing their momentum.
            </Dpara>
          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={Challenge1D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={Challenge1M} alt="" />
            </BannerWap>
          </div>
        </SectionCont>
      </DashedContainer>

      <EmptyContainer height="76px" />

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
              Our Process
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
              Every phase of our work with Volt involved close collaboration and open feedback. We spent time with their team to understand not just the product, but also the users, their doubts, and what would make them feel confident. Together, we iterated, tested, and refined, always aiming to make a complex idea feel simple and approachable.
            </Dpara>
          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={Process1D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={Process1M} alt="" />
            </BannerWap>
          </div>
        </SectionCont>
      </DashedContainer>

      <EmptyContainer height="76px" />

      {/* section 2 */}
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
              className='mt-lg'
            >
              We kicked things off by uncovering what made Volt special, then defined how it should look and sound to the world. The visual style needed the right balance: it had to feel modern and credible, but never cold or intimidating. We crafted a look that was both trustworthy and welcoming.
            </Dpara>
          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={BrandingBanner1D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={BrandingBanner1M} alt="" />
            </BannerWap>
          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={BrandingBanner2D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={BrandingBanner2M} alt="" />
            </BannerWap>
          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={BrandingBanner3D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={BrandingBanner3M} alt="" />
            </BannerWap>
          </div>
        </SectionCont>
      </DashedContainer>

      <EmptyContainer height="76px" />

      {/* section 3 */}
      <DashedContainer >
        <SectionCont className='px-40 py-40 d-flex flex-column g-start'>
          <DyH2
            fontSize={{ base: '40px', md: '32px', sm: '32px' }}
            lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
            fontWeight={300}
            fontStyle="normal"
            textTransform="capitalize"
            color="#181010"
          >
            Mobile App
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
            Next, we designed an app that anyone not just finance pros could use with confidence. Whether pledging funds, checking on loans, or receiving updates, every step was streamlined to feel clear and comforting, never overwhelming. We built a reusable component library so the Volt team could quickly add new features without feeling lost.
          </Dpara>
        </SectionCont>
      </DashedContainer>

      <BottomDashCont>
        <BannerWap className=' m-none'>
          <img src={MobileApp2D} alt="" />
        </BannerWap>
        <BannerWap className='d-none'>
          <img src={MobileApp2M} alt="" />
        </BannerWap>
      </BottomDashCont>

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
              Design System
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
              As Volt grew, they needed to keep their product feeling consistent, no matter how fast they moved. Our custom design system became the single source of truth for every color, button, and interaction. It was more than just a rulebook. It acted like a kit that empowered both designers and developers to do their best work, faster.
            </Dpara>
          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={banner3D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={banner3M} alt="" />
            </BannerWap>
          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={banner4D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={banner4M} alt="" />
            </BannerWap>
          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={banner5D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={banner5M} alt="" />
            </BannerWap>
          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={banner6D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={banner6M} alt="" />
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
              Marketing Website
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
              We knew first impressions were important, especially in a new financial category. So we made sure Volt’s website told their story simply and clearly, breaking down the benefits and guiding users through the process step by step. Social proof and friendly visuals built the trust that new customers needed.
            </Dpara>
          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={Marketing1D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={Marketing1M} alt="" />
            </BannerWap>
          </div>

          <div>
            <BannerWap className='p-sm m-none'>
              <img src={Marketing2D} alt="" />
            </BannerWap>
            <BannerWap className='p-sm d-none'>
              <img src={Marketing2M} alt="" />
            </BannerWap>
          </div>
        </SectionCont>
      </DashedContainer>

      <EmptyContainer height="76px" />


      {/* section 8 */}
      <DashedContainer >
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
              So how did it all turn out? Users loved the app, which earned a <a target='_blank' className='red-anchor' href="https://play.google.com/store/apps/details?id=in.voltmoney&hl=en_IN">4.8+ rating</a> on the Google Play Store. The website helped drive new signups, thanks to its clarity. Most importantly, Volt’s customers felt empowered to try something new, backed by a product (and a partner) that put their needs first.
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
              Through all the ups, pivots, and launches, we didn’t just keep Volt looking sharp. We helped them grow with their users in mind every step of the way.
            </Dpara>

            {/* Testimonial */}
            <div className=' top-dashed mt-lg'>
              {testimonials
                .filter((testimonial) => testimonial.name === "Lalit Bihani")
                .map((t, index) => (
                  <TestimonialCard key={index} className='mt-xl'>
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
                      {t.shortText}
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
                        <StyledImage src={t.logo} width={64} height={28} alt={t.company} priority />
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
          <img src={Result1D} alt="" />
        </BannerWap>
        <BannerWap className='d-none'>
          <img src={Result1M} alt="" />
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

export default VoltCs;


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

// < a href = "https://ibb.co/rK4XxHFp" > <img src="https://i.ibb.co/vCZM3kVd/volt-0-d.webp" alt="volt-0-d" border="0"></a>