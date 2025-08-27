"use client"
/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
const left = "/icons/left.svg"
const right = "/icons/right.svg"

import { DashedContainer, StyledImage } from '../Containers';
import { DyH2, HexSectionName } from '../TypSetting';
import { useEffect } from 'react';
import { testimonials } from '@/app/Static/testimonials';

interface TestimonialSliderProps {
  activeIndex?: number;
}

export default function TestimonialSlider({ activeIndex }: TestimonialSliderProps) {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      initial: activeIndex ?? 0,
    },
    [
      () => {
        if (typeof activeIndex === 'number') {
          instanceRef.current?.moveToIdx(activeIndex);
        }
      },
    ]
  );

  useEffect(() => {
    if (typeof activeIndex === 'number' && instanceRef.current) {
      instanceRef.current?.moveToIdx(activeIndex);
    }
  }, [activeIndex]);

  return (
    <>
      <DashedContainer leftTop leftBottom rightTop rightBottom>
        <Wrapper>
          <HexSectionName title="THE SLIDER OF LOVE" />

          <DyH2
            fontSize={{ base: '40px', md: '32px', sm: '32px' }}
            lineHeight={{ base: '48px', md: '40px', sm: '40px' }}
            fontWeight={300}
            fontStyle="normal"
            textTransform="uppercase"
            color="#181010"
            className="text-center mt-md"
          >
            Hear it from our partners
          </DyH2>


          <SliderContainer>
            <div ref={sliderRef} className="keen-slider">
              {testimonials.map((t, index) => (
                <div className="keen-slider__slide" key={index}>
                  <Slide isActive={activeIndex === index}>
                    <StyledImage src={t.image} alt={t.name} width={392} height={453} className='testimonial-image' />
                    <Content>
                      <div className='mob-flex'>
                        <StyledImage src={t.logo?.src ?? ""} alt={t.company} width={t.logo?.width} height={t.logo?.height} className='comy-logo' />
                        <Text>{t.text}</Text>
                      </div>
                      <div className="bottom">
                        <Author>{t.name}</Author>
                        <SubText>{t.title}</SubText>
                      </div>
                    </Content>
                  </Slide>
                </div>
              ))}
            </div>
          </SliderContainer>
        </Wrapper>
      </DashedContainer>

      <DashedContainer leftTop leftBottom rightTop rightBottom>
        <ButtonsHolder>
          <NavButton onClick={() => instanceRef.current?.prev()}>
            <img src={left} alt="Previous" />
          </NavButton>
          <NavButton onClick={() => instanceRef.current?.next()}>
            <img src={right} alt="Next" />
          </NavButton>
        </ButtonsHolder>
      </DashedContainer>
    </>
  );
}




const Wrapper = styled.div`
  padding: 80px 0px 0px 0px;

@media (max-width: 768px) {
padding : 32px 0px 0px 0px;

.testimonial-image{
width:100%;
}

.mob-flex{
display:flex;
flex-direction:column; 
align-items:center;
gap:8px;
margin-top:18px;
}

}
`

const SliderContainer = styled.div`
margin-top:48px;
border: 1px dashed #d3d3d3;
border-radius:16px;
overflow:hidden;

@media (max-width: 768px) {
margin-top:24px;

}
`;

const Slide = styled.div<{ isActive?: boolean }>`
  display: flex;
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    height: 100%;
    padding: 18px;
    gap: 18px;
  }
`;


const Img = styled.img`
  width: 392px;
  height: 453px;
  object-fit: cover;
  border-radius: 16px;


  @media (max-width: 768px) {
  width:100%;
  height: 353px;
  }
`;

const Content = styled.div`
  display:flex;
  flex-direction:column;
  justify-content: space-between;
  height: auto;

  .bottom{
  border-top: 1px solid #EAE1E1;
  padding-top: 16px;
  }

    @media (max-width: 768px) {
    height : 100%;
  }
`;


const Text = styled.p`
color: #181010;
font-size: 24px;
font-weight: 300;
line-height: 32px;
margin-top:32px;

  @media (max-width: 768px) {
font-size: 18px;
line-height: 28px;
margin-top:12px;
  }
`;

const Author = styled.div`
color: #181010;
font-size: 24px;
font-weight: 400;

  @media (max-width: 768px) {
font-size: 16px;
font-weight: 400;
  }
`;

const SubText = styled.div`
color:  #A38F8F;
font-size: 20px;
font-weight: 300;
margin-top:4px;

  @media (max-width: 768px) {
font-size: 14px;
  }
`;

const ButtonsHolder = styled.div`
display:flex;
justify-content : center;
gap:16px;
margin:24px 0px;

@media (max-width: 768px) {
margin:18px 0px;
}
`

const NavButton = styled.button<{ active?: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  transition: opacity 0.3s ease;

  img {
    width: 56px;
    height: 56px;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &:hover {
    opacity: 1;

    img {
      transform: scale(1.05) rotate(1deg);
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 42px;
      height: 42px;
    }
  }
`;

