import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const QuizzesList = () => {
  const navigate = useNavigate();
  const quizzes = useSelector(state => state.quizzes.quizzes);

  return (
    <div className='quizzes'>
      {quizzes.map(quiz => (
        <div 
          className='quiz' 
          key={quiz.id}
          onClick={() => navigate(`/quiz/${quiz.id}`)}
        >
          <div className='quiz_title'>
            <img 
              src={quiz.category !== '' ? `/images/${quiz.category}.svg` : '/images/unidentified.svg'}
            />
            <h1>{quiz.quizName}</h1>
          </div>
          <span>Вопросов: {quiz.stages.length}</span>
        </div>
      ))}
    </div>
  )
}

export default QuizzesList