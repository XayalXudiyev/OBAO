import { Button } from "@/components/ui/button"
import Image from "next/image"
import React from "react"

const OurMenuComponent = () => {
  return (
    <div className="h-[25.7rem] w-full mx-auto relative flex flex-col justify-center items-center">
      <div>
        <Image
          src="/ourmenuleftimg.svg"
          alt="hero"
          width={80}
          height={80}
          className="absolute top-16 left-0"
        />
        <Image
          src="/ourmenurightimg.svg"
          alt="hero"
          width={80}
          height={80}
          className="absolute bottom-5 right-0"
        />
      </div>
      <div className="text-center w-4/5 space-y-10  md:mt-24">
        <h1 className="text-[#FB4444] text-3xl md:text-4xl font-bold font-avenirMedium4 text-center">
          OUR MENU
        </h1>
        <p className="text-white  text-xl md:text-2xl leading-7 font-avenirRoman3">
          Savor the authentic flavors of Japan, from mouthwatering street bites
          to refreshing drinks, crafted with care.
        </p>
        <div className="flex gap-4 justify-center gap-x-8">
          <Button
            size="sm"
            variant="outline"
            className="bg-transparent px-4 border-[px] border-[#D2B48C] text-[#D2B48C] rounded-none hover:bg-[#D2B48C] hover:text-black"
          >
            Menu
          </Button>
          <Button
            size="sm"
            variant="outline"
            className="bg-transparent px-4 border-[px] border-[#D2B48C] text-[#D2B48C] rounded-none hover:bg-[#D2B48C] hover:text-black"
          >
            Drinks
          </Button>
        </div>
      </div>
    </div>
  )
}


export default OurMenuComponent
