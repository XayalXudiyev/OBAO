import Image from "next/image"
import React from "react"

const Footer = () => {
  return (
    <footer className="border-t border-[#634927] font-avenirMedium4 text-white ">
      <div className="flex justify-between items-center px-5 sm:px-10 md:px-16 mx-auto  min-h-[76px]">
        <div className="flex text-sm space-x-7">
          <p>Privacy policy</p>
          <p>© 2024</p>
          <p>O’BAO</p>
        </div>
        <div className="flex gap-7 text-xl">
          <Image src="/icons/fb.svg" alt="facebook" width={9} height={9} />
          <Image src="/icons/ig.svg" alt="instagram" width={19} height={19} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
