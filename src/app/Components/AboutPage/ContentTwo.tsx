"use client"
import styled from "@emotion/styled"
import { DashedContainer, StyledImage } from "../Containers"
import { Dpara, DyH2, DyH3, HexSectionName } from "../TypSetting"


interface CountItem {
  icon: string
  value: string
  label: string
}

interface ContentTwoProps {
  title: string
  heading: string
  paragraphs: string[]
  showCounts?: boolean
  countsData?: CountItem[]
}

const ContentTwo: React.FC<ContentTwoProps> = ({
  title,
  heading,
  paragraphs,
  showCounts = true,
  countsData = []
}) => {
  const mid = Math.ceil(paragraphs.length / 2)
  const leftParagraphs = paragraphs.slice(0, mid)
  const rightParagraphs = paragraphs.slice(mid)

  return (
    <DashedContainer leftBottom rightBottom>
      <Wrapper>
        <HexSectionName title={title} className="d-flex align-center justify-center g-sm about-img" />

        <DyH2
          fontSize={{ base: '40px', md: '32px', sm: '32px' }}
          lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#181010"
          className="text-center mt-md"
        >
          {heading}
        </DyH2>

        <ParaGrid>
          <div className="d-flex flex-column g-lg">
            {leftParagraphs.map((para, idx) => (
              <Dpara
                key={idx}
                fontSize="18px"
                lineHeight="24px"
                fontWeight="300"
                color="#352727"
                mdFontSize="18px"
                mdLineHeight="24px"
                smFontSize="18px"
                smLineHeight="24px"
                textAlign="left"
              >
                {para}
              </Dpara>
            ))}
          </div>

          <div className="d-flex flex-column g-lg">
            {rightParagraphs.map((para, idx) => (
              <Dpara
                key={idx}
                fontSize="18px"
                lineHeight="24px"
                fontWeight="300"
                color="#352727"
                mdFontSize="18px"
                mdLineHeight="24px"
                smFontSize="18px"
                smLineHeight="24px"
                textAlign="left"
              // className="mt-lg"
              >
                {para}
              </Dpara>
            ))}

            {showCounts && countsData.length > 0 && (
              <CountsWrapper className="d-flex align-center g-xl">
                {countsData.map((item, index) => (
                  <Counts key={index}>
                    <StyledImage
                      src={item.icon}
                      width={64}
                      height={64}
                      alt="icon"
                      className="mb-md"
                    />
                    <div>
                      <DyH3
                        fontSize={{ base: '32px', md: '28px', sm: '24px' }}
                        lineHeight={{ base: '38px', md: '32px', sm: '32px' }}
                        fontWeight={600}
                        fontStyle="normal"
                        textTransform="capitalize"
                        color="#181010"
                        className="text-left"
                      >
                        {item.value}
                      </DyH3>
                      <Dpara
                        fontSize="18px"
                        lineHeight="24px"
                        fontWeight="300"
                        color="#181010"
                        mdFontSize="18px"
                        mdLineHeight="24px"
                        smFontSize="18px"
                        smLineHeight="24px"
                        textAlign="left"
                      >
                        {item.label}
                      </Dpara>
                    </div>
                  </Counts>
                ))}
              </CountsWrapper>
            )}
          </div>
        </ParaGrid>
      </Wrapper>
    </DashedContainer>
  )
}

export default ContentTwo

const Wrapper = styled.section`
  padding: 80px;
  @media (max-width: 768px) {
    padding: 32px 16px;
  }
`

const ParaGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 64px;
  margin-top: 48px;

  @media (max-width: 768px) {
  margin-top: 24px;
    grid-template-columns: 1fr;
    gap: 8px;
  }
`

const CountsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  margin-top: 16px;
`

const Counts = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    margin-top: 16px;
  }
`
