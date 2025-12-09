"use client"
import styled from '@emotion/styled'
import { DashedContainer } from '../Containers'
import { DyTitleH1, HexSectionName } from '../TypSetting'
import { useTextReveal } from '../../Hooks/useTextReveal';
import { useButtonReveal } from '../../Hooks/useButtonReveal';
import { ProjectTypeTag } from '../common/Tags';

const availableTags = ["All", "Visual Identity", "Website & Product", "Creative Dev"];
interface HeaderPProps {
  selectedTag: string | null;
  setSelectedTag: (tag: string | null) => void;
}

const HeaderP = ({ selectedTag, setSelectedTag }: HeaderPProps) => {

  const handleTagClick = (tag: string) => {
    setSelectedTag(selectedTag === tag ? null : tag);
  };

  useTextReveal(".project-animated");
  useButtonReveal(".tags-wrap", 1.1);

  return (
    <DashedContainer leftBottom rightBottom>
      <Wrapper>

        <HexSectionName title="Projects" className="d-flex align-center justify-start g-sm d-none tags-wrap" />
        <HexSectionName title="Projects" className="d-flex align-center justify-center g-sm m-none tags-wrap" />

        <DyTitleH1
          fontSize={{ base: '64px', md: '38px', sm: '38px' }}
          lineHeight={{ base: '74px', md: '44px', sm: '44px' }}
          fontWeight={300}
          fontStyle="normal"
          textTransform="uppercase"
          color="#181010"
          className="mt-md project-animated"
        >
          Work we're proud <br /> to showcase
        </DyTitleH1>


        <TagsWrapper className='flex-wrap tags-wrap'>
          {availableTags.map((tag) => (
            <ProjectTypeTag
              key={tag}
              title={tag}
              isHover={true}
              isSelected={selectedTag === tag}
              onClick={() => handleTagClick(tag)}
            />
          ))}
        </TagsWrapper>

      </Wrapper>
    </DashedContainer>
  )
}

export default HeaderP


const Wrapper = styled.section`
padding: 80px 16px;

  @media (max-width: 768px) {
    padding: 32px 16px;

    h1,p{
    text-align:left;
    }
  }
`
const TagsWrapper = styled.div`
display:flex;
justify-content: center;
gap:12px;
margin-top: 48px;
padding:0px 16px;

  @media (max-width: 768px) {
    h1{
    text-align:left;
    }

    padding:0px 0px;
  margin-top: 24px;
  justify-content: start;
  }
`