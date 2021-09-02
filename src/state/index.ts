import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import toastsReducer from './toasts'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    toasts: toastsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
