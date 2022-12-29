import React, { useState } from 'react'
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';
import QuizCreateForm from './components/QuizCreateForm';

const App = () => {
  const [visibilityQuizForm, setVisibilityQuizForm] = useState(false);
  return (
    <div className='app'>
      <Navbar
        setVisibilityQuizForm={setVisibilityQuizForm}
      />
      <AppRouter/>
      <QuizCreateForm
        visibilityQuizForm={visibilityQuizForm}
        setVisibilityQuizForm={setVisibilityQuizForm}
      />
    </div>
  )
}

export default App