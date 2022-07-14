import { expect } from "@storybook/jest"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { userEvent, waitFor, within } from "@storybook/testing-library"
import React from "react"

// TODO: Remove alias import.
import { Button } from "#components/Button"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    onClick: {
      action: true,
    },
  },
  component: Button,
  title: "Button",
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return <Button {...args}>Click me</Button>
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
Default.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement)
  userEvent.click(canvas.getByRole("button"))
  console.log("args.onClick >>", args.onClick)
  await waitFor(() => {
    expect(args.onClick).toHaveBeenCalled()
  })
}
