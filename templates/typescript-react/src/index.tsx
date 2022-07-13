import React from "react"
import ReactDomClient from "react-dom/client"

import { App } from "./App"
import { Provider } from "react-redux"
import { store } from "./store"
import { BrowserRouter } from "react-router-dom"

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
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
