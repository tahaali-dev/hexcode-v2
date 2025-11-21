'use client'
import styled from "@emotion/styled"
import { DashedContainer, StyledImage } from "../Containers"
import { Author, SubText } from "../ServicePage/Content"
import { Dpara } from "../TypSetting"
import { testimonials } from "../../Static/testimonials"

type SingleTestimonialProps = {
  testimonialName: string
  marginTop?: string
  mobileMarginTop?: string
}

const OuterWrapper = styled.div`
  width: 100%;
`

const Wrapper = styled.div<{ $marginTop: string; $mobileMarginTop: string }>`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 32px;
  // margin-top:${({ $marginTop }) => $marginTop};
  margin:32px;
  background: rgba(235, 235, 245, 0.4); /* very light, subtle background */
  border-radius:16px;

    @media (max-width: 768px) {
  margin-top:${({ $mobileMarginTop }) => $mobileMarginTop};
    padding: 24px;
  }
`

const normalize = (value: string) => value.trim().toLowerCase()

const SingleTestimonial = ({
  testimonialName,
  marginTop = "64px",
  mobileMarginTop = "32px",
}: SingleTestimonialProps) => {
  if (!testimonialName) return null

  const filteredTestimonials = testimonials.filter(
    (testimonial) => testimonial.name && normalize(testimonial.name) === normalize(testimonialName)
  )

  if (!filteredTestimonials.length) {
    return null
  }

  return (
    <DashedContainer leftBottom rightBottom  >
      <Wrapper $marginTop={marginTop} $mobileMarginTop={mobileMarginTop}>
        {filteredTestimonials.map((t, index) => (
          <TestimonialCard key={`${t.name}-${index}`}>
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
              className="testimonial-text"
            >
              {t.shortText ?? t.text}
            </Dpara>
            <div className="d-flex justify-between mt-lg align-center ">
              <div className="d-flex align-center g-md">
                <StyledImage src={t.image} width={64} height={64} className="client-image" alt={t.name} />
                <div className="d-flex flex-column">
                  <Author>{t.name}</Author>
                  <SubText>{t.title}</SubText>
                </div>
              </div>
              <div className="m-none">
                <StyledImage
                  src={typeof t.logo === "string" ? t.logo : t.logo?.src}
                  width={typeof t.logo === "string" ? undefined : t.logo?.width}
                  height={typeof t.logo === "string" ? 28 : t.logo?.height}
                  alt={t.company}
                />
              </div>
            </div>
          </TestimonialCard>
        ))}
      </Wrapper>
    </DashedContainer>
  )
}

export default SingleTestimonial



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
