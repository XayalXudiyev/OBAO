import React from "react"
import Logo from "./Logo"
import ReservationButton from "./menu/ReservationButton"
import LocaleSwitcher from "../localeSwitcher/LocaleSwitcher"
import MenuButton from "./menu/MenuButton"

const Header = () => {
  return (
    <header className="bg-[#1C1C1C]  sticky top-0 z-50  shadow-xl select-none py-4 ">
      <div className="flex items-center justify-between  px-5 sm:px-10 md:px-16 mx-auto ">
        <Logo />
        <div className="flex items-center  md:gap-4 lg:gap-6 text-white  ">
          <LocaleSwitcher />
          <ReservationButton />
          <MenuButton />
        </div>
      </div>
    </header>
  )
}

export default Header
