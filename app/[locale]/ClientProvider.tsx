"use client"

import { Provider } from "react-redux"
import { store } from "../store/store"

interface ClientProviderI {
  children: React.ReactNode
}

export default function ClientProvider({ children }: ClientProviderI) {
  return <Provider store={store}>{children}</Provider>
}
