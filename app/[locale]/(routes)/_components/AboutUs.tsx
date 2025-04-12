"use client"

import { motion, useAnimation } from "framer-motion"
import Image from "next/image"
import React, { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const AboutUsComponent = () => {
  const controlsLeft = useAnimation()
  const controlsRight = useAnimation()
  const controlsTop = useAnimation()

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
    rootMargin: "-100px 0px",
  })

  useEffect(() => {
    if (inView) {
      controlsLeft.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.3 },
      })
      controlsRight.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.4 },
      })
      controlsTop.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: 0.2 },
      })
    }
  }, [inView, controlsLeft, controlsRight, controlsTop])

  return (
    <div
      ref={ref}
      id="about-us"
      className="bg-[#D2B48C] h-[25.7rem] mx-auto relative flex justify-center items-center text-[#1c1c1c]"
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={controlsTop}
        className="flex justify-center"
      >
        <div className="head w-4/5 space-y-10 text-center">
          <div className="text-3xl font-bold md:text-4xl font-avenirMedium4">
            ABOUT US
          </div>
          <p className="text-xl leading-7 md:text-2xl font-avenirRoman3">
            Welcome to O'BAO, where Japanese and Chinese-inspired fusion cuisine
            meets modern creativity in the heart of Brussels. Our passionate
            head chef combines traditional techniques with innovative twists,
            crafting dishes that celebrate the vibrant flavors of East Asia.
            Committed to sustainability, we source fresh ingredients from local
            suppliers and embrace zero-waste practices to minimize our
            environmental impact.
          </p>
        </div>
      </motion.div>
      <div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={controlsRight}
          className="right w-full md:w-1/2"
        >
          <Image
            src="/miniPhotos/aboutRight.svg"
            alt="about us"
            width={72}
            height={72}
            className="absolute top-6 md:top-10 right-2 sm:w-18 md:w-20 md:right-10 xl:w-24"
          />
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={controlsLeft}
          className="right w-full md:w-1/2"
        >
          <Image
            src="/miniPhotos/aboutLeft.svg"
            alt="about us"
            width={72}
            height={72}
            className="absolute bottom-6 left-2 sm:w-18 md:bottom-12 md:w-20 md:left-10"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default AboutUsComponent
