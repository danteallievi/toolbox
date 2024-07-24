import { configureStore } from '@reduxjs/toolkit'
import { filesReducer } from './reducer/files.reducer'

export const store = configureStore({
  reducer: {
    files: filesReducer
  }
})