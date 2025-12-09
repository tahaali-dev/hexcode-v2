import styled from "@emotion/styled";
import { PrimaryBtn } from "./Buttons";
import { StyledImage } from "./Containers";
import { ProjectTypeTag } from "./common/Tags";

export const ServiceCard = ({
  title,
  bgcolor,
  para1,
  tags,
  image,
  mobileImage,
  icon,
  type,
  tagBg,
  tagBorder,
}: {
  title?: string;
  bgcolor?: string;
  para1?: string;
  tags?: any;
  image: any;
  mobileImage: any;
  icon: string;
  type?: string;
  tagBg?: string;
  tagBorder?: string;
}) => {


  return (
    <ScrollCardWrapper bgcolor={bgcolor}>
      <LeftBox type={type}>
        <div className="d-flex flex-column g-md">
          <StyledImage
            src={icon}
            width={64}
            height={64}
            alt="icon"
            className="m-none"
          />

          <div>
            <h4 className="card-heading">{title}</h4>
            <p className="text-left mt-lg">
              {para1?.split("\n").map((line, index) => (
                <span key={index}>{line}</span>
              ))}
            </p>

            {type === "default" && (
              <TagsWrapper className="flex-wrap" >
                {tags.map((tag: string) => (
                  <ProjectTypeTag key={tag} title={tag} isHover={false} borderColor={tagBorder || "#fff"} tagBg={tagBg} />
                ))}
              </TagsWrapper>
            )}

            {type === "consulting" && (
              <div className="mt-xl w-full m-none">
                <PrimaryBtn
                  padding="16px"
                  fontSize="18px"
                  margin="0"
                  borderRadius="8px"
                  btnContent="Book a call"
                  onClick={() =>
                    window.open(
                      "https://calendly.com/shabbir-hexcode/30min",
                      "_blank"
                    )
                  }
                />
              </div>
            )}
          </div>
        </div>
      </LeftBox>

      <RightBox>
        <StyledImage
          src={image}
          alt="illustration"
          className="illustration m-none"
          width={450}
          height={400}
        />

        <StyledImage
          src={mobileImage}
          alt="mobile illustration"
          className="mobile-illustration d-none"
          width={300}
          height={240}
        />

        {type === "consulting" && (
          <div className="mt-xl w-full d-none">
            <PrimaryBtn
              padding="16px"
              fontSize="18px"
              margin="0"
              borderRadius="8px"
              btnContent="Book a call"
              onClick={() =>
                window.open(
                  "https://calendly.com/shabbir-hexcode/30min",
                  "_blank"
                )
              }
            />
          </div>
        )}
      </RightBox>
    </ScrollCardWrapper>
  );
};

// ---------------------- Styles ----------------------

const ScrollCardWrapper = styled.div<{ bgcolor?: string }>`
  display: flex;
  justify-content: space-between;
  background-color: ${({ bgcolor }) => bgcolor || "#fff"};
  border-radius: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftBox = styled.div<{ type?: string }>`
  padding: 48px;

  .card-heading {
    color: ${({ type }) => (type === "consulting" ? "#fff" : "var(--clr-dark)")};
    font-size: 38px;
    font-weight: 300;
    line-height: 48px;
    text-transform: capitalize;
  }

  .text-left {
    font-size: 18px;
    font-weight: 300;
    line-height: 24px;
    color: ${({ type }) => (type === "consulting" ? "#fff" : "var(--clr-dark)")};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 16px;
    gap: 16px;
    border-radius: 16px;

    .card-heading {
      font-size: 32px;
      line-height: 42px;
    }

    .text-left {
      font-size: 16px;
      line-height: 24px;
    }

    .w-full {
      width: 100%;
    }


  }
`;

const RightBox = styled.div`
display: flex;
justify-content: center;
align-items: center;

.mobile-illustration{
border-radius: 16px;
}

  @media (max-width: 768px) {
    padding: 16px;
    flex-direction: column;

    .w-full {
      width: 100%;
    }

    .mobile-illustration{
    width:100%;
    height:100%;
    }
  }
`;


export const TagsWrapper = styled.div`
display:flex;
justify-content: start;
gap:8px;
margin-top:24px;
`