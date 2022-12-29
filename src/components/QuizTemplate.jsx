import React from 'react'
import { useDispatch } from 'react-redux'
import { chooseAnswer } from '../store/quizSlice'

const QuizTemplate = ({quiz, paramsId}) => {
  const dispatch = useDispatch();

  function сonfirmAnswer(paramsId, index) {
    const selectedQuiz = {
      selectedQuizId: paramsId,
      answerIndex: index,
    }
    
    dispatch(chooseAnswer(selectedQuiz));
  }

  const progressPercent = Math.round((quiz.step / quiz.stages.length) * 100);
  const correctStage = quiz.stages[quiz.step];

  return (
    <div className='quiz_template'>
      <div className='quiz_template_content'>
        <header>
          <div className='quiz_template_question'>
            <p>{quiz.step + 1}/{quiz.stages.length}</p>
            <h1>{correctStage.questionName}</h1>
          </div>
          <div className='progress'>
            <div 
              style={{ width: `${progressPercent}%` }} 
              className='progress_bar'>
            </div>
          </div>
        </header>
        <ul className='answers_list'>
          {correctStage.answers.map((answer, index) => (
            <li 
              className='answer' 
              key={index} 
              onClick={() => сonfirmAnswer(paramsId, index)}
            >
              <span>{index + 1}.</span> {answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default QuizTemplate