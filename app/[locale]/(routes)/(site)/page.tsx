import AboutUsComponent from "../_components/AboutUs"
import CarouselComponent from "../_components/Carousel"
import HeroComponent from "../_components/Hero"
import OurMenuComponent from "../_components/OurMenu"
import OurServices from "../_components/OurServices"
import RestaurantsSection from "../_components/Restaurants"

const Home = () => {
  return (
    <div className="w-full text-white mt-[90px]">
      <HeroComponent />
      <AboutUsComponent />
      <CarouselComponent />
      <OurServices />
      <OurMenuComponent />
      <RestaurantsSection />
    </div>
  )
}

export default Home
