"use client"

import { Button } from "@/components/ui/button"
import { categories, menu } from "@/constans"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React, { useState } from "react"
import { useMediaQuery } from "react-responsive"
import DiscoverFlavors from "./_components/DiscoverFlavors"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { useTranslations } from "next-intl"
import Image from "next/image"

const FoodMenuPage = () => {
  const t = useTranslations("foodMenu")
  const [clicked, setClicked] = useState<number>(1)

  const handleClick = (id: number) => {
    setClicked(id)
  }

  const chunkArray = (array: any[], size: number) => {
    const result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" })
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })
  return (
    <div className="relative flex bg-[#1C1C1C]">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto] bg-repeat-y opacity-10 z-10" />
      <span className="absolute top-[6.5rem] left-[72px] opacity-80 text-white text-base font-avenirMedium4">
        {t("Menu")}
      </span>
      <div className="z-20 text-white flex flex-col justify-center items-center w-full relative">
        <DiscoverFlavors />
        <div className="border-[1px] border-y-[#634927] border-x-0 w-full flex items-center justify-start  md:justify-center overflow-auto gap-3 pl-2 md:pl-0 md:gap-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleClick(category.id)}
              className={cn(
                "rounded-none md:text-lg bg-[#FB4444] hover:bg-[#FB4444] my-3 font-avenirHeavy5 max-h-9 ",
                clicked === category.id ? "bg-[#FB4444]" : "bg-transparent",
              )}
            >
              {category.title}
            </Button>
          ))}
        </div>

        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold font-avenirMedium4 text-center mt-5 md:mt-20 md:mb-10">
            {t("OurOfferings")}
          </h2>

          {menu.map((item, index) => {
            const itemChunks = chunkArray(item.items, 4)
            const isOdd = (index + 1) % 2 !== 0
            return (
              <div
                className="flex w-full justify-center items-center mb-10 px-[72px] select-none"
                key={index}
              >
                {!isOdd ? (
                  <div className="flex gap-10 my-8">
                    <motion.div
                      className="w-1/2 flex"
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
                      className="w-6/12 pl-5"
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
                      <Carousel className="w-full h-full  relative">
                        <h2 className="text-[34px] font-avenirBook2 ml-3 mb-4">
                          {item.title}
                        </h2>
                        <div className="bg-[#FB4444] top-2.5 md:h-6 w-16 absolute -right-[72px]" />

                        <CarouselContent>
                          {itemChunks.map((chunk, chunkIndex) => (
                            <CarouselItem key={chunkIndex}>
                              <div className="flex flex-col">
                                {chunk.map((foodItem: any, idx: number) => (
                                  <div key={idx} className="mb-5 ">
                                    <div className="flex text-xl justify-between">
                                      <h3 className="flex items-center font-avenirBook2  ">
                                        <span className="text-[#FB4444]  ml-4 mr-2">
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
                        <div className="">
                          <CarouselPrevious className="bg-transparent border-none text-[#BE935A] hover:bg-transparent hover:text-[#BE935A] hover:border-none [&_svg]:w-16 [&_svg]:h-16 " />
                          <CarouselNext className="absolute -right-16 bg-transparent border-none text-[#BE935A] hover:bg-transparent hover:text-[#BE935A] hover:border-none [&_svg]:w-16 [&_svg]:h-16" />
                        </div>
                      </Carousel>
                    </motion.div>
                  </div>
                ) : (
                  <div className="flex gap-10">
                    <motion.div
                      className="w-6/12 pr-5"
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
                      <Carousel className="w-full h-full  relative">
                        <div className="bg-[#FB4444] top-2.5 md:h-6 w-16 absolute -left-[72px]" />
                        <h2 className="text-[34px] font-avenirBook2 ml-3 mb-4">
                          {item.title}
                        </h2>
                        <CarouselContent>
                          {itemChunks.map((chunk, chunkIndex) => (
                            <CarouselItem key={chunkIndex}>
                              <div className="flex flex-col">
                                {chunk.map((foodItem: any, idx: number) => (
                                  <div key={idx} className="mb-5 ">
                                    <div className="flex text-xl justify-between">
                                      <h3 className="flex items-center font-avenirBook2  ">
                                        <span className="text-[#FB4444]  ml-4 mr-2">
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
                          <CarouselPrevious className="bg-transparent border-none text-[#BE935A] hover:bg-transparent hover:text-[#BE935A] hover:border-none [&_svg]:w-16 [&_svg]:h-16 " />
                          <CarouselNext className="absolute -right-16 bg-transparent border-none text-[#BE935A] hover:bg-transparent hover:text-[#BE935A] hover:border-none [&_svg]:w-16 [&_svg]:h-16" />
                        </div>
                      </Carousel>
                    </motion.div>
                    <motion.div
                      className="w-1/2 flex"
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
