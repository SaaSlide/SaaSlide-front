import React, { useContext, useEffect } from 'react'
import { SocketContext } from '../../../../utils/socket'
import './buttonAnswer.scss'

export const ButtonAnswer = ({
  type,
  pageNumber,
  interactId,
  option,
  answer,
  index,
  isButtonSelected,
  setIsButtonSelected,
  isClickable,
}) => {
  const { sio } = useContext(SocketContext)

  const sendAnswer = () => {
    setIsButtonSelected(index)
    sio.sendResponse(pageNumber, type, interactId, index)
  }

  return (
    <>
      <div
        className={
          type === 'survey' && isButtonSelected === index
            ? 'btn-answer btn-answer-selected'
            : type === 'quizz' && answer && isButtonSelected
            ? 'btn-answer btn-answer-right'
            : type === 'quizz' && !answer && isButtonSelected === index
            ? 'btn-answer btn-answer-wrong'
            : 'btn-answer'
        }
        style={
          isClickable ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }
        }
        onClick={() => sendAnswer()}
        aria-hidden="true"
      >
        <p className="btn-answer-name">{option}</p>
      </div>
    </>
  )
}
