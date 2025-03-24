import AboutUsComponent from "../_components/home/AboutUs"
import CarouselComponent from "../_components/home/Carousel"
import HeroComponent from "../_components/home/Hero"
import OurMenuComponent from "../_components/home/OurMenu"
import RestaurantsSection from "../_components/home/Restaurants"
import { useTranslations } from "next-intl"
const Home = () => {
  const t = useTranslations("home")
  return (
    <div className="w-full text-white">
      <HeroComponent />
      <AboutUsComponent />
      <CarouselComponent />
      <OurMenuComponent />
      <RestaurantsSection />
    </div>
  )
}

export default Home
