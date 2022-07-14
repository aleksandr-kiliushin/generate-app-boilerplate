import { screen } from "@testing-library/react"
import React from "react"

import { render } from "#utils/testing/render"

import { Profile } from "./index"

describe("<Profile />", () => {
  it("fetches user name and renders it.", async () => {
    render(<Profile />)
    expect(screen.getByText("User name is loading ...")).toBeInTheDocument()
    expect(screen.queryByText("Jackie Chan")).not.toBeInTheDocument()
    expect(await screen.findByText("Jackie Chan")).toBeInTheDocument()
    expect(screen.queryByText("User name is loading ...")).not.toBeInTheDocument()
  })
})
