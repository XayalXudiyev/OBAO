"use client"

import { Textarea } from "@/components/ui/textarea"
import type { FormData } from "@/constans/types"
import { useFormContext } from "react-hook-form"

const FormTextarea = ({
  id,
  placeholder,
}: {
  id: keyof FormData
  placeholder?: string
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormData>()

  return (
    <div className="flex flex-col gap-2">
      <Textarea
        id={id}
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

export default FormTextarea
