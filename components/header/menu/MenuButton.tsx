"use client"
import LocaleSwitcher from "@/components/localeSwitcher/LocaleSwitcher"
import type { RouteProps } from "@/constans/types"
import { AnimatePresence, motion } from "framer-motion"
import { useLocale, useTranslations } from "next-intl"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const MotionImage = motion(Image)

const MenuButton = () => {
  const t = useTranslations("navigation")
  const [isOpen, setIsOpen] = useState(false)
  const locale = useLocale()

  const routes: RouteProps[] = [
    { id: 0, href: "/", title: t("Home") },
    { id: 1, href: `/${locale}/menu`, title: t("Menu") },
    { id: 2, href: `/${locale}/#aboutUs`, title: t("AboutUs") },
    { id: 3, href: `/${locale}/#restaurants`, title: t("Restaurants") },
    { id: 4, href: `/${locale}/catering`, title: t("Catering") },
    { id: 5, href: `/${locale}/#contact-us`, title: t("ContactUs") },
  ]

  return (
    <>
      <div
        className="cursor-pointer flex items-center h-[52px] w-[52px] justify-center select-none z-20 relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="x"
              initial={{ opacity: 1, rotate: 0 }}
              animate={{ opacity: 1, rotate: -90 }}
              transition={{ duration: 0.5 }}
            >
              <MotionImage
                src="/icons/x.svg"
                alt="menu"
                width={60}
                height={60}
              />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5 }}
            >
              <MotionImage
                src="/icons/menu.svg"
                alt="menu"
                width={60}
                height={60}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

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
                <h2 className="text-[15px] text-center tracking-[0.11em] ">
                  {t("Navigation")}
                </h2>
                <div className="py-5">
                  <Image
                    src="/miniPhotos/navMenu.svg"
                    alt="menu"
                    width={35}
                    height={35}
                  />
                </div>
                {routes.map((route) => (
                  <Link
                    href={route.href}
                    key={route.title}
                    className="text-white text-[32px] uppercase font-avenirMedium4 min-h-16 tracking-tight hover:text-[#DBC3A3] transition5all duration-350"
                    onClick={() => setIsOpen(false)}
                  >
                    {route.title}
                  </Link>
                ))}
                <div className="block !text-white md:hidden">
                  <LocaleSwitcher />
                </div>
              </div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute bottom-0 right-0"
              >
                <Image
                  src="/menuPanda.png"
                  alt="menu"
                  width={350}
                  height={350}
                  className="lg:block hidden"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default MenuButton
