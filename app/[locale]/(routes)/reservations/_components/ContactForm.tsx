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
import React from "react"
import { useFormContext } from "react-hook-form"
import { Separator } from "../../../../../components/ui/separator"

const ContactForm = () => {
  return (
    <div className="flex justify-center w-full">
      <Dialog>
        <DialogTrigger asChild>
          <Button
            size="sm"
            className="bg-[#D2B48C] px-5 font-avenirMedium4 text-black rounded-none mt-10 hover:bg-[#D2B48C]/80"
          >
            Reserve Now
          </Button>
        </DialogTrigger>

        <DialogContent className="bg-[#D2B48C]  border-none p-6 w-[500px] max-w-full">
          <DialogHeader className="text-center">
            <DialogTitle className="mb-4 text-lg font-avenirRoman3">
              Your reservation is for 2 people, <br /> today at 12 PM
            </DialogTitle>
            <DialogDescription className="text-sm text-black/80">
              You will receive a confirmation of your reservation by email.
            </DialogDescription>
          </DialogHeader>

          <form className="p-4 border border-black">
            <h2 className="mb-1 text-lg font-semibold">Your contact details</h2>
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                id="firstName"
                label="*First name"
                placeholder="First name"
                validation={{ required: "First name is required" }}
              />
              <FormInput
                id="lastName"
                label="*Last name"
                placeholder="Last name"
                validation={{ required: "Last name is required" }}
              />
              <FormInput
                id="email"
                label="*Email"
                type="email"
                placeholder="Email"
                validation={{ required: "Email is required" }}
              />
              <FormInput
                id="phone"
                label="*Phone number"
                placeholder="Phone number"
                validation={{ required: "Phone number is required" }}
              />
            </div>
            <div className="flex flex-col mt-4">
              <label htmlFor="message" className="text-sm font-medium">
                Your message
              </label>
              <FormTextarea
                id="message"
                placeholder="Do you have any remarks?"
              />
            </div>
            <div>
              <div className="bg-[#1C1C1C] flex justify-center  relative text-center  py-3">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/cropped.png')] bg-center bg-[length:120%_auto]  bg-repeat-y opacity-10 z-10">
                  {" "}
                </div>
                <Button
                  size="sm"
                  className="bg-[#D2B48C] z-20 px-5 font-avenirMedium4 text-black rounded-none  hover:bg-[#D2B48C]/80"
                >
                  Reserve Now
                </Button>
              </div>

              <p className="my-4 text-sm text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
