import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"

import { counterSliceReducer } from "#store/counterSlice"

export const createStore = () => {
  return configureStore({
    reducer: {
      counter: counterSliceReducer,
    },
  })
}

export type AppDispatch = ReturnType<typeof createStore>["dispatch"]
export type RootState = ReturnType<ReturnType<typeof createStore>["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
