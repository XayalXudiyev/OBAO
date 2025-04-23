"use client"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { getTimeOptionsByDate } from "@/lib/utils"
import { format, parse } from "date-fns"
import { Controller, useFormContext } from "react-hook-form"

type Props = {
  date: string
  reservations: any[]
  t: (key: string) => string
}

export const TimePickerField = ({ date, reservations, t }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name="time"
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange}>
          <SelectTrigger className="w-full justify-between">
            <span>{field.value || t("SelectTime")}</span>
          </SelectTrigger>
          <SelectContent className="h-56 overflow-y-auto">
            <SelectGroup>
              {getTimeOptionsByDate(date).map((time) => {
                const formattedDate = format(new Date(date), "yyyy-MM-dd")
                const isReserved = reservations.some((row) => {
                  const rawDate = row[7]
                  const parsedRowDate = format(
                    parse(rawDate, "M/d/yyyy", new Date()),
                    "yyyy-MM-dd",
                  )
                  return parsedRowDate === formattedDate && row[8] === time
                })

                return (
                  <SelectItem key={time} value={time} disabled={isReserved}>
                    <div className="flex justify-between w-64">
                      <span>{time}</span>
                      <span>
                        {isReserved ? t("NotAvailable") : t("Available")}
                      </span>
                    </div>
                  </SelectItem>
                )
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      )}
    />
  )
}
