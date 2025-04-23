import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useTranslations } from "next-intl"
import React from "react"
import { Separator } from "../../../../../components/ui/separator"
import FormInput from "./FormInput"
import FormTextarea from "./FormTextarea"

type ContactFormProps = {
  isOpen: boolean
  setIsOpen: (value: boolean) => void
  guests: number
  date: string
  time: string
}

const ContactForm = ({
  isOpen,
  setIsOpen,
  guests,
  date,
  time,
}: ContactFormProps) => {
  const t = useTranslations("reservations")

  return (
    <div className="flex justify-center w-full">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
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
              {t("YourReservationIsFor")} {guests} {t("People")}, <br /> {date}{" "}
              {t("At")} {time}
            </DialogTitle>
            <DialogDescription className="text-sm text-black/80">
              {t("ConfirmationMessage")}
            </DialogDescription>
          </DialogHeader>

          <form className=" ">
            <h2 className="mb-1 text-lg font-semibold">
              {t("YourContactDetails")}
            </h2>
            <div className=" border border-black p-4 mb-4">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <FormInput
                  id="firstName"
                  label={t("FirstName")}
                  placeholder={t("EnterFirstName")}
                  type="text"
                />
                <FormInput
                  id="lastName"
                  label={t("LastName")}
                  placeholder={t("EnterLastName")}
                  validation={{ required: t("LastNameRequired") }}
                  type="text"
                />
                <FormInput
                  id="email"
                  label={t("Email")}
                  type="email"
                  placeholder={t("EnterEmail")}
                  validation={{ required: t("EmailRequired") }}
                  type="email"
                />
                <FormInput
                  id="phone"
                  label={t("PhoneNumber")}
                  placeholder={t("EnterPhoneNumber")}
                  validation={{ required: t("PhoneNumberRequired") }}
                  type="tel"
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

              <p className="my-4 text-sm text-center">{t("SuccessMessage")}</p>
              <Separator className="bg-[#1c1c1c]" />
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ContactForm
