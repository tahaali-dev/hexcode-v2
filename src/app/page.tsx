import EmptyContainer from "./Components/Containers"
import AboutUs from "./Components/home/AboutUs"
import Benefits from "./Components/home/Benefits"
import CompanyMarq from "./Components/home/CompanyMarq"
import Faqs from "./Components/home/Faqs"
import MobileComp from "./Components/home/MobileComp"
import OurCapabilities from "./Components/home/OurCapabilities"
import PrimeFold from "./Components/home/PrimeFold"
import Projects from "./Components/home/Projects"
import TestimonialSlider from "./Components/home/TestimonialSlider"
import VideoPlayer from "./Components/home/VideoPlayer"

const page = () => {


  return (
    <>
      <PrimeFold />
      <CompanyMarq />
      <MobileComp />
      <VideoPlayer />
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