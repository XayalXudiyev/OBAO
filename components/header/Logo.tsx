"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from "next/navigation"
import React from "react"

const Logo = () => {
  const router = useRouter()
  return (
    <Button
      className="flex items-center gap-1 lg:gap-3  p-0 m-0 bg-transparent hover:bg-transparent border-none cursor-pointer "
      onClick={() => router.push("/")}
      type="button"
    >
      <span className="text-[#FB4444] text-xl  md:text-[24px] lg:text-[32px] font-avenirMedium4">
        O’BAO
      </span>
      <Image
        src="/logo.webp"
        alt="logo"
        width={10000}
        height={10000}
        className="w-20"
      />
    </Button>
  )
}

export default Logo
