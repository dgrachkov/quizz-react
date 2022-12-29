import React, { useState } from 'react'
import QuizFormModel from './QuizFormModel'
import { useDispatch } from 'react-redux'
import { addQuiz } from '../store/quizSlice'
import { Link } from 'react-router-dom'
import uuid from 'react-uuid'
import InputForm from './UI/InputForm'

const QuizCreateForm = ({visibilityQuizForm, setVisibilityQuizForm}) => {
  const dispatch = useDispatch();
  const categories = ['Технологии', 'Образование', 'Путешествие'];
  const [warningVisibility, setWarningVisibility] = useState(false);
  const [stepForm, setStepForm] = useState(0);
  const [quizStages, setQuizStages] = useState([]);
  const [quizName, setQuizName] = useState('');
  const [quizForm, setQuizForm] = useState({
    selectedCategory: '',
    questionName: '',
    quizAnswers: {
      answerOne: '',
      answerTwo: '',
      answerThree: '',
      answerFour: '',
    },
    selectedAnswer: '',
  });

  function stepForward() {
    if (quizName === '' || quizForm.questionName === '' || quizForm.quizAnswers.answerOne === '' || quizForm.quizAnswers.answerTwo === '' || 
    quizForm.quizAnswers.answerThree === '' || quizForm.quizAnswers.answerFour === '' || quizForm.selectedAnswer === '') {
      setWarningVisibility(true);
      setTimeout(() => {
        setWarningVisibility(false);
      }, 2500);
    } else {
      setWarningVisibility(false);

      const nextQuizForm = {
        questionName: quizForm.questionName,
        answers: [quizForm.quizAnswers.answerOne, quizForm.quizAnswers.answerTwo, quizForm.quizAnswers.answerThree, quizForm.quizAnswers.answerFour],
        correctAnswer: +quizForm.selectedAnswer - 1,
      }
      setQuizStages(current => [...current, nextQuizForm]);

      setQuizForm({questionName: '', selectedAnswer: '' ,
        quizAnswers: {answerOne: '', answerTwo: '', answerThree: '', answerFour: ''}
      });
      setStepForm(stepForm + 1);
    }
  }

  function stepBack() {
    setStepForm(stepForm - 1);
  }

  function addNewQuiz() {
    if (quizName === '' || quizForm.questionName === '' || quizForm.quizAnswers.answerOne === '' || quizForm.quizAnswers.answerTwo === '' || 
    quizForm.quizAnswers.answerThree === '' || quizForm.quizAnswers.answerFour === '' || quizForm.selectedAnswer === '') {
      setWarningVisibility(true);
      setTimeout(() => {
        setWarningVisibility(false);
      }, 2500);
    } else {
      setWarningVisibility(false);

      const nextQuizForm = {
        questionName: quizForm.questionName,
        answers: [quizForm.quizAnswers.answerOne, quizForm.quizAnswers.answerTwo, quizForm.quizAnswers.answerThree, quizForm.quizAnswers.answerFour],
        correctAnswer: +quizForm.selectedAnswer - 1,
      }
      setQuizStages(quizStages.push(nextQuizForm));

      const newQuiz = {
        id: uuid(),
        quizName: quizName,
        step: 0,
        category: quizForm.selectedCategory,
        pointsScored: 0,
        stages: quizStages,
      };
      dispatch(addQuiz(newQuiz));

      setQuizName('');
      setQuizForm({questionName: '', selectedAnswer: '' , selectedCategory: '',
        quizAnswers: {answerOne: '', answerTwo: '', answerThree: '', answerFour: ''}
      });
      setQuizStages([]);
      setStepForm(0);
      setVisibilityQuizForm(false);
    }
  }
  
  return visibilityQuizForm && (
    <div className='quiz_create_modal'
      onClick={() => setVisibilityQuizForm(false)} 
    >
      <div className='quiz_create' onClick={(e) => e.stopPropagation()}>
        <header className='quiz_create_header'>
          <h1>Создание викторины</h1>
          <img onClick={() => setVisibilityQuizForm(false)} 
            src='/images/close.svg'
          />
        </header>
        <main className='quiz_create_main'>
          <h1>{stepForm + 1}.</h1>
          {stepForm === 0 
            ? <div className='quiz_first_form'>
                <InputForm type={'text'} value={quizName} onChange={(e) => setQuizName(e.target.value)}>
                  Название
                </InputForm>
                <InputForm type={'file'}>
                  Фотография
                </InputForm>
                <div className='quiz_create_category'>
                  <label>Выберите категорию:</label>
                  <div className='category_list'>
                    {categories.map((category, key) => (
                      <div 
                        className='category' 
                        key={key}
                        style={category === quizForm.selectedCategory ? { borderColor: '#4158D0'} : {borderColor: '#23232380'}}
                        onClick={() => setQuizForm({...quizForm, selectedCategory: category})}
                      >
                        <img src={`/images/${category}.svg`}/>
                        <span>{category}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <QuizFormModel stepForm={stepForm} setQuizForm={setQuizForm} quizForm={quizForm}/>
              </div>
            : <div className='quiz_second_form'>
                <QuizFormModel stepForm={stepForm} setQuizForm={setQuizForm} quizForm={quizForm}/>
              </div>
          }
        </main>
        <footer className='quiz_create_footer'>
          <div className='quiz_create_controlling'>
            <img src='/images/arrow-left.svg' onClick={stepBack}/>
            <img src='/images/arrow-right.svg' onClick={stepForward}/>
          </div>
          <Link to='/'>
            <img onClick={addNewQuiz} src="/images/complete.svg"/>
          </Link>
        </footer>
      </div>

      {warningVisibility && 
        <div className='warning' onClick={(e) => e.stopPropagation()}>
          <h2>Заполните пустые поля!</h2>
        </div>
      }
    </div>
  )
}

export default QuizCreateForm