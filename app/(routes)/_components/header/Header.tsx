import React from "react"
// import Language from "./Language"
import Logo from "./Logo"
// import Menu from "./menu/MenuButton"
import ReservationButton from "./menu/ReservationButton"
import MyMenu from "./menu/MyMenu"
import LocaleSwitcher from "../localSwitcher/LocaleSwitcher"

const Header = () => {
  return (
    <header className="bg-[#1C1C1C]  sticky top-0 z-50  shadow-xl select-none py-4 ">
      <div className="flex items-center justify-between  px-5 sm:px-10 md:px-16 mx-auto ">
        <Logo />
        <div className="flex items-center  md:gap-4 lg:gap-6 text-white  ">
          {/* <Language /> */}
          <LocaleSwitcher/>
          <ReservationButton />
          {/* <Menu /> */}
          <MyMenu/>
        </div>
      </div>
    </header>
  )
}

export default Header
