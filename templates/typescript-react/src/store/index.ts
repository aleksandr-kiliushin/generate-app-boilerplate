import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit"

import { counterSliceReducer } from "#store/counterSlice"

export const createStore = () => {
  return configureStore({
    reducer: {
      counter: counterSliceReducer,
    },
  })
}

export type IStore = ReturnType<typeof createStore>
export type AppDispatch = IStore["dispatch"]
export type RootState = ReturnType<IStore["getState"]>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
