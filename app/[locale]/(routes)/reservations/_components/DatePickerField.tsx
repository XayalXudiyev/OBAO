"use client"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { useFormContext } from "react-hook-form"

export const DatePickerField = () => {
  const { watch, setValue } = useFormContext()
  const date = watch("date")
  const selected = date ? new Date(date) : undefined

  return (
    <div className="flex flex-col gap-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="flex justify-between w-full">
            <span>
              {date ? format(new Date(date), "d MMM yyyy") : "Select Date"}
            </span>
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={selected}
            onSelect={(d) => d && setValue("date", format(d, "yyyy-MM-dd"))}
            fromDate={new Date()}
          />
        </PopoverContent>
      </Popover>
      <Separator />
    </div>
  )
}
