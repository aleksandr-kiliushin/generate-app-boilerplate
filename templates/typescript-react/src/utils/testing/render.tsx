import { store } from "#store/index"
import { RenderOptions, RenderResult, render as rtlRender } from "@testing-library/react"
import React from "react"
import { Provider } from "react-redux"
import { MemoryRouter } from "react-router-dom"

const AllTheProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <MemoryRouter>
      <Provider store={store}>{children}</Provider>
    </MemoryRouter>
  )
}

export const render = (ui: React.ReactElement, options?: Omit<RenderOptions, "wrapper">): RenderResult => {
  return rtlRender(ui, { wrapper: AllTheProviders, ...options })
}
