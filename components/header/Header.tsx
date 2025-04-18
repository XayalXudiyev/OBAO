import React from "react"
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher"
import Logo from "./Logo"
import MenuButton from "./menu/MenuButton"
import ReservationButton from "./menu/ReservationButton"

const Header = () => {
  return (
    <header className="bg-[#1C1C1C]  fixed w-full top-0 z-50  shadow-2xl select-none   ">
      <div className="flex items-center justify-between h-[92px]  px-5 sm:px-10 md:px-[72px] mx-auto ">
        <Logo />
        <div className="flex items-center  md:gap-4 lg:gap-6 text-white  ">
          <div className="hidden md:block">
            <LocaleSwitcher />
          </div>
          <ReservationButton />
          <MenuButton />
        </div>
      </div>
    </header>
  )
}

export default Header
