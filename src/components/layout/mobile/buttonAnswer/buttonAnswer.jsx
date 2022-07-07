import React from 'react'
import './buttonAnswer.scss'

export const ButtonAnswer = ({ option, index }) => {
  let isSelected = false
  return (
    <>
      <div
        // TODO: if question -> set good answer to green and if bad set red
        className={isSelected ? 'btn-answer btn-answer-selected' : 'btn-answer'}
        onClick={() => console.log(`response ${index} clicked`)}
        aria-hidden="true"
      >
        <p className="btn-answer-name">{option}</p>
        {/* TODO: if result set % of responses here */}
      </div>
    </>
  )
}
