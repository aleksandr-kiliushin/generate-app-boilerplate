const config = {
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  core: {
    builder: "@storybook/builder-webpack5",
  },
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.tsx"],
}

export default config
