import EmptyContainer from "./Components/Containers"
import AboutUs from "./Components/home/AboutUs"
import Benefits from "./Components/home/Benefits"
import Faqs from "./Components/home/Faqs"
import OurCapabilities from "./Components/home/OurCapabilities"
import PrimeFold from "./Components/home/PrimeFold"
import Projects from "./Components/home/Projects"
import TestimonialSlider from "./Components/home/TestimonialSlider"

const page = () => {

  return (
    <>
      <PrimeFold />
      <EmptyContainer height="76px" />
      <EmptyContainer height="76px" />
      <EmptyContainer height="76px" />
      <EmptyContainer height="76px" />
      <EmptyContainer height="76px" />
      <Projects />
      <OurCapabilities />
      <EmptyContainer height="76px" />
      <TestimonialSlider />
      <EmptyContainer height="76px" />
      <AboutUs />
      <EmptyContainer height="76px" />
      <Benefits />
      <EmptyContainer height="76px" />
      <Faqs />
      <EmptyContainer height="76px" />
    </>
  )
}

export default page