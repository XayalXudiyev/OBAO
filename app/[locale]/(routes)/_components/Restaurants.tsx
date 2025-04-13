"use client"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useMediaQuery } from "react-responsive"
const RestaurantsSection = () => {
  const t = useTranslations("home")
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" })
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" })

  const schuman = [
    { day: t("SchumanOpeningHoursText1") },
    { day: t("SchumanOpeningHoursText2") },
    { day: t("SchumanOpeningHoursText3") },
  ]

  const sintPieters = [
    { day: t("LeeuwOpeningHoursText1") },
    {
      day: t("LeeuwOpeningHoursText2"),
      hours: t("LeeuwOpeningHoursText3"),
    },
    { day: t("LeeuwOpeningHoursText3") },
    { day: t("LeeuwOpeningHoursText4") },
    { day: t("LeeuwOpeningHoursText5") },
  ]
  return (
    <div
      id="restaurants"
      className="  w-full mx-auto relative flex flex-col justify-center items-center px-[72px]"
    >
      <h1 className="text-[#FB4444] text-4xl font-bold font-avenirMedium4 text-center">
        {t("Restaurants")}
      </h1>

      {/* Sint-Schuman */}

      <div className="flex w-full  my-12">
        <motion.div
          initial={
            isMobile || isTablet
              ? { y: 250, opacity: 0 }
              : { x: -300, opacity: 0 }
          }
          whileInView={
            isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }
          }
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

        <motion.div
          className=" h-full text-center text-white w-2/5 "
          initial={
            isMobile || isTablet
              ? { y: 250, opacity: 0 }
              : { x: 300, opacity: 0 }
          }
          whileInView={
            isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }
          }
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl  mb-5">O’BAO Schuman</h1>

          <div className="mb-4">
            <h3 className="text-lg mb-1">{t("Address")}</h3>
            <p className="text-sm">{t("SchumanAddressText")}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg mb-1">{t("OpeningHours")}</h3>
            {schuman.map((item, index) => (
              <p key={index} className="text-sm mb-1">
                {item.day} - {item.hours}
              </p>
            ))}
          </div>

          <div className="">
            <h3 className="text-lg mb-1">{t("Contact")}</h3>
            <p className="text-sm mb-1">events@obao-catering.be</p>
            <p className="text-sm">{t("ContactNumber")}: 0470 46 75 57</p>
          </div>
        </motion.div>
      </div>

      {/* Sint-Pieters-Leeuw */}

      <div className="flex w-full  mt-12 mb-20">
        <motion.div
          className=" h-full text-center text-white w-2/5 "
          initial={
            isMobile || isTablet
              ? { y: 250, opacity: 0 }
              : { x: -300, opacity: 0 }
          }
          whileInView={
            isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }
          }
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl  mb-5">O’BAO Sint-Pieters-Leeuw</h1>

          <div className="mb-4">
            <h3 className="text-lg mb-1">{t("Address")}</h3>
            <p className="text-sm">{t("LeeuwAddressText")}</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg mb-1">{t("OpeningHours")}</h3>
            {sintPieters.map((item, index) => (
              <p key={index} className="text-sm mb-1">
                {item.day} - {item.hours}
              </p>
            ))}
          </div>

          <div className="">
            <h3 className="text-lg mb-1">{t("Contact")}</h3>
            <p className="text-sm mb-1">events@obao-catering.be</p>
            <p className="text-sm">{t("ContactNumber")}: 0494 53 90 41</p>
          </div>
        </motion.div>
        <motion.div
          className="w-full md:w-2/3 h-auto"
          initial={
            isMobile || isTablet
              ? { y: 250, opacity: 0 }
              : { x: 300, opacity: 0 }
          }
          whileInView={
            isMobile || isTablet ? { y: 0, opacity: 1 } : { x: 0, opacity: 1 }
          }
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
    </div>
  )
}

export default RestaurantsSection
