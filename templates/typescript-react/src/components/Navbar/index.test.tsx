import { render } from "#utils/testing/render"
import { userEvent } from "@storybook/testing-library"
import { screen } from "@testing-library/react"
import React from "react"
import { Navbar } from "./index"

describe("<Navbar />", () => {
  it("renders a link to Home and click on it does not have any effect.", () => {
    const { history } = render(<Navbar />)
    const linkToHome = screen.getByRole("link", { name: "Home" })
    expect(linkToHome).toBeInTheDocument()
    expect(history.location.pathname).toEqual("/")
    userEvent.click(linkToHome)
    expect(history.location.pathname).toEqual("/")
  })

  it("renders a link to Counter and after click on it we move from Home to Counter.", () => {
    const { history } = render(<Navbar />)
    const linkToCounter = screen.getByRole("link", { name: "Counter" })
    expect(linkToCounter).toBeInTheDocument()
    expect(history.location.pathname).toEqual("/")
    userEvent.click(linkToCounter)
    expect(history.location.pathname).toEqual("/counter")
  })

  it("renders a link to Home and after click on it we move from Counter to Home.", () => {
    const { history } = render(<Navbar />, { initialUrl: "/counter" })
    const linkToHome = screen.getByRole("link", { name: "Home" })
    expect(linkToHome).toBeInTheDocument()
    expect(history.location.pathname).toEqual("/counter")
    userEvent.click(linkToHome)
    expect(history.location.pathname).toEqual("/")
  })
})
