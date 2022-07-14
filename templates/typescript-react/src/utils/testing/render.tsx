import { store } from "#store/index"
import { RenderOptions, RenderResult, render as rtlRender } from "@testing-library/react"
import React from "react"
import { Provider } from "react-redux"
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import { createBrowserHistory } from "history"

const AllTheProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  const history = createBrowserHistory()

  return (
    <HistoryRouter history={history}>
      <Provider store={store}>{children}</Provider>
    </HistoryRouter>
  )
}

export const render = (ui: React.ReactElement, options?: Omit<RenderOptions, "wrapper">): RenderResult => {
  return rtlRender(ui, { wrapper: AllTheProviders, ...options })
}
