import React from 'react'
import Navbar from './components/Navbar';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <AppRouter/>
    </div>
  )
}

export default App