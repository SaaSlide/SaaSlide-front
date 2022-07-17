import React, { useState, useEffect, useContext } from 'react'
import './buttonOpenPanel.scss'
import { AnswerModal } from '../answerModal/answerModal'
import { SocketContext } from '../../../../utils/socket'

export const ButtonOpenPanel = ({
  type,
  interactId,
  question,
  options,
  pageNumber,
}) => {
  const [isAnswerModalShown, setIsAnswerModalShown] = useState(false)
  const [isButtonSelected, setIsButtonSelected] = useState()

  const [isFeatureOpen, setIsFeatureOpen] = useState()
  const { socket } = useContext(SocketContext)

  useEffect(() => {
    setIsButtonSelected()
    setIsFeatureOpen(false)
  }, [pageNumber])

  useEffect(() => {
    const getParams = ({ id, display, open }) => {
      if (interactId === id) {
        setIsFeatureOpen(display && open)
        if (!open) {
          setIsAnswerModalShown(false)
        }
      }
    }
    socket.on('get_params', getParams)

    return () => {
      socket.off('get_params', getParams)
    }
  }, [interactId])

  return (
    <>
      {(isFeatureOpen && type === 'survey' && (
        <div
          onClick={isFeatureOpen ? () => setIsAnswerModalShown(true) : ''}
          aria-hidden="true"
          className="bop bop-survey"
        >
          <p className="bop-title">Sondage</p>
          <img
            className="bop-img"
            src="/assets/icons/chart-circle.svg"
            alt=""
          />
        </div>
      )) ||
        (isFeatureOpen && type === 'quizz' && (
          <div
            onClick={isFeatureOpen ? () => setIsAnswerModalShown(true) : ''}
            aria-hidden="true"
            className="bop bop-quizz"
          >
            <p className="bop-title">Quizz</p>
            <img
              className="bop-img bop-img-quizz"
              src="/assets/icons/chart-vertical.svg"
              alt=""
            />
          </div>
        ))}
      {isAnswerModalShown && (
        <AnswerModal
          type={type}
          pageNumber={pageNumber}
          interactId={interactId}
          question={question}
          options={options}
          setIsModalShown={setIsAnswerModalShown}
          isButtonSelected={isButtonSelected}
          setIsButtonSelected={setIsButtonSelected}
        />
      )}
    </>
  )
}
