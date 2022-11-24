import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='nav'>
      <div className='nav_content container'>
        <Link className='app_title' to='/'>Quizzes</Link>
        <button className='create_quiz'>
          Создать викторину
        </button>
        <button className='adaptive_create_quiz'>
          <img src='/images/add.svg'/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar