import { Button } from "@/components/ui/button"
import { useTranslations } from "next-intl";
import Link from "next/link"
import React from "react"

const ReservationButton = () => {
  const t = useTranslations('header');
  return (
    <>
      <Button className="rounded-none bg-[#D2B48C] hover:bg-[#D2B48C]/80 text-black h-8  md:h-[34px] w-24 md:w-28 mr-2 font-avenirRoman">
        <Link href="/reservations">{t('reservation')}</Link>
      </Button>
    </>
  )
}



export default ReservationButton
