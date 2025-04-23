import { z } from "zod"

export const reservationSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  message: z.string().optional(),
  date: z.string().min(1, "Date is required"),
  time: z.string().min(1, "Time is required"),
  adults: z.number().min(1, "At least 1 adult is required"),
  child: z.number().min(0, "At least 0 child is required"),
})
