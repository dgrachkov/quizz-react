import React from 'react'
import { useNavigate } from 'react-router-dom'

const QuizItem = ({quiz, setQuizInfo, selectQuiz}) => {
  const navigate = useNavigate();

  function showQuizInfo(e) {
    e.stopPropagation();
    selectQuiz(quiz)
    
    setQuizInfo(true);
  }

  return (
    <div className='quiz' onClick={() => navigate(`/quiz-game/${quiz.id}`)}>
      <div className='quiz_background'
           style={{ backgroundImage: `url(images/${quiz.bgImg}.jpg)` }}>
        <img src='/images/info.svg' onClick={showQuizInfo}/>
      </div>
      <div className='quiz_title'>
        <h1>{quiz.quizName}</h1>
        <p>Вопросов: {quiz.stages.length}</p>
      </div>
    </div>
  )
}

export default QuizItem