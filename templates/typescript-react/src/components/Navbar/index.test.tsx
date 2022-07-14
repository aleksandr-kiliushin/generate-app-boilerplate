import { render } from "#utils/testing/render"
import { screen } from "@testing-library/react"
import React from "react"
import { Navbar } from "./index"

describe("<Navbar />", () => {
  // it("follows to /counter url when Counter link is clicked.", () => {
  //   render(<Navbar />)
  //   const linkToCounter = screen.getByRole("link", { name: "Counter" })
  //   expect(linkToCounter).toBeInTheDocument()
  // })

  it("renders a link to Home.", () => {
    render(<Navbar />)
    const linkToHome = screen.getByRole("link", { name: "Home" })
    expect(linkToHome).toBeInTheDocument()
  })

  it("renders a link to Counter.", () => {
    render(<Navbar />)
    const linkToCounter = screen.getByRole("link", { name: "Counter" })
    expect(linkToCounter).toBeInTheDocument()
  })
})
