/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ProjectTypeTagProps {
  title: string;
  isHover?: boolean;
  isSelected?: boolean;
  borderColor?: string;
  tagBg?: string;
  onClick?: () => void;
}

export const ProjectTypeTag = ({
  title,
  isHover = false,
  isSelected = false,
  borderColor = "#EAE1E1",
  tagBg = "#fff",
  onClick,
}: ProjectTypeTagProps) => {
  return (
    <TagStyled
      isHover={isHover}
      isSelected={isSelected}
      borderColor={borderColor}
      onClick={onClick}
      tagBg={tagBg}
    >
      {title}
    </TagStyled>
  );
};


const TagStyled = styled.p<{ isHover: boolean; isSelected: boolean, borderColor: string, tagBg?: string }>`
  border-radius: 56px;
  border: 1px solid ${({ borderColor }) => borderColor};
  background: ${({ isSelected, tagBg }) => (isSelected ? '#ee232a' : tagBg || '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#181010')};
  padding: 8px 16px;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  transition: background 0.3s ease, color 0.3s ease, transform 0.3s ease;

  ${(props) =>
    props.isHover &&
    css`
      &:hover {
        background: #ee232a;
        color: #fff;
        transform: scale(1.01);
  cursor: pointer;
      }
    `};

  @media (max-width: 768px) {
    border-radius: 32px;
    padding: 8px 12px;
    font-size: 14px;
    line-height: 18px;
  }
`;


// Tag 2 
interface ProjectTypeTag2Props {
  title: string;
  borderColor?: string;
  backgroundColor?: string;
  color?: string;
  isHover?: boolean;
}


export const ProjectTypeTag2 = ({
  title,
  backgroundColor = "#ee232a",
  color = "#181010",
  isHover = true,
}: ProjectTypeTag2Props) => {
  return (
    <TagStyled2
      backgroundColor={backgroundColor}
      color={color}
      isHover={isHover}
    >
      {title}
    </TagStyled2>
  );
};

const TagStyled2 = styled.p<{
  backgroundColor: string;
  color: string;
  isHover: boolean;
}>`
  border-radius: 56px;
  background: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  padding: 0px 24px;
 display:flex;
 align-items:center;
 justify-content:center;

  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-decoration: none;
  height: 44px;

  transition:
    background 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.2s cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 0.25s ease;

  ${(props) =>
    props.isHover &&
    css`
      &:hover {
        background: ${props.backgroundColor};
        filter: brightness(0.92);
        cursor: pointer;
        box-shadow: 0 2px 16px rgba(34, 34, 34, 0.13);
      }
    `};

  @media (max-width: 768px) {
    border-radius: 32px;
    font-size: 14px;
    line-height: 20px;
      height: 36px;
  }
`;