const appWebpackConfig = require("../webpack.config.js")

module.exports = {
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-links"],
  core: {
    builder: "@storybook/builder-webpack5",
  },
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async (storybookWebpackConfig) => {
    storybookWebpackConfig.module.rules = [...appWebpackConfig.module.rules]
    storybookWebpackConfig.resolve.plugins = [
      ...(storybookWebpackConfig.resolve.plugins ?? []),
      ...appWebpackConfig.resolve.plugins,
    ]
    return storybookWebpackConfig
  },
}
