"use client"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import type { OfferMeal } from "@/constans/types"
import axios from "axios"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { useEffect, useState } from "react"


const OfferMealComponent = ({
  isImageLeft,
  selectedCategory,
}: { isImageLeft: boolean; selectedCategory: string }) => {
  const [menu, setMenu] = useState<OfferMeal[]>([])

  const getMeals = async () => {
    try {
      const response = await axios.get("/api/sheets")
      const result = response.data

      if (result?.data) {
        const processedMenu = result.data.slice(1).map((item: any) => ({
          id: item[0],
          category: Number(item[1]), // Kateqoriyaya görə nömrə olaraq saxlayırıq
          name: item[2],
          description: item[3],
          price: item[4],
        }))

        setMenu(processedMenu)
      } else {
        console.error("No data found in response")
      }
    } catch (error) {
      console.error("Error fetching data:", error)
    }
  }
  console.log("data", menu)

  useEffect(() => {
    getMeals()
  }, [])

  const filteredMenu = menu.filter((meal) => meal.category === selectedCategory)

  return (
    <div className="flex md:px-16 flex-col items-center gap-6 md:gap-20 pt-4 md:pb-14 md:flex-row md:items-start">
      <div
        className={`w-full md:w-1/2 ${
          !isImageLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <Image
          width={100}
          height={100}
          src="/slider/slider4.jpg"
          alt="img"
          className="w-full md:px-4"
        />
      </div>

      <div
        className={`w-full px-5 md:px-0 md:w-1/2 text-3xl ${
          isImageLeft ? "md:order-2" : "md:order-1"
        }`}
      >
        <div className="mb-5 flex items-center">
          {isImageLeft && (
            <div className="bg-[#FB4444] h- md:h-6 w-14 absolute right-0" />
          )}

          <span className="text-2xl md:text-3xl">
            DONBURI BOL a BASE DE RIZ
          </span>
          {!isImageLeft && (
            <div className="bg-[#FB4444] h-0 md:h-6 w-14 absolute left-0" />
          )}
        </div>

        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="font-avenirBook2"
        >
          <CarouselContent>
            {filteredMenu.length > 0 ? (
              filteredMenu.map((meal: any) => (
                <CarouselItem key={meal.id}>
                  <div className="flex w-full justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg">
                        <span className="text-[#FB4444]">{meal.id}.</span>{" "}
                        {meal.name}
                      </h3>
                      <p className="text-sm text-[#FFFFFFB2]">
                        {meal.description || "Description not available."}
                      </p>
                    </div>
                    <div className="text-lg ml-4">{meal.price} $</div>
                  </div>
                </CarouselItem>
              ))
            ) : (
              <p>LLoading menu...</p>
            )}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block hover:text-[#BE935A] text-[#BE935A] border-none hover:bg-transparent bg-transparent -left-16 top-28 [&_svg]:size-16" />
          <CarouselNext className="hidden md:block hover:text-[#BE935A] text-[#BE935A] border-none hover:bg-transparent bg-transparent -right-16 top-28 [&_svg]:size-16" />
        </Carousel>
      </div>
    </div>
  )
}

export default OfferMealComponent
