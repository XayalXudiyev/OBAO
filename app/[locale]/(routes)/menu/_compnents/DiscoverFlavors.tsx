import Image from "next/image"
import { motion } from "framer-motion"


const DiscoverFlavors = () => {
    return (
        <div className=" bg-transparent mt-40">
            <motion.div
                className="top relative w-full h-[312px]"
                initial={{ y: -100, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}   
                transition={{ duration: 1 }} 
            >
                <div>
                    <Image
                        width={40}
                        height={40}
                        src="/Icons.svg"
                        alt="Icons"
                        className=" absolute left-0 bottom-0 h-10 w-10 "
                    />
                    <Image
                        width={40}
                        height={40}
                        src="/Icons (1).svg"
                        alt="Icons"
                        className=" absolute left-[54px] top-[163px] h-10 w-10 "
                    />
                    <Image
                        width={40}
                        height={40}
                        src="/Icons (2).svg"
                        alt="Icons"
                        className=" absolute left-[150px] top-[60px] h-10 w-10 "
                    />
                    <Image
                        width={40}
                        height={40}
                        src="/Icons (3).svg"
                        alt="Icons"
                        className=" absolute left-[350px] top-0 h-10 w-10 "
                    />
                    <Image
                        width={40}
                        height={40}
                        src="/Icons (4).svg"
                        alt="Icons"
                        className=" absolute right-[350px] top-0 h-10 w-10 "
                    />
                    <Image
                        width={40}
                        height={40}
                        src="/Icons (5).svg"
                        alt="Icons"
                        className=" absolute right-[150px] top-[60px] h-10 w-10 "
                    />
                    <Image
                        width={40}
                        height={40}
                        src="/Icons (6).svg"
                        alt="Icons"
                        className=" absolute right-[54px] top-[163px] h-10 w-10 "
                    />
                    <Image
                        width={40}
                        height={40}
                        src="/Icons (7).svg"
                        alt="Icons"
                        className=" absolute right-0 bottom-0 h-10 w-10 "
                    />
                </div>
                <h3 className=" font-semibold text-[42px] pt-32 px-60">DISCOVER OUR <span className=" text-[#FB4444]">FLAVORS</span></h3>
            </motion.div>

            <motion.div
                className="bottom w-full flex items-center justify-center transform -translate-y-full"
                initial={{ y: 100, opacity: 0 }} 
                animate={{ y: -90 , opacity: 1 }}  
                transition={{ duration: 1 }} 
            >
                <p className=" w-[764px] text-[20px] text-center font-semibold font-avenirHeavy5 tracking-[0.15%] leading-6">
                    Explore a variety of traditional Japanese street food, crafted with authentic ingredients and bold flavors.
                    Whether you crave savory dishes or light snacks, our menu has something to satisfy every palate. Indulge in
                    the taste of Japan, right at your table.
                </p>
            </motion.div>
        </div>
    )
}

export default DiscoverFlavors
