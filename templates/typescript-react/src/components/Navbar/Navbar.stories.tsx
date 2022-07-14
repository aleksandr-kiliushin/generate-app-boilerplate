import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"

// TODO: Remove alias import.
import { Navbar } from "#components/Navbar"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  component: Navbar,
  title: "Navbar",
} as ComponentMeta<typeof Navbar>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Navbar> = (args) => {
  return <Navbar {...args} />
}

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
