import React, { useEffect } from 'react'
import './buttonAnswer.scss'

export const ButtonAnswer = ({
  option,
  index,
  type,
  isButtonSelected,
  setIsButtonSelected,
  isClickable,
}) => {
  // FIXME: called for every component instance not only the selected one
  useEffect(() => {
    if (isButtonSelected) console.log('isButtonSelected')
  }, [isButtonSelected])
  return (
    <>
      <div
        // TODO: if question -> set good answer to green and if bad set red
        className={
          isButtonSelected === index
            ? 'btn-answer btn-answer-selected'
            : 'btn-answer'
        }
        style={
          isClickable ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }
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
