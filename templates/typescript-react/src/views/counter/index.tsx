import React, { useState } from "react"

import { Button } from "#components/Button"
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from "#store/counterSlice"
import { useAppDispatch } from "#utils/hooks/useAppDispatch"
import { useAppSelector } from "#utils/hooks/useAppSelector"

import classes from "./Counter.module.scss"

export const Counter: React.FC = () => {
  const count = useAppSelector(selectCount)
  const dispatch = useAppDispatch()
  const [incrementAmount, setIncrementAmount] = useState("2")

  const incrementValue = Number(incrementAmount) || 0

  return (
    <>
      <h1>Welcome to counter</h1>
      <div className={classes.row}>
        <Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </Button>
        <span className={classes.value} title="Counter value">
          {count}
        </span>
        <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </Button>
      </div>
      <div className={classes.row}>
        <input
          className={classes.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(incrementValue))}>Add amount</Button>
        <Button onClick={() => dispatch(incrementAsync(incrementValue))}>Add async</Button>
        <Button onClick={() => dispatch(incrementIfOdd(incrementValue))}>Add if odd</Button>
      </div>
    </>
  )
}
