#! /usr/bin/env node
const fs = require("fs")
const path = require("path")

const [, , ...flags] = process.argv

const templateNameFlag = flags.find((aFlag) => aFlag.startsWith("template-name="))
if (templateNameFlag === undefined) {
  throw new Error(
    `Template name is not provided. Example: \`npx starter-boilerplate template-name=typescript-react app-name=my-beautiful-app\`.
Available templates: [typescript-react].`
  )
}
const templateName = templateNameFlag.slice(14)

const appNameFlag = flags.find((aFlag) => aFlag.startsWith("app-name="))
if (appNameFlag === undefined) {
  throw new Error(
    "App name is not provided. Example: `npx starter-boilerplate template-name=typescript-react app-name=my-beautiful-app`."
  )
}
const appName = appNameFlag.slice(9)

const srcDirPath = path.join(__dirname, "..", "templates", templateName)
const destDirPath = path.join(process.cwd(), appName)

fs.cpSync(srcDirPath, destDirPath, { recursive: true })

console.log("Template created successfully.")
