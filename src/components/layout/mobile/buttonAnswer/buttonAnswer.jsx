import React, { useContext } from 'react'
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
    console.log(pageNumber, type, interactId, index)
  }

  // FIXME: called for every component instance not only the selected one

  return (
    <>
      <div
        // TODO: if question -> set good answer to green and if bad set red
        className={
          type === 'survey' && isButtonSelected === index
            ? 'btn-answer btn-answer-selected'
            : type === 'quizz' && answer && isButtonSelected === index
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
        {/* TODO: if result set % of responses here */}
      </div>
    </>
  )
}
