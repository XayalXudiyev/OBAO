import Image from "next/image"
import React from "react"

const HeroComponent = () => {
  return (
    <div className="relative mx-auto">
      <Image
        src="/covers/homeCover.webp"
        alt="hero"
        width={10000}
        height={10000}
        className="w-full  mx-auto"
      />

      <span className="absolute top-[1rem] left-[72px] opacity-80 text-white text-base font-avenirMedium4">
        Home
      </span>

      <div className="absolute top-[4.1rem] left-[72px] flex flex-col gap-4">
        <span className="text-white text-[44px] font-avenirMedium4">Asian Fusion Flavors</span>
        <span className="text-white text-[26px] w-[380px] font-avenirMedium3 leading-8">Experience the perfect harmony of tradition and innovation in every bite.</span>
      </div>
      <Image
        src="/heroRight.svg"
        alt="hero"
        width={47}
        height={47}
        className="absolute top-[5rem] right-0"
      />
      <Image
        src="/heroLeft.svg"
        alt="hero"
        width={51}
        height={51}
        className="absolute bottom-[3rem] left-0"
      />
    </div>
  )
}

export default HeroComponent
