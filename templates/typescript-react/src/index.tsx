import { App } from "./App"
import React from "react"
import ReactDomClient from "react-dom/client"

let rootNode = document.querySelector("#root")
if (rootNode === null) {
  rootNode = document.createElement("div")
  rootNode.setAttribute("id", "root")
}

const root = ReactDomClient.createRoot(rootNode)

root.render(<App />)
