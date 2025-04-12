"use client"
import CateringForm from "@/app/[locale]/(routes)/catering/_components/CateringForm"
import { cateringMeal } from "@/constans"
import { useMediaQuery } from "react-responsive"
import { motion } from "framer-motion"

import Image from "next/image"
import React from "react"

const CateringPage = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" })
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })

  return (
    <div className="h-full bg-white relative">
      <Image
        src="/catering/cateringCover.webp"
        alt="Catering"
        className="w-full h-screen object-cover mt-20"
        width={10000}
        height={10000}
      />
      <span className="absolute top-[1.5rem] left-[72px] opacity-80 text-white text-base font-avenirMedium4">
        Catering
      </span>
      <div className="flex flex-col items-center px-5 py-10 space-y-5 text-center md:py-16 md:px-0"> </div>

      <div className="w-full bg-[#D2B48C] py-16  flex lg:pr-[72px] ">
        <motion.div
          initial={isMobile || isTablet ? { y: 200, opacity: 0 } : { x: -300, opacity: 0 }}
          whileInView={isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center space-y-2 bg-white  pr-12 pl-[72px] will-change-[transform,opacity]"
        >
          <div className="flex flex-col justify-center h-full space-y-3  text-center  py-8  md:bg-white md:text-start   ">
            <p className="text-base font-proximanova4 mt-4 lg:mt-0">TRADITION MEETS FLAVOR</p>
            <p className="text-3xl text-center md:text-start">OUR <span className="text-[#FB4444]">ROUTES </span></p>

            <div className="flex flex-col space-y-4 w-full text-justify lg:text-start text-sm font-avenirBook2">
              <p> At OBAO Catering, our journey begins in the heart of Japanese cuisine—a world of precision, balance, and deep respect for ingredients. But we don’t stop there. Our menus blend traditional Japanese techniques with bold, contemporary fusion flavors, creating a culinary experience that’s both rooted in heritage and refreshingly modern.</p>
              <p> From delicate sashimi to inventive street-food-inspired bites, each dish is crafted with care and creativity. Our chefs draw inspiration from global tastes while staying true to the elegance and purity that define Japanese food culture.</p>
              <p>We’re also deeply committed to sustainability. That means working closely with local suppliers who share our values—prioritizing freshness, ethical sourcing, and seasonal produce. Supporting our local food community not only enhances quality but also reduces our environmental footprint. </p>
              <p>Whether you’re planning a private dinner, a company event, or a wedding, OBAO brings refined flavors and a mindful approach to every table we serve.</p>
            </div>

          </div>
        </motion.div>

        <motion.div
          initial={isMobile || isTablet ? { y: 200, opacity: 0 } : { x: 300, opacity: 0 }}
          whileInView={isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/catering/cateringRoutes.webp"
            alt="Catering"
            className="w-[700px] h-full "
            width={10000}
            height={10000}
          />
        </motion.div>
      </div>

      <div className="flex flex-col items-center px-5 py-10 space-y-5 text-center md:py-14 md:px-0"> </div>



      <div className="w-full bg-[#D2B48C] py-16  flex lg:pr-[72px] ">
        <motion.div
          initial={isMobile || isTablet ? { y: 200, opacity: 0 } : { x: -300, opacity: 0 }}
          whileInView={isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/catering/cateringSustainable.webp"
            alt="Catering"
            className="w-[700px] h-full "
            width={10000}
            height={10000}
          />
        </motion.div>

        <motion.div
          initial={isMobile || isTablet ? { y: 200, opacity: 0 } : { x: 300, opacity: 0 }}
          whileInView={isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full flex flex-col justify-center  bg-white  pr-12 pl-[72px] will-change-[transform,opacity]"
        >
          <div className="flex flex-col justify-center h-full space-y-10  text-center  py-8  md:bg-white md:text-start   ">
            <p className="text-base font-proximanova4 mt-4 lg:mt-0"> GREEN THINKING, BETTER DINING</p>
            <p className="text-3xl text-center md:text-start"> SUSTAINABLE <span className="text-[#FB4444]">PRACTICES </span></p>

            <div className="flex flex-col space-y-4  w-full text-justify lg:text-start text-sm font-avenirBook2">
              <p> Sustainability is not just a choice—it’s our responsibility. At OBAO Catering, we actively embrace practices that protect our planet and preserve its resources for future generations. </p>
              <p>We minimize waste through thoughtful planning, portion control, and by using every part of the ingredient wherever possible. We avoid single-use plastics, compost organic scraps, and use eco-friendly packaging for all deliveries and events.</p>
              <p> Our partnerships with local farms and producers ensure that we’re supporting the community and reducing transport emissions. Even our menus are designed with sustainability in mind—highlighting seasonal ingredients that don’t require long-distance sourcing.            </p>
              <p> Most importantly, we believe in sharing knowledge and tools, encouraging our clients, partners, and peers to make choices that are better for the earth. Because in today’s world, sustainability is more than a trend—it’s a collective mission.            </p>

            </div>

          </div>
        </motion.div>
      </div>


      {/* What do we cater */}

      <motion.div
        initial={{ y: 250, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex flex-col justify-center items-center bg-white py-10 will-change-[transform,opacity] px-[72px]"
      >
        <p className="my-4 text-lg text-center font-avenirRoman3">
          CULINARY PERFECTION
        </p>
        <h2 className="text-4xl font-avenirMedium4 text-center mb-5">
          WHAT DO WE <span className="text-[#FB4444]">CATER</span>
        </h2>

        <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {cateringMeal.map((meal, index) => (
            <div key={index} className="text-center  flex flex-col items-center  mt-10">
              <Image
                src={meal.image}
                alt="Catering"
                className="w-full"
                width={10000}
                height={10000}
              />
              <h3 className="text-xl  font-avenirHeavy5 pt-3 pb-1">{meal.title}</h3>
              <p className="px-5  md:px-1 text-base md:text-sm font-avenir1">
                {meal.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>


      <div className="bg-[#1C1C1C] flex flex-col md:flex-row  px-[130px]  gap-10 pt-20">
        <div className="md:w-1/2 ">
          <p className="text-4xl text-center text-white md:text-start font-avenirHeavy5 mb-7">
            GET IN{" "}
            <span className="text-[#FB4444] font-avenirHeavy5">TOUCH! </span>
          </p>
          <div className="text-base font-avenirBook2 text-white space-y-3">
            <p> Are you interested in receiving the quote for your corporate event or special day? </p>
            <p> Submit a short request form and one of our event experts will get in touch to propose the best solution! </p>
            <p>Email: <a href="mailto:yoacfood2@gmail.com" target="_blank" className="text-[#FB4444]">yoacfood2@gmail.com</a></p>
          </div>
        </div>

        <div className="md:w-1/2 mb-16">
          <CateringForm />
        </div>
      </div>
    </div>
  )
}

export default CateringPage
