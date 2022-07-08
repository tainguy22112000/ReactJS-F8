import React from 'react'
import style from './Input.module.sass'

const Input = ({label, ...inputProps}) => {
  return (
    <div className= {style.input}>
        <label>{label}</label>
        <input {...inputProps}></input>
    </div>
    
  )
}

export default Input