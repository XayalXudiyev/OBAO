"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"

const HeroComponent = () => {
  const t = useTranslations("home")

  return (
    <div className="relative mx-auto ">
      <Image
        src="/covers/homeCover.webp"
        alt="hero"
        width={10000}
        height={10000}
        className="w-full lg:h-screen object-cover select-none"
      />

      <span className="absolute top-4 lg:pl-[72px] pl-5 opacity-80 text-white text-sm sm:text-base font-avenirBook2">
        {t("Home")}
      </span>

      <motion.div
      
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-16 lg:top-20 lg:pl-[72px] pl-4 px-5 lg:px-0 flex flex-col gap-4 text-center lg:text-left w-full"
      >
        <span className="text-white lg:text-3xl text-4xl   font-avenirMedium4 leading-tight sm:leading-[3rem]">
          {t("AsianFusionFlavors")}
        </span>
        <span className="text-white text-xl lg:text-base mx-auto lg:mx-0 w-[340px] lg:w-[380px] font-avenirBook2 leading-6 sm:leading-8">
          {t("AsianFusionFlavorsText")}
        </span>
      </motion.div>
 
      <Image
        src="/miniPhotos/heroRight.svg"
        alt="hero right"
        width={47}
        height={47}
        className="absolute lg:block hidden top-20 sm:top-[5rem] -right-0"
      />

      <Image
        src="/miniPhotos/heroLeft.svg"
        alt="hero left"
        width={51}
        height={51}
        className="absolute bottom-12 lg:block hidden -left-0"
      />
    </div>
  )
}

export default HeroComponent
