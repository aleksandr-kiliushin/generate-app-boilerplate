#! /usr/bin/env node
const fs = require("fs")
const path = require("path")

const main = () => {
  const [, , ...flags] = process.argv

  const templateNameFlag = flags.find((aFlag) => aFlag.startsWith("template-name="))
  if (templateNameFlag === undefined) {
    console.error(
      `Template name is not provided. Example: \`npx starter-boilerplate template-name=typescript-react app-name=my-beautiful-app\`.
	Available templates: [typescript-react].`
    )
    return
  }
  const templateName = templateNameFlag.slice(14)

  const appNameFlag = flags.find((aFlag) => aFlag.startsWith("app-name="))
  if (appNameFlag === undefined) {
    console.error(
      "App name is not provided. Example: `npx starter-boilerplate template-name=typescript-react app-name=my-beautiful-app`."
    )
    return
  }
  const appName = appNameFlag.slice(9)

  const srcDirPath = path.join(__dirname, "..", "templates", templateName)
  const destDirPath = path.join(process.cwd(), appName)

  fs.cpSync(srcDirPath, destDirPath, { recursive: true })

  // TODO: Change "name": "typescript-react" in package.json with the provided app name.

  console.log(`App "${appName}" successfully created using the "${templateName}" template.`)
}

main()
