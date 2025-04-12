"use client"

import ReservationForm from "@/app/[locale]/(routes)/reservations/_components/ReservationForm"
import Image from "next/image"

const ReservationsPage = () => {
  return (
    <div className="relative flex bg-[#1C1C1C] text-white h-screen items-center justify-center">
      <div className="absolute top-0 left-0  w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto]  bg-repeat-y opacity-10 z-10" />
      <Image
        src="/miniPhotos/reservationleft.svg"
        alt="hero"
        width={1000}
        height={1000}
        className="absolute w-[110px] -bottom-14 left-0"
      />
      <span className="absolute top-[6.5rem] left-[72px] opacity-80 text-white text-base font-avenirMedium4">
        Reservations
      </span>
      <div className="w-full px-[72px]  flex mt-32">
        <div className=" text-xl  text-start font-avenirRoman3 ">
          <h1 className="text-[44px] font-avenirMedium4">
            BOOK A <span className="text-[#FB4444]">TABLE</span>
          </h1>
          <p className="my-10 leading-8 text-[26px]">
            Enjoy an unforgettable dining experience at O'BAO, where flavors{" "}
            <br /> come alive in every bite. Whether you're planning a cozy
            dinner for <br /> two, a family gathering, or a special celebration,
            we’re here to make it <br /> memorable.{" "}
          </p>
          <p className="leading-8 text-[26px]">
            Reserve your table in just a few clicks and secure your spot for an{" "}
            <br /> exceptional culinary journey.
          </p>
        </div>

        <div className=" w-fit ml-auto">
          <ReservationForm />
        </div>
      </div>
    </div>
  )
}

export default ReservationsPage
