"use client"
import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React from "react"

const OurMenuComponent = () => {
  const t = useTranslations("home")
  return (
    <div className=" pt-10 lg:pb-0 w-full mx-auto relative lg:pt-20 flex flex-col justify-center items-center">
      <div className="lg:block hidden">
        <Image
          src="/miniPhotos/ourmenuleftimg.svg"
          alt="hero"
          width={80}
          height={80}
          className="absolute lg:top-16 left-0"
        />
        <Image
          src="/miniPhotos/ourmenurightimg.svg"
          alt="hero"
          width={80}
          height={80}
          className="absolute bottom-5 right-0"
        />
      </div>
      <div className="text-center w-4/5   ">
        <h1 className="text-[#FB4444] text-3xl md:text-4xl font-bold font-avenirMedium4 text-center ">
          {t("OurMenu")}
        </h1>
        <p className="text-white text-xl md:text-2xl my-8 leading-7 font-avenirRoman3">
          {t("OurMenuText")}
        </p>
        <div className="flex gap-4 justify-center gap-x-8">
          <Button
            size="sm"
            variant="outline"
            className="bg-transparent px-7 lg:px-4  text-lg md:text-sm border-[1px] border-[#D2B48C] text-[#D2B48C] rounded-none hover:bg-[#D2B48C] hover:text-black"
            onClick={() =>
              window.open(
                "https://static1.squarespace.com/static/673227ba8e0761016b822fac/t/67a389f7b7a72a4a09312840/1738770940253/Schuman_A4_menu_print_3mm_bleed.pdf",
                "_blank",
              )
            }
          >
            {t("ViewOurMenu")}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OurMenuComponent
