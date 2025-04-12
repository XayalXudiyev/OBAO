"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"

export default function AnimatedContent({
  children,
}: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className=" overflow-x-hidden"
    >
      {children}
    </motion.div>
  )
}
