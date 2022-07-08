import React from 'react'
import './buttonAnswer.scss'

export const ButtonAnswer = ({
  option,
  index,
  type,
  isButtonSelected,
  setIsButtonSelected,
}) => {
  return (
    <>
      <div
        // TODO: if question -> set good answer to green and if bad set red
        className={
          isButtonSelected === index
            ? 'btn-answer btn-answer-selected'
            : 'btn-answer'
        }
        onClick={() => setIsButtonSelected(index)}
        aria-hidden="true"
      >
        <p className="btn-answer-name">{option}</p>
        {/* TODO: if result set % of responses here */}
      </div>
    </>
  )
}
