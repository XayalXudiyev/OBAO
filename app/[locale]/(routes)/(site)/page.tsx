import AboutUsComponent from "../_components/AboutUs"
import CarouselComponent from "../_components/Carousel"
import HeroComponent from "../_components/Hero"
import OurMenuComponent from "../_components/OurMenu"
import OurServices from "../_components/OurServices"
import RestaurantsSection from "../_components/Restaurants"

import { useTranslations } from "next-intl"
const Home = () => {
  const t = useTranslations("home")
  return (
    <div className="w-full text-white">
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
