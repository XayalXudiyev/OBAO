"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { ChevronRight } from "lucide-react"
import Image from "next/image"

interface CarouselComponentProps {
  images: string[]
}

const carouselImages = [
  {
    id: 1,
    image: "/about-us/1.webp",
    alt: "about-us1",
  },
  {
    id: 2,
    image: "/about-us/2.webp",
    alt: "about-us2",
  },
  {
    id: 3,
    image: "/about-us/3.webp",
    alt: "about-us3",
  },
  {
    id: 4,
    image: "/about-us/4.webp",
    alt: "about-us4",
  },
  {
    id: 5,
    image: "/about-us/5.webp",
    alt: "about-us5",
  },
]

const CarouselComponent = () => {
  return (
    <>
      <div className=" mx-auto flex items-center justify-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent className="w-full  ml-[1px] lg:ml-2">
            {carouselImages.map((image) => (
              <CarouselItem key={image.id} className="basis-auto pl-0 ">
                <Image
                  src={image.image}
                  alt={image.alt}
                  width={432}
                  height={432}
                  className="w-"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute bg-yellow-500 w-0 -bottom-7 right-20">
            <CarouselNext
              className="bg-transparent border-none pr-5 text-[#FB4444] hover:bg-transparent hover:text-[#FB4444] size-10"
              size={"lg"}
            />
            <CarouselPrevious
              className="bg-transparent border-none text-[#FB4444] hover:bg-transparent hover:text-[#FB4444] size-10"
              size={"lg"}
            />
          </div>
        </Carousel>
      </div>
    </>
  )
}

export default CarouselComponent
