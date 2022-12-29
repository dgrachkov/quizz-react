import React from 'react'
import classes from './InputFormModule.scss'

const InputForm = ({children, value, onChange, type}) => {
  return (
    <div className='input_form quiz_create_answer'>
      <label>{children}</label>
      <input type={type} value={value} onChange={onChange}/>
    </div>
  )
}

export default InputForm