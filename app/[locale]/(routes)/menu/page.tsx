"use client"

// import OfferMealComponent from "@/app/(routes)/menu/_compnents/OfferMealComponent"
import { Button } from "@/components/ui/button"
import { categories } from "@/constans"
import { cn } from "@/lib/utils"
// import Image from "next/image"
import React, { useState } from "react"
import BottomMealComponent from "./_compnents/BottomMealComponent"
import DiscoverFlavors from "./_compnents/DiscoverFlavors"
import MidMealComponent from "./_compnents/MidMealComponent"
import TopMealComponent from "./_compnents/TopMealComponent"

const FoodMenuPage = () => {
  const [clicked, setClicked] = useState<number>(1)

  const handleClick = (id: number) => {
    setClicked(id)
  }

  return (
    <div className="relative flex bg-[#1C1C1C]">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto]  bg-repeat-y opacity-10 z-10" />

      <div className="z-20 text-white  flex flex-col justify-center items-center w-full relative">
        {/* <Image
          width={1}
          height={1}
          src="/menuHero.svg"
          alt="menuHero"
          className="w-full py-10 px-1 md:px-48 md:py-28"
        /> */}
        <DiscoverFlavors />

        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold font-avenirMedium4 text-center mt-5 md:mt-20 md:mb-10">
            OUR OFFERINGS
          </h2>
          {/* {[1, 2].map((_, index) => (
            <OfferMealComponent
              key={index}
              isImageLeft={index % 2 === 1}
              selectedCategory={String(clicked)}
            />
          ))} */}

          <TopMealComponent selectedCategory={String(clicked)} />
          <MidMealComponent selectedCategory={String(clicked)} />
          <BottomMealComponent selectedCategory={String(clicked)} />
        </div>
      </div>
    </div>
  )
}

export default FoodMenuPage
