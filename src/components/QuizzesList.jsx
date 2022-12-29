import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import QuizInfo from './QuizInfo';
import QuizItem from './QuizItem';

const QuizzesList = () => {
  const quizzes = useSelector(state => state.quizzes.quizzes);
  const [quizInfo, setQuizInfo] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState({});

  function selectQuiz(quiz) {
    setSelectedQuiz(quiz)
  }

  return (
    <div className='quizzes_list'>
      {quizzes.map(quiz => (
        <QuizItem 
          key={quiz.id} 
          quiz={quiz} 
          setQuizInfo={setQuizInfo}
          selectQuiz={selectQuiz}
        />
      ))}
      <QuizInfo
        quizInfo={quizInfo}
        setQuizInfo={setQuizInfo}
        selectedQuiz={selectedQuiz}
      />
    </div>
  )
}

export default QuizzesList