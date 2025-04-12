import Image from "next/image"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <footer className="border-t border-[#634927] font-avenirMedium4 text-white ">
      <div className="flex justify-between items-center px-5 sm:px-10 md:px-16 mx-auto  min-h-[76px]">
        <div className="flex text-sm space-x-7">
          <p>© {new Date().getFullYear()}</p>
          <p>O’BAO</p>
        </div>
        <div className="flex gap-7 text-xl">
          <Link
            href="https://www.facebook.com/obaoschuman"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/icons/fb.svg" alt="facebook" width={9} height={9} />
          </Link>
          <Link
            href="https://www.instagram.com/obaoschuman/"
            target="_blank"
            rel="noreferrer"
          >
            <Image src="/icons/ig.svg" alt="instagram" width={19} height={19} />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
