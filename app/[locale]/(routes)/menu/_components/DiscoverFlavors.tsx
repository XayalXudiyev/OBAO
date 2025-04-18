import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import Image from "next/image"

const DiscoverFlavors = () => {
  const t = useTranslations("foodMenu")
  return (
    <div className=" bg-transparent mt-48 lg:mt-40 text-center  h-[180px] lg:h-fit">
      <motion.div
        className="top relative w-full lg:h-[312px] h-[50px] "
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <Image
            width={40}
            height={40}
            src="/menu/discoverFlavors/Icons.svg"
            alt="Icons"
            className=" absolute lg:left-0 left-2 lg:bottom-0 -bottom-7 lg:w-10 w-7  "
          />
          <Image
            width={40}
            height={40}
            src="/menu/discoverFlavors/Icons (1).svg"
            alt="Icons"
            className=" absolute lg:left-[54px] left-[40px] lg:top-[163px] -top-[10px] lg:w-10 w-7 "
          />
          <Image
            width={40}
            height={40}
            src="/menu/discoverFlavors/Icons (2).svg"
            alt="Icons"
            className=" absolute lg:left-[150px] left-[120px] lg:top-[60px] -top-[40px] lg:w-10 w-7 "
          />
          <Image
            width={40}
            height={40}
            src="/menu/discoverFlavors/Icons (3).svg"
            alt="Icons"
            className=" absolute lg:left-[350px] left-[200px] lg:top-0 -top-[50px] lg:w-10 w-7 "
          />
          <Image
            width={40}
            height={40}
            src="/menu/discoverFlavors/Icons (4).svg"
            alt="Icons"
            className=" absolute lg:right-[350px] right-[120px] lg:top-0 -top-[40px] lg:w-10 w-7 "
          />
          <Image
            width={40}
            height={40}
            src="/menu/discoverFlavors/Icons (5).svg"
            alt="Icons"
            className=" absolute right-[150px] top-[60px] hidden lg:block lg:w-10 w-7 "
          />
          <Image
            width={40}
            height={40}
            src="/menu/discoverFlavors/Icons (6).svg"
            alt="Icons"
            className=" absolute lg:right-[54px] right-[50px] lg:top-[163px] -top-[10px] lg:w-10 w-7 "
          />
          <Image
            width={40}
            height={40}
            src="/menu/discoverFlavors/Icons (7).svg"
            alt="Icons"
            className=" absolute lg:right-0 right-[10px] lg:bottom-0 -bottom-[30px] lg:w-10 w-7 "
          />
        </div>
        <h3 className=" font-avenirRoman3 lg:text-[42px] text-xl text-center lg:pt-32 pt-8 lg:px-60">
          {t("DiscoverOur")}{" "}
          <span className=" text-[#FB4444] font-avenirRoman3">
            {t("Flavors")}
          </span>
        </h3>
      </motion.div>

      <motion.div
        className="bottom lg:w-[764px] lg:ml-[110px]  text-[10px] px-8 lg:px-0  lg:text-[20px] lg:pt-0 pt-28  font-avenirBook2 lg:leading-6 leading-4"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: -90, opacity: 1 }}
        transition={{ duration: 1 }}
      >


        {t("FlavorsText")}      </motion.div>
    </div>
  )
}

export default DiscoverFlavors
