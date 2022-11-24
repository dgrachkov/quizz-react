import { React } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom';
import QuizTemplate from '../components/QuizTemplate'
import QuizResult from '../components/QuizResult'

const QuizGame = () => {
  const params = useParams();
  const quizzes = useSelector(state => state.quizzes.quizzes);
  const quizId = quizzes.filter(quiz => quiz.id === params.id);

  return (
    <div className='quiz_game container'>
      {quizId.map(quiz => (
        (quiz.step !== quiz.stages.length
          ? <QuizTemplate
              key={quiz.id}
              quiz={quiz}
              paramsId={params.id}
            /> 
          : <QuizResult
              key={quiz.id}
              quiz={quiz}
              paramsId={params.id}
            />
        )
      ))}
    </div>
  )
}

export default QuizGame