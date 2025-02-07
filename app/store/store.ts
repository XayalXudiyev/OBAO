import { configureStore } from "@reduxjs/toolkit"
import { reservationsApi } from "./api/reservationsApi"
import { ReservationSlice } from "./slices/reservationSlice"

export const store = configureStore({
  reducer: {
    reservations: ReservationSlice.reducer,
    [reservationsApi.reducerPath]: reservationsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([reservationsApi.middleware]),
})

export type RootState = ReturnType<typeof store.getState>

export type AddDispatch = typeof store.dispatch
