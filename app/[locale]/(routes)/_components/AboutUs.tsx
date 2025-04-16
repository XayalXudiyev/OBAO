"use client"

import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

const AboutUsComponent = () => {
  const t = useTranslations("home")

  return (
    <div
      id="aboutUs"
      className="bg-[#D2B48C]  py-10 lg:py-20 lg:mt-0 mx-auto relative flex justify-center items-center text-[#1c1c1c]"
    >
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="flex justify-center"
      >
        <div className="px-5 lg:px-0 lg:w-4/5 space-y-3 lg:space-y-10 text-center">
          <div className="text-3xl font-bold md:text-4xl font-avenirMedium4">
            {t("AboutUs")}
          </div>
          <p className="text-xl text-justify lg:text-center leading-7 md:text-2xl font-avenirRoman3">
            {t("AboutUsText")}
          </p>
        </div>
      </motion.div>

      <div>
        <div className="absolute top-6 md:top-10 right-2 sm:w-18 md:w-20 md:right-0 xl:w-24">
          <Image
            src="/miniPhotos/aboutRight.svg"
            alt="about us"
            width={72}
            height={72}
            className="absolute top-6 md:top-10 right-2 sm:w-18 md:w-20 md:right-10 xl:w-24"
          />
        </div>

        <div className="absolute bottom-6 left-2 sm:w-18 md:bottom-12 md:w-20 md:left-0">
          <Image
            src="/miniPhotos/aboutLeft.svg"
            alt="about us"
            width={72}
            height={72}
            className="absolute bottom-6 left-2 sm:w-18 md:bottom-12 md:w-20 md:left-10"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUsComponent
