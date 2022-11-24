import React from 'react'
import { useDispatch } from 'react-redux'
import { chooseAnswer } from '../store/quizSlice'

const QuizTemplate = ({quiz, paramsId}) => {
  const dispatch = useDispatch();

  function сonfirmAnswer(paramsId, index) {
    const selectedQuiz = {
      selectedQuizId: paramsId,
      answerIndex: index
    }
    dispatch(chooseAnswer(selectedQuiz));
  }

  const progressPercent = Math.round((quiz.step / quiz.stages.length) * 100);
  const correctStage = quiz.stages[quiz.step];

  return (
    <div className='quiz_template'>
      <div className='progress'>
        <div 
          style={{ width: `${progressPercent}%` }} 
          className='progress_bar'>
        </div>
      </div>
      <header className='quiz_template_header'>
        <h1>{correctStage.questionName}</h1>
        <span>{quiz.step + 1}/{quiz.stages.length}</span>
      </header>
      <ul className='answers_list'>
        {correctStage.answers.map((answer, index) => (
          <li 
            className='answer' 
            key={index} 
            onClick={() => сonfirmAnswer(paramsId, index)}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default QuizTemplate