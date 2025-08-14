import Advisors from "@/app/Components/AboutPage/Advisors"
import Banner from "@/app/Components/AboutPage/Banner"
import ContentTwo from "@/app/Components/AboutPage/ContentTwo"
import MeetTeam from "@/app/Components/AboutPage/MeetTeam"
import Stack from "@/app/Components/AboutPage/Stack"
import EmptyContainer from "@/app/Components/Containers"


//ast
const CustomerIcon = "/aboutus/customer.svg"
const ProfIcon = "/aboutus/Professionals.svg"


const page = () => {
 return (
  <>
   <Banner />
   <ContentTwo
    title="Our Story"
    heading="From two friends with a shared vision to a studio trusted by clients worldwide"
    paragraphs={[
     "In 2012, Shabbir and Ali, two childhood friends, set out to explore the unfamiliar world of design. At the time, “design” was mostly associated with interiors but tech was on the rise, and in our conversations with people who had more experience and established careers, we noticed a shift: digital design was going to be the next big thing.",
     "Driven by curiosity and conviction, we pursued a diploma in design and began our careers at different companies. A few years in Bangalore introduced us to a thriving community of creators, founders, and technologists and we saw a growing opportunity to support them with thoughtful, impactful design.",
     "In 2020, just after the first wave of the pandemic, we founded our design studio built on trust, empathy, and craft.",
     "Since then, we've partnered with over 80 early-stage startups, unicorns, industry leaders, and non-profits.",
     "We don’t advertise. Every project we’ve worked on has come through referrals and that’s our proudest achievement.",
     "At Hexcode, we care deeply about delivering quality work that speaks for itself. The journey so far has been incredible, and we’re excited about what lies ahead."
    ]}
    showCounts={true}
    countsData={[
     {
      icon: CustomerIcon,
      value: "80+",
      label: "Satisfied Customers"
     },
     {
      icon: ProfIcon,
      value: "10+",
      label: "Professionals"
     }
    ]}
   />
   <Stack />
   <EmptyContainer height="76px" />
   <ContentTwo
    title="Meet the team"
    heading="Hexcode is a studio for bold builders and 
zero-to-one thinkers."
    paragraphs={[
     "At Hexcode Design, we partner with founders, startups, and teams who are building the future—often from scratch. We bring clarity to chaos, direction to ideas, and design that actually moves the needle.",
     "We don’t just work on projects—we shape them. Our process is fast, sharp, and deeply collaborative. We love being early, scrappy, and essential.",
     "But Hexcode isn’t just about client work. It’s a space where talented designers, thinkers, and creators can grow. We give people the trust and platform to lead, contribute, and evolve.",
     "Some stay for the long haul. Others move on to build their own path. That’s okay. We celebrate both—with open hands and open hearts.",
     "We’re here to make meaningful work with good people. That’s our compass.",
    ]}
    showCounts={false}
   />
   <MeetTeam />
   <EmptyContainer height="76px" />
   <Advisors />
   <EmptyContainer height="76px" />
  </>
 )
}

export default page