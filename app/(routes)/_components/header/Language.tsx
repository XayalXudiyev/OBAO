import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import React from "react"


const Language = () => {
  return (
    <Select>
      <SelectTrigger className="bg-transparent border-none outline-none ring-0 focus:ring-offset-0 focus:ring-0 focus:outline-none gap-x-1 md:text-base w-fit">
        <SelectValue placeholder="EN" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">
            {" "}
            <div className="flex gap-x-1">
              <img
                src="/language-logos/englishFlag.png"
                width={25}
                height={10}
                alt=""
              />{" "}
              <span>English</span>
            </div>
          </SelectItem>
          <SelectItem value="fr">
            {" "}
            <div className="flex gap-x-1">
              <img
                src="/language-logos/frenchFlag.png"
                width={25}
                height={10}
                alt=""
              />{" "}
              French
            </div>
          </SelectItem>
          <SelectItem value="dc">
            {" "}
            <div className="flex gap-x-1">
              <img
                src="/language-logos/dutchFlag.png"
                width={25}
                height={10}
                alt=""
              />{" "}
              Dutch
            </div>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default Language
