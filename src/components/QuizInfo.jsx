import React from 'react'
import { useNavigate } from 'react-router-dom'

const QuizInfo = ({quizInfo, setQuizInfo, selectedQuiz}) => {
  const navigate = useNavigate();

  return quizInfo && (
    <div className='quiz_info_modal'>
      <div className='quiz_info'>
        <header className='quiz_info_header'>
          <img 
            className='close_quiz' 
            src='/images/close.svg' 
            onClick={() => setQuizInfo(false)}
          />
        </header>
        <main key={selectedQuiz.id} className='quiz_info_main'>
          <div className='quiz_info_background' 
               style={{ backgroundImage: `url(images/${selectedQuiz.bgImg}.jpg)` }}>
          </div>
          <div className='quiz_info_description'>
            <h2>{selectedQuiz.quizName}</h2>
            <p>Категория: <span>{selectedQuiz.category}</span></p>
            <p>Количество вопросов: {selectedQuiz.stages.length}</p>
          </div>
          <button 
            className='play_quiz' 
            onClick={() => navigate(`/quiz-game/${selectedQuiz.id}`)}
          >
            Играть
          </button>
        </main>
      </div>
    </div>
  )
}

export default QuizInfo