"use client"

import { useLocale } from "next-intl"
import Link from "next/link"
export default function NotFound() {
  const locale = useLocale()
  return (
    <div className=" h-screen flex flex-col justify-center items-center gap-2">
      <h2 className=" text-3xl">Not Found</h2>
      <p>Could not find requested resource</p>
      <button
        type="button"
        onClick={() => window.history.back()}
        className="hover:text-red-600"
      >
        Return Previous Page
      </button>
      <Link className=" hover:text-red-600" href={`/${locale}`}>
        Return Home
      </Link>
    </div>
  )
}
