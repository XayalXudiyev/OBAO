import Image from "next/image"
import React from "react"

const openingHours = [
  { day: "Monday", hours: "12:00PM-15:00PM, 18:00PM-22:00PM" },
  { day: "Tuesday", hours: "12:00PM-15:00PM, 18:00PM-22:00PM" },
  { day: "Wednesday", hours: "Closed" },
  { day: "Thursday", hours: "12:00PM-15:00PM, 18:00PM-22:00PM" },
  { day: "Friday", hours: "12:00PM-15:00PM, 18:00PM-22:30PM" },
  { day: "Saturday", hours: "14:00PM-22:30PM" },
  { day: "Sunday", hours: "14:00PM-22:00PM" },
]

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
        <h1 className="text-3xl  mb-5">Brussels</h1>

        <div className="mb-4">
          <h3 className="text-lg mb-1">ADDRESS</h3>
          <p className="text-sm">Rue Stevin 110, B-1000 Brussels</p>
        </div>

        <div className="mb-4">
          <h3 className="text-lg mb-1">OPENING HOURS</h3>
          {openingHours.map((item, index) => (
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
