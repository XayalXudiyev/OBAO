"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AnimatePresence, motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import React, { useState } from "react"

const OurServices = () => {
  const t = useTranslations("home")
  const services = [
    {
      id: 1,
      title: t("Restaurants"),
      image: "/services/Restaurants.jpg",
      icon: "/services/icons/restaurantIcon.svg",
      description: t("RestaurantsText"),
    },
    {
      id: 2,
      title: t("Catering"),
      image: "/services/Catering.jpg",
      icon: "/services/icons/cateringIcon.svg",
      description: t("CateringText"),
    },
    {
      id: 3,
      title: t("PrivateDiningExperience"),
      image: "/services/Private & Group Dining.jpeg",
      icon: "/services/icons/privateIcon.svg",
      description: t("PrivateDiningExperienceText"),
    },
    {
      id: 4,
      title: t("Workshops"),
      image: "/services/Workshops.JPG",
      icon: "/services/icons/workshopsIcon.svg",
      description: t("WorkshopsText"),
    },
  ]
  const [selectedImage, setSelectedImage] = useState(services[0].image)

  return (
    <div className="pb-10 pt-24 select-none">
      <h1 className="text-[#FB4444] text-3xl md:text-4xl font-bold font-avenirMedium4 text-center mb-8">
        {t("OurServices")}
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-6 px-[72px]">
        <div className="w-full md:w-1/2 h-[500px] relative">
          <AnimatePresence>
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image
                src={selectedImage}
                alt="Service"
                width={500}
                height={500}
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Accordion */}
        <div className="w-full md:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {services.map((service) => (
              <AccordionItem
                key={service.id.toString()}
                value={service.id.toString()}
                className="border-b border-gray-300"
              >
                <AccordionTrigger
                  className="flex items-center justify-start gap-5 py-7 text-white hover:no-underline"
                  onClick={() => setSelectedImage(service.image)}
                >
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    width={35}
                    height={35}
                  />
                  <span className="text-2xl font-medium pl-1">
                    {service.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-300">
                  <p>{service.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default OurServices
