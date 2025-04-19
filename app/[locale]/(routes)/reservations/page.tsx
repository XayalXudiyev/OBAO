"use client"

import ReservationForm from "@/app/[locale]/(routes)/reservations/_components/ReservationForm"
import { useTranslations } from "next-intl"
import Image from "next/image"

const ReservationsPage = () => {
  const t = useTranslations("reservations")
  return (
    <div className="relative flex bg-[#1C1C1C] text-white h-screen items-center justify-center">
      <span className="absolute top-[6.5rem] left-5 lg:left-[72px] opacity-80 text-white text-base font-avenirBook2">
        {t("Reservations")}
      </span>
      <div className="absolute top-0 left-0  w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto]  bg-repeat-y opacity-10 z-10" />
      <Image
        src="/miniPhotos/reservationleft.svg"
        alt="hero"
        width={1000}
        height={1000}
        className="absolute w-1/4 lg:w-[110px] -bottom-80 lg:-bottom-14 left-0 hidden lg:block"
      />

      <div className="w-full px-5 lg:px-[72px]  flex flex-col lg:flex-row absolute top-[6.8rem]  lg:static lg:mt-32 gap-8 lg:gap-20">
        <div className=" text-xl  text-justify lg:text-start font-avenirRoman3 ">
          <h1 className="text-[40px] font-avenirMedium4 mt-14">
            {t("BookA")} <span className="text-[#FB4444]">{t("Table")}</span>
          </h1>
          <p className="lg:my-10 my-5 leading-8 text-xl">
            {t("BookATableText1")}
          </p>
          <p className="leading-8 text-xl">{t("BookATableText2")}</p>
        </div>

        <div className="w-full z-20">
          <ReservationForm />
        </div>
      </div>
    </div>
  )
}

export default ReservationsPage
