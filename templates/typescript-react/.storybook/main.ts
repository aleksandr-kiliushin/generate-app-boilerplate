import webpackConfig from "../webpack.config.js"

const config = {
  addons: ["@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-links"],
  core: {
    builder: "@storybook/builder-webpack5",
  },
  framework: "@storybook/react",
  stories: ["../src/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: webpackConfig.module.rules,
      },
      // TODO: Add TS module resolution.
      // Maybe it should be added only to the core webpack config.
      // And here it will be added using a new piece of spreading in `webpackFinal`.
      // https://storybook.js.org/docs/react/builders/webpack#typescript-module-resolution
    }
  },
}

export default config
