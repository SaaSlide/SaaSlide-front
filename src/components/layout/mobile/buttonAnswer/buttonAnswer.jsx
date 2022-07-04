import React from 'react'
import './buttonAnswer.scss'

export const ButtonAnswer = ({ questionName }) => {
  let isSelected = false
  return (
    <>
      <div
        // TODO: if question -> set good answer to green and if bad set red
        className={isSelected ? 'btn-answer btn-answer-selected' : 'btn-answer'}
      >
        <p className="btn-answer-name">{questionName}</p>
        {/* TODO: if survey set % of responses here */}
      </div>
    </>
  )
}
