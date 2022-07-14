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
  const { socket, diapoId } = useContext(SocketContext)

  useEffect(() => {
    setIsButtonSelected()
    setIsFeatureOpen(false)
  }, [pageNumber])

  useEffect(() => {
    socket.on('get_params', ({ slide, type, id, display, open }) => {
      if (interactId === id) {
        setIsFeatureOpen(open)
      }
    })

    return () => {
      socket.off('get_params')
    }
  }, [diapoId])

  return (
    <>
      {(isFeatureOpen && type === 'survey' && (
        <div
          onClick={() => setIsAnswerModalShown(true)}
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
            onClick={() => setIsAnswerModalShown(true)}
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
