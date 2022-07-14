import React from "react"

import classes from "./index.module.scss"

type IHtmlButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

interface IButtonProps {
  onClick: IHtmlButtonProps["onClick"]
}

export const Button: React.FC<React.PropsWithChildren<IButtonProps>> = ({ children, onClick }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      {children}
    </button>
  )
}
