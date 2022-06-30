import React from 'react'
import './button.scss'

const Button = ({ type, title, className }) => {
  return (
    <button type={type} className={`button ${className}`}>
      {title}
    </button>
  )
}

export default Button
