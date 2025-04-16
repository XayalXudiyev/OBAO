import { Separator } from "@/components/ui/separator"
import AboutUsComponent from "../_components/AboutUs"
import CarouselComponent from "../_components/Carousel"
import HeroComponent from "../_components/Hero"
import OurMenuComponent from "../_components/OurMenu"
import OurServices from "../_components/OurServices"
import RestaurantsSection from "../_components/Restaurants"
import CateringForm from "../catering/_components/CateringForm"

const Home = () => {
  return (
    <div className="w-full text-white mt-[90px]">
      <HeroComponent />
      <AboutUsComponent />
      <CarouselComponent />
      <OurServices />
      <OurMenuComponent />
      <RestaurantsSection />
      <Separator className="bg-[#FB4444] w-full mb-10" />
      <div
        className="w-full 2xl:w-8/12 mx-auto lg:px-52 mb-5 lg:my-16"
        id="contact-us"
      >
        <CateringForm />
      </div>
    </div>
  )
}

export default Home
