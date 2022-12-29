import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { tryAgain } from '../store/quizSlice'

const QuizResult = ({quiz, paramsId}) => {
  const dispatch = useDispatch();

  function tryAgainHandler(paramsId) {
    dispatch(tryAgain(paramsId));
  }
  return (
    <div className='quiz_result'>
      <img src='/images/congratulation.png'></img>
      {quiz.pointsScored === quiz.stages.length
        ? <h1>Поздравляем, вы прошли тест! Ваш результат {quiz.pointsScored} из {quiz.stages.length} баллов!</h1>
        : <h1>Тест не пройден. Ваш результат {quiz.pointsScored} из {quiz.stages.length}. Попробуйте ещё раз!</h1>
      }
      <div className='quiz_result_control'>
        <button onClick={() => tryAgainHandler(paramsId)}>Попробовать снова</button>
        <Link to='/'>
          <button>Вернуться на главную</button>
        </Link>
      </div>
    </div>
  )
}

export default QuizResult