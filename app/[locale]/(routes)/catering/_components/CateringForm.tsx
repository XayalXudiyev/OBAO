"use client"
import SubmitModal from "@/components/common/SubmitModal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import type { FormData } from "@/constans/types"
import axios from "axios"
import { Loader2 } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import type { SubmitHandler } from "react-hook-form"
import { useForm } from "react-hook-form"

const CateringForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>()
  const t = useTranslations("catering")
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      setIsLoading(true)
      const response = await fetch("/api/contact", {
        cache: "force-cache",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      setIsLoading(false)
      const result = await response.json()
      if (result.success) {
        setIsModalOpen(true)
        setIsSuccess(true)
      } else {
        alert("An error occurred while sending the message.")
      }
    } catch (error) {
      setIsLoading(false)
      console.error("Request error:", error)
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    setIsSuccess(false)
    reset()
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="mb-2 text-sm font-medium text-white"
            >
              *{t("FirstName")}
            </label>
            <Input
              id="firstName"
              {...register("firstName", {
                required: t("FirstNameRequired"),
              })}
              placeholder={t("EnterFirstName")}
              className="text-white bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0  focus:border-[#966F3B]"
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
              {t("LastName")}
            </label>
            <Input
              id="lastName"
              {...register("lastName")}
              placeholder={t("EnterLastName")}
              className="text-white bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]"
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
              *{t("Email")}
            </label>
            <Input
              id="email"
              type="email"
              {...register("email", {
                required: t("EmailRequired"),
              })}
              placeholder={t("EnterEmail")}
              className="text-white bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]"
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
              *{t("PhoneNumber")}
            </label>
            <Input
              id="phone"
              {...register("phone", {
                required: t("PhoneNumberRequired"),
              })}
              placeholder={t("PhoneNumber")}
              className="text-white bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]"
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
            {t("YourMessage")}
          </label>
          <Textarea
            id="message"
            {...register("message", {
              required: t("MessageRequired"),
            })}
            placeholder={t("TypeYourMessage")}
            className="text-white bg-transparent border-[#966F3B] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#966F3B]"
          />
        </div>

        <div className="flex justify-center w-full">
          <Button
            type="submit"
            size="sm"
            className="bg-[#D2B48C] px-5 text-black rounded-none lg:w-auto w-full hover:bg-[#D2B48C]/80 my-5"
          >
            {isLoading ? (
              <Loader2 className="animate-spin h-10 w-10" />
            ) : (
              t("GetInTouch")
            )}
          </Button>
        </div>
      </form>
      <SubmitModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        t={t}
        isSuccess={isSuccess}
      />
    </div>
  )
}

export default CateringForm
