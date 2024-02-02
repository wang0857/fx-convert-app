import { configureStore } from '@reduxjs/toolkit'
import convertReducer from './features/convertSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      convertInfo: convertReducer,
    }
  })
}