import { configureStore } from '@reduxjs/toolkit'
import quizReducer from './quizSlice'

export const store = configureStore({
  reducer: {
    quizzes: quizReducer
  }
})