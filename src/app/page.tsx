import EmptyContainer from "./Components/Containers"
import AboutUs from "./Components/home/AboutUs"
import Benefits from "./Components/home/Benefits"
import Faqs from "./Components/home/Faqs"
import OurCapabilities from "./Components/home/OurCapabilities"
import PrimeFold from "./Components/home/PrimeFold"
import Projects from "./Components/home/Projects"
import TestimonialSlider from "./Components/home/TestimonialSlider"
import SingleTestimonial from "./Components/home/SingleTestimonial"

const page = () => {

  return (
    <>
      <PrimeFold />
      <SingleTestimonial testimonialName="Selin Kocalar" marginTop="64px" mobileMarginTop="32px" />
      <Projects />
      <SingleTestimonial testimonialName="Michael Brod" marginTop="0px" mobileMarginTop="0px" />
      <OurCapabilities />
      <EmptyContainer height="76px" />
      <SingleTestimonial testimonialName="Surbhit Varma" marginTop="0px" mobileMarginTop="0px" />
      <EmptyContainer height="76px" />
      <AboutUs />
      <EmptyContainer height="76px" />
      <SingleTestimonial testimonialName="Waqas Khokhar" marginTop="0px" mobileMarginTop="0px" />
      <Benefits />
      <EmptyContainer height="76px" />
      <TestimonialSlider />
      <Faqs />
      <SingleTestimonial testimonialName="Kshitij Chaudhary" marginTop="0px" mobileMarginTop="0px" />
    </>
  )
}

export default page