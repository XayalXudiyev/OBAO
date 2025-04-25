import { saturdayTimes, sundayTimes, weekdayTimes } from "@/constans"
import { type ClassValue, clsx } from "clsx"
import { getDay } from "date-fns"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimeOptionsByDate = (date: Date | string) => {
  const day = getDay(new Date(date))
  if (day >= 1 && day <= 5) {
    return weekdayTimes
    // biome-ignore lint/style/noUselessElse: <explanation>
  } else if (day === 6) {
    return saturdayTimes
  }
  return sundayTimes
}
