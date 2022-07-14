import { store } from "#store/index"
import { render as rtlRender } from "@testing-library/react"
import React from "react"
import { Provider } from "react-redux"
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom"
import { createBrowserHistory } from "history"
import { IRender } from "./types"

export const render: IRender = (component, options) => {
  const history = createBrowserHistory()

  const AllTheProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
    history.push(options?.initialUrl ?? "/")

    return (
      <HistoryRouter history={history}>
        <Provider store={store}>{children}</Provider>
      </HistoryRouter>
    )
  }

  return {
    ...rtlRender(component, { wrapper: AllTheProviders, ...options }),
    history,
  }
}
