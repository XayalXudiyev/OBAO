import type { FormData, ReservationFormData } from "@/constans/types"
import { google } from "googleapis"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = (await req.json()) as FormData | ReservationFormData

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    })

    const sheets = google.sheets({ auth, version: "v4" })

    let range = ""
    let values: any[] = []

    if ((body as ReservationFormData).adults !== undefined) {
      range = "Reservations!A1:I1"
      values = [
        [
          (body as ReservationFormData).firstName,
          (body as ReservationFormData).lastName,
          (body as ReservationFormData).email,
          (body as ReservationFormData).phone,
          (body as ReservationFormData).message,
          (body as ReservationFormData).adults,
          (body as ReservationFormData).child,
          (body as ReservationFormData).date,
          (body as ReservationFormData).time,
        ],
      ]
    } else {
      range = "Messages!A1:E1"
      values = [
        [
          (body as FormData).firstName,
          (body as FormData).lastName,
          (body as FormData).email,
          (body as FormData).phone,
          (body as FormData).message,
        ],
      ]
    }

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    })

    return NextResponse.json({
      // data: response.data,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/spreadsheets.readonly",
      ],
    })

    const sheets = google.sheets({ auth, version: "v4" })
    const range = "Menu!A1:I100"

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range,
    })

    return NextResponse.json({
      data: response.data.values,
      message: "Data fetched successfully",
    })
  } catch (error) {
    console.error("Error fetching data:", error)
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    )
  }
}
