import localFont from "next/font/local"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { routing } from "@/i18n/routing"
import { GoogleTagManager } from "@next/third-parties/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import ClientProvider from "./ClientProvider"
import NotFound from "./not-found"

const fonts = [
  localFont({ src: "./fonts/AvenirLTStd.otf", variable: "--font-avenir", weight: "100 900" }),
  localFont({ src: "./fonts/AvenirLTStdBlack.otf", variable: "--font-avenir-black", weight: "100 900" }),
  localFont({ src: "./fonts/AvenirLTStdBook.otf", variable: "--font-avenir-book", weight: "100 900" }),
  localFont({ src: "./fonts/AvenirLTStdHeavy.otf", variable: "--font-avenir-heavy", weight: "100 900" }),
  localFont({ src: "./fonts/AvenirLTStdMedium.otf", variable: "--font-avenir-medium", weight: "100 900" }),
  localFont({ src: "./fonts/AvenirLTStdRoman.otf", variable: "--font-avenir-roman", weight: "100 900" }),
]

export const metadata = {
  title: "O'BAO",
  description: "O'BAO",
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = await getMessages()
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  if (!routing.locales.includes(locale)) {
    NotFound()
  }

  const fontClasses = fonts.map((f) => f.variable).join(" ")

  return (
    <html lang={locale}>
      <head />
      <body className={`${fontClasses} antialiased`}>
        {gtmId && <GoogleTagManager gtmId={gtmId} />}
        <ClientProvider>
          <NextIntlClientProvider messages={messages}>
            {children}
            <Toaster />
          </NextIntlClientProvider>
        </ClientProvider>
      </body>
    </html>
  )
}
