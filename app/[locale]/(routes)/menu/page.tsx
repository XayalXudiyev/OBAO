"use client"

import { Button } from "@/components/ui/button"
import { categories, menu } from "@/constans"
import { cn } from "@/lib/utils"
import React, { useState } from "react"
import BottomMealComponent from "./_compnents/BottomMealComponent"
import DiscoverFlavors from "./_compnents/DiscoverFlavors"
import MidMealComponent from "./_compnents/MidMealComponent"
import TopMealComponent from "./_compnents/TopMealComponent"
import OfferMealComponent from "./_compnents/OfferMealComponent"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { DotIcon } from "lucide-react"

const FoodMenuPage = () => {
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

  return (
    <div className="relative flex bg-[#1C1C1C]">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto] bg-repeat-y opacity-10 z-10" />

      <div className="z-20 text-white flex flex-col justify-center items-center w-full relative">
        <DiscoverFlavors />

        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold font-avenirMedium4 text-center mt-5 md:mt-20 md:mb-10">
            OUR OFFERINGS
          </h2>

          {menu.map((item, index) => {
            const itemChunks = chunkArray(item.items, 3)
            const isOdd = (index + 1) % 2 !== 0
            return (
              <div
                className="flex w-full justify-center items-center mb-10 px-[72px]"
                key={index}
              >
                {!isOdd ? (
                  <>
                    <div className="w-1/2 flex">
                      <Image
                        src={item.image}
                        alt="menu"
                        width={10000}
                        height={10000}
                        className="object-cover"
                      />
                    </div>
                    <div className="w-1/2">
                      <Carousel className="w-full h-full">
                        <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                        <CarouselContent>
                          {itemChunks.map((chunk, chunkIndex) => (
                            <CarouselItem key={chunkIndex}>
                              <div className="flex flex-col space-y-4">
                                {chunk.map((foodItem: any, idx: number) => (
                                  <div
                                    key={idx}
                                    className="flex flex-col text-sm justify-center"
                                  >
                                    <div className="flex justify-between">
                                      <h3 className="flex items-center">
                                        <DotIcon className="size-8 text-red-500" />
                                        {foodItem.name}
                                      </h3>
                                      <p>{foodItem.price}</p>
                                    </div>
                                    <p className="text-gray-500 ml-8">
                                      {foodItem.description || foodItem.content}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2">
                      <Carousel className="w-full h-full">
                        <h2 className="text-xl font-bold mb-4">{item.title}</h2>
                        <CarouselContent>
                          {itemChunks.map((chunk, chunkIndex) => (
                            <CarouselItem key={chunkIndex}>
                              <div className="flex flex-col space-y-4">
                                {chunk.map((foodItem: any, idx: number) => (
                                  <div
                                    key={idx}
                                    className="flex flex-col text-sm justify-center"
                                  >
                                    <div className="flex justify-between">
                                      <h3 className="flex items-center">
                                        <DotIcon className="size-8 text-red-500" />
                                        {foodItem.name}
                                      </h3>
                                      <p>{foodItem.price}</p>
                                    </div>
                                    <p className="text-gray-500 ml-8">
                                      {foodItem.description || foodItem.content}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                      </Carousel>
                    </div>
                    <div className="w-1/2 flex">
                      <Image
                        src={item.image}
                        alt="menu"
                        width={10000}
                        height={10000}
                        className="object-cover"
                      />
                    </div>
                  </>
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