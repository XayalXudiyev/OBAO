"use client"

import { Input } from "@/components/ui/input"
import type { FormData } from "@/constans/types"
import { useFormContext } from "react-hook-form"

const FormInput = ({
  id,
  label,
  placeholder,
  type = "text",
}: {
  id: keyof FormData
  label: string
  placeholder?: string
  type?: string
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>()

  return (
    <div className="flex flex-col gap-1 w-full">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <Input
        id={id}
        type={type}
        {...register(id)}
        placeholder={placeholder}
        className="text-[#4A4A4A] bg-transparent border-[#1C1C1C] rounded-none outline-none ring-0 focus-visible:ring-0 focus:border-[#1c1c1c] focus-visible:ring-offset-0"
      />
      {errors[id] && (
        <span className="text-red-500 text-xs">
          {errors[id]?.message as string}
        </span>
      )}
    </div>
  )
}

export default FormInput
