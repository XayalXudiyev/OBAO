import type { ReservationFormData } from "@/constans/types"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { reservationsApi } from "../api/reservationsApi"

interface InitialStateStateType extends ReservationFormData {
  error: null | string
  status: "idle" | "loading" | "succeeded" | "failed"
}

const initialState: InitialStateStateType[] = [
  {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    adults: 0,
    child: 0,
    date: "",
    time: "",
    error: null,
    status: "idle",
  },
]

export const ReservationSlice = createSlice({
  name: "reservation_slice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      reservationsApi.endpoints.getReservations.matchPending,
      (state) => {
        for (const reservation of state) {
          reservation.status = "loading"
        }
      },
    )

    builder.addMatcher(
      reservationsApi.endpoints.getReservations.matchFulfilled,
      (state, action: PayloadAction<ReservationFormData[]>) => {
        return action.payload.map((reservation) => ({
          ...reservation,
          error: null,
          status: "succeeded",
        }))
      },
    )

    builder.addMatcher(
      reservationsApi.endpoints.getReservations.matchRejected,
      (state, action) => {
        for (const reservation of state) {
          reservation.status = "failed"
          reservation.error = action.error?.message || "An error occurred"
        }
      },
    )
  },
})

export default ReservationSlice.reducer
