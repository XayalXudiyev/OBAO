"use client"
import CateringForm from "@/app/[locale]/(routes)/catering/_components/CateringForm"
import { cateringMeal } from "@/constans"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { useMediaQuery } from "react-responsive"

import Image from "next/image"
import React from "react"

const CateringPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" })
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })
  const t = useTranslations("catering")

  return (
    <div className="h-full bg-white relative">
      <Image
        src="/catering/cateringCover.webp"
        alt="Catering"
        className="w-full h-[28rem] lg:h-screen object-cover select-none"
        width={10000}
        height={10000}
      />
      <span className="absolute top-[1.5rem] left-[72px] opacity-80 text-white text-base font-avenirBook2">
        {t("Catering")}
      </span>
      <div className="flex flex-col items-center lg:px-5 lg:py-10 space-y-5 text-center md:py-16 md:px-0">
        {" "}
      </div>

      <div className="w-full bg-[#D2B48C] py-16  flex flex-col lg:flex-row lg:pr-[72px]  ">
        <motion.div
          initial={
            isMobile || isTablet
              ? { y: 200, opacity: 0 }
              : { x: -300, opacity: 0 }
          }
          whileInView={
            isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }
          }
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center space-y-2 bg-white pr-5 lg:pr-12 pl-5 lg:pl-[72px] will-change-[transform,opacity]"
        >
          <div className="flex flex-col justify-center h-full   text-center  py-8  md:bg-white md:text-start   ">
            <p className="text-base font-proximanova4 mt-4 lg:mt-0">
              {t("TraditionMeetsFlavor")}
            </p>
            <p className="text-3xl text-center md:text-start font-avenirRoman3 mb-6 mt-4">
              {t("Our")} <span className="text-[#FB4444]">{t("Routes")} </span>
            </p>

            <div className="flex flex-col space-y-4 w-full text-justify lg:text-start 2xl:pr-32 text-sm font-avenirBook2">
              <p>{t("OurRoutesText1")}</p>
              <p>{t("OurRoutesText2")}</p>
              <p>{t("OurRoutesText3")}</p>
              <p>{t("OurRoutesText4")}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={
            isMobile || isTablet
              ? { y: 200, opacity: 0 }
              : { x: 300, opacity: 0 }
          }
          whileInView={
            isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }
          }
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/catering/cateringRoutes.webp"
            alt="Catering"
            className="w-full lg:w-[700px] h-full "
            width={10000}
            height={10000}
          />
        </motion.div>
      </div>

      <div className="hidden lg:flex flex-col items-center px-5 py-10 space-y-5 text-center md:py-14 md:px-0">
        {" "}
      </div>

      <div className="w-full bg-[#D2B48C] lg:py-16  flex flex-col-reverse lg:flex-row  lg:pr-[72px] ">
        <motion.div
          initial={
            isMobile || isTablet
              ? { y: 200, opacity: 0 }
              : { x: -300, opacity: 0 }
          }
          whileInView={
            isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }
          }
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/catering/cateringSustainable.webp"
            alt="Catering"
            className="w-full lg:w-[700px] h-full "
            width={10000}
            height={10000}
          />
        </motion.div>

        <motion.div
          initial={
            isMobile || isTablet
              ? { y: 200, opacity: 0 }
              : { x: 300, opacity: 0 }
          }
          whileInView={
            isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }
          }
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center  bg-white   px-5 lg:px-[72px] will-change-[transform,opacity]"
        >
          <div className="flex flex-col justify-center h-full   text-center  py-8  md:bg-white md:text-start   ">
            <p className="text-base font-proximanova4 mt-4 lg:mt-0">
              {t("GreenThinkingBetterDining")}
            </p>
            <p className="text-3xl text-center font-avenirRoman3 md:text-start my-6">
              {t("Sustainable")}{" "}
              <span className="text-[#FB4444]">{t("Practices")} </span>
            </p>

            <div className="flex flex-col space-y-4  w-full text-justify lg:text-start 2xl:pr-32 text-sm font-avenirBook2">
              <p>{t("SustainableText1")}</p>
              <p>{t("SustainableText2")}</p>
              <p>{t("SustainableText3")}</p>
              <p>{t("SustainableText4")}</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* What do we cater */}

      <motion.div
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex flex-col justify-center items-center bg-white py-10 mb-10 will-change-[transform,opacity] lg:px-[72px]"
      >
        <p className="my-4 text-lg text-center font-avenirRoman3">
          {t("CulinaryPerfection")}
        </p>
        <h2 className="text-4xl font-avenirMedium4 text-center mb-5">
          {t("WhatDoWe")} <span className="text-[#FB4444]">{t("Cater")}</span>
        </h2>

        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {cateringMeal.map((meal, index) => (
            <div
              key={index}
              className="text-center  flex flex-col items-center  mt-10"
            >
              <Image
                src={meal.image}
                alt="Catering"
                className="w-full"
                width={10000}
                height={10000}
              />
              <h3 className="text-2xl lg:text-xl   font-avenirHeavy5 pt-3 pb-1">
                {meal.title}
              </h3>
              <p className="px-5  md:px-1 text-xl md:text-sm font-avenir1">
                {meal.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <div className="bg-[#1C1C1C] flex flex-col lg:flex-row  px-5 lg:px-[130px]  gap-10 pt-20">
        <div className="w-full lg:w-1/2 ">
          <p className="text-4xl text-center text-white md:text-start font-avenirHeavy5 mb-7">
            {t("GetIn")}{" "}
            <span className="text-[#FB4444] font-avenirHeavy5">
              {t("Touch")}{" "}
            </span>
          </p>
          <div className="text-base font-avenirBook2 text-justify lg:text-start text-white space-y-3">
            <p>{t("GetInTouchText1")}</p>
            <p>{t("GetInTouchText2")}</p>
            <p>
              {t("Email")}:{" "}
              <a
                href="mailto:yoacfood2@gmail.com"
                target="_blank"
                className="text-[#FB4444]"
                rel="noreferrer"
              >
                yoacfood2@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mb-5 lg:mb-16">
          <CateringForm />
        </div>
      </div>
    </div>
  )
}

export default CateringPage
