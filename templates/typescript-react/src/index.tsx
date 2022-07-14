import React from "react"
import ReactDomClient from "react-dom/client"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"

import { Views } from "./views"
import { store } from "#store/index"

let rootNode = document.querySelector("#root")
if (rootNode === null) {
  rootNode = document.createElement("div")
  rootNode.setAttribute("id", "root")
}

const root = ReactDomClient.createRoot(rootNode)

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Views />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
