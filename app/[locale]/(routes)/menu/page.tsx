"use client"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { categories, menu } from "@/constans"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import DiscoverFlavors from "./_components/DiscoverFlavors"

const FoodMenuPage = () => {
  const t = useTranslations("foodMenu")
  const [clicked, setClicked] = useState<number>(1)
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" })
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })

  const categoryToMenuMap: { [key: string]: string } = {
    Entrees: "POTAGE",
    Sushi: "MAKI 6 PCS",
    Sashimi: "SASHIMI",
    "Salades Japonaises": "SALADES JAPONAISE",
    Donburi: "DONBURI BOL A BASE DE RIZ",
  }

  const handleClick = (id: number) => {
    setClicked(id)
    const category = categories.find((cat) => cat.id === id)
    if (category) {
      const menuTitle = categoryToMenuMap[category.title]
      const section = document.getElementById(
        menuTitle.replace(/\s+/g, "-").toLowerCase(),
      )
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
      }
    }
  }

  const chunkArray = (array: any[], size: number) => {
    const result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }

  return (
    <div className="relative flex bg-[#1C1C1C]">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto] bg-repeat-y opacity-10 z-10" />
      <span className="absolute lg:top-[6.5rem] top-24 lg:left-[72px] left-[23px] opacity-80 text-white lg:text-base text-sm font-avenirMedium4">
        {t("Menu")}
      </span>
      <div className="z-20 text-white flex flex-col justify-center items-center w-full relative">
        <DiscoverFlavors />
        <div className="border-[1px] border-y-[#634927] border-x-0 w-full flex items-center justify-start md:justify-center overflow-auto gap-3 pl-2 md:pl-0 md:gap-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleClick(category.id)}
              className={cn(
                "rounded-none md:text-lg bg-[#FB4444] hover:bg-[#FB4444] my-3  font-avenirHeavy5 max-h-9",
                clicked === category.id ? "bg-[#FB4444]" : "bg-transparent",
              )}
            >
              {category.title}
            </Button>
          ))}
        </div>

        <div className="flex gap-4 justify-center  lg:mt-12 mt-8">
          <Button
            size="sm"
            variant="outline"
            className="bg-transparent px-5 lg:px-4  lg:text-lg text-sm  border-[1px] border-[#D2B48C] text-[#D2B48C] rounded-none hover:bg-[#D2B48C] hover:text-black"
            onClick={() =>
              window.open(
                "https://static1.squarespace.com/static/673227ba8e0761016b822fac/t/67a389f7b7a72a4a09312840/1738770940253/Schuman_A4_menu_print_3mm_bleed.pdf",
                "_blank",
              )
            }
          >
            {t("ViewOurFullMenu")}
          </Button>
        </div>

        <div className="w-full mb-20">
          <h2 className="text-4xl font-bold font-avenirMedium4 text-center mt-10 -mb-5 lg:mt-16 lg:-mb-10 ">
            {t("OurOfferings")}
          </h2>

          {menu.map((item, index) => {
            const itemChunks = chunkArray(item.items, 3)
            const isOdd = (index + 1) % 2 !== 0

            const sectionId = item.title.replace(/\s+/g, "-").toLowerCase()

            return (
              <div
                className="flex w-full justify-center items-center  lg:px-[72px] px-0 select-none"
                key={index}
                id={sectionId}
              >
                {isOdd ? (
                  <div className="flex flex-col-reverse lg:flex-row gap-10 lg:mt-[90px] mt-10">
                  <motion.div
                    className="w-full lg:w-1/2 lg:pr-5 pr-14 lg:pl-0 pl-10"
                    initial={
                      isMobile || isTablet
                        ? { y: 250, opacity: 0 }
                        : { x: -300, opacity: 0 }
                    }
                    whileInView={
                      isMobile || isTablet
                        ? { y: 0, opacity: 1 }
                        : { x: 0, opacity: 1 }
                    }
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Carousel className=" w-[340px] lg:w-[500px] h-full relative" differentArrow={false}>
                      <div className="bg-[#FB4444] top-2.5 md:h-6 w-16 absolute -left-[72px]" />
                      <h2 className="lg:text-[34px] text-2xl  font-avenirBook2 ml-3 lg:mb-4 mb-1">
                        {item.title}
                      </h2>
                      <CarouselContent>
                        {itemChunks.map((chunk, chunkIndex) => (
                          <CarouselItem key={chunkIndex}>
                            <div className="flex flex-col">
                              {chunk.map((foodItem: any, idx: number) => (
                                <div key={idx} className="mb-5">
                                  <div className="flex lg:text-xl text-base justify-between">
                                    <h3 className="flex items-center font-avenirBook2">
                                      <span className="text-[#FB4444] ml-4 mr-2">
                                        •
                                      </span>
                                      {foodItem.name}
                                    </h3>
                                    <p>€ {foodItem.price}</p>
                                  </div>
                                  <p className="text-gray-500 ml-3.5 lg:text-base text-sm font-avenir1">
                                    {foodItem.description || foodItem.content}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div>
                        <CarouselPrevious className="-left-8 lg:-left-16 bg-transparent border-none text-[#BE935A] hover:bg-transparent hover:text-[#BE935A] hover:border-none lg:[&_svg]:w-16 lg:[&_svg]:h-16 [&_svg]:w-10 [&_svg]:h-10" />
                        <CarouselNext className="absolute lg:-right-16 -right-12 bg-transparent border-none text-[#BE935A] hover:bg-transparent hover:text-[#BE935A] hover:border-none lg:[&_svg]:w-16 lg:[&_svg]:h-16 [&_svg]:w-10 [&_svg]:h-10" />
                      </div>
                    </Carousel>
                  </motion.div>
                  <motion.div
                    className="w-full lg:w-1/2 flex"
                    initial={
                      isMobile || isTablet
                        ? { y: 250, opacity: 0 }
                        : { x: 300, opacity: 0 }
                    }
                    whileInView={
                      isMobile || isTablet
                        ? { y: 0, opacity: 1 }
                        : { x: 0, opacity: 1 }
                    }
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={item.image}
                      alt="menu"
                      width={10000}
                      height={10000}
                      className="object-cover"
                    />
                  </motion.div>
                </div>
                ) : (
                  <div className="flex flex-col lg:flex-row gap-10 lg:mt-[90px] mt-10">
                    <motion.div
                      className="lg:w-1/2 flex"
                      initial={
                        isMobile || isTablet
                          ? { y: 250, opacity: 0 }
                          : { x: -300, opacity: 0 }
                      }
                      whileInView={
                        isMobile || isTablet
                          ? { y: 0, opacity: 1 }
                          : { x: 0, opacity: 1 }
                      }
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Image
                        src={item.image}
                        alt="menu"
                        width={10000}
                        height={10000}
                        className="object-cover"
                      />
                    </motion.div>
                    <motion.div
                      className="w-full lg:w-1/2 lg:pr-5 pr-14 lg:pl-0 pl-10"
                      initial={
                        isMobile || isTablet
                          ? { y: 250, opacity: 0 }
                          : { x: 300, opacity: 0 }
                      }
                      whileInView={
                        isMobile || isTablet
                          ? { y: 0, opacity: 1 }
                          : { x: 0, opacity: 1 }
                      }
                      transition={{ duration: 0.8 }}
                      viewport={{ once: true }}
                    >
                      <Carousel className=" w-[340px] lg:w-[500px] h-full relative" differentArrow={false}>
                        <h2 className="text-[34px] font-avenirBook2 ml-3 mb-4">
                          {item.title}
                        </h2>
                        <div className="bg-[#FB4444] top-2.5 md:h-6 w-16 absolute -right-[72px]" />
                        <CarouselContent>
                          {itemChunks.map((chunk, chunkIndex) => (
                            <CarouselItem key={chunkIndex}>
                              <div className="flex flex-col">
                                {chunk.map((foodItem: any, idx: number) => (
                                  <div key={idx} className="mb-5">
                                    <div className="flex lg:text-xl text-base justify-between">
                                      <h3 className="flex items-center font-avenirBook2">
                                        <span className="text-[#FB4444] ml-4 mr-2">
                                          •
                                        </span>
                                        {foodItem.name}
                                      </h3>
                                      <p>€ {foodItem.price}</p>
                                    </div>
                                    <p className="text-gray-500 ml-3.5 text-base font-avenir1">
                                      {foodItem.description || foodItem.content}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <div>
                        <CarouselPrevious className="-left-8 lg:-left-[47px] bg-transparent border-none text-[#BE935A] hover:bg-transparent hover:text-[#BE935A] hover:border-none lg:[&_svg]:w-16 lg:[&_svg]:h-16 [&_svg]:w-10 [&_svg]:h-10" />
                          <CarouselNext className="absolute lg:-right-16 -right-12 bg-transparent border-none text-[#BE935A] hover:bg-transparent hover:text-[#BE935A] hover:border-none lg:[&_svg]:w-16 lg:[&_svg]:h-16 [&_svg]:w-10 [&_svg]:h-10" />
                           </div>
                      </Carousel>
                    </motion.div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FoodMenuPage
