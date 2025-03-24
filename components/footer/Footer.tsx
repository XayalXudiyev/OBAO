import React from "react"
import { FaFacebookF, FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="border-t border-[#634927] font-avenirMedium4 text-white ">
      <div className="flex justify-between items-center px-5 sm:px-10 md:px-16 mx-auto  min-h-[76px]">
        <div className="flex text-sm space-x-7">
          <p>Privacy policy</p>
          <p>© 2024</p>
          <p>O’BAO</p>
        </div>
        <div className="flex gap-4 text-xl">
          <FaFacebookF />
          <FaInstagram />
        </div>
      </div>
    </footer>
  )
}

export default Footer
