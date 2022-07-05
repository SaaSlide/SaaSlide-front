import React from 'react'
import './button.scss'

const Button = ({ type, title, className, onClick }) => {
  return (
    <button type={type} className={`button ${className}`} onClick={onClick}>
      {title}
    </button>
  )
}

export default Button
