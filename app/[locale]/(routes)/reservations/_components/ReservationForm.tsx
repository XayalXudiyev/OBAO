"use client"

import { useAddReservationMutation } from "@/app/store/api/reservationsApi"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import type { ReservationFormData } from "@/constans/types"
import { useToast } from "@/hooks/use-toast"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState } from "react"
import { Controller, FormProvider, useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import ContactForm from "./ContactForm"

const ReservationForm = () => {
  const t = useTranslations("reservations")
  const [date, setDate] = useState<string>("")
  const [selectedTime, setSelectedTime] = useState<string>("")
  const [adultCount, setAdultCount] = useState<number>(0)
  const [childCount, setChildCount] = useState<number>(0)

  const [addReservation] = useAddReservationMutation()
  const { toast } = useToast()

  const { control, handleSubmit, setValue } = useForm<ReservationFormData>({
    defaultValues: {
      adults: adultCount,
      child: childCount,
      date: date ? format(date, "yyyy-MM-dd") : "",
      time: selectedTime,
    },
  })

  const adultIncrement = () => {
    setAdultCount((prev) => {
      const newValue = prev + 1
      setValue("adults", newValue)
      return newValue
    })
  }

  const adultDecrement = () => {
    setAdultCount((prev) => {
      const newValue = Math.max(prev - 1, 0)
      setValue("adults", newValue)
      return newValue
    })
  }

  const childIncrement = () => {
    setChildCount((prev) => {
      const newValue = prev + 1
      setValue("child", newValue)
      return newValue
    })
  }

  const childDecrement = () => {
    setChildCount((prev) => {
      const newValue = Math.max(prev - 1, 0)
      setValue("child", newValue)
      return newValue
    })
  }

  const onSubmit: SubmitHandler<ReservationFormData> = async (data) => {
    try {
      addReservation({
        ...data,
        sheetName: "Reservations",
      })
      toast({
        description: (
          <div className="flex items-center justify-between rounded-none bg-[#DBC3A3] pr-[2px] ">
            <div className="flex items-center ml-3 gap-2  py-2">
              <Image
                src="/icons/success.svg"
                alt="check"
                width={15}
                height={15}
              />
              <span className="text-black">{t("ReservationSuccess")}</span>
            </div>
            <button
              onClick={() => toast.dismiss()}
              className="text-black font-bold mr-3 ml-32 pl-5"
            >
              ✕
            </button>
          </div>
        ),
        className:
          "fixed bottom-4 left-1/2 transform -translate-x-1/2 w-auto max-w-md border p-0 rounded-none m-0 border-[#A68A5E] shadow-md",
        duration: 3000,
      })
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }
  return (
    <div className=" border  border-[#D2B48C]  mb-10 lg:mb-0  lg:py-14  p-8 lg:px-14">
      <h3 className="text-3xl lg:text-2xl font-bold  text-center font-avenirHeavy5">
        {t("FindATable")}
      </h3>

      <div className="flex flex-col gap-4 lg:min-w-[350px]">
        <FormProvider {...{ control, handleSubmit, setValue }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-7   my-6  w-full">
              {/* adult */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <span>
                    {adultCount} {t("Adult")}{" "}
                  </span>
                  <div className="flex items-center gap-5 text-3xl">
                    <Button
                      type="button"
                      variant="ghost"
                      className="p-0 text-2xl transition-all  duration-300 hover:bg-transparent hover:text-white"
                      size="lg"
                      onClick={adultIncrement}
                    >
                      +
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      className="p-0 text-2xl transition-all duration-300 hover:bg-transparent hover:text-white"
                      size="lg"
                      onClick={adultDecrement}
                    >
                      -
                    </Button>
                  </div>
                </div>
                <Separator />
              </div>

              {/* child */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <span>
                    {childCount} {t("Child")}
                  </span>
                  <div className="flex items-center gap-5 text-3xl">
                    <Button
                      type="button"
                      variant="ghost"
                      className="p-0 text-2xl transition-all duration-300 hover:bg-transparent hover:text-white"
                      size="lg"
                      onClick={childIncrement}
                    >
                      +
                    </Button>

                    <Button
                      type="button"
                      variant="ghost"
                      className="p-0 text-2xl transition-all duration-300 hover:bg-transparent hover:text-white"
                      size="lg"
                      onClick={childDecrement}
                    >
                      -
                    </Button>
                  </div>
                </div>
                <Separator />
              </div>

              {/* date */}
              <div className="flex flex-col gap-1">
                <div className="flex flex-col items-start space-y-2">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"outline"}
                        className="flex justify-between w-full p-0 text-base text-white bg-transparent border-none hover:bg-transparent hover:text-white"
                      >
                        <span>
                          {date ? format(date, "d MMM yyy") : t("SelectDate")}
                        </span>
                        <span>
                          <CalendarIcon />
                        </span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 rounded-none">
                      <Calendar
                        className="p-6  "
                        classNames={{
                          caption:
                            "flex justify-start pt-1 relative items-center",
                          nav_button_previous: "hidden",
                          nav_button_next:
                            "absolute right-1 text-[#BE935A] opacity-100",
                        }}
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                          setDate(date)
                          setValue("date", format(date, "yyyy-MM-dd"))
                        }}
                        initialFocus
                        fromDate={new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <Separator />
              </div>

              {/* time */}
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between gap-2">
                  <Controller
                    name="time"
                    control={control}
                    render={({ field }) => (
                      <Select
                        onValueChange={(value) => {
                          setSelectedTime(value)
                          field.onChange(value)
                        }}
                      >
                        <SelectTrigger className="flex justify-between items-center bg-transparent border-none outline-none ring-0 focus:ring-0 focus:ring-offset-0 gap-x-2 text-[15px] w-full p-0 ">
                          <span>{selectedTime || t("SelectTime")}</span>
                        </SelectTrigger>
                        <SelectContent className=" h-56 overflow-y-auto border border-[#D2B48C] rounded-none shadow-md w-full">
                          <SelectGroup>
                            <SelectItem value="7 PM">
                              <div className="flex justify-between w-64">
                                <span>7 PM </span>
                                <span>Available</span>
                              </div>
                            </SelectItem>
                            <SelectItem value="7:30 AM" disabled>
                              <div className="flex justify-between w-64">
                                <span>7:30 AM </span>
                                <span>{t("NotAvailable")}</span>
                              </div>
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    )}
                  />
                </div>
                <Separator />
              </div>
            </div>
            <ContactForm />
          </form>
        </FormProvider>
      </div>
    </div>
  )
}

export default ReservationForm
