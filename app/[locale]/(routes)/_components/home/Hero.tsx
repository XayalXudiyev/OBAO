import Image from "next/image"
import React from "react"

const HeroComponent = () => {
  return (
    <div className="relative mx-auto">
      <Image
        src="/hero.svg"
        alt="hero"
        width={1}
        height={1}
        className="w-full  mx-auto"
      />
      <Image
        src="/heroRight.svg"
        alt="hero"
        width={47}
        height={47}
        className="absolute top-[5.5rem] right-0"
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
