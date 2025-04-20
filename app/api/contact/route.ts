"use server"
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: [process.env.RECEIVER_EMAIL1, process.env.RECEIVER_EMAIL2],
      subject: "New Contact Form Message",
      text: `
        Name: ${firstName} ${lastName} 
        Email: ${email}
        Phone:  ${phone}
        Message: ${message}
      `,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    })
  } catch (error) {
    console.error("Email sending error:", error)
    return NextResponse.json(
      { success: false, message: "Message could not be sent." },
      { status: 500 },
    )
  }
}
