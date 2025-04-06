import { sintPieters } from "@/constans"
import Image from "next/image"
import React from "react"



const RestaurantComponent = ({ isImageLeft }: { isImageLeft: boolean }) => {
  return (
    <div className="flex flex-col items-center gap-6 md:gap-20 pt-4 pb-14 md:py-14 md:flex-row md:items-start">
      <div className={`w-full md:w-2/3 h-auto ${!isImageLeft && "md:order-2"}`}>
        <Image
          src="/restaurant.svg"
          alt="restaurant"
          width={500}
          height={500}
          className="w-full h-auto"
        />
      </div>

      <div className="basis-full md:basis-[36%] h-full text-center text-white">
        <h1 className="text-3xl  mb-5">O’BAO Sint-Pieters-Leeuw</h1>

        <div className="mb-4">
          <h3 className="text-lg mb-1">ADDRESS</h3>
          <p className="text-sm">Bergensesteenweg 106b, 1600 Sint-Pieters-Leeuw</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg mb-1">OPENING HOURS</h3>
          {sintPieters.map((item, index) => (
            <p key={index} className="text-sm mb-1">
              {item.day} - {item.hours}
            </p>
          ))}
        </div>

        <div className="">
          <h3 className="text-lg mb-1">CONTACT</h3>
          <p className="text-sm mb-1">events@obao-catering.be</p>
          <p className="text-sm">www.obao-catering.be</p>
        </div>
      </div>
    </div>
  )
}

export default RestaurantComponent