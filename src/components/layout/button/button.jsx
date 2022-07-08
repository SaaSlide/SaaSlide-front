import React from 'react'
import './button.scss'

const Button = ({ type, title, className, ...rest }) => {
  return (
    <button type={type} className={`button ${className}`} {...rest}>
      {title}
    </button>
  )
}

export default Button
