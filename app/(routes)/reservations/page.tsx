"use client"

import ReservationForm from "@/app/(routes)/reservations/_components/ReservationForm"
import Image from "next/image"

const ReservationsPage = () => {
  return (
    <div className="relative flex bg-[#1C1C1C] items-center justify-center min-h-screen text-white">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto]  bg-repeat-y opacity-10 z-10" />
      <Image
        src="/reservationleft.svg"
        alt="hero"
        width={80}
        height={80}
        className="absolute bottom-20 left-0"
      />
      <div className="z-20 flex flex-col px-5 mx-auto mb-10 md:flex-row md:justify-between md:mb-44 sm:px-10 md:px-16 md:mx-0">
        <div className="mt-10 text-xl text-center md:w-8/12 md:mt-20 md:text-start font-avenirRoman3 ">
          <h1 className="text-4xl font-avenirMedium4">
            BOOK A <span className="text-[#FB4444]">TABLE</span>
          </h1>
          <p className="my-10 leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="leading-7">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in
            tellus pharetra, faucibus enim sit amet, ullamcorper est.
          </p>
        </div>

        <ReservationForm />
      </div>
    </div>
  )
}

export default ReservationsPage
