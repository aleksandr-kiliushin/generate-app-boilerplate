import { userEvent } from "@storybook/testing-library"
import { screen } from "@testing-library/react"
import React from "react"

import { render } from "#utils/testing/render"

import { Views } from "./index"

describe("<Views />", () => {
  it("being at home page, navigation home page again does not have any effect.", () => {
    const { history } = render(<Views />)
    const linkToHome = screen.getByRole("link", { name: "Home" })
    expect(history.location.pathname).toEqual("/")
    expect(screen.getByRole("heading", { name: "Welcome home" })).toBeInTheDocument()
    userEvent.click(linkToHome)
    expect(history.location.pathname).toEqual("/")
    expect(screen.getByRole("heading", { name: "Welcome home" })).toBeInTheDocument()
  })

  it("navigates from home to counter.", () => {
    const { history } = render(<Views />)
    const linkToCounter = screen.getByRole("link", { name: "Counter" })
    expect(history.location.pathname).toEqual("/")
    expect(screen.getByRole("heading", { name: "Welcome home" })).toBeInTheDocument()
    expect(screen.queryByRole("heading", { name: "Welcome to counter" })).not.toBeInTheDocument()
    userEvent.click(linkToCounter)
    expect(history.location.pathname).toEqual("/counter")
    expect(screen.queryByRole("heading", { name: "Welcome home" })).not.toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Welcome to counter" })).toBeInTheDocument()
  })

  it("navigates from counter to home.", () => {
    const { history } = render(<Views />, { initialUrl: "/counter" })
    const linkToHome = screen.getByRole("link", { name: "Home" })
    expect(history.location.pathname).toEqual("/counter")
    expect(screen.getByRole("heading", { name: "Welcome to counter" })).toBeInTheDocument()
    expect(screen.queryByRole("heading", { name: "Welcome home" })).not.toBeInTheDocument()
    userEvent.click(linkToHome)
    expect(history.location.pathname).toEqual("/")
    expect(screen.queryByRole("heading", { name: "Welcome to counter" })).not.toBeInTheDocument()
    expect(screen.getByRole("heading", { name: "Welcome home" })).toBeInTheDocument()
  })
})
