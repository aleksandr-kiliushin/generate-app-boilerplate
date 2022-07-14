#! /usr/bin/env node
const fs = require("fs")
const os = require("os")
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

  const packageJsonPath = path.join(process.cwd(), appName, "package.json")
  const packageJsonContent = fs.readFileSync(packageJsonPath, { encoding: "utf-8" })
  const packageJsonPersonalizedContent = packageJsonContent
    .replace("%USERNAME%", os.userInfo().username)
    .replace("%APP-NAME%", appName)
  fs.writeFileSync(packageJsonPath, packageJsonPersonalizedContent)

  console.log(`App "${appName}" successfully created using the "${templateName}" template.`)
}

main()
