import { screen } from "@testing-library/react"
import React from "react"

import { render } from "#utils/testing/render"

import { Profile } from "./index"

describe("<Profile />", () => {
  it.skip("fetches user name and renders it.", async () => {
    render(<Profile />)
    expect(screen.getByText("User name is loading ...")).toBeInTheDocument()
    // TODO: Mock network request with MSW.
    expect(screen.queryByText("Jackie Chan")).not.toBeInTheDocument()
    expect(await screen.findByText("Jackie Chan")).toBeInTheDocument()
    expect(screen.queryByText("User name is loading ...")).not.toBeInTheDocument()
  })
})
