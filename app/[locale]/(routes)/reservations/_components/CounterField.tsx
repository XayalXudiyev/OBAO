"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useFormContext } from "react-hook-form"

type CounterFieldProps = {
  label: string
  name: "adults" | "child"
}

export const CounterField = ({ label, name }: CounterFieldProps) => {
  const { watch, setValue } = useFormContext()
  const count = watch(name)

  const increment = () => setValue(name, count + 1)
  const decrement = () => setValue(name, Math.max(0, count - 1))

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between gap-2">
        <span>
          {count} {label}
        </span>
        <div className="flex items-center gap-5 text-3xl">
          <Button type="button" variant="ghost" onClick={increment}>
            +
          </Button>
          <Button type="button" variant="ghost" onClick={decrement}>
            -
          </Button>
        </div>
      </div>
      <Separator />
    </div>
  )
}
