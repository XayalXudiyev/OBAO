"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"

const HeroComponent = () => {
  const t = useTranslations("home")

  return (
    <div className="relative mx-auto">
      <Image
        src="/covers/homeCover.webp"
        alt="hero"
        width={10000}
        height={10000}
        className="w-full h-[28rem] lg:h-screen object-cover "
      />

      <span className="absolute top-4 left-6 sm:left-12 opacity-80 text-white text-sm sm:text-base font-avenirMedium4">
        {t("Home")}
      </span>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-20 left-6 sm:top-[4.1rem] sm:left-[72px] flex flex-col gap-4"
      >
        <span className="text-white text-2xl sm:text-[44px] font-avenirMedium4 leading-tight sm:leading-[3rem]">
          {t("AsianFusionFlavors")}
        </span>
        <span className="text-white text-base sm:text-[26px] max-w-xs sm:w-[380px] font-avenirBook2 leading-6 sm:leading-8">
          {t("AsianFusionFlavorsText")}
        </span>
      </motion.div>

      <Image
        src="/miniPhotos/heroRight.svg"
        alt="hero right"
        width={47}
        height={47}
        className="absolute top-20 sm:top-[5rem] -right-0"
      />

      <Image
        src="/miniPhotos/heroLeft.svg"
        alt="hero left"
        width={51}
        height={51}
        className="absolute bottom-12 -left-0"
      />
    </div>
  )
}

export default HeroComponent
