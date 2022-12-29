import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import QuizGame from '../pages/QuizGame'

const AppRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/quiz-game/:id' element={<QuizGame/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRouter
