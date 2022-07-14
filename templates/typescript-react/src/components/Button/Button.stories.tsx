import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Button } from "./index"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: Button,
  title: "My components/Button",
} as ComponentMeta<typeof Button>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Button {...args} onClick={console.log}>
      Click me
    </Button>
  )
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
