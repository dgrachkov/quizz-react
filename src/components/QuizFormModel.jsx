import React from 'react'
import InputForm from './UI/InputForm'

const QuizFormModel = ({stepForm, quizForm, setQuizForm}) => {
  return (
    <form>
      <InputForm type={'text'} value={quizForm.questionName} onChange={(e) => setQuizForm({...quizForm, questionName: e.target.value})}>
        Вопрос №{stepForm + 1}
      </InputForm>
      <div className='quiz_create_answer_list'>
        <InputForm type={'text'} value={quizForm.quizAnswers.answerOne} onChange={(e) => setQuizForm({...quizForm, quizAnswers: { ...quizForm.quizAnswers, answerOne: e.target.value}})}>
          Ответ №1
        </InputForm>
        <InputForm type={'text'} value={quizForm.quizAnswers.answerTwo} onChange={(e) => setQuizForm({...quizForm, quizAnswers: { ...quizForm.quizAnswers, answerTwo: e.target.value}})}>
          Ответ №2
        </InputForm>
        <InputForm type={'text'} value={quizForm.quizAnswers.answerThree} onChange={(e) => setQuizForm({...quizForm, quizAnswers: { ...quizForm.quizAnswers, answerThree: e.target.value}})}>
          Ответ №3
        </InputForm>
        <InputForm type={'text'} value={quizForm.quizAnswers.answerFour} onChange={(e) => setQuizForm({...quizForm, quizAnswers: { ...quizForm.quizAnswers, answerFour: e.target.value}})}>
          Ответ №4
        </InputForm>
      </div>
      <div className='quiz_create_correct_answer'>
        <label>Правильный ответ:</label>
        <div className='correct_answer_list'>
          {Object.keys(quizForm.quizAnswers).map((answer, index) => (
            <div
              key={index}
              className='correct_answer'
              style={index + 1 == quizForm.selectedAnswer ? { borderColor: '#4158D0'} : {borderColor: '#23232380'}}
              onClick={() => setQuizForm({...quizForm, selectedAnswer: index + 1})}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
    </form>
  )
}

export default QuizFormModel