import React, { useState } from 'react'
import './buttonAnswer.scss'

export const ButtonAnswer = ({ option, index, type }) => {
  let [isSelected, setIsSelected] = useState(false)
  return (
    <>
      <div
        // TODO: if question -> set good answer to green and if bad set red
        className={isSelected ? 'btn-answer btn-answer-selected' : 'btn-answer'}
        onClick={() => setIsSelected(true)}
        aria-hidden="true"
      >
        <p className="btn-answer-name">{option}</p>
        {/* TODO: if result set % of responses here */}
      </div>
    </>
  )
}
