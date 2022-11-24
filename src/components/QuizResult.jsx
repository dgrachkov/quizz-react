import React from 'react'
import { useDispatch } from 'react-redux'
import { tryAgain } from '../store/quizSlice'

const QuizResult = ({quiz, paramsId}) => {
  const dispatch = useDispatch();

  function tryAgainHandler(paramsId) {
    dispatch(tryAgain(paramsId));
  }
  return (
    <div className='quiz_result'>
      <img src='/images/congratulation.png'></img>
      <h1>Вы набрали {quiz.pointsScored} из {quiz.stages.length} баллов!</h1>
      <div className='quiz_result_control'>
        <button onClick={() => tryAgainHandler(paramsId)}>Попробовать снова</button>
        <a href='/'>
          <button>Вернуться на главную</button>
        </a>
      </div>
    </div>
  )
}

export default QuizResult