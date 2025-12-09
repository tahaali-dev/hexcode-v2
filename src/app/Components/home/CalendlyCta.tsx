"use client"

import { PrimaryBtn } from "../Buttons"

const calendlyUrl = "https://calendly.com/shabbir-hexcode/30min"

const CalendlyCta = () => {
  const handleClick = () => {
    window.open(calendlyUrl, "_blank", "noopener,noreferrer")
  }

  return (
    <PrimaryBtn
      className="prime-btn"
      padding="16px"
      fontSize="18px"
      margin="0"
      borderRadius="8px"
      btnContent="Let’s talk"
      onClick={handleClick}
    />
  )
}

export default CalendlyCta

