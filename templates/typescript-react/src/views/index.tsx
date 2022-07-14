import React from "react"
import { Route, Routes } from "react-router-dom"

import { Navbar } from "#components/Navbar"
import { Counter } from "#views/counter"
import { Home } from "#views/home"
import { Profile } from "#views/profile"

export const Views: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Counter />} path="/counter" />
        <Route element={<Profile />} path="/profile" />
      </Routes>
    </>
  )
}
