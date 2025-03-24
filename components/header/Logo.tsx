"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

const Logo = () => {
  const router = useRouter()
  return (
    <Button
      className="flex items-center gap-1 lg:gap-5  p-0 m-0 bg-transparent hover:bg-transparent border-none cursor-pointer "
      onClick={() => router.push("/")}
      type="button"
    >
      <span className="text-[#FB4444] text-xl  md:text-[24px] lg:text-[32px] font-avenirMedium4">
        O’BAO
      </span>
      <Image
        src="/logo.svg"
        alt="logo"
        width={1}
        height={1}
        className="w-[40px] lg:w-[50px] ml-1 sm:w-12"
      />
    </Button>
  )
}

export default Logo
