import styled from "@emotion/styled";
import { useState } from "react";
import axios from "axios";
import { StyledImage } from "./Containers";
import { PrimaryBtn } from "./Buttons";
import CloseIcon from "../../../public/icons/close.svg";

// Tags
const tags = [
  "Brand strategy",
  "Identity",
  "Website",
  "Product design",
  "Other",
];

export default function ContactForm({
  show = true,
  onClose,
  inline = false,
}: {
  show?: boolean;
  onClose?: () => void;
  inline?: boolean;
}) {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [other, setOther] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const now = new Date();

  const formattedDate = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("Name", name);
    formData.append("Category", selectedTag || "");
    formData.append("Email", other);
    formData.append("Company", company);
    formData.append("Message", message);
    formData.append("Date", formattedDate);
    formData.append("Time", formattedTime);

    try {
      await axios.post(
        "https://script.google.com/macros/s/AKfycbx1hKmgpa-HbyU9HuN-N7JulqsvA9Eb1fnAQuajoU_Sof8MqlwRa4PYOMeuWvSQDyLi/exec",
        formData,
      );
      console.log("Form submitted!");
      setIsSubmitted(true);
      setName("");
      setOther("");
      setCompany("");
      setMessage("");
      setSelectedTag(null);
    } catch (error) {
      console.error("Form submission error:", error);
      // Optional: Add error handling UI
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <>
      {/* <div className="d-flex justify-between align-center">
        <Title>LET’S TALK</Title>
        {!inline && onClose && (
          <div onClick={onClose} className="pointer">
            <StyledImage
              src={CloseIcon}
              alt="figma-icon"
              width={20}
              height={20}
            />
          </div>
        )}
      </div> */}

      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-between"
        style={{
          height: inline ? "100%" : "93%",
          marginTop: inline ? "1rem" : "0",
        }}
      >
        <div>
          <SectionTitle>Your information</SectionTitle>

          <Input
            name="Name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            name="Email"
            type="email"
            placeholder="Your email"
            value={other}
            onChange={(e) => setOther(e.target.value)}
            required
          />
          <Input
            name="Company"
            type="text"
            placeholder="Enter Your Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
          />

          <SectionTitle>What can we do for you?</SectionTitle>
          <Tags>
            {tags.map((tag) => (
              <TagButton
                key={tag}
                selected={selectedTag === tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </TagButton>
            ))}
          </Tags>
          <TextArea
            name="Message"
            placeholder="Spell out the magic you’re ready to create"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="d-flex justify-end" style={{ marginTop: "16px" }}>
          <PrimaryBtn
            padding="12px 16px"
            fontSize="16px"
            margin="0"
            borderRadius="8px"
            btnContent={
              isSubmitting
                ? "Sending..."
                : isSubmitted
                  ? "Submitted Thank you!"
                  : "SUBMIT"
            }
            disabled={isSubmitting}
          />
        </div>
      </form>
    </>
  );

  if (inline) {
    return <InlineContainer>{formContent}</InlineContainer>;
  }

  return (
    <>
      {show && <Overlay show={show} onClick={onClose} />}
      <SlideInContainer show={show}>{formContent}</SlideInContainer>
    </>
  );
}

const InlineContainer = styled.div`
  flex-shrink: 0;
  width: 540px;
  height: 820px;
  border-radius: 18px;
  border: 1px dashed #8f8f8f33;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  background: #ffffff;
  padding: 2rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    width: 420px;
  }
  @media (max-width: 900px) {
    width: 100%;
    max-width: 500px;
    height: auto;
    min-height: 700px;
  }
  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
    height: auto;
  }
`;
const Overlay = styled.div<{ show: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  height: 100dvh;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.6);
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  filter: ${({ show }) => (show ? "blur(1.5px)" : "blur(0px)")};
  transition:
    opacity 0.6s ease,
    visibility 0.6s ease,
    filter 0.6s ease;
  filter: blur(1px);
  pointer: none;
`;

const SlideInContainer = styled.div<{ show: boolean }>`
  position: fixed;
  top: 100%;
  transform: translateY(-110%);
  left: ${({ show }) => (show ? "38px" : "-800px")};

  opacity: ${({ show }) => (show ? 1 : 0)};
  width: 763px;
  background: #ffffff;
  padding: 2rem;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  transition:
    left 0.5s ease,
    opacity 0.5s ease;
  z-index: 1001;
  border-radius: 32px;
  height: 85vh;

  @media (max-width: 768px) {
    left: ${({ show }) => (show ? "0" : "-100%")};
    width: 100%;
    height: 100dvh;
    top: 0;
    transform: none;
    border-radius: 0;
    padding: 1.5rem 1rem;
  }
`;

const Title = styled.h2`
  color: #181010;
  font-size: 54px;
  font-weight: 400;
  line-height: 64px;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const SectionTitle = styled.h4`
  color: #352727;
  font-size: 24px;
  font-weight: 300;
  line-height: 30px;
  margin-bottom: 16px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 16px;

  @media (max-width: 480px) {
    gap: 0.5rem;
  }
`;

const TagButton = styled.button<{ selected?: boolean }>`
  border-radius: 50px;
  border: 1px solid #d3c5c5;
  background: ${({ selected }) => (selected ? "#EE232A" : "transparent")};
  color: ${({ selected }) => (selected ? "#fff" : "#181010")};
  padding: 12px 16px;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ selected }) => (selected ? "#d11e25" : "#F5EAEA")};
    transform: scale(0.98);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px 14px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  margin-bottom: 1rem;
  border-radius: 50px;
  border: 1px solid #d3c5c5;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;

  &::placeholder {
    color: #c2b3b3;
    font-family: var(--font-primary);
    font-weight: 300;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: #ee232a;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border-radius: 24px;
  border: 1px solid #d3c5c5;
  font-size: 18px;
  font-weight: 300;
  line-height: 24px;
  height: 180px;
  margin-top: 32px;
  resize: none;

  &::placeholder {
    color: #c2b3b3;
    font-family: var(--font-primary);
    font-weight: 300;
    opacity: 1;
  }

  &:focus {
    outline: none;
    border-color: #ee232a;
  }
`;

const GridForTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0px;
  }
`;
