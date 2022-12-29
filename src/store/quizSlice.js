import { createSlice } from '@reduxjs/toolkit'
import uuid from 'react-uuid'

export const quizSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: [
      { 
        id: uuid(),
        quizName: 'О технологиях',
        bgImg: 'techn',
        step: 0,
        category: 'Технологии',
        pointsScored: 0,
        stages: [
          {
            questionName: 'Что такое React?',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
            correctAnswer: 0
          },
          { 
            questionName: 'Чем отличается Vue от React?',
            answers: ['Ответ 3', 'Ответ 4', 'Ответ 5', 'Ответ 6'],
            correctAnswer: 3
          },
          { 
            questionName: 'Назовите три самых популярных фреймфорка?',
            answers: ['Ответ 6', 'Ответ 7', 'Ответ 8', 'Ответ 9'],
            correctAnswer: 1
          },
        ],
      },
      { 
        id: uuid(),
        quizName: 'Об образовании',
        bgImg: 'educ',
        step: 0,
        category: 'Образование',
        pointsScored: 0,
        stages: [
          {
            questionName: 'Что из этого является произведением писателя А.С.Пушкина?',
            answers: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit hic vel in! Consequuntur, inventore sed voluptate itaque ut molestiae facilis neque minus corrupti accusamus omnis facere placeat expedita magni nulla.', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
            correctAnswer: 0
          },
          { 
            questionName: 'Какой высоты гора Эверест?',
            answers: ['Ответ 3', 'Ответ 4', 'Ответ 5', 'Ответ 6'],
            correctAnswer: 2
          },
          { 
            questionName: 'Что из этого не является морем?',
            answers: ['Ответ 6', 'Ответ 7', 'Ответ 8', 'Ответ 9'],
            correctAnswer: 1
          },
          { 
            questionName: 'От чего умер Гоголь?',
            answers: ['Ответ 10', 'Ответ 11', 'Ответ 12', 'Ответ 13'],
            correctAnswer: 3
          },
        ],
      },
      { 
        id: uuid(),
        quizName: 'О технологиях',
        bgImg: 'techn',
        step: 0,
        category: 'Технологии',
        pointsScored: 0,
        stages: [
          {
            questionName: 'Что такое React?',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
            correctAnswer: 0
          },
          { 
            questionName: 'Чем отличается Vue от React?',
            answers: ['Ответ 3', 'Ответ 4', 'Ответ 5', 'Ответ 6'],
            correctAnswer: 3
          },
          { 
            questionName: 'Назовите три самых популярных фреймфорка?',
            answers: ['Ответ 6', 'Ответ 7', 'Ответ 8', 'Ответ 9'],
            correctAnswer: 1
          },
        ],
      },
      { 
        id: uuid(),
        quizName: 'Об образовании',
        bgImg: 'educ',
        step: 0,
        category: 'Образование',
        pointsScored: 0,
        stages: [
          {
            questionName: 'Что из этого является произведением писателя А.С.Пушкина?',
            answers: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit hic vel in! Consequuntur, inventore sed voluptate itaque ut molestiae facilis neque minus corrupti accusamus omnis facere placeat expedita magni nulla.', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
            correctAnswer: 0
          },
          { 
            questionName: 'Какой высоты гора Эверест?',
            answers: ['Ответ 3', 'Ответ 4', 'Ответ 5', 'Ответ 6'],
            correctAnswer: 2
          },
          { 
            questionName: 'Что из этого не является морем?',
            answers: ['Ответ 6', 'Ответ 7', 'Ответ 8', 'Ответ 9'],
            correctAnswer: 1
          },
          { 
            questionName: 'От чего умер Гоголь?',
            answers: ['Ответ 10', 'Ответ 11', 'Ответ 12', 'Ответ 13'],
            correctAnswer: 3
          },
        ],
      },
      { 
        id: uuid(),
        quizName: 'О технологиях',
        bgImg: 'techn',
        step: 0,
        category: 'Технологии',
        pointsScored: 0,
        stages: [
          {
            questionName: 'Что такое React?',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
            correctAnswer: 0
          },
          { 
            questionName: 'Чем отличается Vue от React?',
            answers: ['Ответ 3', 'Ответ 4', 'Ответ 5', 'Ответ 6'],
            correctAnswer: 3
          },
          { 
            questionName: 'Назовите три самых популярных фреймфорка?',
            answers: ['Ответ 6', 'Ответ 7', 'Ответ 8', 'Ответ 9'],
            correctAnswer: 1
          },
        ],
      },
      { 
        id: uuid(),
        quizName: 'Об образовании',
        bgImg: 'educ',
        step: 0,
        category: 'Образование',
        pointsScored: 0,
        stages: [
          {
            questionName: 'Что из этого является произведением писателя А.С.Пушкина?',
            answers: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit hic vel in! Consequuntur, inventore sed voluptate itaque ut molestiae facilis neque minus corrupti accusamus omnis facere placeat expedita magni nulla.', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
            correctAnswer: 0
          },
          { 
            questionName: 'Какой высоты гора Эверест?',
            answers: ['Ответ 3', 'Ответ 4', 'Ответ 5', 'Ответ 6'],
            correctAnswer: 2
          },
          { 
            questionName: 'Что из этого не является морем?',
            answers: ['Ответ 6', 'Ответ 7', 'Ответ 8', 'Ответ 9'],
            correctAnswer: 1
          },
          { 
            questionName: 'От чего умер Гоголь?',
            answers: ['Ответ 10', 'Ответ 11', 'Ответ 12', 'Ответ 13'],
            correctAnswer: 3
          },
        ],
      },
      { 
        id: uuid(),
        quizName: 'О технологиях',
        bgImg: 'techn',
        step: 0,
        category: 'Технологии',
        pointsScored: 0,
        stages: [
          {
            questionName: 'Что такое React?',
            answers: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
            correctAnswer: 0
          },
          { 
            questionName: 'Чем отличается Vue от React?',
            answers: ['Ответ 3', 'Ответ 4', 'Ответ 5', 'Ответ 6'],
            correctAnswer: 3
          },
          { 
            questionName: 'Назовите три самых популярных фреймфорка?',
            answers: ['Ответ 6', 'Ответ 7', 'Ответ 8', 'Ответ 9'],
            correctAnswer: 1
          },
        ],
      },
      { 
        id: uuid(),
        quizName: 'Об образовании',
        bgImg: 'educ',
        step: 0,
        category: 'Образование',
        pointsScored: 0,
        stages: [
          {
            questionName: 'Что из этого является произведением писателя А.С.Пушкина?',
            answers: ['Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit hic vel in! Consequuntur, inventore sed voluptate itaque ut molestiae facilis neque minus corrupti accusamus omnis facere placeat expedita magni nulla.', 'Ответ 2', 'Ответ 3', 'Ответ 4'],
            correctAnswer: 0
          },
          { 
            questionName: 'Какой высоты гора Эверест?',
            answers: ['Ответ 3', 'Ответ 4', 'Ответ 5', 'Ответ 6'],
            correctAnswer: 2
          },
          { 
            questionName: 'Что из этого не является морем?',
            answers: ['Ответ 6', 'Ответ 7', 'Ответ 8', 'Ответ 9'],
            correctAnswer: 1
          },
          { 
            questionName: 'От чего умер Гоголь?',
            answers: ['Ответ 10', 'Ответ 11', 'Ответ 12', 'Ответ 13'],
            correctAnswer: 3
          },
        ],
      },
    ]
  },
  reducers: {
    addQuiz(state, action) {
      state.quizzes.push(action.payload);
    },
    chooseAnswer(state, action) {
      const quizId = state.quizzes.find(quiz => quiz.id === action.payload.selectedQuizId);
      if (action.payload.answerIndex === quizId.stages[quizId.step].correctAnswer) {
        quizId.pointsScored += 1;
      }
      quizId.step += 1;
    },
    tryAgain(state, action) {
      const quizId = state.quizzes.find(quiz => quiz.id === action.payload);
      quizId.step = 0;
      quizId.pointsScored = 0;
    }
  }
});

export const { 
  addQuiz, 
  toggleVisibilityModalQuiz, 
  chooseAnswer, 
  tryAgain 
} = quizSlice.actions;
export default quizSlice.reducer;