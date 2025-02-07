"use client"

import Image from "next/image"
import React, { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const openingHours = [
    { day: "Monday", hours: "12:00PM-15:00PM, 18:00PM-22:00PM" },
    { day: "Tuesday", hours: "12:00PM-15:00PM, 18:00PM-22:00PM" },
    { day: "Wednesday", hours: "Closed" },
    { day: "Thursday", hours: "12:00PM-15:00PM, 18:00PM-22:00PM" },
    { day: "Friday", hours: "12:00PM-15:00PM, 18:00PM-22:30PM" },
    { day: "Saturday", hours: "14:00PM-22:30PM" },
    { day: "Sunday", hours: "14:00PM-22:00PM" },
]

const RestaurantTopComponent = ({ isLeft }: { isLeft: boolean }) => {
    const controlsLeft = useAnimation()
    const controlsRight = useAnimation()
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.6,
        rootMargin: "-100px 0px",
    })

    useEffect(() => {
        if (inView) {
            controlsLeft.start({ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] } })
            controlsRight.start({ x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3, ease: [0.33, 1, 0.68, 1] } })
        }
    }, [inView, controlsLeft, controlsRight])

    return (
        <div
            ref={ref}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-20 pt-4 pb-14 md:py-14 
                ${isLeft ? "" : "md:flex-row-reverse"}`}
        >
            <motion.div
                initial={{ x: isLeft ? -500 : 500, opacity: 0 }}
                animate={controlsLeft}
                className="w-full md:w-2/3 h-auto"
            >
                <Image
                    src="/restaurant.svg"
                    alt="restaurant"
                    width={500}
                    height={500}
                    className="w-full h-auto"
                />
            </motion.div>

            <motion.div
                initial={{ x: isLeft ? 500 : -500, opacity: 0 }}
                animate={controlsRight}
                className="w-full md:w-1/2"
            >
                <div className="basis-full md:basis-[36%] h-full text-center text-white">
                    <h1 className="text-3xl mb-5">Brussels</h1>

                    <div className="mb-4">
                        <h3 className="text-lg mb-1">ADDRESS</h3>
                        <p className="text-sm">Rue Stevin 110, B-1000 Brussels</p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-lg mb-1">OPENING HOURS</h3>
                        {openingHours.map((item, index) => (
                            <p key={index} className="text-sm mb-1">
                                {item.day} - {item.hours}
                            </p>
                        ))}
                    </div>

                    <div>
                        <h3 className="text-lg mb-1">CONTACT</h3>
                        <p className="text-sm mb-1">events@obao-catering.be</p>
                        <p className="text-sm">www.obao-catering.be</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default RestaurantTopComponent
