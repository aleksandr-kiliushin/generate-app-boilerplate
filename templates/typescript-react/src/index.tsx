import React from "react"
import ReactDomClient from "react-dom/client"

import { App } from "./App"
import { Provider } from "react-redux"
import { store } from "./store"

let rootNode = document.querySelector("#root")
if (rootNode === null) {
  rootNode = document.createElement("div")
  rootNode.setAttribute("id", "root")
}

const root = ReactDomClient.createRoot(rootNode)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
