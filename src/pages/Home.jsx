import { React } from 'react'
import QuizzesList from '../components/QuizzesList';

const Home = () => {
  return ( 
    <div className='home container'>
      <h1 className='quizzez_title'>Викторины</h1>
      <QuizzesList/>
    </div>
  )
}

export default Home