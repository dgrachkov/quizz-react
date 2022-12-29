import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({setVisibilityQuizForm}) => {
  return (
    <nav className='nav'>
      <div className='nav_content container'>
        <Link to='/' className='app_title'>
          <img src='/images/quizz-logo.png'/>
          <h1>Quizz</h1>
        </Link>
        <button className='create_quiz'
          onClick={() => setVisibilityQuizForm(true)}
        >
          Создать <span> викторину</span>
        </button>
      </div>
    </nav>
  )
}

export default Navbar