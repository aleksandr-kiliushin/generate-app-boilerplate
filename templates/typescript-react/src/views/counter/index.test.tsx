import { fireEvent, screen } from "@testing-library/react"
import React from "react"

import { render } from "#utils/testing/render"

import { Counter } from "./index"

describe("<Counter />", () => {
  it("increases amount by 1 on click `+` button.", () => {
    render(<Counter />)
    const counterValueNode = screen.getByTitle("Counter value")
    expect(counterValueNode).toHaveTextContent("0")
    fireEvent.click(screen.getByRole("button", { name: "+" }))
    expect(counterValueNode).toHaveTextContent("1")
  })

  it("increases amount by 2 on click `Add amount` button.", () => {
    render(<Counter />)
    const counterValueNode = screen.getByTitle("Counter value")
    expect(counterValueNode).toHaveTextContent("0")
    fireEvent.click(screen.getByRole("button", { name: "Add amount" }))
    expect(counterValueNode).toHaveTextContent("2")
  })
})
