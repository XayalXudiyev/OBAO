"use client"
import type { RouteProps } from "@/constans/types"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
const MenuButton = () => {
  const t = useTranslations("navigation")
  const [isOpen, setIsOpen] = useState(false)
  const routes: RouteProps[] = [
    { id: 0, href: "/", title: t("Home") },
    { id: 1, href: "/menu", title: t("Menu") },
    { id: 2, href: "/#about-us", title: t("AboutUs") },
    { id: 3, href: "/#restaurants", title: t("Restaurants") },
    { id: 4, href: "/catering", title: t("Catering") },
  ]
  return (
    <div
      className="cursor-pointer flex items-center h-[60px] w-[60px] justify-center select-none"
      onClick={() => setIsOpen(!isOpen)}
    >
      <Image src="/icons/menu.svg" alt="menu" width={60} height={60} />

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-[url('/menuBg.png')] bg-center bg-[length:120%_auto] bg-repeat-y z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen text-white">
              <div className="w-full min-h-screen bg-[#1C1C1C] opacity-90 flex flex-col items-center justify-center">
                <h2 className="text-base text-center tracking-widest mb-20">
                  {t("Navigation")}
                </h2>
                {routes.map((route) => (
                  <Link
                    href={route.href}
                    key={route.title}
                    className="text-white text-3xl uppercase font-avenirMedium min-h-16 tracking-tight hover:text-[#FB4444] transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.title}
                  </Link>
                ))}
              </div>
            </div>

            <div
              className="absolute top-3 md:top-5 right-4 md:right-[72px] bg-black w-[60px] h-[60px] flex items-center justify-center cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <Image src="/icons/x.svg" alt="menu" width={60} height={60} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MenuButton
