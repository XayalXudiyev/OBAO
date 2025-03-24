"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { useLocale } from "next-intl"
import { usePathname, useRouter } from "next/navigation"

export default function LocaleSwitcher() {
  const locale: string = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const onSelectChange = (nextLocale: string) => {
    const segments = pathname.split("/").filter(Boolean)
    if (segments[0] === locale) {
      segments[0] = nextLocale
    } else {
      segments.unshift(nextLocale)
    }

    router.replace(`/${segments.join("/")}`)
  }

  const localeLabels: Record<string, string> = {
    en: "EN",
    fr: "FR",
    nl: "NL",
  }

  if (!locale) return null

  return (
    <Select onValueChange={onSelectChange} defaultValue={locale}>
      <SelectTrigger className="bg-transparent group border-none outline-none ring-0 focus:ring-offset-0 focus:ring-0 focus:outline-none gap-x-1 md:text-base w-fit [&>svg]:hover:text-[#D2B48C] [&>svg]:opacity-100 [&>svg]:data-[state=open]:rotate-180">
        <span className="text-xl text-primary md:text-white font-proximanova5 md:text-base md:font-proximanova3 group-hover:text-[#D2B48C]">
          {localeLabels[locale]}
        </span>
      </SelectTrigger>
      <SelectContent className="mt-[7px] rounded-none shadow-none bg-[#FBF8F4] max-w-[120px] ">
        <SelectGroup>
          {Object.entries(localeLabels).map(([code, label]) => (
            <SelectItem
              key={code}
              value={code}
              className="focus:bg-[#ECE0CF] cursor-pointer rounded-none my-1 "
            >
              <div className="flex gap-x-2 items-center">
                <img
                  src={`/flags/${code}Flag.png`}
                  width={35}
                  height={20}
                  alt={label}
                  className="w-[35px] h-5"
                />
                <span className="leading-4 text-base font-proximanova3">
                  {label}
                </span>
              </div>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
