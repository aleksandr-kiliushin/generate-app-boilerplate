import { Navbar } from "./components/Navbar"
import React from "react"

import { Counter } from "./views/counter"
import { Home } from "./views/home"
import { Route, Routes } from "react-router-dom"

export const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Counter />} path="/counter" />
      </Routes>
    </>
  )
}
