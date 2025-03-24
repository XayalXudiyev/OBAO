"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { FormData } from "@/constans"
import axios from "axios"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"

const CateringForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await axios.post("/api/sheets", {
        ...data,
        sheetName: "Messages",
      })

      const result = response.data

      alert(result.data.tableRange)

      reset()
    } catch (error) {
      console.error("Error submitting form:", error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="mb-2 text-sm font-medium text-white"
            >
              * First name
            </label>
            <Input
              id="firstName"
              {...register("firstName", { required: "First name is required" })}
              placeholder="Name"
              className="text-[#4A4A4A] bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]"
            />
            {errors.firstName && (
              <p className="text-sm text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="lastName"
              className="mb-2 text-sm font-medium text-white"
            >
              * Last name
            </label>
            <Input
              id="lastName"
              {...register("lastName", { required: "Last name is required" })}
              placeholder="Last name"
              className="text-[#4A4A4A] bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]"
            />
            {errors.lastName && (
              <p className="text-sm text-red-500">{errors.lastName.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 text-sm font-medium text-white"
            >
              * Email
            </label>
            <Input
              id="email"
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="text-[#4A4A4A] bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]"
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="mb-2 text-sm font-medium text-white"
            >
              * Phone number
            </label>
            <Input
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
              })}
              placeholder="Phone number"
              className="text-[#4A4A4A] bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]"
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <label
            htmlFor="message"
            className="mb-2 text-sm font-medium text-white"
          >
            Your message
          </label>
          <Textarea
            id="message"
            {...register("message")}
            placeholder="Type your message here..."
            className="text-[#4A4A4A] bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]"
          />
        </div>

        <div className="flex justify-center w-full">
          <Button
            type="submit"
            size="sm"
            className="bg-[#D2B48C] px-5 text-black rounded-none hover:bg-[#D2B48C]/80 my-5"
          >
            Get in touch
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CateringForm
