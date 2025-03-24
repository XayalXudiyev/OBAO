import CateringForm from "@/app/[locale]/(routes)/catering/_components/CateringForm"
import CateringMeal from "@/app/[locale]/(routes)/catering/_components/CateringMeal"
import Image from "next/image"
import React from "react"

const CateringPage = () => {
  return (
    <div className="h-full bg-white">
      <Image
        src="/cateringHero.svg"
        alt="Catering"
        className="w-full"
        width={1}
        height={1}
      />
      <div className="flex flex-col items-center px-5 py-10 space-y-5 text-center md:py-16 md:px-0">
        <p className="text-lg">FEATURED</p>
        <p className="text-[33px]">
          THE CHEF'S <span className="text-[#FB4444]">VISION</span>
        </p>
        <p className="w-4/5 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
          tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Duis in tellus pharetra,
          faucibus enim sit amet, ullamcorper est.
        </p>
      </div>

      <div className="w-full bg-[#D2B48C] pb-7 md:py-16 md:x-0">
        <div className=" flex items-center md:flex-row flex-col-reverse  md:w-[88%] md:h-96    ">
          <div className="flex flex-col justify-center h-full px-5 space-y-3 text-center md:container md:bg-white md:text-start ">
            <p className="mt-4 text-lg text-center md:text-start md:mt-0">
              CULINARY PERFECTION
            </p>
            <p className="text-[33px] text-center md:text-start">
              OUR <span className="text-[#FB4444]">ROUTES </span>
            </p>
            <p className="text-base md:text-sm font-avenirBook2 md:w-9/12 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
              tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est.
            </p>
            <p className="text-base md:text-sm font-avenirBook2 md:w-9/12 md:pt-3 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Duis in tellus
              pharetra, faucibus enim sit amet, ullamcorper est. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Image
            src="/cateringRoutes.svg"
            alt="Catering"
            className="w-full md:w-[402px]"
            width={0}
            height={0}
          />
        </div>
      </div>

      <div className="text-center mt-7 md:mt-14 md:container">
        <p className="mt-4 text-lg text-center font-avenirRoman3">
          CULINARY PERFECTION
        </p>
        <p className="text-[33px] mt-1 md:mt-0">
          WHAT DO WE <span className="text-[#FB4444]">CATER</span>
        </p>

        <div className="grid w-full md:grid-cols-3 ">
          <CateringMeal />
          <CateringMeal />
        </div>
      </div>

      <div className="w-full bg-[#D2B48C] md:py-16">
        <div className=" flex flex-col md:flex-row  items-center md:ml-auto md:w-[88%] md:h-96    ">
          <Image
            src="/cateringRoutes.svg"
            alt="Catering"
            width={0}
            height={0}
            className="w-full md:w-[402px]"
          />
          <div className="flex flex-col justify-center w-full h-full px-5 space-y-3 text-center md:container md:bg-white md:text-start ">
            <p className="mt-4 text-lg text-center md:text-start md:mt-0">
              LEARN ABOUT
            </p>
            <p className="text-[33px] text-center md:text-start">
              OUR <span className="text-[#FB4444]">ROUTES </span>
            </p>
            <div className="w-full px-5 text-sm font-avenir1 md:w-10/12 text-start pb-7 md:px-0">
              <p className="py-5 border-b border-black">Catering</p>
              <p className="py-5 border-b border-black">Catering</p>
              <p className="py-5 border-b border-black">Catering</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1C1C1C] flex flex-col md:flex-row  md:container px-10 md:px-36 gap-10 pt-20">
        <div className="md:w-1/2">
          <p className="text-4xl text-center text-white md:text-start font-avenirHeavy5 mb-7">
            GET IN{" "}
            <span className="text-[#FB4444] font-avenirHeavy5">TOUCH! </span>
          </p>
          <p className="text-sm text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            tellus pharetra, faucibus enim sit amet, ullamcorper est. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="md:w-1/2">
          <CateringForm />
        </div>
      </div>
    </div>
  )
}

export default CateringPage
