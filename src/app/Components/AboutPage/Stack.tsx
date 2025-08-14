"use client"
import { DashedContainer } from '../Containers'
import styled from '@emotion/styled'
import { DyH2, HexSectionName } from '../TypSetting'
import { ServiceCard } from '../ServiceCard'
import { aboutCardData } from '@/app/Static/OurCaps'

const Stack = () => {
  return (
    <DashedContainer leftBottom rightBottom>
      <Wrapper>
        <HexSectionName title="Our Values" className="d-flex align-center justify-center g-sm about-img" />
        <DyH2
          fontSize={{ base: '40px', md: '32px', sm: '32px' }}
          lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#181010"
          className="text-center mt-md"
        >
          What we stand for at hexcode design
        </DyH2>

        {/* card */}
        <div className='mt-md'>
          {aboutCardData.map((card, index) => (
            <Card
              key={index}
            >
              <ServiceCard
                title={card.title}
                bgcolor={card.bgcolor}
                para1={card.para1}
                image={card.image}
                icon={card.icon}
                mobileImage={card.mobileImage}
              />
            </Card>
          ))}

        </div>

      </Wrapper>
    </DashedContainer>
  )
}

export default Stack

const Wrapper = styled.section`
padding: 80px 16px 16px 16px;

  @media (max-width: 768px) {
padding: 32px 16px 16px 16px;
  }
`


const Card = styled.li`
  list-style: none;
  padding-top: 32px;

  @media (min-width: 768px) {
    position: sticky;
    top: 0;
  }
`;
