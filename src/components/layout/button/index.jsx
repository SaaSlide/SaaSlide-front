import React from 'react'
import './style.scss'

const Button = ({ type, title, className }) => {
  return (
    <button type={type} className={className}>
      {title}
    </button>
  )
}

export default Button
