import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { FormData } from "@/constans/types"
import { useTranslations } from "next-intl"
import React from "react"
import { useFormContext } from "react-hook-form"
import { Separator } from "../../../../../components/ui/separator"

const ContactForm = () => {
  const t = useTranslations("reservations")
  return (
    <div className="flex justify-center w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="lg"
            className="bg-[#D2B48C] px-10 text-base font-avenirMedium4 text-black rounded-none mt-10 hover:bg-[#D2B48C]/80"
          >
            {t("ReserveNow")}
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-[#D2B48C]  border-none p-6 w-[500px] max-w-full">
          <DialogHeader className="text-center">
            <DialogTitle className="mb-4 text-lg font-avenirRoman3">
              {t("YourReservationIsFor")} 2 {t("People")}, <br /> 12.12.2025 {t("At")} 12 PM
            </DialogTitle>
            <DialogDescription className="text-sm text-black/80">
              {t("ConfirmationMessage")}
            </DialogDescription>
          </DialogHeader>

          <form className=" ">
            <h2 className="mb-1 text-lg font-semibold">{t("YourContactDetails")}</h2>
            <div className=" border border-black p-4 mb-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">

                <FormInput
                  id="firstName"
                  label={t("FirstName")}
                  placeholder={t("EnterFirstName")}
                  validation={{ required: t("FirstNameRequired") }}
                  
                />
                <FormInput
                  id="lastName"
                  label={t("LastName")}
                  placeholder={t("EnterLastName")}
                  validation={{ required: t("LastNameRequired") }}
                  
                />
                <FormInput
                  id="email"
                  label={t("Email")}
                  type="email"
                  placeholder={t("EnterEmail")}
                  validation={{ required: t("EmailRequired") }}
                  
                />
                <FormInput
                  id="phone"
                  label={t("PhoneNumber")}
                  placeholder={t("EnterPhoneNumber")}
                  validation={{ required: t("PhoneNumberRequired") }}
                  
                />
              </div>
              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="text-sm font-medium">
                  {t("YourMessage")}
                </label>
                <FormTextarea
                  id="message"
                  placeholder={t("DoYouHaveAnyRemarks")}
                />
              </div>
            </div>
            <div>
              <div className="bg-[#1C1C1C] flex justify-center  relative text-center  py-3 ">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto]  bg-repeat-y opacity-10 z-10">
                  {" "}
                </div>
                <Button
                  size="sm"
                  className="bg-[#D2B48C] z-20 px-5 font-avenirMedium4 text-black rounded-none  hover:bg-[#D2B48C]/80"
                >
                  {t("ReserveNow")}
                </Button>
              </div>

              <p className="my-4 text-sm text-center">
                {t("SuccessMessage")}
              </p>
              <Separator className="bg-[#1c1c1c]" />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ContactForm

const FormInput = ({
  id,
  label,
  placeholder,
  validation,
  type = "text",
}: {
  id: keyof FormData
  label: string
  placeholder?: string
  validation?: object
  type?: string
}) => {
  const { register } = useFormContext<FormData>().control

  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        {...register(id, validation)}
        placeholder={placeholder}
        className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
      />

    </div>
  )
}

const FormTextarea = ({
  id,
  placeholder,
}: {
  id: keyof FormData
  placeholder?: string
}) => {
  const { register } = useFormContext<FormData>().control

  return (
    <Textarea
      id={id}
      {...register(id)}
      placeholder={placeholder}
      className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
    />
  )
}
