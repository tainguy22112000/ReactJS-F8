import React from 'react'

const Input = ({label, ...inputProps}) => {
  return (
    <div>
        <label>{label}</label>
        <input {...inputProps}></input>
    </div>
  )
}

export default Input