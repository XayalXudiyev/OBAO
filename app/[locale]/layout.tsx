import localFont from "next/font/local"
import { cookies } from 'next/headers'; // ✅ Next.js cookies API
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import ClientProvider from "./ClientProvider"
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import NotFound from "./not-found";
interface RootLayoutProps {
  children: React.ReactNode
}

interface Locale {
  locale?: string | undefined
}
// Avenir Fonts
const avenir = localFont({
  src: "./fonts/AvenirLTStd.otf",
  variable: "--font-avenir",
  weight: "100 900",
})

const avenirBlack = localFont({
  src: "./fonts/AvenirLTStdBlack.otf",
  variable: "--font-avenir-black",
  weight: "100 900",
})

const avenirBook = localFont({
  src: "./fonts/AvenirLTStdBook.otf",
  variable: "--font-avenir-book",
  weight: "100 900",
})

const avenirHeavy = localFont({
  src: "./fonts/AvenirLTStdHeavy.otf",
  variable: "--font-avenir-heavy",
  weight: "100 900",
})

const avenirMedium = localFont({
  src: "./fonts/AvenirLTStdMedium.otf",
  variable: "--font-avenir-medium",
  weight: "100 900",
})

const avenirRoman = localFont({
  src: "./fonts/AvenirLTStdRoman.otf",
  variable: "--font-avenir-roman",
  weight: "100 900",
})


export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  const messages = await getMessages()

  if (!routing.locales.includes(locale as any)) {
    NotFound()
  }
  return (
    <html lang={locale}>
      <body
        className={`
        ${avenir.variable} 
        ${avenirMedium.variable} 
        ${avenirRoman.variable} 
        ${avenirBook.variable} 
        ${avenirHeavy.variable} 
        ${avenirBlack.variable} 
        antialiased`}
      >
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

