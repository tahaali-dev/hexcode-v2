import styled from "@emotion/styled";
import { StyledImage } from "./Containers";

const RedHex = "/icons/redHex.svg";


export const SectionTitle = styled.h1<{
  fontSize: string;
  lineHeight: string;
}>`
  text-align: center;
  font-size: ${(prop) => prop.fontSize};
  line-height: ${(prop) => prop.lineHeight};
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;

  /* Apply styles for large screens (above 1024px) */
  @media (max-width: 1024px) {
    font-size: 48px;
    line-height: 58px;
  }

  /* Apply styles for medium screens (below 768px) */
  @media (max-width: 768px) {
    font-size: 32px;
    line-height: 42px;
  }
`;

export const SectionTitle2 = styled.p`
  text-transform: uppercase;
  color: var(--clr-dark3);
  text-align: center;
  font-size: 18px;
  line-height: 24px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

@media (max-width: 1024px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const HexSectionName = ({
  title,
  className = "d-flex align-center justify-center g-sm"
}: {
  title: string;
  className?: string;
}) => {
  return (
    <HexSectionBox className={className}>
      <StyledImage src={RedHex} width={16} height={16} alt="hex" />
      <h2>{title}</h2>
    </HexSectionBox>
  );
};

export const HexSectionBox = styled.div`
h2{
color: #EE232A;
text-align: center;
font-size: 18px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0.72px;
text-transform: uppercase;
}


  @media (max-width: 768px) {
h2{
font-size: 14px;
line-height: 20px; 
}
  }
`;

export const SectionName = styled.p`
  text-transform: uppercase;
  color: var(--clr-dark3);
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 24px;

  @media (min-width: 768px) {
    font-size: 17px;
    line-height: 23px;
  }

  @media (min-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
`;

export const SectionSubHeading = styled.p`
  color: var(--clr-dark2);
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const HighlightText = styled.span`
  color: var(--clr-primary-l1);
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const LightText = styled.p`
  color: var(--clr-dark3);
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
`;





interface ResponsiveValue {
  base: string;
  md?: string;
  sm?: string;
}

interface DynamicTitleProps {
  fontSize: string | ResponsiveValue;
  lineHeight: string | ResponsiveValue;
  fontStyle?: string;
  fontWeight?: number | string;
  textTransform?: string;
  color?: string;
}

export const DyTitleH1 = styled.h1<DynamicTitleProps>`
  text-align: center;
  font-style: ${(props) => props.fontStyle || 'normal'};
  font-weight: ${(props) => props.fontWeight || 400};
  text-transform: ${(props) => props.textTransform || 'none'};
  color: ${(props) => props.color || '#000'};

  font-size: ${(props) =>
    typeof props.fontSize === 'string' ? props.fontSize : props.fontSize.base};
    
  line-height: ${(props) =>
    typeof props.lineHeight === 'string' ? props.lineHeight : props.lineHeight.base};

  @media (max-width: 1024px) {
    font-size: ${(props) =>
    typeof props.fontSize === 'object' && props.fontSize.md
      ? props.fontSize.md
      : typeof props.fontSize === 'string'
        ? props.fontSize
        : props.fontSize.base};

    line-height: ${(props) =>
    typeof props.lineHeight === 'object' && props.lineHeight.md
      ? props.lineHeight.md
      : typeof props.lineHeight === 'string'
        ? props.lineHeight
        : props.lineHeight.base};
  }

  @media (max-width: 768px) {
    font-size: ${(props) =>
    typeof props.fontSize === 'object' && props.fontSize.sm
      ? props.fontSize.sm
      : typeof props.fontSize === 'string'
        ? props.fontSize
        : props.fontSize.base};

    line-height: ${(props) =>
    typeof props.lineHeight === 'object' && props.lineHeight.sm
      ? props.lineHeight.sm
      : typeof props.lineHeight === 'string'
        ? props.lineHeight
        : props.lineHeight.base};
  }
`;

interface DynamicHeadingProps {
  fontSize: string | ResponsiveValue;
  lineHeight: string | ResponsiveValue;
  fontStyle?: string;
  fontWeight?: number | string;
  textTransform?: string;
  color?: string;
}

export const DyH2 = styled.h2<DynamicHeadingProps>`
  text-align: center;
  font-style: ${(props) => props.fontStyle || 'normal'};
  font-weight: ${(props) => props.fontWeight || 400};
  text-transform: ${(props) => props.textTransform || 'none'};
  color: ${(props) => props.color || '#000'};

  font-size: ${(props) =>
    typeof props.fontSize === 'string' ? props.fontSize : props.fontSize.base};

  line-height: ${(props) =>
    typeof props.lineHeight === 'string' ? props.lineHeight : props.lineHeight.base};

  @media (max-width: 1024px) {
    font-size: ${(props) =>
    typeof props.fontSize === 'object' && props.fontSize.md
      ? props.fontSize.md
      : typeof props.fontSize === 'string'
        ? props.fontSize
        : props.fontSize.base};

    line-height: ${(props) =>
    typeof props.lineHeight === 'object' && props.lineHeight.md
      ? props.lineHeight.md
      : typeof props.lineHeight === 'string'
        ? props.lineHeight
        : props.lineHeight.base};
  }

  @media (max-width: 768px) {
    font-size: ${(props) =>
    typeof props.fontSize === 'object' && props.fontSize.sm
      ? props.fontSize.sm
      : typeof props.fontSize === 'string'
        ? props.fontSize
        : props.fontSize.base};

    line-height: ${(props) =>
    typeof props.lineHeight === 'object' && props.lineHeight.sm
      ? props.lineHeight.sm
      : typeof props.lineHeight === 'string'
        ? props.lineHeight
        : props.lineHeight.base};
  }
`;

export const DyH3 = styled.h3<DynamicHeadingProps>`
  text-align: center;
  font-style: ${(props) => props.fontStyle || 'normal'};
  font-weight: ${(props) => props.fontWeight || 400};
  text-transform: ${(props) => props.textTransform || 'none'};
  color: ${(props) => props.color || '#000'};

  font-size: ${(props) =>
    typeof props.fontSize === 'string' ? props.fontSize : props.fontSize.base};

  line-height: ${(props) =>
    typeof props.lineHeight === 'string' ? props.lineHeight : props.lineHeight.base};

  @media (max-width: 1024px) {
    font-size: ${(props) =>
    typeof props.fontSize === 'object' && props.fontSize.md
      ? props.fontSize.md
      : typeof props.fontSize === 'string'
        ? props.fontSize
        : props.fontSize.base};

    line-height: ${(props) =>
    typeof props.lineHeight === 'object' && props.lineHeight.md
      ? props.lineHeight.md
      : typeof props.lineHeight === 'string'
        ? props.lineHeight
        : props.lineHeight.base};
  }

  @media (max-width: 768px) {
    font-size: ${(props) =>
    typeof props.fontSize === 'object' && props.fontSize.sm
      ? props.fontSize.sm
      : typeof props.fontSize === 'string'
        ? props.fontSize
        : props.fontSize.base};

    line-height: ${(props) =>
    typeof props.lineHeight === 'object' && props.lineHeight.sm
      ? props.lineHeight.sm
      : typeof props.lineHeight === 'string'
        ? props.lineHeight
        : props.lineHeight.base};
  }
`;

export const DyH4 = styled.h3<DynamicHeadingProps>`
  text-align: center;
  font-style: ${(props) => props.fontStyle || 'normal'};
  font-weight: ${(props) => props.fontWeight || 400};
  text-transform: ${(props) => props.textTransform || 'none'};
  color: ${(props) => props.color || '#000'};

  font-size: ${(props) =>
    typeof props.fontSize === 'string' ? props.fontSize : props.fontSize.base};

  line-height: ${(props) =>
    typeof props.lineHeight === 'string' ? props.lineHeight : props.lineHeight.base};

  @media (max-width: 1024px) {
    font-size: ${(props) =>
    typeof props.fontSize === 'object' && props.fontSize.md
      ? props.fontSize.md
      : typeof props.fontSize === 'string'
        ? props.fontSize
        : props.fontSize.base};

    line-height: ${(props) =>
    typeof props.lineHeight === 'object' && props.lineHeight.md
      ? props.lineHeight.md
      : typeof props.lineHeight === 'string'
        ? props.lineHeight
        : props.lineHeight.base};
  }

  @media (max-width: 768px) {
    font-size: ${(props) =>
    typeof props.fontSize === 'object' && props.fontSize.sm
      ? props.fontSize.sm
      : typeof props.fontSize === 'string'
        ? props.fontSize
        : props.fontSize.base};

    line-height: ${(props) =>
    typeof props.lineHeight === 'object' && props.lineHeight.sm
      ? props.lineHeight.sm
      : typeof props.lineHeight === 'string'
        ? props.lineHeight
        : props.lineHeight.base};
  }
`;

export const DyLi = styled.li<DynamicHeadingProps>`
  text-align: center;
  font-style: ${(props) => props.fontStyle || 'normal'};
  font-weight: ${(props) => props.fontWeight || 400};
  text-transform: ${(props) => props.textTransform || 'none'};
  color: ${(props) => props.color || '#000'};

  font-size: ${(props) =>
    typeof props.fontSize === 'string' ? props.fontSize : props.fontSize.base};

  line-height: ${(props) =>
    typeof props.lineHeight === 'string' ? props.lineHeight : props.lineHeight.base};

  @media (max-width: 1024px) {
    font-size: ${(props) =>
    typeof props.fontSize === 'object' && props.fontSize.md
      ? props.fontSize.md
      : typeof props.fontSize === 'string'
        ? props.fontSize
        : props.fontSize.base};

    line-height: ${(props) =>
    typeof props.lineHeight === 'object' && props.lineHeight.md
      ? props.lineHeight.md
      : typeof props.lineHeight === 'string'
        ? props.lineHeight
        : props.lineHeight.base};
  }

  @media (max-width: 768px) {
    font-size: ${(props) =>
    typeof props.fontSize === 'object' && props.fontSize.sm
      ? props.fontSize.sm
      : typeof props.fontSize === 'string'
        ? props.fontSize
        : props.fontSize.base};

    line-height: ${(props) =>
    typeof props.lineHeight === 'object' && props.lineHeight.sm
      ? props.lineHeight.sm
      : typeof props.lineHeight === 'string'
        ? props.lineHeight
        : props.lineHeight.base};
  }
`;

export const Dpara = styled.p<{
  fontSize: string;
  lineHeight: string;
  fontWeight: string;
  color?: string;
  textAlign?: string;
  mdFontSize?: string;
  mdLineHeight?: string;
  smFontSize?: string;
  smLineHeight?: string;
}>`
  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  font-weight: ${(props) => props.fontWeight};
  font-style: normal;
  color: ${(props) => props.color || "#000"};
  text-align: ${(props) => props.textAlign || "left"};

  @media (max-width: 1024px) {
    font-size: ${(props) => props.mdFontSize || props.fontSize};
    line-height: ${(props) => props.mdLineHeight || props.lineHeight};
  }

  @media (max-width: 768px) {
    font-size: ${(props) =>
    props.smFontSize || props.mdFontSize || props.fontSize};
    line-height: ${(props) =>
    props.smLineHeight || props.mdLineHeight || props.lineHeight};
  }
`;
