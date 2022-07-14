import React from "react"
import { Link } from "react-router-dom"

import classes from "./index.module.scss"

export const Navbar: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <Link to="/">Home</Link>
      <Link to="/counter">Counter</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  )
}
