"use client"
import Image from "next/image"
import { schuman, sintPieters } from "@/constans"
import { useMediaQuery } from "react-responsive"
import { motion } from "framer-motion"
const RestaurantsSection = () => {

  const isMobile = useMediaQuery({ query: "(max-width: 640px)" })
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })

  return (
    <div
      id="restaurants"
      className="  w-full mx-auto relative flex flex-col justify-center items-center px-[72px]"
    >
      <h1 className="text-[#FB4444] text-4xl font-bold font-avenirMedium4 text-center">
        RESTAURANTS
      </h1>



      {/* Sint-Schuman */}

      <div className="flex w-full  my-12">
        <motion.div
          initial={isMobile || isTablet ? { y: 250, opacity: 0 } : { x: -300, opacity: 0 }}
          whileInView={isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-3/5  h-auto"
        >
          <Image
            src="/restaurants/schuman.webp"
            alt="restaurant"
            width={719}
            height={465}
            className=" pr-[4rem] h-auto"
          />
        </motion.div>

        <motion.div className=" h-full text-center text-white w-2/5 "
          initial={isMobile || isTablet ? { y: 250, opacity: 0 } : { x: 300, opacity: 0 }}
          whileInView={isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl  mb-5">O’BAO Schuman</h1>

          <div className="mb-4">
            <h3 className="text-lg mb-1">ADDRESS</h3>
            <p className="text-sm">Rue Stevin 110, B-1000 Brussels</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg mb-1">OPENING HOURS</h3>
            {schuman.map((item, index) => (
              <p key={index} className="text-sm mb-1">
                {item.day} - {item.hours}
              </p>
            ))}
          </div>

          <div className="">
            <h3 className="text-lg mb-1">CONTACT</h3>
            <p className="text-sm mb-1">events@obao-catering.be</p>
            <p className="text-sm">Contact number: 0470 46 75 57</p>
          </div>
        </motion.div>
      </div>




      {/* Sint-Pieters-Leeuw */}

      <div className="flex w-full  mt-12 mb-20">


        <motion.div className=" h-full text-center text-white w-2/5 "
          initial={isMobile || isTablet ? { y: 250, opacity: 0 } : { x: -300, opacity: 0 }}
          whileInView={isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl  mb-5">O’BAO Sint-Pieters-Leeuw</h1>

          <div className="mb-4">
            <h3 className="text-lg mb-1">ADDRESS</h3>
            <p className="text-sm">Bergensesteenweg 106b, 1600 Sint-Pieters-Leeuw</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg mb-1">OPENING HOURS</h3>
            {sintPieters.map((item, index) => (
              <p key={index} className="text-sm mb-1">
                {item.day} - {item.hours}
              </p>
            ))}
          </div>

          <div className="">
            <h3 className="text-lg mb-1">CONTACT</h3>
            <p className="text-sm mb-1">events@obao-catering.be</p>
            <p className="text-sm">Contact number: 0494 53 90 41</p>
          </div>
        </motion.div>
        <motion.div className="w-full md:w-2/3 h-auto"
          initial={isMobile || isTablet ? { y: 250, opacity: 0 } : { x: 300, opacity: 0 }}
          whileInView={isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/restaurants/sint-pieters.webp"
            alt="restaurant"
            width={500}
            height={500}
            className="w-full h-auto pl-20"
          />
        </motion.div>
      </div>
    </div >
  )
}

export default RestaurantsSection
