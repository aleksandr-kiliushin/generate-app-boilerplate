const webpackConfig = require("../webpack.config.js")

module.exports = {
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-links"],
  core: {
    builder: "@storybook/builder-webpack5",
  },
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async (defaultStorybookWebpackConfig) => {
    return {
      ...defaultStorybookWebpackConfig,
      module: {
        ...defaultStorybookWebpackConfig.module,
        rules: webpackConfig.module.rules,
      },
      resolve: {
        ...defaultStorybookWebpackConfig.resolve,
        plugins: [...(defaultStorybookWebpackConfig.resolve.plugins ?? []), ...webpackConfig.resolve.plugins],
      },
    }
  },
}
